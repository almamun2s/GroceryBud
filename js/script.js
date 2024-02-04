const colors = ['F299AE', 'E9C875', '38CCE1', '60B7E8', '01796B' ];
const alert         = document.querySelector('.gb-alert');
const form          = document.querySelector('.gb-form');
const grocery       = document.getElementById('grocery');
const submitBtn     = document.querySelector('.submit-btn');
const groceryLists  = document.querySelector('.gb-lists');
const contents      = document.querySelector('.gb-grocery-contents');
const clearBtn      = document.querySelector('.gb-clear-btn'); 

// ======== Edit options ===========
let editElement;
let editFlag    = false;
let editId      = '';


// Submit the form 
form.addEventListener('submit', addItem );
clearBtn.addEventListener('click', clearItems );

// =========== Functions =================
function addItem(e){
    e.preventDefault();
    const value = grocery.value;
    const id    = new Date().getTime().toString();
    
    if ( value ) {
        if ( !editFlag ) {
            const element = document.createElement('article');
            // Add class to the element
            element.classList.add('gb-item');

            const attr = document.createAttribute('data-id');
            attr.value = id;

            element.setAttributeNode(attr);
            element.innerHTML = `
            <p class="gb-item-title">${value}</p>
            <div class="gb-btn-container">
                <button class="gb-edit-btn"><i class="fas fa-pen"></i></button>
                <button class="gb-delete-btn"><i class="fas fa-trash"></i></button>
            </div>`;

            const editBtn   = element.querySelector('.gb-edit-btn');
            const deleteBtn = element.querySelector('.gb-delete-btn');

            editBtn.addEventListener('click', editItem );
            deleteBtn.addEventListener('click', deleteItem )

            contents.appendChild(element);
            displayAlert('item added to the list', 'success');
            groceryLists.classList.add('gb-show');

            // Add to local storage 
            addToLocalStorage();
            // Set to default 
            setToDefault();
        }else{
            editElement.innerHTML = value;
            displayAlert('item edited', 'success');
            setToDefault();
        }
    }else{
        displayAlert('please enter something', 'danger');
    }
}

// Display alert function 
function displayAlert(text, action) {
    alert.innerText = text;
    alert.classList.add(`gb-${action}`);

    // remove alert
    setTimeout(() => {
        alert.classList.remove(`gb-${action}`);
        alert.innerText = '';
    }, 1500);
}

// Add to local storage function
function addToLocalStorage(id, value) {
    console.log('added to local storage');
}

// set to default funciton 
function setToDefault() {
    grocery.value   = '';
    editFlag        = false;
    editId          = '';
    submitBtn.value = 'Add';
}

// Clear items function
function clearItems() {
    groceryLists.classList.remove('gb-show');
    displayAlert('all items removed', 'success');
    setToDefault();

    const items = document.querySelectorAll('.gb-item');
    if (items.length > 0) {
        items.forEach(function(item) {
            contents.removeChild(item);
        })
    }
}

// editItem function
function editItem(e) {
    const element   = e.currentTarget.parentElement.parentElement;
    editElement     = e.currentTarget.parentElement.previousElementSibling;

    // set Form value 
    grocery.value   = editElement.innerHTML;
    submitBtn.value = "Edit";
    editFlag        = true;
    editId          = element.dataset.id;

}
// deleteItem function
function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    contents.removeChild(element);
    displayAlert('item removed', 'danger');
    setToDefault();

    if (contents.children.length === 0) {
        groceryLists.classList.remove('gb-show');
    }
}
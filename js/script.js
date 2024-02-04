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

// =========== Functions =================
function addItem(e){
    e.preventDefault();
    const value = grocery.value;
    const id    = new Date().getTime().toString();
    
    if ( value ) {
        if ( !editFlag ) {
            // console.log("adding item");
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

            contents.appendChild(element);
            displayAlert('item added to the list', 'success');
            groceryLists.classList.add('gb-show');
        }else{
            console.log("editing item");
        }
    }else{
        displayAlert('please enter something', 'danger');
    }
}

function displayAlert(text, action) {
    alert.innerText = text;
    alert.classList.add(`gb-${action}`);

    // remove alert
    setTimeout(() => {
        alert.classList.remove(`gb-${action}`);
        alert.innerText = '';
    }, 1500);
}
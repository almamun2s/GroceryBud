const colors = ['F299AE', 'E9C875', '38CCE1', '60B7E8', '01796B' ];
const alert         = document.querySelector('.gb-alert');
const form          = document.querySelector('.gb-form');
const grocery       = document.getElementById('grocery');
const submitBtn     = document.querySelector('.submit-btn');
const groceryLists  = document.querySelector('.gb-lists');
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
            console.log("adding item");
        }else{
            console.log("editing item");
        }
    }else{
        // console.log("empty value");
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
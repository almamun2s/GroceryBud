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
    console.log(grocery.value);
}
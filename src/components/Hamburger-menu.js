/* import {
    mainMenuEl,
    openMenuEl,
    closeMenuEl,
    menu_itemsEl
} from "../common.js";



openMenuEl.addEventListener('click',show);
closeMenuEl.addEventListener('click',close);

// close menu when you click on a menu item 
menu_itemsEl.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

openMenuEl.forEach(item => {
    item.addEventListener('click',function(){
        hideOpenMenu();
    })
})

function show(){
    mainMenuEl.style.display = 'flex';
    mainMenuEl.style.top = '0';
}
function close(){
    mainMenuEl.style.top = '-100%';
}

function hideOpenMenu(){
    openMenuEl.style.display = 'none';
} */



import {
    mainMenuEl,
    openMenuEl,
    closeMenuEl,
    menu_itemsEl
} from "../common.js";


openMenuEl.addEventListener('click', show);
closeMenuEl.addEventListener('click', close);

// close menu when you click on a menu item 
menu_itemsEl.forEach(item => {
    item.addEventListener('click', function() {
        close();
    })
})

// Make the open menu button disappear when clicked
openMenuEl.addEventListener('click', hideOpenMenu);

function show() {
    mainMenuEl.style.display = 'flex';
    mainMenuEl.style.top = '0';
    hideOpenMenu(); // Optionally hide the open button when the menu is shown
}

function close() {
    mainMenuEl.style.top = '-100%';
    showOpenMenu(); // Show the open button when the menu is closed
}

function hideOpenMenu() {
    openMenuEl.style.display = 'none';
}

function showOpenMenu() {
    openMenuEl.style.display = 'block'; // Assuming the default display is 'block'
}

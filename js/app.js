document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#menu-toggle-button')
        .addEventListener('click', menuToggle);

});

// call menuToggle function


function menuToggle() {
    let mobile_menu_element = document.getElementById("mobile-menu");
    /*  if (mdm.classList == "hidden") {
         mdm.classList = "block";;
     } else {
         mdm.classList = "hidden";
     } */

    mobile_menu_element.classList.toggle('hidden');
    // get mobile menu by Id 
    // check if classlist contains hidden
    // remove hidden from class list
    // else 
    // add hidden to class list
}
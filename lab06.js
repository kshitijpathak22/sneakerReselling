
// const dropdowns = document.querySelectorAll('.dropdown');


// dropdowns.forEach(dropdown => {
//     const select = dropdown.querySelector('.select');
//     const caret = dropdown.querySelector('.caret');
//     const menu = dropdown.querySelector('.menu');
//     const options = dropdown.querySelectorAll('.menu li');
//     const selected = dropdown.querySelector('.selected');

//     selected.addEventListener('click', () => {
//         selected.classList.toggle('select-clicled');
//         caret.classList.toggle('caret-rotate');
//         menu.classList.toggle('menu-open');


//     });

//     options.forEach(option => {
//         option.addEventListener('click', () => {
//             selected.inneText = option.innerText;
//             select.classList.remove('select-clicked');
//             caret.classList.remove('caret-rotate');
//             menu.classList.remove('menu-open');
//             options.forEach(option => {
//                 option.classList.remove('active');

//             });
//             option.classList.add('active');

//         });

//     });

// });

    
  

const signcard = document.querySelector('.signincard');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const signbtn = document.querySelector('.signin');
const signxbtn = document.querySelector('.iconclose');

registerlink.addEventListener('click',()=> {signcard.classList.add('active');});

loginlink.addEventListener('click',()=> {signcard.classList.remove('active');});

signbtn.addEventListener('click',()=> {signcard.classList.add('active-popup');});

signxbtn.addEventListener('click',()=> {signcard.classList.remove('active-popup');});
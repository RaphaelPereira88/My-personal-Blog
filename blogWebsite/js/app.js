/**
 * Define Global Variables
 * 
*/
const navBarItems =[];
const sections = document.querySelectorAll('section');
const nav = document.getElementById('nav__bar2');
const mobileMenu = document.getElementById('menu');

/*
 * Functions to create Nav
 
*/

const create_nav = (sections)=> {
    for (let section of sections){
        const liElement = document.createElement('li');
        const aElement = document.createElement('a');
        aElement.innerHTML = document.getElementsByClassName(section.className)[0].id;
        aElement.setAttribute('class', aElement.innerHTML);
        aElement.style.setProperty('cursor', 'pointer');
        liElement.appendChild(aElement);
        nav.appendChild(liElement);
/*need to create an object to be able to export those datas in the active function  below !!*/
        const navBarItem = {
            element: aElement,
            Section: section
        };
        navBarItems.push(navBarItem);
/* Scroll to section on link click*/
        liElement.addEventListener('click',()=> {
            event.preventDefault();
            const top = section.getBoundingClientRect().top + window.pageYOffset;
            window.scroll({top, behavior: 'smooth'});
        });
    };
};


/* build the nav*/
create_nav(sections);


/* Add class 'active' to section when near top of viewport
use the array to be able to give the class active to the right <a> and use css 
to have a different color on the nav Bar for the user to know in what section he is */

const active = ()=>{
    for ( let {element ,Section} of navBarItems){
        const position = Section.getBoundingClientRect();
        if (position.top<= 400 && position.bottom >= 500){
            element.classList= 'activated';
        }else{
            element.classList= '';
        };
    };
};

/* Scroll to anchor ID using scrollTO event*/
window.addEventListener('scroll',active);

/* to Create A Mobile Navigation Menu */
/* Create a toggle event in navigation */
mobileMenu.addEventListener('click', ()=> {
    nav.classList.toggle('active');
});

/**
 * Define Global Variables
 * 
*/
const navBarItems =[];
const sections = $('section');
const nav = $('#nav__bar2');
const mobileMenu = $('#menu');

/*
 * Functions to create Nav
 
*/
const create_nav = (sections)=> {
    for (let section of sections){
        let li = $('<li><a></a></li>');
        let link = li.children('a')
        link.text(section.className);
        nav.append(li);
/*need to create an array to be able to export those datas in the Add clactive below !!*/
        const navBarItem = {
            element: link,
            Section: section
        };
        navBarItems.push(navBarItem);
/* Scroll to section on link click*/
        li.on('click',()=> {
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
            element.addClass ('activated');
        }else{
            element.removeClass('activated')
        };
    };
};


/* Scroll to anchor ID using scrollTO event*/
$(window).on('scroll',active);

/* to Create A Mobile Navigation Menu */
/* Create a toggle event in navigation */
mobileMenu.on('click', ()=> {
    nav.toggleClass('active');
});


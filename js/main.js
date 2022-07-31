console.log('working!!!');
/*############# SHOW SIDEBAR ############*/
const navMenu = document.getElementById('sidebar'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')
/*######## Sidebar Show ########*/
/* Validate if constant exists */
if(navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-sidebar')
    })
}


/*######## Sidebar Hidden ########*/
/* Validate if constant exists */
if(navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar')
    })
}

/*############# SKILLS TABS ############*/
const tabs = document.querySelectorAll('[data-target'),
    tabContent = document.querySelectorAll('[data-content]')

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.target)

            tabContent.forEach(tabContents => {
                tabContents.classList.remove('skills__active')
            })

            target.classList.add('skills__active')

            tabs.forEach(tab => {
                tab.classList.remove('skills__active')
            })

            tab.classList.add('skills__active')
        })
    })

/*############# MIXITUP FILTER PORTFOLIO ############*/

/*######## Link Acive Work ########*/
const link_a_experience = document.querySelectorAll('.a_experience__item')

function active_a_experience() {
    link_a_experience.forEach(l => l.classList.remove('active-experience'))
    this.classList.add('active-experience')
}

link_a_experience.forEach(l => l.addEventListener("click", active_a_experience))

/*######## SCROLL SECTIONS ACTIVE LINK ########*/

// get all sections that have an id defined
const sections = document.querySelectorAll("section[id]");

// add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter()
{
    // get current scroll position"
    let scrollY = window.pageYOffset; 
    // Now we loop through sections to get height, top and ID values for each
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50, 
                sectionId = current.getAttribute("id");

        /* If our current scroll position enters the space where current section on screen is, 
        add active class to corresponding navigation-Link, else remove it
        - To know which link needs an active class, we use sectionId variable we are getting 
        while looping through sections as an selector */
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
        }
        else
        {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }
    })
}

/*############# SHOW SCROLL UP ############*/
console.log('working!!!');
/*############# SHOW SIDEBAR ############*/

/*######## Sidebar Show ########*/
/* Validate if constant exists */

/*######## Sidebar Hidden ########*/
/* Validate if constant exists */

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
/*######## Work popup ########*/

/*#############  ############*/
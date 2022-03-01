const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const logo = document.querySelector(".nav-logo");
//navbar links
const navLink = document.querySelector(".nav-link");
const navLink2 = document.querySelector(".nav-link2");
const navLink3 = document.querySelector(".nav-link3");
const navLink4 = document.querySelector(".nav-link4");
const navLink5 = document.querySelector(".nav-link5");
const icon = document.querySelector(".icon");

menuBtn.onclick = ()=> {
    menu.classList.add("active");
    menuBtn.classList.add("hide");
    body.classList.add("disabledScroll");
}
cancelBtn.onclick = ()=> {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    body.classList.remove("disabledScroll");
}

window.onscroll = ()=> {
    this.scrollY > 20 ? navbar.classList.add("stickey") : navbar.classList.remove("stickey");
    this.scrollY > 20 ? logo.classList.add("stickeys") : logo.classList.remove("stickeys");
    this.scrollY > 20 ? navLink.classList.add("stickeyLink") : navLink.classList.remove("stickeyLink");
    this.scrollY > 20 ? navLink2.classList.add("stickeyLink") : navLink2.classList.remove("stickeyLink");
    this.scrollY > 20 ? navLink3.classList.add("stickeyLink") : navLink3.classList.remove("stickeyLink");
    this.scrollY > 20 ? navLink4.classList.add("stickeyLink") : navLink4.classList.remove("stickeyLink");
    this.scrollY > 20 ? navLink5.classList.add("stickeyLink") : navLink5.classList.remove("stickeyLink");

}

//Observer on Page load
window.addEventListener('DOMContentLoaded', setup); 
function setup() {
    const options = {
        rootMargin: '0px 0px -100px 0px'
    }
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            } else {
                return;
            }
        })
    }, options);

    const h1 = document.querySelector('h1');
    observer.observe(h1);

    const paras = document.querySelectorAll('p');
    paras.forEach(p => observer.observe(p));
}


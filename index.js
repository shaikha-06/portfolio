// Select the navbar
const navbar = document.querySelector('.navbar');

// Get the navbar's initial position from the top of the page
const navbarOffsetTop = navbar.offsetTop;

// Function to add 'sticky' class when scrolling past the navbar
function stickyNavbar() {
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

// Listen for the scroll event
window.addEventListener('scroll', stickyNavbar);

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-item');

// Toggle the mobile menu on hamburger click
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Add active class to clicked navbar item
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(link => link.classList.remove('active'));
        item.classList.add('active');
        navLinks.classList.remove('active'); // Close the menu on click (for mobile)
    });
});

// Scroll event to highlight navbar item based on scroll position
window.addEventListener('scroll', () => {
    let current = "";
    document.querySelectorAll("section").forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach((item) => {
        item.classList.remove("active");
        if (item.getAttribute("href").includes(current)) {
            item.classList.add("active");
        }
    });
});
ScrollReveal({
     reset: true ,
     distance: '80px',
     duration:'2000',
     delay:'200'

    });
    ScrollReveal().reveal('.home-content ,.heading', { origin:'top' });
    ScrollReveal().reveal('h1,h3,p', { origin:'left' });
    ScrollReveal().reveal('', { origin:'right' });
    ScrollReveal().reveal('.services-box h3 p,.contact form,.btn-box', { origin:'bottom' });



const form = document.querySelector("form"),
statusTxt = form.querySelector(".btnnn");

form.onsubmit = (e)=>{
    e.preventDefault();
    statusTxt.Style.display ="block";

    let xhr = new XMLHttpRequest();
    xml.open("post","message.php",true);
    xhr.onload = ()=>{
        if(xhr.readyState == 4 && xhr.status == 200){
            let response = xhr.response;
            console.log(response);
        }

    }
    xhr.send();

}
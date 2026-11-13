
// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            navMenu.classList.remove("active");
        });
    });
}


// ACTIVE PAGE HIGHLIGHT

const currentPage = window.location.pathname
    .split("/")
    .pop() || "index.html";

document.querySelectorAll("#navMenu a").forEach(function(link) {

    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }

});


// CONTACT FORM

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const service = document.getElementById("service").value;
        const message = document.getElementById("message").value;

        const whatsappNumber = "265XXXXXXXXX";

        const text =
            "NEW ELITE BUSINESS INQUIRY\n\n" +
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Phone: " + phone + "\n" +
            "Service: " + service + "\n" +
            "Message: " + message;

        const whatsappURL =
            "https://wa.me/" + whatsappNumber +
            "?text=" + encodeURIComponent(text);

        window.open(whatsappURL, "_blank");
    });

}

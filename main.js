


const navLinks = document.querySelectorAll(".navbar2 a");
const sections = document.querySelectorAll(".section");
console.log(navLinks);

navLinks.forEach(link => {
       link.addEventListener("click", (event) => {
           event.preventDefault(); // Prevent default link behavior
console.log(event.target);

           // Remove active class from all nav links
           navLinks.forEach(nav => nav.classList.remove("nav-active"));

           // Add active class to the clicked nav link
           link.classList.add("nav-active");

           // Get the target section ID from data-target attribute
           const target = link.getAttribute("data-target");

           // Hide all sections and show the target section
           sections.forEach(section => {
               section.classList.add("hidden");
               if (section.id === target) {
                   section.classList.remove("hidden");
       
               }
           });
       });
   });





/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('Success: JavaScript from js/js.js running!')



//Dropdown menu
var dropdownTrigger = document.querySelector('.dropbtn');

var dropdownContent = document.querySelector('.dropdown-content');



// Toggle the dropdown visibility
dropdownTrigger.addEventListener('click', function() {
  if (dropdownContent.style.display === 'block') {
    dropdownContent.style.display = 'none';
  } else {
    dropdownContent.style.display = 'block';
  }
});



//Scroll to section Homepage
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".photos img");
    images.forEach(img => {
      img.addEventListener("click", function() {
        const sectionId = this.getAttribute("data-section");
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  });
  


// Scroll to section Subpages
function scrollToGeneral() {
    document.getElementById("general-info").scrollIntoView({ behavior: "smooth" });
}

function scrollToMenu() {
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}

function scrollToGallery() {
    document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
}


// Scroll to top
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", ( ) => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})



// Confirmation pop up
// Get references to elements
const bookButton = document.getElementById('bookButton');
const modal = document.getElementById('confirmationModal');
const closeModalBtn = document.getElementById('closeModalBtn');

// Show modal function
function showModal() {
    modal.style.display = 'flex';
}

// Hide modal function
function hideModal() {
    modal.style.display = 'none';
}

// Add click event listener to the button
bookButton.addEventListener('click', function(event) {
    event.preventDefault();
    showModal();
});

// Add click event listener to close button
closeModalBtn.addEventListener('click', hideModal);

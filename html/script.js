// Smooth scroll to section when clicking on navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
  
    for (const link of navLinks) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          const topOffset = targetSection.offsetTop - 60; // Adjust scroll offset as needed
          window.scrollTo({
            top: topOffset,
            behavior: 'smooth'
          });
        }
      });
    }
  });
  
  // Form validation for the contact form
  document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contact form');
  
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
  
      const nameInput = document.querySelector('#contact input[type="text"]');
      const emailInput = document.querySelector('#contact input[type="email"]');
      const messageInput = document.querySelector('#contact textarea');
  
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();
  
      if (name === '') {
        alert('Please enter your name.');
        nameInput.focus();
      } else if (email === '') {
        alert('Please enter your email address.');
        emailInput.focus();
      } else if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        emailInput.focus();
      } else if (message === '') {
        alert('Please enter your message.');
        messageInput.focus();
      } else {
        // Form is valid, you can now submit the data to the server or take other actions
        alert('Form submitted successfully!');
        contactForm.reset();
      }
    });
  
    // Helper function to validate email format
    function isValidEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }
  });
  
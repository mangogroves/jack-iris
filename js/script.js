
// Post message function
function sendMessage() {
    const textareaField = document.getElementById("textarea-field");
    const message = textareaField.value.trim(); //trim whitespace
    const announcementBox = document.getElementById("pochacco-pinned-announcement");
  
    if (message.length > 0) {
      // If there's a message, update the announcement box and show it
      announcementBox.textContent = message;
      announcementBox.style.display = "block";
      textareaField.style.transform = "scaleY(0)";
  
    } else {
  
      announcementBox.style.display = "none";
    }
  
    // Clear the textarea
    textareaField.value = '';
  }
  

  
  document.addEventListener('DOMContentLoaded', function() {
  //Move faces function
  window.addEventListener('scroll', function() {
    const banner = document.getElementById('banner');
    const bannerBottom = banner.offsetTop + banner.offsetHeight; // Get the bottom position of the banner
    const viewportHeight = window.innerHeight;
    const scrollY = window.scrollY; // Current scroll position
    
    if (scrollY + viewportHeight * 0.35 >= bannerBottom) {
      document.getElementById('pompom').style.transform = 'translateY(120px)';
       document.getElementById('pochacco').style.transform = 'translateY(120px)';
    } else {
  
      document.getElementById('pompom').style.transform = '';
       document.getElementById('pochacco').style.transform = '';
    }
  });
});


//scroll trigger animation
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  
  document.querySelectorAll(".img-wrapper").forEach((wrapper) => {
  gsap.from(wrapper, {
    x: 500,
    immediateRender: false,
       scrollTrigger: {
      trigger: wrapper,
      start: "top bottom", 
      end: "top middle",
      scrub: true
    }
  });
});
});


//fixed header
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".Year-wrapper").forEach((section) => {
  let header = section.querySelector(".month");
  let content = section.querySelector(".month-wrapper");

  ScrollTrigger.create({
    trigger: section,
    start: "top top", 
    endTrigger: content, 
    end: "bottom top", 
    pin: header, 
    pinSpacing: false 
  });
});


 
  //side icon scroll
  document.addEventListener('DOMContentLoaded', function() {
    const icons = document.querySelectorAll('.icon-scroll .material-symbols-outlined');
    
    function updateActiveIcon() {
      const scrollPosition = window.scrollY;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollPosition / totalHeight) * 100;
    
      let activeIndex;
      if (scrollPercentage < 33) {
        activeIndex = 0; // First icon
      } else if (scrollPercentage < 66) {
        activeIndex = 1; // Second icon
      } else {
        activeIndex = 2; // Third icon
      }
    
      icons.forEach((icon, index) => {
        if (index === activeIndex) {
          icon.classList.add('active');
        } else {
          icon.classList.remove('active');
        }
      });
    }
    
    updateActiveIcon();
    
    // Update active icon on scroll
    window.addEventListener('scroll', updateActiveIcon);
  });
  
  function showDetailsForm() {
    var fileInput = document.getElementById('file-upload');
    if (fileInput.files.length > 0) {
      document.getElementById('details-form').style.display = 'block';
    }
  }
  
  document.getElementById('gallery-select').addEventListener('change', function() {
    const newGalleryInput = document.getElementById('new-gallery-name');
    if (this.value === 'new') {
      newGalleryInput.style.display = 'block';
    } else {
      newGalleryInput.style.display = 'none';
    }
  });
  
  function submitPhoto() {
    const fileInput = document.getElementById('file-upload');
    const gallerySelect = document.getElementById('gallery-select');
    const newGalleryName = document.getElementById('new-gallery-name').value;
  
    if (!fileInput.files.length) {
      alert('Please select a file to upload.');
      return;
    }
  
    // WIP upload new photos - Prepare form data
    const formData = new FormData();
    formData.append('photo', fileInput.files[0]);
    formData.append('gallery', gallerySelect.value);
    if (gallerySelect.value === 'new') {
      formData.append('newGalleryName', newGalleryName);
    }
  
    // Example: POST request with Fetch API
    fetch('/upload-photo', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
  
    })
    .catch(error => {
      console.error('Error uploading photo:', error);
    });
  }
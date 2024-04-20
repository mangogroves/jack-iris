


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

//colour change animation
gsap.registerPlugin(ScrollTrigger);

gsap.to("#header", {
    scrollTrigger: {
        trigger: document.body,  // Or another element that encompasses the scrollable area
        start: "top top",  // When the top of the viewport starts
        end: "bottom bottom",  // When the bottom of the viewport ends
        scrub: 1  // Smooth transition of color change
        
    },
    color: "red",  // Target color change
    ease: "none"
});

//lazy load images
document.addEventListener("DOMContentLoaded", function() {
  const lazyImages = document.querySelectorAll('img.fluid');

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => {
    imageObserver.observe(img);
  });
});





  

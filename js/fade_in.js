document.addEventListener("DOMContentLoaded", () => {
	
    const fadeElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
		  
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); 
        }
      });
    });

    fadeElements.forEach((el) => observer.observe(el));
  });

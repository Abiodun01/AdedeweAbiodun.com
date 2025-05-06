function changeStyle() { 
  document.querySelectorAll('.card').forEach(card => {
      if (card.style.backgroundColor === '#1D183') { // Checking if it's already blue
          card.style.backgroundColor = ''; // Reset to default
          card.style.color = '';
          card.style.borderRadius = '';
      }
    //    else {
    //       card.style.backgroundColor = '#1D183';
    //       card.style.color = '#1D1836';
    //       card.style.borderRadius = '20px';
    //   }
  });
}

// CV DOWNLOAD
// Wait for the document to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Get the button element by ID
  const downloadButton = document.getElementById("downloadCV");

  // Add a click event listener to trigger the download
  downloadButton.addEventListener("click", function () {
      window.open("https://docs.google.com/document/d/1S8HW8REXhOWz2G8NSALKBVdp7OktKUBE/edit?usp=sharing&ouid=102514669088483821202&rtpof=true&sd=true", "_blank");
  });
});

// GITHUB
// Wait for the document to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Get the GitHub link element by ID
  const githubLink = document.getElementById("githubLink");

  // Add a click event listener to open GitHub in a new tab
  githubLink.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default anchor behavior
      window.open("https://github.com/Abiodun01", "_blank");
  });
});

// LINKEDIN
// Wait for the document to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Get the email link element by ID
  const linkedIn = document.getElementById("linkedIn");

  // Add a click event listener to open an email composition window
  linkedIn.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default anchor behavior
      window.location.href = " https://www.linkedin.com/in/adedewe-abiodun-5998781a9";
  });
});


// DISPLAY CARDA
document.addEventListener("DOMContentLoaded", function () {
  const infoContainer = document.getElementById("infoContainer");

  // Sample info box data (Modify this dynamically)
  const infoData = [
      {
          title: "Project: Sea-Level Rise Impact Tool",
          text: "Explore how rising sea levels could reshape Lagos by 2050, 2100, and 2150 with this interactive map based on IPCC projections and high-resolution elevation data.",
          image: "Images/2SealEVEL.jpg",
          github: "https://github.com/Abiodun01/Modified-Sea-Level",
          website: "https://lagos-sea-level-rise-impact-tool.vercel.app/"
      },
      {
          title: "Project: Moshify App",
          text: "A simple website design",
          image: "Images/Moshify_Website.jpg",
          github: "https://github.com/Abiodun01/New_Mushify_App.git",
          website: "https://rsponsive-moshify-app.vercel.app/"
      },
      // {
      //     title: "Project 3",
      //     text: "Description of the third project.",
      //     image: "https://via.placeholder.com/300",
      //     github: "https://github.com/Abiodun01/project3",
      //     website: "https://example.com/project3"
      // },
      
  ];

  // Function to create and add info boxes
  function createInfoBox(info) {
      const boxElement = document.createElement("div");
      boxElement.classList.add("info-box");

      boxElement.innerHTML = `
          <img src="${info.image}" alt="${info.title}">
          <h3>${info.title}</h3>
          <p>${info.text}</p>
          <div class="info-links">
              <a href="${info.github}" target="_blank" class="github-link">GitHub</a>
              <a href="${info.website}" target="_blank" class="website-link">View Website</a>
          </div>
      `;

      infoContainer.appendChild(boxElement);
  }

  // Add info boxes to the container
  infoData.forEach(createInfoBox);
});


// Initialize EmailJS
(function () {
  emailjs.init("GAkEcztZhOc5qYbw4"); // Replace with actual public key
  console.log("EmailJS initialized");
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log("Sending with values:", { name, email, message });
    

    emailjs
      .send("service_ibfcso6", "template_dq6hevu", {
        from_name: name,
        from_email: email,
        message: message,
      })
      .then(
        function (response) {
          console.log("EmailJS success:", response);
          alert("Message Sent Successfully!");
          document.getElementById("contact-form").reset();
        },
        function (error) {
          console.error("EmailJS error:", error);
          alert("Failed to send the message. Please try again.");
        }
      );
  });


  // SCROOLLER
  // SmoothScroller Class Definition
// SmoothScroller Class Definition
class SmoothScroller {
  constructor(linkSelector, offset = 0, duration = 500) {
    this.links = document.querySelectorAll(linkSelector);
    this.offset = offset;
    this.duration = duration;
    this.init();
  }

  init() {
    this.links.forEach(link => {
      link.addEventListener('click', (e) => this.scrollHandler(e));
    });
  }

  scrollHandler(event) {
    event.preventDefault();

    const targetId = event.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      if (this.offset > 0) {
        // Wait for scrollIntoView to complete
        setTimeout(() => {
          window.scrollBy({
            top: -this.offset,
            behavior: 'smooth'
          });
        }, this.duration);
      }
    } else {
      console.warn(`Element not found for selector: ${targetId}`);
    }
  }
}

// Initialize scroller
document.addEventListener("DOMContentLoaded", () => {
  new SmoothScroller('.scroll-link', 50); // Adjust offset as needed
});


 // adjust 50 if you have a header height


// MENU TOGGLE

function toggleMenu() {
  document.getElementById('navList').classList.toggle('show');
}
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
      window.open("https://drive.google.com/uc?export=download&id=1CyuaMDd9YwbCJoyd9WijVrCswfyLtjaV", "_blank");
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
          title: "Project 1",
          text: "Description of the first project.",
          image: "Images/SealEVEL.jpg",
          github: "https://github.com/Abiodun01/Sea-Level-Rise-Impact-App",
          website: "https://abiodun01.github.io/Sea-Level-Rise-Impact-App/#"
      },
      {
          title: "Project 2",
          text: "Description of the second project.",
          image: "Images/Moshify_Website.jpg",
          github: "https://github.com/Abiodun01/New_Mushify_App.git",
          website: "https://abiodun01.github.io/New_Mushify_App/"
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
      .send("service_ibfcso6", "template_mjaq87g", {
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
class SmoothScroller {
  constructor(linkSelector, offset = 0, duration = 500) {
    this.links = document.querySelectorAll(linkSelector); // all elements with .scroll-link
    this.offset = offset;
    this.duration = duration;
    this.init();
  }

  init() {
    // Attach event listener to each link
    this.links.forEach(link => {
      link.addEventListener('click', (e) => this.scrollHandler(e));
    });
  }

  scrollHandler(event) {
    event.preventDefault(); // prevent default anchor jump

    const targetId = event.currentTarget.getAttribute('href'); // e.g. "#about"
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const topPosition = targetElement.offsetTop - this.offset;
      window.scrollTo({
        top: topPosition,
        behavior: 'smooth' // smooth scroll
      });
    }
  }
}

// Initialize the scroller with your class or ID selector
// Optional: pass offset (in pixels) if you have a fixed header
const scroller = new SmoothScroller('.scroll-link', 50); // adjust 50 if you have a header height


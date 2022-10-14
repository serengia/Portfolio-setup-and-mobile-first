const openBtn = document.querySelector(".menu-icon-open");
const closeBtn = document.querySelector(".menu-icon-close");
const menuListContainer = document.querySelector(".menu-list");
const projectContainer = document.querySelector(".works-container");
const modalContainer = document.querySelector(".modal-container");
const menuLinks = document.querySelectorAll(".menu-link");

const openElements = () => {
  openBtn.classList.add("hidden");
  closeBtn.classList.remove("hidden");
  closeBtn.classList.add("visible");
  menuListContainer.classList.remove("hidden");
};

const closeElements = () => {
  closeBtn.classList.add("hidden");
  openBtn.classList.remove("hidden");
  openBtn.classList.add("visible");
  menuListContainer.classList.add("hidden");
};

openBtn.addEventListener("click", openElements);
closeBtn.addEventListener("click", closeElements);

menuListContainer.addEventListener("click", closeElements);

const projectData = [
  {
    id: "1",
    name: "Real estate project",
    technologies: ["Ruby", "HTML", "CSS", "Javascript"],
    image: "./img/real-estate.jpg",
    link: "https://serengia.github.io/Portfolio-setup-and-mobile-first/",
    linkSource: "https://github.com/Serengia/Portfolio-setup-and-mobile-first",
  },
  {
    id: "2",
    name: "Human Resource System",
    technologies: ["Ruby", "HTML", "CSS", "Javascript"],
    image: "./img/human-resource-system.jpg",
    link: "https://serengia.github.io/Portfolio-setup-and-mobile-first/",
    linkSource: "https://github.com/Serengia/Portfolio-setup-and-mobile-first",
  },
  {
    id: "3",
    name: "Design Firm Project",
    technologies: ["Ruby", "HTML", "CSS", "Javascript"],
    image: "./img/design-firm.jpg",
    link: "https://serengia.github.io/Portfolio-setup-and-mobile-first/",
    linkSource: "https://github.com/Serengia/Portfolio-setup-and-mobile-first",
  },
  {
    id: "4",
    name: "Logistics Web Application",
    technologies: ["Ruby", "HTML", "CSS", "Javascript"],
    image: "./img/logistics.jpg",
    link: "https://serengia.github.io/Portfolio-setup-and-mobile-first/",
    linkSource: "https://github.com/Serengia/Portfolio-setup-and-mobile-first",
  },
  {
    id: "5",
    name: "Saas Legacy Code Update",
    technologies: ["Ruby", "HTML", "CSS", "Javascript"],
    image: "./img/legacy-code-update.jpg",
    link: "https://serengia.github.io/Portfolio-setup-and-mobile-first/",
    linkSource: "https://github.com/Serengia/Portfolio-setup-and-mobile-first",
  },
  {
    id: "6",
    name: "School Software System",
    technologies: ["Ruby", "Javascript"],
    image: "./img/web-development.jpg",
    link: "https://serengia.github.io/Portfolio-setup-and-mobile-first/",
    linkSource: "https://github.com/Serengia/Portfolio-setup-and-mobile-first",
  },
];

const generateModalMarkup = (data) => {
  const listMarkup = data.technologies
    .map((item) => `<li class="skill-tag skill-tag--grey">${item}</li>`)
    .join("");

  const modalMarkup = ` 
  <div class="backdrop">

  <div class="modal">
    <svg class="modal-close-icon" width="24" height="24" viewBox="0 0 24 24" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
         />
    </svg>
    <img class="modal-img" src="${data.image}" alt="Modal desktop">
   
      <h2>${data.name}</h2>
      <div class="button-container ">
        <a href="${data.link}">See Live <img src="./img/modal-live-icon.svg" alt="Modal icon"></a>
        <a target="__blank" href="${data.linkSource}">Source Code <img src="./img/modal-gihub-icon.svg" alt="Modal icon"> </a>
      </div>
   
    <ul class="modal-skills">
      ${listMarkup}
    </ul>
    <p class="modal-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, saepe
      voluptatibus. Nihil exercitationem facilis, eligendi!
    </p>

  </div>
</div>`;

  return modalMarkup;
};

const openModal = (id) => {
  const activeModalData = projectData.find((el) => el.id === id);

  const modal = generateModalMarkup(activeModalData);
  document.querySelector(".modal-container").innerHTML = modal;
};

const markup = (data) => {
  const listMarkup = data.technologies
    .map((item) => `<li class="skill-tag skill-tag--grey">${item}</li>`)
    .join("");

  const markup = `<div class="work">
  <div class="image-container">
    <img src="${data.image}" alt="${data.name}" />
  </div>
  <div class="details-container">
    <h3>${data.name}</h3>
    <ul class="skills">
      ${listMarkup}
    </ul>
    <button onclick="openModal(${data.id})" class="button button-primary">See projects</button>
  </div>
     
  </div>`;

  return markup;
};

const closeModal = (e) => {
  const clicked = e.target.closest(".modal-close-icon");
  if (!clicked) return;
  document.querySelector(".modal-container").innerHTML = "";
};

const injectMarkup = () => {
  let allProjectsMarkup = "";

  projectData.forEach((item) => {
    allProjectsMarkup += markup(item);
  });

  projectContainer.insertAdjacentHTML("afterbegin", allProjectsMarkup);
};

injectMarkup();

modalContainer.addEventListener("click", (e) => {
  closeModal(e);
});

// SUBMIT FORM
const form = document.querySelector(".form");
const feedbackEl = document.querySelector(".form-feedback");
const SUBMIT_LINK = "https://formspree.io/f/myyvwvbw";

const clearUpNotice = () => {
  setTimeout(() => {
    feedbackEl.classList.remove("email-success");
    feedbackEl.classList.remove("email-fail");
    feedbackEl.textContent = "";
  }, 3000);
};

const showSuccess = () => {
  feedbackEl.classList.remove("email-fail");
  feedbackEl.classList.add("email-success");
  clearUpNotice();
};

const showError = () => {
  feedbackEl.classList.remove("email-success");
  feedbackEl.classList.add("email-fail");
  clearUpNotice();
};

const handleSubmit = async (event) => {
  event.preventDefault();

  // const name = event.target.name.value;
  const email = event.target.email.value;
  // const message = event.target.message.value;

  const emailRegex = /^[a-z]+@[a-z0-9-]+\.[a-z0-9-.]+$/;

  if (!emailRegex.test(email)) {
    showError();
    feedbackEl.textContent = "Invalid Email (Email must be lowercase).";
    return;
  }

  const formData = new FormData(event.target);

  try {
    const response = await fetch(SUBMIT_LINK, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      // SUCCESS
      showSuccess();
      form.reset();
      feedbackEl.textContent =
        "Email successfully sent. We will get back to you soonest possible.";

      // Clear local storage
      if (localStorage.getItem("userFormData")) {
        localStorage.removeItem("userFormData");
      }
      return;
    }
    throw new Error("Oops! There was a problem submitting your form");
  } catch (error) {
    // Any other error
    showError();
    feedbackEl.textContent = `${error.message}`;
  }
};

form.addEventListener("submit", handleSubmit);

// SAVING FORM USER INFO TO LOCAL
const nameInputEl = document.querySelector(".name");
const emailInputEl = document.querySelector(".email");
const messageInputEl = document.querySelector(".message");

const saveToLocal = () => {
  const formInputs = {
    name: nameInputEl.value,
    email: emailInputEl.value,
    message: messageInputEl.value,
  };

  localStorage.setItem("userFormData", JSON.stringify(formInputs));
};

[nameInputEl, emailInputEl, messageInputEl].forEach((input) => {
  input.addEventListener("change", saveToLocal);
});

// On Page load, Check local storage and retreave data
if (localStorage.getItem("userFormData")) {
  const parsedFormData = JSON.parse(localStorage.getItem("userFormData"));

  nameInputEl.value = parsedFormData.name;
  emailInputEl.value = parsedFormData.email;
  messageInputEl.value = parsedFormData.message;
}

// SMOOTH SCROLL
menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const clickedID = e.target.getAttribute("href").replace("#", "");
    document.getElementById(clickedID).scrollIntoView({ behavior: "smooth" });
  });
});

// SCROLL TO BUTTON
const scrollToBtn = document.getElementById("scroll-to");
scrollToBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("scroll-to").scrollIntoView({ behavior: "smooth" });
});

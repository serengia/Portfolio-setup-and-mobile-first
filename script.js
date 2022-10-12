const openBtn = document.querySelector(".menu-icon-open");
const closeBtn = document.querySelector(".menu-icon-close");
const menuListContainer = document.querySelector(".menu-list");
const projectContainer = document.querySelector(".works-container");
const modalContainer = document.querySelector(".modal-container");

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
    name: "Real estate project",
    technologies: ["Ruby", "HTML", "CSS", "Javascript"],
    image: "./img/real-estate.jpg",
    link: "https://serengia.github.io/Portfolio-setup-and-mobile-first/",
    linkSource: "https://github.com/Serengia/Portfolio-setup-and-mobile-first",
  },
  {
    id: "3",
    name: "Real estate project",
    technologies: ["Ruby", "HTML", "CSS", "Javascript"],
    image: "./img/real-estate.jpg",
    link: "https://serengia.github.io/Portfolio-setup-and-mobile-first/",
    linkSource: "https://github.com/Serengia/Portfolio-setup-and-mobile-first",
  },
  {
    id: "4",
    name: "Real estate project",
    technologies: ["Ruby", "HTML", "CSS", "Javascript"],
    image: "./img/real-estate.jpg",
    link: "https://serengia.github.io/Portfolio-setup-and-mobile-first/",
    linkSource: "https://github.com/Serengia/Portfolio-setup-and-mobile-first",
  },
  {
    id: "5",
    name: "Real estate project",
    technologies: ["Ruby", "HTML", "CSS", "Javascript"],
    image: "./img/real-estate.jpg",
    link: "https://serengia.github.io/Portfolio-setup-and-mobile-first/",
    linkSource: "https://github.com/Serengia/Portfolio-setup-and-mobile-first",
  },
  {
    id: "6",
    name: "Real estate project",
    technologies: ["Ruby", "Javascript"],
    image: "./img/real-estate.jpg",
    link: "https://serengia.github.io/Portfolio-setup-and-mobile-first/",
    linkSource: "https://github.com/Serengia/Portfolio-setup-and-mobile-first",
  },
];

const generateModalMarkup = (data) => {
  const modalMarkup = ` 
  <div class="backdrop">

  <div class="modal">
    <svg class="modal-close-icon" width="24" height="24" viewBox="0 0 24 24" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
        fill="#93A79D" />
    </svg>
    <img class="modal-img" src="./img/modal-desktop.png" alt="Modal desktop">
    <div class="title-box">
      <h2>Our title here</h2>
      <div class="button-container ">
        <a href="${data.link}">See Live <img src="./img/modal-live-icon.svg" alt="Modal icon"></a>
        <a href="${data.linkSource}">See source <img src="./img/modal-gihub-icon.svg" alt="Modal icon"> </a>
      </div>
    </div>
    <ul class="modal-skills">
      <li class="skill-tag skill-tag--grey">HTML</li>
      <li class="skill-tag skill-tag--grey">HTML</li>
      <li class="skill-tag skill-tag--grey">HTML</li>
    </ul>
    <div class="modal-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, saepe
      voluptatibus. Nihil exercitationem facilis, eligendi!
    </div>

  </div>
</div>`;

  return modalMarkup;
};

const openModal = (id) => {
  const activeModalData = projectData.find((el) => el.id === `${id}`);
  console.log(activeModalData);

  const modal = generateModalMarkup(activeModalData);
  // sectionHero.scrollIntoView({ behavior: "auto" });
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

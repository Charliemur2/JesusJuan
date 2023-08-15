import { mailValidate, formValidate } from "./formValidations.js";
import {
  eventPost,
  subscribersPost,
  getAPISubscribers,
  getAPIEvents,
} from "./requests.js";

const navbar = document.querySelector("nav");
const backBtn = document.querySelector(".backBtn");
const joinBtn = document.querySelector(".join_button");
const newSubmitEventBtn = document.querySelector(".newEventSubmitBtn");
const tableSubscribersBody = document.querySelector(".tableSubscribersBody");
const joinForm = document.querySelector(".join-form");
const contactModal = document.querySelector("#contactModal");
const newsLetterMail = document.querySelector("#news-letter-email");
const tableEventsBody = document.querySelector(".tableEventsBody");
// const newsLetterMailValue = document.querySelector("#news-letter-email").value;

// form
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const date = document.querySelector("#date");
const typeOfEvent = document.querySelector("#event");
const details = document.querySelector("#details");
const contactForm = document.querySelector("#contactForm");

contactForm.reset();
window.onscroll = () => {
  if (window.scrollY > 10) {
    navbar.classList.add("nav-scrolled");
    backBtn.classList.add("showBackBtn");
    backBtn.classList.remove("hideBackBtn");
  } else {
    navbar.classList.remove("nav-scrolled");
    backBtn.classList.remove("showBackBtn");
    backBtn.classList.add("hideBackBtn");
  }
};

// paint fetchedInfo
// const addInfoToPage = async () => {
//   const fetchedEvents = await getAPIEvents();
//   let fetchedSubscribers = await getAPISubscribers();

//   const tableEvents = fetchedEvents
//     .map(
//       (eventItem) =>
//         `<tr>
//       <td>${eventItem.typeOfEvent}</td>
//       <td class="d-none d-md-table-cell">${eventItem.date}</td>
//       <td>${eventItem.email}</td>
//       <td class="d-none d-md-table-cell">${eventItem.name}</td>
//     </tr>`
//     )
//     .join("");
//   tableEventsBody.innerHTML = tableEvents;

//   let tableSubscribers = fetchedSubscribers
//     .map(
//       (subscriber) =>
//         `<tr>
//     <td>${subscriber.newsLetterMail}</td>
//   </tr>`
//     )
//     .join("");
//   tableSubscribersBody.innerHTML = tableSubscribers;
// };

// addInfoToPage();

// backBtn
backBtn.addEventListener("click", () => {
  document.body.scrollTop = 0; // for safari
  document.documentElement.scrollTop = 0; // for chrome, firefox, IE and Opera
});

// JoinBtn
// joinForm.addEventListener("submit", async (event) => {
//   event.preventDefault();
//   const isMailValid = mailValidate(newsLetterMailValue);
//   if (isMailValid) {
//     await subscribersPost(newsLetterMailValue);
//     newsLetterMail.classList.remove("is-invalid");
//   } else {
//     newsLetterMail.classList.add("is-invalid");
//   }
//   joinForm.reset();
//   addInfoToPage();
// });

// newEventSubmitBtn
// newSubmitEventBtn.addEventListener("click", async (event) => {
//     contactForm.reset();
//     bootstrap.Modal.getOrCreateInstance(contactModal).hide();
// });

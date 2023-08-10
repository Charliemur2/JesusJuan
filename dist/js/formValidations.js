const nameEle = document.querySelector("#name");
const emailEle = document.querySelector("#email");
const typeOfEventEle = document.querySelector("#event");
const detailsEle = document.querySelector("#details");

const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const notEmpty = (value) => value.length !== 0;

export const mailValidate = (email) =>
  email.match(mailFormat) && notEmpty(email) ? true : false;

export const formValidate = ({ name, email, typeOfEvent, details }) => {
  const isNameValid = notEmpty(name);
  const isMailValid = mailValidate(email);
  const isTypeValid = notEmpty(typeOfEvent);
  const isDetailsValid = notEmpty(details);
  if (!isNameValid) {
    nameEle.classList.add("is-invalid");
    return false;
  }
  if (!isMailValid) {
    nameEle.classList.remove("is-invalid");
    emailEle.classList.add("is-invalid");
    return false;
  }
  if (!isTypeValid) {
    nameEle.classList.remove("is-invalid");
    emailEle.classList.remove("is-invalid");
    typeOfEventEle.classList.add("is-invalid");
    return false;
  }
  if (!isDetailsValid) {
    nameEle.classList.remove("is-invalid");
    emailEle.classList.remove("is-invalid");
    typeOfEventEle.classList.remove("is-invalid");
    detailsEle.classList.add("is-invalid");
    return false;
  }
  nameEle.classList.remove("is-invalid");
  emailEle.classList.remove("is-invalid");
  typeOfEventEle.classList.remove("is-invalid");
  detailsEle.classList.remove("is-invalid");
  return true;
};

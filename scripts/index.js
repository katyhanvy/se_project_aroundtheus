const initialCards = [
  {
    title: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },

  {
    title: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },

  {
    title: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },

  {
    title: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },

  {
    title: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },

  {
    title: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];
const profileEditButton = document.querySelector("#profile-edit-button");
const profileAddButton = document.querySelector("#add-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileCloseModalButton = document.querySelector("#profile-close-modal");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const cardTitleInput = addCardForm.querySelector("#profile-location-input");
const cardLinkInput = addCardForm.querySelector("#profile-link-input");
const profileEditForm = profileEditModal.querySelector(".modal__form");
const addCardModal = document.querySelector("#profile-add-modal");
const addCardForm = addCardModal.querySelector(".modal__form");

const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileLocationInput = document.querySelector("#profile-location-input");
const profileLinkInput = document.querySelector("#profile-link-input");

const cardListEl = document.querySelector(".cards__list");
const cardAddPopup = document.querySelector("#profile-add-modal");
const cardAddButton = document.querySelector(".profile__add-button");
const cardAddCloseButton = cardAddPopup.querySelector(".modal__close");

const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

function openPopup(modal) {
  modal.classList.add("modal_opened");
}

function closePopup(modal) {
  modal.classList.remove("modal_opened");
}
function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitleEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("card__like-button_active");
  });
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.title;
  cardTitleEl.textContent = cardData.title;
  return cardElement;
}
function profileAddModal(e) {
  e.preventDefault();
  profileAddForm.textContent = profileLocationInput.value;
  profileAddForm.textContent = profileLinkInput.value;
  closeModal(profileAddModal);
}
function profileAddForm(evt) {
  evt.preventDefault();
  const cardElement = getCardElement();
  profileAddForm.textContent = profileLocationInput.value;
  profileAddForm.textContent = profileLinkInput.value;
  closeModal();
}

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopup(profileEditModal);
});

profileCloseModalButton.addEventListener("click", () => {
  closePopup(profileEditModal);
});

profileEditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup();
});
profileAddButton.addEventListener("submit", (e) => {
  e.preventDefault();
  profileAddForm.textContent = profileLocationInput.value;
  profileAddForm.textContent = profileLinkInput.value;
  closePopup(profileAddForm);
});

cardAddButton.addEventListener("click", () => {
  openPopup(cardAddPopup);
});
cardAddCloseButton.addEventListener("click", () => {
  closePopup(cardAddPopup);
});

initialCards.forEach(function (cardData) {
  cardListEl.append(getCardElement(cardData));
});

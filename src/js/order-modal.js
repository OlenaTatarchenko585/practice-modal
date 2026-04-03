const refs = {
  openBtn: document.querySelector("[data-order-modal-open]"),
  closeBtn: document.querySelector("[data-order-modal-close]"),
  backdrop: document.querySelector("[data-order-modal]"),
  form: document.querySelector(".order-form"),
};

// відкриття / закриття
refs.openBtn.addEventListener("click", toggleModal);
refs.closeBtn.addEventListener("click", toggleModal);

function toggleModal() {
  refs.backdrop.classList.toggle("is-hidden");
  document.body.classList.toggle("no-scroll");
}

// клік по backdrop
refs.backdrop.addEventListener("click", e => {
  if (e.target === refs.backdrop) {
    toggleModal();
  }
});

// ESC
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    refs.backdrop.classList.add("is-hidden");
    document.body.classList.remove("no-scroll");
  }
});

// submit
refs.form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const data = {
    name: refs.form.userName.value.trim(),
    phone: refs.form.userPhone.value.trim(),
    comment: refs.form.userComment.value.trim(),
  };

  console.log(data);

  refs.form.reset();
  toggleModal();
}



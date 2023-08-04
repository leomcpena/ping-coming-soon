const form = document.getElementById("form");
const email = document.getElementById("email");
const errorDisplay = document.getElementById("error-message");
const successDisplay = document.getElementById("success-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateEmail();
});

const setError = (message) => {
  errorDisplay.innerText = message;
  successDisplay.innerHTML = "";
  email.classList.add("error");
};

const setSuccess = () => {
  errorDisplay.innerText = "";
  successDisplay.innerHTML = `<h2>Thanks! You'll be notified as soon as <span class="clr-primary-900">PING<span class="clr-primary-400">.</span></span> launches!</h2>`;
  email.classList.remove("error");
  form.classList.add("hidden");
};

const isValidEmail = (value) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
};

const validateEmail = () => {
  const emailValue = email.value.trim();

  if (emailValue === "") {
    setError("Whoops! It looks like you forgot to add your email");
  } else if (!isValidEmail(emailValue)) {
    setError("Please provide a valid email address");
  } else {
    setSuccess();
  }
};

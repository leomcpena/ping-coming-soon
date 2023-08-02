const form = document.getElementById("form");
const email = document.getElementById("email");

console.log(email);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateEmail();
});

const setError = (message) => {
  const errorDisplay = document.getElementById("error-message");

  errorDisplay.innerText = message;
  email.classList.add("error");
  email.classList.remove("success");
};

const setSuccess = () => {
  const errorDisplay = document.getElementById("error-message");

  errorDisplay.innerText = "";
  email.classList.add("success");
  email.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateEmail = () => {
  const emailValue = email.value.trim();

  if (emailValue === "") {
    setError("Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError("Please provide a valid email address");
  } else {
    setSuccess();
  }
};

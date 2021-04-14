const input = document.querySelector("#validation-input");
const data = +input.dataset.length;

const onBlur = (event) => {
  const inputLength = event.currentTarget.value.length;

  if (data === inputLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
};

input.addEventListener("blur", onBlur);
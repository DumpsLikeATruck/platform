function formatPhoneNumber(input) {
  const cleaned = ("" + input).replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return cleaned;
}

const phoneInput = document.getElementById("phone");
const submitButton = document.getElementById("request_submit");

phoneInput.addEventListener("input", (event) => {
  const formattedNumber = formatPhoneNumber(event.target.value);
  event.target.value = formattedNumber;

  // Automatically focus on the submit button when 10 digits are entered
  const digitCount = formattedNumber.replace(/\D/g, "").length;
  if (digitCount === 10) {
    submitButton.focus();
  }
});

phoneInput.addEventListener("keypress", (event) => {
  // Allow only numeric input
  if (!/[0-9]/.test(event.key)) {
    event.preventDefault();
  }
});

function moveFocus(currentInput, direction, event = null) {
  const inputs = document.querySelectorAll(".loginfield.pin");
  const submitButton = document.getElementById("submitButton");
  const currentIndex = Array.from(inputs).indexOf(currentInput);

  // Restrict to numeric input only
  if (!/^\d*$/.test(currentInput.value)) {
    currentInput.value = "";
    return;
  }

  // Move to the next input or focus on submit button if last input is filled
  if (direction === "next" && currentInput.value.length === 1) {
    if (currentIndex < inputs.length - 1) {
      inputs[currentIndex + 1].focus();
    } else {
      // Focus on the submit button after last input is filled
      submitButton.focus();
    }
  }

  // Move to the previous input if Backspace is pressed
  if (
    direction === "prev" &&
    event.key === "Backspace" &&
    currentIndex > 0 &&
    currentInput.value === ""
  ) {
    inputs[currentIndex - 1].focus();
  }
}

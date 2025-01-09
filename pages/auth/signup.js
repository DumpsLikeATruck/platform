// Format a phone number into (XXX) XXX-XXXX
function formatPhoneNumber(input) {
    const cleaned = input.replace(/\D/g, ''); // Remove non-numeric characters
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    return match ? `(${match[1]}) ${match[2]}-${match[3]}` : cleaned;
}

// Event listener for phone input
const phoneInput = document.getElementById('phone');
const submitButton = document.getElementById('submit');

if (phoneInput && submitButton) {
    phoneInput.addEventListener('input', (event) => {
        const inputField = event.target;
        const formattedNumber = formatPhoneNumber(inputField.value);
        inputField.value = formattedNumber;

        // Auto-focus submit button when 10 digits are entered
        if (formattedNumber.replace(/\D/g, '').length === 10) {
            submitButton.focus();
        }
    });

    phoneInput.addEventListener('keypress', (event) => {
        // Restrict to numeric input only
        if (!/\d/.test(event.key)) event.preventDefault();
    });
}

// Function to handle input focus navigation for PIN fields
function moveFocus(currentInput, direction, event = null) {
    const inputs = Array.from(document.querySelectorAll('.loginfield.pin'));
    const submitButton = document.getElementById('submitButton');
    const currentIndex = inputs.indexOf(currentInput);

    if (!inputs.length || currentIndex === -1) return;

    // Validate numeric input
    if (!/^\d$/.test(currentInput.value)) {
        currentInput.value = ''; // Clear invalid input
        return;
    }

    if (direction === 'next' && currentInput.value.length === 1) {
        // Move to next input or submit button
        const nextElement = inputs[currentIndex + 1] || submitButton;
        nextElement?.focus();
    }

    if (direction === 'prev' && event?.key === 'Backspace' && !currentInput.value && currentIndex > 0) {
        // Move to previous input on Backspace
        inputs[currentIndex - 1].focus();
    }
}

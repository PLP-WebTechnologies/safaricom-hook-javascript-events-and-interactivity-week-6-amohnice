// Toggle Background Color
let isBlue = false;
function toggleBackground() {
    document.body.style.backgroundColor = isBlue ? 'white' : 'lightblue';
    isBlue = !isBlue;
}

// Adjust Text Size
function adjustTextSize() {
    const textSize = document.getElementById('textSizeSlider').value;
    document.getElementById('dynamicText').style.fontSize = textSize + 'px';
}

// Open Modal
function openModal() {
    document.getElementById('myModal').classList.add('show');
}

// Close Modal
function closeModal() {
    document.getElementById('myModal').classList.remove('show');
}

// Form Validation
function validateForm() {
    let isValid = true;

    // Name Validation
    const name = document.getElementById('name').value;
    if (name.length < 3) {
        isValid = false;
        document.getElementById('nameError').classList.remove('hidden');
    } else {
        document.getElementById('nameError').classList.add('hidden');
    }

    // Email Validation
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        document.getElementById('emailError').classList.remove('hidden');
    } else {
        document.getElementById('emailError').classList.add('hidden');
    }

    // Password Validation
    const password = document.getElementById('password').value;
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordPattern.test(password)) {
        isValid = false;
        document.getElementById('passwordError').classList.remove('hidden');
    } else {
        document.getElementById('passwordError').classList.add('hidden');
    }

    return isValid;
}

// Show Message on Dropdown Change
function showMessage() {
    const dropdown = document.getElementById('dropdown').value;
    document.getElementById('dropdownMessage').innerText = dropdown ? `You selected: ${dropdown}` : '';
}

firstName = prompt("What is your first name?").trim();
lastName = prompt("What is your last name?").trim();
email = prompt("What is your email?").trim().toLowerCase();
yearOfBirth = prompt("What is your year of birth?").trim();

today = new Date();
todayYear = today.getFullYear();
age = todayYear - yearOfBirth;

emailError = "";


if (email.indexOf(`@`) ==-1) {
    emailError = `not valid email <b>${email}</b> (symbol @ not exist)`;
} else if (!email.indexOf(`@`)) {
    emailError = `not valid email <b>${email}</b> (symbol @ find in first place)`;
} else if (email.indexOf(`@`) === email.length-1) {
    emailError = `not valid email <b>${email}</b> (symbol @ find in last place)`;
} else {
    emailError = email;
}

document.write(`
    <ul>
        <li>Full name: ${firstName} ${lastName}</li>
        <li>Email: ${emailError}</li>
        <li>Age: ${age}</li>
    </ul>`)



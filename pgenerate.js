 function generatePassword() {
    const length = 12; // Default password length
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let characters = "";
    if (document.getElementById("lowercase").checked) characters += lowercase;
    if (document.getElementById("uppercase").checked) characters += uppercase;
    if (document.getElementById("numbers").checked) characters += numbers;
    if (document.getElementById("symbols").checked) characters += symbols;
    if (document.getElementById("spaces").checked) characters += " ";

    let password = "";
    const excludeDuplicate = document.getElementById("exc-duplicate").checked;

    for (let i = 0; i < length; i++) {
        const randomChar = characters[Math.floor(Math.random() * characters.length)];
        if (excludeDuplicate && password.includes(randomChar)) {
            i--;
            continue;
        }
        password += randomChar;
    }

    document.getElementById("password").value = password;
}

function copyPassword() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}
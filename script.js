
function checkStrength() {
    const password = document.getElementById("password").value;
    const strengthDisplay = document.getElementById("strength");

    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    switch (strength) {
        case 5:
            strengthDisplay.textContent = "Strength: Very Strong 💪";
            strengthDisplay.style.color = "green";
            break;
        case 4:
            strengthDisplay.textContent = "Strength: Strong ✅";
            strengthDisplay.style.color = "limegreen";
            break;
        case 3:
            strengthDisplay.textContent = "Strength: Medium ⚠️";
            strengthDisplay.style.color = "orange";
            break;
        case 2:
            strengthDisplay.textContent = "Strength: Weak ❌";
            strengthDisplay.style.color = "orangered";
            break;
        default:
            strengthDisplay.textContent = "Strength: Very Weak ❌";
            strengthDisplay.style.color = "red";
    }
}

function checkPassword() {
    var password = document.getElementById("password").value;
    var key = "your_password_here"; // Replace "your_password_here" with your actual password

    if (password === key) {
        window.location.href = "./minesziverd/index.html"; // Redirect to the next page
    } else {
        document.getElementById("error-message").innerText = "Incorrect password. Please try again.";
    }
}

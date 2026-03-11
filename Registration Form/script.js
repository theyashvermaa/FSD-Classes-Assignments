const form = document.querySelector("#form")

const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const phoneInput = document.querySelector("#phone")
const passwordInput = document.querySelector("#password")

const strengthBar = document.querySelector("#strengthBar")
const passText = document.querySelector("#passText")

const toggle = document.querySelector("#toggle")


// NAME VALIDATION
nameInput.addEventListener("input", () => {

    if (nameInput.value.length < 3) {
        document.getElementById("nameError").innerText = "Name must be 3 characters"
    } else {
        document.getElementById("nameError").innerText = ""
    }

})

// EMAIL VALIDATION
emailInput.addEventListener("input", () => {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!regex.test(emailInput.value)) {
        document.getElementById("emailError").innerText = "Invalid email"
    } else {
        document.getElementById("emailError").innerText = ""
    }

})

// PHONE VALIDATION
phoneInput.addEventListener("input", () => {

    const regex = /^[0-9]{10}$/

    if (!regex.test(phoneInput.value)) {
        document.getElementById("phoneError").innerText = "Phone must be 10 digits"
    } else {
        document.getElementById("phoneError").innerText = ""
    }

})

// PASSWORD STRENGTH
passwordInput.addEventListener("input", () => {

    let pass = passwordInput.value
    let strength = 0

    if (pass.length > 6) strength++
    if (/[A-Z]/.test(pass)) strength++
    if (/[0-9]/.test(pass)) strength++
    if (/[@$!%*?&]/.test(pass)) strength++

    if (strength == 1) {
        strengthBar.style.width = "25%"
        strengthBar.style.background = "red"
        passText.innerText = "Weak"
    }

    if (strength == 2) {
        strengthBar.style.width = "50%"
        strengthBar.style.background = "orange"
        passText.innerText = "Medium"
    }

    if (strength >= 3) {
        strengthBar.style.width = "100%"
        strengthBar.style.background = "green"
        passText.innerText = "Strong"
    }

})

// SHOW / HIDE PASSWORD
toggle.addEventListener("click", () => {

    if (passwordInput.type === "password") {
        passwordInput.type = "text"
        toggle.innerText = "Hide"
    } else {
        passwordInput.type = "password"
        toggle.innerText = "Show"
    }

})

// Form Submission
form.addEventListener("submit", (e) => {

    e.preventDefault()

    let submission = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        password: passwordInput.value
    }

    let submissions = JSON.parse(localStorage.getItem("submissions")) || []

    submissions.push(submission)

    localStorage.setItem("submissions", JSON.stringify(submissions))

    alert("Registered Successfully")

    form.reset()
})
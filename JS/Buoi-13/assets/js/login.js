const form = document.getElementById("login-form")
const userNameInput = document.getElementById("login-username")
const passwordInput = document.getElementById("login-password")

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = userNameInput.value;
    const password = passwordInput.value;

    const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })


    if (!response.ok) {
        return;
    }
    const data = await response.json()

    localStorage.setItem("access-token", data.accessToken)
    console.log("success")

    window.location.href = "index.html"

})
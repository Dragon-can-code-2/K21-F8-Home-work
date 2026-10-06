const token = localStorage.getItem("access-token")

if (!token) {
    window.location.href = "login.html"
}


const postTemplate = document.getElementById("post-template")
const logoutBtn = document.getElementById("logout-btn")

logoutBtn.addEventListener("click", (e) => {
    localStorage.removeItem("access-token");
    window.location.href = "login.html"
})

async function getPosts() {

    const response = await fetch("https://dummyjson.com/posts")

    const data = await response.json()

    console.log(data)

    data.posts.forEach((post) => {

        postTemplate.innerHTML += `
        <tr>
            <td>${post.id}</td>

            <td>${post.title}</td>

            <td>
                <label class="badge badge-gradient-success">
                    SHOW
                </label>
            </td>

            <td>${post.views}</td>

            
            <td>
                <img src="https://picsum.photos/id/${post.userId}/200/300" class="me-2" alt="image">
                ${post.userId}
            </td>
        </tr>
    `

    })
}

getPosts()
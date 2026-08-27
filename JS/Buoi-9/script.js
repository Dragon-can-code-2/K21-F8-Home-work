const fetchUrl = "./products.json"
const baseUrl = "http://localhost:3000"

/* bài 1 */
async function getAllProducts() {
    const response = await fetch(`${baseUrl}/books`);
    const products = await response.json();
    console.log(products)
    console.table(products);
    return products
}

// getAllProducts()

/* bài 2 */
async function getOneProduct(id) {
    const response = await fetch(fetchUrl);

    if (response.status === 404) {
        console.log("không tìm thấy sản phẩm");
        return;
    }

    const data = await response.json();
    console.log(data)
    const product = data.books.find((item) => {
        return item.id === id;
    })

    if (!product) {
        console.log("Không tìm thấy sản phẩm")
        return;
    }

    console.log("sản phẩm mã ", id, " là ", product)
}

// getOneProduct(5)
// getOneProduct(999)

/* bài 3 */
async function safeFetch(url) {
    try {
        const response = await fetch(url)
        console.log(response)
        if (!response) {
            console.log("Lỗi HTTP: ", response.status);
            return
        }
        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.log("Lỗi mạng", error)
    }
}

// safeFetch("products.json")

/* bài 4 */
async function addProduct(product) {
    const response = await fetch(`${baseUrl}/books`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product),
    })

    if (!response.ok) {
        console.log("Lỗi HTTP:", response.status);
        return;
    }

    const data = await response.json();

    const newProduct = {
        id: data.id,
        name: data.name,
        price: data.price,
        status: data.status
    };

    console.log(newProduct);

    return newProduct;
}

// addProduct({
//     id: "",
//     name: "Tôi thấy hoa vàng trên cỏ xanh",
//     price: 145000,
//     status: false
// })

async function updateProduct(id, updateData) {
    const response = await fetch(`${baseUrl}/books/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updateData),
    })

    if (!response.ok) {
        console.log("Lỗi HTTP:", response.status);
        return;
    }

    const data = await response.json();
    console.log("Đã cập nhật sản phẩm", data);
}

// updateProduct(4, {
//     name: "Tôi thấy hoa vàng trên cỏ xanh",
//     price: 145000,
//     status: false
// })

async function deleteProduct(id) {
    const response = await fetch(`${baseUrl}/books/${id}`, {
        method: "DELETE"
    })

    if (!response.ok) {
        console.log("Lỗi HTTP:", response.status);
        return;
    }

    const products = await getAllProducts();

    const product = products.find(item => item.id === id);

    if (!product) {
        console.log(`Sản phẩm ${id} đã được xóa thành công`);
    }
}

// deleteProduct(3)


/* bài 7 */
async function searchProducts(keyword, minPrice, maxPrice) {
    const url = `${baseUrl}/books?name_like=${keyword}&price_gte=${minPrice}&price_lte=${maxPrice}`;
    const response = await fetch(url);

    if (!response.ok) {
        console.log("Lỗi HTTP:", response.status);
        return;
    }

    const data = await response.json();

    console.log("Kết quả tìm kiếm:", data);
}

// searchProducts("", 25000, 30000);


/* bài 8 */
async function getUserWithPosts(userId) {
    const userResponse = await fetch(`${baseUrl}/users/${userId}`)
    const user = await userResponse.json()
    console.log(user)

    const postResponse = await fetch(`${baseUrl}/posts?userId=${userId}`)
    const post = await postResponse.json()
    console.log(post)

    const result = {
        user,
        post
    }

    console.log(result)
}

// getUserWithPosts(3)

/* bài 9 gọi tuần tự*/
async function getDashboardData1() {

    console.time("tuần tự");


    const booksResponse = await fetch(`${baseUrl}/books`)
    const books = await booksResponse.json()

    const usersResponse = await fetch(`${baseUrl}/users`)
    const users = await usersResponse.json()

    const postsResponse = await fetch(`${baseUrl}/posts`)
    const posts = await postsResponse.json()

    console.timeEnd("tuần tự");

    console.log({
        books,
        users,
        posts
    });
}

// getDashboardData1()

/* bài 9 gọi song song*/
async function getDashboardData2() {

    console.time("song song");

    const [booksResponse, usersResponse, postsResponse] = await Promise.all([
        fetch(`${baseUrl}/books`),
        fetch(`${baseUrl}/users`),
        fetch(`${baseUrl}/posts`)
    ])

    const [books, users, posts] = await Promise.all([
        booksResponse.json(),
        usersResponse.json(),
        postsResponse.json()
    ])

    console.timeEnd("song song");

    console.log({
        books,
        users,
        posts
    });
}
// getDashboardData2()

// chạy song song sẽ luôn nhanh hơn so với chạy tuần tự về khoản thời gian thực thi

/* bài 10 */
async function main() {
    try {
        console.log("B1: Lấy danh sách sản phẩm")
        const books = await getAllProducts()

        console.log(books)

        console.log("B2: Thêm sản phẩm mới")

        const newBooks = {
            name: "Đoạn Kết Mới",
            price: 256000,
            status: true
        }
        const addNewBook = await addProduct(newBooks)

        const booksAfterAddNew = await getAllProducts()

        console.log("B3: Sửa giá sản phẩm mới thêm")
        await updateProduct(addNewBook.id, { price: 580 })

        const booksAfterUpdatePrice = await getAllProducts()

        console.log("B4: Xoá sản phẩm vừa thêm")
        await deleteProduct(addNewBook.id)

        const checkExistsBookAfterDeleted = await getAllProducts()
        const exists = checkExistsBookAfterDeleted.some(product => product.id === addNewBook.id)
        if (!exists) {
            console.log("Đã xóa sản phẩm thành công");
        } else {
            console.log("Sản phẩm vẫn còn tồn tại");
        }

        console.log("B5: Lấy lại danh sách sản phẩm")

        const finalBooks = await getAllProducts()



    } catch (error) {
        console.log("Đã xảy ra lỗi:", error);
    }
}


// main()
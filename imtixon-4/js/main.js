const elContainer = document.querySelector(".market-container")
function truncateWord(string) {
    return string.split(" ").slice(0, 12).join(" ") + "..."
}
function titleCut(str) {
    if (str.split("").length > 18) {
       return  str.split("").slice(0, 18).join("") + "..."
    }{
        return str
    }
}

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        data.forEach(product => {
            const productCard = document.createElement("div")
            productCard.className = "card"

            const picBox = document.createElement("div")
            picBox.className = 'box-pic'
            productCard.append(picBox)

            const rasm1 = document.createElement("img")
            rasm1.src = product.image
            rasm1.alt = truncateWord(product.description)
            picBox.append(rasm1)

            const elTitle = document.createElement('h4')
            elTitle.textContent = titleCut(product.title)
            productCard.appendChild(elTitle)

            const elDiv = document.createElement('div')
            elDiv.className = "pic-line"
            const elPrice = document.createElement('strong')
            elPrice.textContent = `$${product.price}`
            elDiv.appendChild(elPrice)
            var array = []
            for (let i = 0; i < Math.round(product.rating.rate); i++) {
                array.push(i)
                const rasm = document.createElement('img')
                rasm.src = "images/star.png"
                elDiv.appendChild(rasm)
            }
            productCard.appendChild(elDiv)

            const elDesc = document.createElement('p')
            elDesc.textContent = truncateWord(product.description)
            productCard.appendChild(elDesc)


            const elBtn = document.createElement('button')
            elBtn.className = "delete-product"
            elBtn.setAttribute("product-id", product.id)
            elBtn.textContent = "Delete Product"
            productCard.appendChild(elBtn)

            elContainer.appendChild(productCard)
        });
    })
elContainer.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target.className == "delete-product") {
        console.log(`siz shu ${e.target.getAttribute("product-id")}chi raqamdagi  mahsulotni o'chirdingiz`)
        fetch(`https://fakestoreapi.com/products/${e.target.getAttribute("product-id")}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(json => console.log(json))
        alert("Siz bu mahsulotni o'chirmoqchimoqchimisiz!!!")
    }
})


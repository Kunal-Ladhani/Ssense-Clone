
let data = JSON.parse(localStorage.getItem("cart-data"))
let container = document.getElementById("final_product_checkout_div")
let container1 = document.getElementById("subtotal")
let container2 = document.getElementById("order_total")



function Append_data(data,container,container1,container2){
    container.innerHTML = null
    let total = 0,count = 0
    data.forEach((el)=>{
        count++
        let img = document.createElement("img")
        img.src = el.image

        let p1 = document.createElement("p")
        p1.innerText = el.designer

        let p2 = document.createElement("p")
        p2.innerText = el.name

        let p3 = document.createElement("p")
        p3.innerText = "SIZE: S"

        let p4 = document.createElement("p")
        p4.innerText = "$"+el.price+" USD"
        total += +(el.price)

        let div1 = document.createElement("div")
        div1.append(p1,p2,p3)

        let div2 = document.createElement("p")
        div2.append(p4)

        let div3 = document.createElement("div")
        div3.classList.add("checkout_img_div2")
        div3.append(div1,div2)

        let div4 = document.createElement("div")
        div4.classList.add("checkout_img_div1")
        div4.append(img,div3)

        container.append(div4)
    })
    document.getElementById("order_count").innerText = `ORDER SUMMARY - (${count}) ITEM`
    Append_total(total,container1,container2)
}

function Append_total(total,container1,container2){
    container1.innerHTML = null
    container2.innerHTML = null

    container1.innerText = "$"+total+".00"
    container2.innerText = "$"+(total+40)+".00"
}

Append_data(data,container,container1,container2)

document.getElementById("final_order").addEventListener("click",final_order)

function final_order(){
    alert("Your Order Placed Successfully")
    window.location.href = "/index.html"

    let empty = JSON.parse(localStorage.getItem("cart-data"))

    empty = []

    localStorage.setItem("cart-data",JSON.stringify(empty))
}
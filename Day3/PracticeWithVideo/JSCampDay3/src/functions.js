function addToCart(quantity,productName="Şeftali"){ //defaultlar sona yazmaya dikkat edersen mantıklı olur
    console.log("Sepete eklendi  : ürün :  " +  productName + " adet : " + quantity)
}

//addToCart()
addToCart(20)
//addToCart(15)


let sayHello =  ()=>{ //fonksiyon
    console.log("Hello World!")
}
sayHello()

let sayHello2 = function() {
    console.log("Hello World 2")
}
sayHello2()

function addToCart2(productName,quantity,unitPrice){

}
addToCart2("Elma",5,10)
addToCart2("Armut",2,25)
addToCart2("Limon",3,15)

let product1 ={productName:"Şeftali", unitPrice:14,quantity:6}

function addToCart3(product){

console.log("Ürün : " +product.productName)
console.log("Adet : " +product.quantity)
console.log("Fiyat : " +product.unitPrice)

}
addToCart3(product1)

let product2 ={productName:"Şeftali", unitPrice:14,quantity:6}
let product3 ={productName:"Şeftali", unitPrice:14,quantity:6}

product2 = product3
product2.productName="Kavun"
console.log(product3.productName)

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)


function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName:"Şeftali", unitPrice:14,quantity:6},
    {productName:"Mango", unitPrice:14,quantity:6},
    {productName:"Kavun", unitPrice:14,quantity:6}
]
addToCart4(products)

//... yaparsanız buna rest operatörü denir array yapıp gönderir
//rest operatörü her zaman fonksiyonun sonuna yazın

function add(bisey,...numbers) { 

    let total = 0;
   for (let i = 0; i < numbers.length; i++) {
       total = total + numbers[i]
   }
   console.log(total)
   console.log(bisey)
}

add(20,30)
//add(20,30,40)
//add(20,30,40,50)
//getKpis istatistik sonuçlar almak için kullanılan değer
//spread ayrıştırır rest toparlar
let numbers = [30,10,500,450,900,140]
//console.log(...numbers)
console.log(Math.max(...numbers))


let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name : "İç Anadolu ", population : "20M"},
    {name : "Marmara ", population : "30M"},
    {name : "Karadeniz ", population : "10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

//console.log(icAnadolu.name)
//console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)

// let newproductName, newUnitPrice, newQuantity
//  ({productName:newproductName, unitPrice:newUnitPrice,quantity:newQuantity}) = {productName :"Elma" , unitPrice:10,quantity:5}
// console.log(newproductName)
// console.log(newUnitPrice)
// console.log(newQuantity)

// login({title}){
//     console.log("<h1>" +title+"</h1>")
// }


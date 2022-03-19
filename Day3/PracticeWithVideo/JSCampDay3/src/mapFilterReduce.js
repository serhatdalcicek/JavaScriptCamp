let cart = [
    {id:1, productName:"Telefon", quantity:4,unitPrice:4000},
    {id:2, productName:"Bardak", quantity:3,unitPrice:40},
    {id:3, productName:"Kalem", quantity:1,unitPrice:30},
    {id:4, productName:"Şarj Cihazı", quantity:6,unitPrice:70},
    {id:5, productName:"Kitap", quantity:5,unitPrice:45},
    {id:6, productName:"Pot", quantity:7,unitPrice:150},
//spa

]
//map tek tek dolaşmaya yarar
//cart.map(product=>console.log(product))

console.log("<ul>")
cart.map(product=>{ //adetler ile fiyatların çarpımını verir
   console.log("<li>" + product.productName + " : " 
   + product.unitPrice * product.quantity + "</li>")
})
console.log("</ul>")

console.log("--------------------------------------------")

//reduce genel istatisliği gösterir 
//acc akümülatör 
//bu fonksiyon sepetteki ürünlerin adetlerle fiyatlarının toplamını gösterir
//0 akümülatörün ilk değeri ve sytanxlar dikkate alınmalı ve toplamaya 0 dan başlıyor bu fonksiyonla beraber yazılır 
let total = cart.reduce((acc,product)=> acc + product.unitPrice * product.quantity,0)

console.log(total)

console.log("--------------------------------------------")

//filter fonksiyonu
//=> her bir demek
//bu fonksiyon adet in 2 den büyük olanlarını listeledi && işareti ile arama genişletilebilir.
let quantityOver2 = cart.filter(product=>product.quantity>2)  
console.log(quantityOver2)

console.log("--------------------------------------------")



 function addToCart(sepet) {
     sepet.push({id:7, productName:"Balon", quantity:2,unitPrice:15}) 
    }
    addToCart(cart)
    console.log(cart)
   
    console.log("--------------------------------------------")


   let sayi = 10
   function sayiTopla(number){
       number +=1
   }
   sayiTopla(sayi)
   console.log(sayi)

   console.log("--------------------------------------------")

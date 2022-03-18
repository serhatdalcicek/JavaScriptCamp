let sayi1 = 10;
sayi1 = "Serhat Dalçiçek"
let student = {id:1,name:"Serhat"}
//console.log(student);

function save(puan=10,ogrenci){ //bir parametreyi sonda yazman gerekir
    console.log(ogrenci.name + " : " + puan)
}
//save(undefined,student);

let students = ["Serhat Dalçiçek","Engin Demiroğ","Mert","Ali"]
//console.log(students)

let students2 = [student,{id:2, name:"Serhat"},
"İstanbul", {city:"Malatya"}]
//console.log(students2)

//rest = geriye kalan parametreler demek
//params
//varArgs

let showProducts = function(id,...products){
    console.log(id)
    console.log(products[0])//[] buna rest parametre diyoruz ve  bunun olması zorunlu
}
//console.log(typeof showProducts)
//showProducts(10,"Elma","Armut","Karpuz")
//rest ile istediğimiz kadar parametre gönderiyoruz array olarak tutulur. spread ile ayrıştırıyoruz
//... = spread denir ve parametleri ayırmaya yarar
let points = [1,2,3,4,50,4,6,74,8]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")

//Destructuring = elinizdeki arraylerin değerlerini değişkenlere atama yöntemidir
// let setState = function(param){
    
// }

let populations = [10000,20000,30000,[40000,100000]]
let [small,medium,high,[veryHigh,maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number){//fonksiyonun içinde array tanımlarsan destructring olarak algılar
    console.log(small1)
}
someFunction(populations)

let category = {id:1, name:"İçecek"}
console.log(category.id) //yazdırma şekli
console.log(category["name"]) //yazdırma şekli

let {id,name} = category
console.log(id) //yazdırma şekli
console.log(name) //yazdırma şekli


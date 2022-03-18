//java da ki her yerden erişim public js de exporttur.
class Customer{ //değerleri atamak için protoype yapısı kullanılır
    constructor(id,customerNumber){
        this.id = id;
        this.customerNumber = customerNumber;
    }
}

let customer = new Customer(1,"12345");
//prototyping
customer.name = "Serhat Dalçiçek"
console.log(customer.name)
//static ve  classa yapılan prototyping
Customer.bisey = "Bişey"
console.log(Customer.bisey)

console.log(customer.customerNumber)

class IndividualCustomer extends Customer{
   constructor(firstName,id,customerNumber){
   super(id,customerNumber)
   this.firstName = firstName
}
}
class CorporateCustomer extends Customer{
   constructor(companyName,id,customerNumber){
   super(id,customerNumber)
   this.companyName = companyName
}
}

//.map arrayi döner
//filteredProducts elimizdeki arrayi yeni bir arraye çıkarır
//acc 
//.map yeni objeler kullanmak için de kullanabilirsin
let products = [
    {id:1, name : "Acer Laptop", unitPrice:15000},
    {id:2, name : "Msi Laptop", unitPrice:19000},
    {id:3, name : "Casper Laptop", unitPrice:12000},
    {id:4, name : "Asus Laptop", unitPrice:17000},

]
console.log("<ul>")
products.map(product=>console.log(`<li>${product.name}</li>`))
console.log("</ul>")
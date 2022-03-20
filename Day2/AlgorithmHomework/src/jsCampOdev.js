// 1- Ödev İstediğin kadar sayı ve çıktıları Asal olup olmadığını yazdırma
//prime fonksiyonu ile asal sayı bulma
//const = oluşturulan bir değişkene daha sonrasında tekrar değer ataması yapılamaz demektir.

const findPrime = (...num) => {
   for (let i = 0; i<num.length; i++) {
     let findPrime = true;
     if (num[i] === 1 )
       console.log(num[i] + " : sayısı asal sayı değildir :((");
     else {
        for (let j = 2; j < num[i]; j++) {
          if (num[i] % j === 0) {
            findPrime = false;
            break;
          }
        }
 
       if (findPrime) {
         console.log(num[i] +  " : sayısı asal sayıdır :))");
       } else {
         console.log(num[i] +  " : sayısı asal sayı değildir  :((");
       }
     }
   }
 };

 findPrime(1,2,45,67,54,23,78,45,87,234,645)

console.log("---------------------------")


// 2 - arkadaş sayıları bulma

const number1 = 220
const number2 = 284

let total1 = 0
let total2 = 0

for (let i = 0; i < number1; i++) {
  if(number1 % i == 0){ //number1 i ye tam bölünüyorsa demektir
     total1 = total1 +i;
  }   
}
for (let i = 0; i < number2; i++) {
   if(number2 % i == 0){
      total2 = total2 +i;
   }   
}
if (number1 == total2 && number2 == total1) { //&& iki koşul doğru ise kullanılır
   console.log("Bu iki sayı arkadaş sayıdır")
}else{
   console.log("Bu iki sayı arkadaş sayı değildir.")
}

console.log("---------------------------")

// 3  -   1000 e kadar tüm mükemmel sayıları bulma
let findPerfectNumber = (perfectNumber) => {

   for (let j = 1; j < perfectNumber; j++) {
       let number = j
       let toplam = 0
       for (let i = 1; i < number; i++) {
           if (number % i == 0) {
               toplam += i
           }
       }
       if (toplam == number) {
           console.log(number + " : sayısı mükemmel sayıdır :))")
       }
   }
}
findPerfectNumber(1000)

console.log("---------------------------")

//4 - 1000 e kadar asal sayıları bulma
let allNumbers = (num) => {
   for (let i = 0; i < 1000; i++) {
       let num = i
       let total = 0
       for (let j = 2; j < num; j++) {
           if (num % j == 0) {
            total++
           }
       }
       if (total == 0) {
           console.log(num + " : sayısı  asal sayıdır :))" )
       }
       else{
           console.log(num + " : sayısı asal sayı değildir :((")
       }
   }
}
allNumbers()
console.log("---------------------------")

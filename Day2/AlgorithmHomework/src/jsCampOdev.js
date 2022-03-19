// 1- Ödev İstediğin kadar sayı ve çıktıları Asal olup olmadığını yazdırma
//prime fonksiyonu ile asal sayı bulma

let findPrime = (...numbers) => {
   for (let i = 0; i < numbers.length; i++) {
      let newNumber = numbers[i]
      let sayac = 0
      for (let j = 0; j < newNumber; j++) {
         if  (newNumber % j == 0){
            sayac++
         }     
      } 
      if (newNumber == 2) {
         console.log(newNumber + " : sayısı asal sayı değildir dostum")
      } 
      else if (sayac == 0) {
         console.log(newNumber + " : sayısı asal sayıdır dostum")
      }  
      else {
         console.log(newNumber + " : sayısı asal sayı değildir dostum")
      }  
   }
}
findPrime(2,4,7,5,9,12,67,33,156,678,234,123)
console.log("---------------------------")
//arkadaş sayıları bulma
let findFriend = (num1, num2) => {
   let sumNum1 = 0, sumNum2 = 0
   for (let i = 1; i < num1; i++) {
       if (num1 % i == 0) {
           sumNum1 += i
       }
   }
   for (let i = 1; i < num2; i++) {
       if (num2 % i == 0) {
           sumNum2 += i
       }
   }

   if (sumNum1 == num2 && sumNum2 == num1) {
       console.log(num1 + " ve " + num2 + " : sayısı arkadaş sayılardır")
   }
   else {
       console.log(num1 + " ve " + num2 + " : sayısı arkadaş sayı değildir :/ ")
   }
}

findFriend(220, 284)

console.log("------------------")

//1000 e kadar tüm mükemmel sayıları bulma
let findPerfectNumber = param => {

   for (let j = 1; j < param; j++) {
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

console.log("---------------")

//1000 e kadar asal sayıları bulma
let allNumbers = () => {
   for (let i = 0; i < 1000; i++) {
       let num = i
       let sayac = 0
       for (let j = 2; j < num; j++) {
           if (num % j == 0) {
               sayac++
           }
       }
       if (sayac == 0) {
           console.log(num + " : sayısı  asal sayıdır :))" )
       }
       else{
           console.log(num + " : sayısı asal sayı değildir :((")
       }
   }
}
allNumbers()
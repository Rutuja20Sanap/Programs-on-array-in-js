
const number = [5,20,100,200,500,1000]

let largestNumber = number[0]

 for(let i=1; i < number.length;i++ ){

     if(number[i] > largestNumber){
         largestNumber = number[i]
     }
 }

 console.log(`The Largest number is: ${largestNumber}`)
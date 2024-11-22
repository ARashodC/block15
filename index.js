function froyo(){
//get list via prompt
//turn list to array

const flavorsList = prompt(`What are you flavors`, `vanilla,passionfruit,mango,pineapple,vanilla,apple,mango,mango`);

//turn string into array

const arrayFlavor = flavorsList.split(`,`);
console.log(arrayFlavor);

//make object keys(array num) in a loop for every flavor
const flavorObject = {};
//getting the length for the array
for (let i = 0; i < arrayFlavor.length; i++) {
  //finding the V for key for arrayFlavor
  const flavorNum = Object.keys(flavorObject)
  //getting the flavor in arrayFlavor
  const flavor = arrayFlavor[i]
  console.log(flavor) 
  console.log(flavorNum,flavor,flavorObject)

  //loop for counting the frequency of the flavor
  if (!flavorNum.includes(flavor)){
    flavorObject[flavor] = 1
  }else{
    flavorObject[flavor] = flavorObject[flavor] + 1
  }
  
   
}
}
console.log(froyo())

//get list via prompt
//turn list to array

const flavorsList = prompt(`What are you flavors`, `vanilla, passionfruit, mango, pineapple, vanilla, apple, mango, mango`)

const arrayFlavor = flavorsList.split(`,`)
console.log(arrayFlavor)

const flavorObject = [];
for (let i = 0; i < arrayFlavor.length; i++) {
    const currentKeys = Object.keys(flavorObject)
    const currentFlavor = arrayFlavor[i]
    console.log(flavorObject, currentKeys)

    if(currentKeys.includes(currentFlavor)){
      
    }else{
      flavorObject.currentFlavor =+1
    }
}
console.log(flavorObject)


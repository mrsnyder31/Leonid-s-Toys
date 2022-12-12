const teddyBear = {
    id: 1,
    toyName: 'Teddy Bear',
    numberOfToysInStock: 120,
    toyCost: 5.50,
    isToyInInventory: true
}
const nerfBlaster3000 = {
    id: 2,
    toyName: 'Nerf Blaster 3000',
    numberOfToysInStock: 50,
    toyCost: 30.45,
    isToyInInventory: true
}
const legoDeathstar = {
    id: 3,
    toyName: 'Lego Deathstar',
    numberOfToysInStock: 0,
    toyCost: 75.95,
    isToyInInventory: false
}
// Each object has a unique Id defined by a number, 
// the name of the toy in th form of a string, 
// the number of toys in stock stored as a number, 
// a float which states the price, 
// and a boolean which states if the toy is in inventory.

const toys =[
    {
        id: 1,
        toyName: 'Teddy Bear',
        numberOfToysInStock: 120,
        toyCost: 5.50,
        isToyInInventory: true
    }, {
        id: 2,
        toyName: 'Nerf Blaster 3000',
        numberOfToysInStock: 50,
        toyCost: 30.45,
        isToyInInventory: true
    },
    {
        id: 3,
        toyName: 'Lego Deathstar',
        numberOfToysInStock: 0,
        toyCost: 75.95,
        isToyInInventory: false
    }
] 

for (const toy of toys) {
    toy.toyCost += toy.toyCost  * 0.05
}

const toyToFind = 3;
for (const toy of toys) {
    if (toy.id === toyToFind) {
        console.log(`The toy is ${toy.toyName}, and it costs ${toy.toyCost} dollars.`)
    }
}
    

//console.log(toys)
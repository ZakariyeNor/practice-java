//The essentials p
//Ternary Conditionals
let mol; 
mol = 45 == 344 ? 'play' : 'go home';
console.log(mol);

/**
 * Iteration with for, while, break, continue, switch case and nesting
 */


let frukt = ['apple', 'banan', 'orange', 'grapes'];

console.log(frukt);

let i = 1;
while(i <= 10){
    console.log(i);
    i++;
}
console.log(frukt);

let num = [13, 14, 15, 16];
for (let i = 0; i < num; i++){
    if (i === 14){
        break;
    } else {
        console.log(num);
    }
}


function trying(mina){
    let mymo = [];
    for (let i = 0; i < mina; i++){
        mymo.push('jujuk');
    }
    return mymo;
}

let muno = trying(6);
console.log(muno);

let milo = [1, 2, 3]
milo.push(4);
console.log(milo);

// onject dictionaries
let myObject = {
    car: 'marcedes',
    color: 'blue',
    fuel: 'gas',
};

console.log(myObject['color']);
console.log(myObject['car']);
console.log(myObject.fuel);

//set 

let mySet = ([1, 2, 3, 4])

console.log(mySet);

let mixedSet = (1, 2, 'apple', 'car', 'true', 5);

console.log(mixedSet);

/// multi dimentional 
let info = [
    {
    name: 'Joe',
    address: 'holmen',
    phone: '3456789098',
    },
    {
        name: 'ali',
        address: 'bolo',
        phone: '98765437654',
        },
        {
            name: 'JoMarye',
            address: 'yolkin',
            phone: '876543456789',
            },
            {
                name: 'Helen',
                address: 'Hokmina',
                phone: '3456789876545678'
                },
];

console.log([0]);
console.log([1]);
console.log([2]);
console.log([3]);

let contacts = [
    {
      name: 'Joe',
      phoneNumber: '123456789'
    },
    {
      name: 'Mary',
      phoneNumber: '456789123'
    },
    {
      name: 'Dad',
      phoneNumber: '789132456'
    },
  ];

  //Core concept prac. 
  //Incrementing & decrementing
  
  for (let x = 10; i >= x; x--);{
    console.log(x)
};
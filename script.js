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
while (i <= 10) {
    console.log(i);
    i++;
}
console.log(frukt);

let num = [13, 14, 15, 16];
for (let i = 0; i < num; i++) {
    if (i === 14) {
        break;
    } else {
        console.log(num);
    }
}


function trying(mina) {
    let mymo = [];
    for (let i = 0; i < mina; i++) {
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

for (let x = 10; x >= 0; x--) {
    console.log(x);

}

for (let kol = 10; kol >= 0; kol--) {
    console.log(kol);
}

for (let kol = 0; mol > 10; mol++);
console.log(mol);

//comparing values with comparison Operators
let milan = 98;
let barca = 89;

if (milan === barca) {
    milan = winner;
} else {
    console.log(false);
}

// Determining truth with logical operators


// Built in Functions – working with Math
let biimo = Math.floor(Math.random() * 20) + 1;
console.log(biimo);

//Built in Functions – working Date Objects

let tody = Date.now();
console.log(tody);

let todd = new Date();
console.log(todd.getDay());

let month = new Date();
console.log(month.getMonth());

let year = new Date();
console.log(year.getFullYear());

let today = Date.now();
let tomorrow = today + 86400000;

let todayDate = new Date(today);
let tomorrowDate = new Date(tomorrow);

console.log(todayDate.toDateString());
console.log(tomorrowDate.toDateString());


// The Dom 

document.getElementById('innerWidth').innerHTML = window.innerWidth;
document.getElementById('innerHeight').innerHTML = window.innerHeight;
document.getElementById('outerWidth').innerHTML = window.outerWidth;
document.getElementById('outerHeight').innerHTML = window.outerHeight;


document.addEventListener(DOMContantLoad)
document.getElementById()
document.getElementsByName()
document.getElementsByClassName()
document.getElementsByTagName()
document.parentNode()
document.body.childNodes()
document.body.previousSibling()
document.body.nextSibling()


// Child and siblings can be also 
let parent = mainDiv.parentNode;  // the div's parent element
let children = mainDiv.children;  // the div's children
let firstChild = mainDiv.children[0];  // the div's first child
let nextSibling = mainDiv.nextElementSibling;  // the next element at the same nesting level
let prevSibling = mainDiv.previousElementSibling;

function getAnswer() {
    document.write('<h2>Answer:</h2>');
    document.write('<p>By calling it and passing it the content you would like to write to the document</p>');
}

// changing exixtent elements 
function update() {
    let box = document.getElementById('main-box');
    box.style.backgroundColor = "yellow"
    let paragraph = document.getElementsByClassName('special')[0];
    paragraph.removeAttribute('class');

    let emptyBox = document.getElementById('empty-box');
    emptyBox.innerHTML = "<h2>I'm not empty anymore!</h2>"
    emptyBox.style.width = "300px";
    emptyBox.style.backgroundColor = "yellow";
}

// Adding and removing 
/*
Note: ignore the functions here and focus on what's inside them.
The function is only here to allow you to change the content with
the button
*/

function createShoppingList() {
    // Get the document body (just for convenience)
    let body = document.body;

    // Create a new heading
    let newHeading = document.createElement("h3");

    // Set its innerHTML
    newHeading.innerHTML = "Shopping List:";

    // Add it to the body
    body.appendChild(newHeading);

    // Now make the new list
    let shoppingList = document.createElement('ul');

    // Create an array of items to add
    let shoppingItems = ['Milk', 'Butter', 'Eggs'];

    // Loop through the array and create <li> elements
    for (let i = 0; i < shoppingItems.length; i++) {
        let listItem = document.createElement('li');
        listItem.innerHTML = shoppingItems[i];
        shoppingList.appendChild(listItem);
    };

    // Now append the whole new list to the body
    body.appendChild(shoppingList);

    // When shopping is completed, clear out the shopping list and add the purchased items to kitchen stock
    let button = document.createElement('button');
    button.innerHTML = "Finished Shopping";

    // Set the onclick attribute to call the addToKitchenStock() function below
    button.setAttribute('onclick', 'addToKitchenStock();');

    // Append it to the body
    body.appendChild(button);
}


function addToKitchenStock() {
    // First remove the shopping list heading
    let shoppingListHeading = document.getElementsByTagName('h3')[1];
    shoppingListHeading.remove();

    // Get both lists, then iterate through the shopping list's children (the <li> elements), cloning each item and appending it to the kitchen stock list
    let kitchenStock = document.getElementsByTagName('ul')[0];
    let shoppingList = document.getElementsByTagName('ul')[1];
    for (let i = 0; i < shoppingList.children.length; i++) {
        let clone = shoppingList.children[i].cloneNode(true)
        kitchenStock.appendChild(clone);
    }

    // Remove the old shopping list and the buttons
    shoppingList.remove();
    let i = 0;
    while (i < 2) {
        /* This removes the first button in the document each time.
        We need to do it this way since once we delete the first
        one, the 2nd one's index is now 0 */
        document.getElementsByTagName('button')[0].remove();
        i++;
    };

    // Insert a completion note at the top
    let complete = document.createElement('p');
    complete.innerHTML = "Shopping complete!"
    complete.style.color = "red";
    complete.style.fontWeight = "bold";
    let kitchenStockHeading = document.getElementsByTagName('h3')[0];
    document.body.insertBefore(complete, kitchenStockHeading);
}

// innerHtml 
/*
Note: ignore the functions here and focus on what's inside it.
The function is only here to allow you to change the content with
the button
*/

function createShoppingList() {
    // Create a div to hold everything
    let shoppingListDiv = document.createElement('div');

    // Set the div's innerHTML to the shopping list
    // Notice the use of backticks (``) to create a multiline string
    shoppingListDiv.innerHTML = `
        <h3>Shopping List:</h3>
        <ul>
            <li>Milk</li>
            <li>Butter</li>
            <li>Eggs</li>
        </ul>
    `;

    // Find the first button and insert the div before it
    let firstList = document.getElementsByTagName('button')[0];
    document.body.insertBefore(shoppingListDiv, firstList);
}

// Click events 

// onclick 
<body>
    <div id="lowly-div" onclick="alert('You clicked the lowly div!');">
        <p>Though I am but a lowly div, you can still click me</p>
    </div>

    <p onclick="alert('You clicked the paragraph');">
        Paragraphs have click events also...everything does! Click me!
    </p></body>

// mouse movements
/* We are passing the event here so we can
get its type and do everything with one function */

function handleEvent(event) {
    if (event.type === 'mousemove') {
        let position = '(' + event.clientX + ',' + event.clientY + ')';
        let positionHolder = document.getElementById('mouse-position');
        positionHolder.innerHTML = position;
    } else {
        console.log(
            event.type,
            event.target.attributes.id.value, 'happened!');
    }

}

// Loading events 
//
DOMContentLoaded: The DOM content has finished loading, but external assets like images, JS files, CSS files and so on have not loaded yet.
    load: Everything is now loaded.This event fires on the window
beforeunload: Fired just before the user leaves the page.This can allow you to confirm whether the user really wants to leave the page.
    unload: Fired when the user has confirmed they want to leave the page.


// change events 
< label for= "my-select" > Select an option:</label >
    <select name="my-select" id="my-select" onchange="console.log('You changed the select box!');">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </select>

// key events
// Note: We pass the event to the function to get info about it!
function handleKeys(event) {
    let pressedDiv = document.getElementById('key-pressed');
    let downDiv = document.getElementById('key-down');
    let upDiv = document.getElementById('key-up');
    let currentKeySpan = document.getElementById('current-key');
    let lastKeySpan = document.getElementById('last-key');

    if (event.repeat) {
        return false;  // prevents holding the key from triggering the event again 
    } else {
        if (event.type === 'keydown') {
            downDiv.style.backgroundColor = 'lightgreen';
            pressedDiv.style.backgroundColor = 'lightgreen';
            currentKeySpan.innerHTML = event.key + ' (' + event.code + ' / ' + event.keyCode + ')';
        } else if (event.type === 'keyup') {
            currentKeySpan.innerHTML = '';
            downDiv.style.backgroundColor = 'white';
            pressedDiv.style.backgroundColor = 'white';
            upDiv.style.backgroundColor = 'lightgreen';

            // This just changes the upDiv back to white after 75ms
            setTimeout(function () {
                upDiv.style.backgroundColor = 'white';
            }, 75);

            lastKeySpan.innerHTML = event.key + ' (' + event.code + ' / ' + event.keyCode + ')';
        }

    }
}

// Event listner 
function handleBtnClick(event) {
    console.log('Received the ' + event.type + " event!");
    console.log('"this" currently refers to', this.id);
    console.log('You clicked the button!\n');
}

function handleInputKeys(event) {
    console.log('Received the ' + event.type + " event!");
    console.log('"this" currently refers to', this.id);
    console.log('You changed the textbox!\n');
}

function handleDivMouseOver(event) {
    console.log('Received the ' + event.type + " event!");
    console.log('"this" currently refers to', this.id);
    console.log('You moved the mouse over the div!\n');
}

let magicButton = document.getElementById('magic-button');
let magicDiv = document.getElementById('magic-div');
let magicInput = document.getElementById('magic-input');

magicButton.addEventListener('click', handleBtnClick); // left clicks
magicButton.addEventListener('contextmenu', handleBtnClick); // right clicks
magicDiv.addEventListener('mouseover', handleDivMouseOver); // mouseovers
magicInput.addEventListener('keypress', handleInputKeys); // key presses 
magicInput.addEventListener('keydown', handleInputKeys); // key down
magicInput.addEventListener('keyup', handleInputKeys); // key up

// 
let box = document.getElementById('box');
function changeBorder() {
    this.style.borderColor = "gray";
}
function changeBackground() {
    this.style.backgroundColor = "pink";
}

function revertBack() {
    this.style.borderColor = "white";
    this.style.backgroundColor = "lightblue";
}

box.addEventListener('click', changeBorder);
box.addEventListener('mouseover', changeBackground);
box.addEventListener('mouseleave', revertBack);

// The main concepts of using functions and events

When working with event handlers, a few of the things you might want to ask yourself are:

Which event was or will be fired, and what caused / will cause it to be fired ?
    What do I want to happen in response to this event ?
        Which element or elements is the response going to affect, or if it won't change any elements, what will it do for the user?
What information do I need to be able to handle the event correctly ?
    Where can I get the information needed(from the event itself, from the element / window / document, or somewhere else) ?
        To demonstrate, there are two major concepts you should understand about working with functions and event handlers in JavaScript:

Concept 1: The event is accessible in the function:

    You saw in the keyboard events unit that it was possible not only to determine that the user pressed a key on the keyboard, but 
    also whether they were holding it down, when they released it, which key they pressed, and a host of other things.All of this information 
    came from the event object that was passed to the event handler(i.e.the function that was executed).The KeyboardEvent object has specific 
    properties related to keyboard events and the same is true for the other types of events.You can use the event object in the function that handles 
    the event to get more information about exactly what happened and respond accordingly.

Concept 2: The element is accessible in the function:

    You also saw in the last unit that when you create an event listener using the addEventListener() method, inside of the event handler this 
    refers to the object that you attached the listener to.This is very useful to know because it means that in the callback function that actually handles 
    the event, you can access the event type and all its properties and methods as well as the element that triggered it, which gives you access to everything 
    about that element: its type, height, width, behaviors, id, classes, location in the DOM and so on.

Understanding these two concepts is the key to understanding how to manipulate the DOM in response to JavaScript events.

//Getting form values 
function handleSubmit(event) {
    // Prevent the default submit action (more on this in a couple units)
    event.preventDefault();

    // Get the two input elements
    let user = document.getElementById('username');
    let pass = document.getElementById('password');

    // Log their values to the console
    console.log('Username:', user.value);
    console.log('Password:', pass.value);
}

// This gets the form and attaches an event listener to it
let form = document.getElementById('login-form');
form.addEventListener('submit', handleSubmit);

// 


function getFormDetails(event) {
    event.preventDefault();
    
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    
    document.getElementById('name-result').textContent = name.value;
    document.getElementById('email-result').textContent = email.value;
}

let newsletterForm = document.getElementById('newsletter-signup');
    newsletterForm.addEventListener('submit', getFormDetails);


// prepopulating form fields 
let user = document.getElementById('username');
let email = document.getElementById('email');

user.value = 'johnsmith1nnn';
email.value = 'john@johnswebsite.com';

//let fname = document.getElementById('first-name');
fname.value = "Indiana";

let lname = document.getElementById('last-name');
lname.value = "Jones";

let headline = document.getElementById('headline');
headline.value = "If you want to be a good Archaeologist, you gotta get out of the library.";

let position = document.getElementById('position');
position.value = "Archaeologist at Marshall College";



// form submission 
let contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    // Prevent the form from being submitted
    event.preventDefault();

    // Do our own stuff
    console.log('Submitting...');

    // Submit it ourselves
    contactForm.submit();

    // Do more of our own stuff
    console.log('Submission Complete!');
}


let contactForm2 = document.getElementById('contact-form2');
contactForm2.addEventListener('submit', handleSubmit2);

function handleSubmit2(event) {
  // Prevent the form from being submitted
  event.preventDefault();

  // Note the use of .elements (a simpler way to get form field values and using the elements id eg ['username'])
  let userName = contactForm2.elements['username'].value;
  let email = contactForm2.elements['email'].value;
  let message = contactForm2.elements['message'].value;

  // Remember template literals with backticks?
  let html = `
    <p>Hi ${userName}! Thanks for sending us a message! We'll respond to ${email} soon. For reference, the message you submitted is below:</p>
    <p>${message}</p>
  `;

  // Put the above HTML in the response div below the form
  let responseDiv = document.getElementById('response');
  responseDiv.innerHTML = html;
  responseDiv.style.display = 'block';
}

//

let test; // assignment to this variable is to be done inside the function you create
// write your code below

let form = document.getElementById('contact-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    console.log("submitting form...");
    test = document.getElementById('message').value;
console.log(test);
form.submit();
console.log("form submitted");
    
}

// form validating 
function handleSubmit(event) {
    event.preventDefault();
    let p1 = form.elements['password'].value;
    let p2 = form.elements['confirm-password'].value;
  
    if (p1 !== p2) {
      let errorDiv = document.getElementById('errors');
      errorDiv.innerHTML = "<p>Please ensure your passwords match.</p>";
      errorDiv.style.display = 'block';
    } else {
      console.log('Validation successful!');
      form.submit();
    }
  }
  
  let form = document.getElementById('registration-form');
  form.addEventListener('submit', handleSubmit);

  //let usernames = ["Harry", "Daisy", "Michael", "Sarah", "Sally"];

// Write your code here

let form = document.getElementById('registration-form'); {
    form.addEventListener('submit', handleSubmit);
}


let errorMsg = document.getElementById('errors');

function handleSubmit(event){
    event.preventDefault();
let name = document.getElementById('username').value;
    if (usernames.includes(name)) {
        errorMsg.innerHTML = `Sorry, the username ${name} is already in use. Please choose another username.`;
    } else {
        usernames.push(name);
        form.submit();
        console.log(usernames);
    }
}

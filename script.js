//Mouse Events: click, mouseover, mouseout

const myBox = document.getElementById('myBox');
const myButton = document.getElementById('myButton');


// Adding event listener to myBox and making itself respond to the event:
myBox.addEventListener('click', event => {
    event.target.style.backgroundColor = 'tomato';      //.target is what we click on:
    event.target.textContent='ئاخخخخ 😫';
    event.target.style.fontSize='4.5em';
});

myBox.addEventListener('mouseover', x => {
    x.target.style.backgroundColor = 'yellow';
    x.target.textContent="Don't do it 😲";
    x.target.style.fontSize='3.5em';

})

myBox.addEventListener('mouseout', event =>{
    event.target.style.backgroundColor='lightgreen';
    event.target.textContent=' Click me 😀';
    event.target.style.fontSize='3.5em';
});


// Adding event listener to myButton but making myBox to respond the event.
myButton.addEventListener('click', event=>{
    myBox.style.backgroundColor = 'tomato';
    myBox.textContent='OUCH 😫';
    myBox.style.fontSize='4.5em';
});

myButton.addEventListener('mouseout', event => {
    myBox.style.backgroundColor='lightgreen';
    myBox.textContent=' Click me 😀';
    myBox.style.fontSize='3.5em';
})
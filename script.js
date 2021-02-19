"use strict";

function myFirstApp(name, age) {
    alert(`Hello, my name is ${name} and this is my first app!`);

    function showSKills() {
        let skills = ['html', 'css', 'js'];
        alert('I have ' + skills[0] + ' skill');
        alert('I have ' + skills[1] + ' skill');
        alert('I have ' + skills[2] + ' skill');
    }
    showSKills('skills');

    function checkAge () {
        let age = prompt('How old are you?', '');
        if (age < 18) {
            alert('You are awesome! You thought about your future so early!');
        } else {
            alert('You have a chance!');   
        }
    }
    checkAge(age);

    let num = prompt("Please enter a natural number!", '');

    let result = Math.pow(num, 2);
    let calcPow = (num < 1) ?
    function() { alert(`Degree for ${num} not supported, enter a natural number`); } :
    function() { alert(Math.pow(num, 2)); };

    calcPow();    
    console.log(result);
}

myFirstApp("Nataliia", 35);

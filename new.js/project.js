'use strict';
var score = 0 ;
function que1(){
var Q1 = prompt('Do you think that i have a creative thinking?').toLowerCase();
if (Q1 === 'yes' ||Q1 === 'y' ) {
    alert('I\'m happy to hear that from you');
    score++;
  //  console.log("Are you creative person? " + Q1);
} else if (Q1 === 'no' ||Q1 === 'n' ) {
    alert('plz give me advice to avoid rhe weak points that i have');
   // console.log("Are you creative person? " + Q1);
}
else {
    alert('You should back to the question and answer it');
}
}que1()

function que2(){
var Q2 = prompt('Advice is a good way for correcting our path, Do you like advice?').toLowerCase();
if (Q2 === 'yes' ||Q2 === 'y') {
    alert('This means that you are a superior person');
    score++;

  //  console.log("Do you need advice? " + Q2);
} else if (Q2 === 'no' ||Q2 === 'n' ) {
    alert('perfection is for God only :)');
   // console.log("Do you need advice? " + Q2);
}
else {
    alert('You should back to the question and answer it');
}
}que2()

function que3(){
var Q3 = prompt('Do you think advice that related to soft skills will help you ?').toLowerCase();
if (Q3 === 'yes' ||Q3 === 'y' ) {
    alert('Good choise, we all need this kind of advice');
    score++;

  //  console.log("Do you think advice that related to soft skills will help you ? " + Q3);
} else if (Q3 === 'no' ||Q3 === 'n' ) {
    alert('plz send to me in the email what kind of advice that more helpful');
  //  console.log("Do you think advice that related to soft skills will help you ? " + Q3);
}
else {
    alert('You should back to the question and answer it');
}
}que3()

function que4(){
var Q4 = prompt('I put a Golden Box to advice me what I need to be a  motivate and successful person. Do you promise to use it if you have advice for me ? :)').toLowerCase();
if (Q4 === 'yes' ||Q4 === 'y' ) {
    alert('This is a great service from you');
    score++;

   // console.log("I put for you Golden Box to write what you need to be a successful and positive person. Do you promise to use it ? ' + Q4);

} else if (Q4 === 'no' ||Q4 === 'n' ) {
    alert('I didn\'t need your advice by the way :P ');
   // console.log("I put for you Golden Box to write what you need to be a successful and positive person. Do you promise to use it ? ' + Q4);
}
else {
    alert('You should back to the question and answer it');
}
}que4()

function que5(){
var Q5 = prompt('If you reach this stage with yes answer, you schould proud of yourself, becouse you great personality, Are you interesting to see my personal website ? :)').toLowerCase();
if (Q5 === 'yes' ||Q5 === 'y' ) {
    alert('I\'m happy for that :)');
    score++;

  //  console.log("If you reach this stage with yes answer, you schould proud of yourself, Do you agree ? " + Q5);

} else if (Q5 === 'no' ||Q5 === 'n' ) {
    alert("you should see it before you decide");
   // console.log("If you reach this stage with yes answer, you schould proud of yourself, Do you agree ? " + Q5);
}
else {
    alert('You should back to the question and answer it');
}
}que5()

function que6(){
for (var i=0 ; i<4; i++) {
    console.log(i);
var agenew = prompt("The Golden question, guess my age");
var age = Number (agenew);
if ( age === 25 ) {
    alert ('Thats right');
    score++;
    break;
}
else if ((25>age) && (age>=22)){
    alert (' you are close ');
    
}
else if ((28>=age) && (age>=26)){
    alert (' you are close ');

}
else if ((21>age) && (age>=20)) {
    alert (' that\'s too young man!  ');
    
}
else if ((30>=age) && (age>=29)) {
    alert (' i think i could be smarter in this age :) ');
    
}

else {
    alert ('plz be serious');
}
} 
//alert ("You should answer with my real age, i\'m sad after all this attempts , it\'s 25 years ");
}que6()

function que7(){
var countries = ['egypt', 'tunisia ', 'iraq', 'jordan', 'palestine', 'sudan'];
var x = 0;
for (var p = 0; p < 5; p++) {
    //console.log(p); 
    if (x === 10) {
        break;
    }

    var country = prompt('There are alots of countries that i like, you should know on of them at least, write down what you guess');
    //console.log(country); 

    for (var g = 0; g < countries.length; g++) {
        // console.log(g);
        //console.log(countries[g]);
        if (country === countries[g]) {
            var x = 10;
            //  console.log('my lovely country is ' + country );
            alert(" Thats right :) , you know me well ");
            score++;

            break;
        } else {

            //alert(" Thats not right  ");

            //console.log('your choise not right');

        }
    }
    if (x !== 10) {
        alert("You are not correct");
    }
}
}que7()

alert('Your Final Score Is ' + score + ' /7');
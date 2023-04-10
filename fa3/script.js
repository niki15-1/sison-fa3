alert('Welcome!');
var lastname = prompt('What is your last name?');
var ready = confirm('Are you ready to build a LOVED ONE?');
if(ready==true){
    alert('Oh wait...')
    alert('I forgot to tell you...')
    alert('It\'s with a twist...')
}
else{
    alert('Oh..')
    alert('You\'re stuck?')
    alert('Oops looks like you still have to do this....')
    alert('BUT since you declined... were gonna make this with a TWIST')
}
function decide(){
    var fate1 = parseInt(Math.random()*26)+1;
    document.getElementById("num1").innerHTML=fate1;
    var fate2 = parseInt(Math.random()*26)+1;
    document.getElementById("num2").innerHTML=fate2;
    var fate3 = parseInt(Math.random()*26)+1;
    document.getElementById("num3").innerHTML=fate3;

switch(fate1){
    case 1:
        document.getElementById("firstname").innerHTML =("Name: Anne " + lastname);
    break;
    case 2:
        document.getElementById("firstname").innerHTML =("Name: Bobby " + lastname);
    break;
    case 3:
        document.getElementById("firstname").innerHTML =("Name: Cameron "+lastname);
    break;
    case 4:
        document.getElementById("firstname").innerHTML =("Name: David "+lastname);
    break;
    case 5:
        document.getElementById("firstname").innerHTML =("Name: Elsa "+lastname);
    break;
    case 6:
        document.getElementById("firstname").innerHTML =("Name: Faith "+lastname);
    break;
    case 7:
        document.getElementById("firstname").innerHTML =("Name: Goldilock "+lastname);
    break;
    case 8:
        document.getElementById("firstname").innerHTML =("Name: Honey "+ lastname);
    break;
    case 9:
        document.getElementById("firstname").innerHTML =("Name: Inka "+lastname);
    break;
    case 10:
        document.getElementById("firstname").innerHTML =("Name: Justine "+lastname);
    break;
    case 11:
        document.getElementById("firstname").innerHTML =("Name: Kate "+lastname);
    break;
    case 12:
        document.getElementById("firstname").innerHTML =("Name: Lauren "+lastname);
    break;
    case 13:
        document.getElementById("firstname").innerHTML =("Name: Matthew "+lastname); 
    break;
    case 14:
        document.getElementById("firstname").innerHTML =("Name: Niel "+lastname); 
    break;
    case 15:
        document.getElementById("firstname").innerHTML =("Name: Olaf "+lastname); 
    break;
    case 16:
        document.getElementById("firstname").innerHTML =(" Name: Perry the Platipus "+lastname); 
    break;
    case 17:
        document.getElementById("firstname").innerHTML =("Name: Quail "+lastname); 
    break;
    case 18:
        document.getElementById("firstname").innerHTML =("Name: Rawr "+lastname); 
    break;
    case 19:
        document.getElementById("firstname").innerHTML =("Name: Sugarbooboo "+lastname); 
    break;
    case 20:
        document.getElementById("firstname").innerHTML =("Name: Third "+lastname); 
    break;
    case 21:
        document.getElementById("firstname").innerHTML =("Name: Urethra "+lastname); 
    break;
    case 22:
        document.getElementById("firstname").innerHTML =("Name: Valerie "+lastname); 
    break;
    case 23:
        document.getElementById("firstname").innerHTML =("Name: Whorl "+lastname); 
    break;
    case 24:
        document.getElementById("firstname").innerHTML =("Name: Xyrus "+lastname); 
    break;
    case 25:
        document.getElementById("firstname").innerHTML =("Name: Yoyo "+lastname); 
    break;
    case 26:
        document.getElementById("firstname").innerHTML =("Name: Zyuth"+ lastname); 
    break;
}

if(fate1>fate2&&fate1>fate3){
    document.getElementById("age").innerHTML=("Age: "+fate1);
}
else if(fate2>fate1&&fate2>fate3){
    document.getElementById("age").innerHTML=("Age: "+fate2);
}
else{
    document.getElementById("age").innerHTML=("Age: "+fate3);
}

var last = fate2*fate3;
document.getElementById("years").innerHTML=("Congratulations! You will last for "+last+" seconds!");
}
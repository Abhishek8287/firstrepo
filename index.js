var randomnumber1 = Math.floor(Math.random()*6) + 1;//number from 1 to 6
var randomDiceImage = "dice" + randomnumber1 + ".png";//dice1.png to dice6.png
var randomImageSource = "images/" + randomDiceImage ; //images/dice1.png to images/dice6.png

var final = document.querySelectorAll("img")[0] ;
final.setAttribute("src",randomImageSource);


var randomnumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImages2 = "dice" + randomnumber2 + ".png" ;
var randomImagesSources2 = "images/" + randomDiceImages2 ;

var final2 = document.querySelectorAll("img")[1] ;

final2.setAttribute("src",randomImagesSources2);

if(randomnumber1 > randomnumber2)
{
    document.querySelector("h1").innerHTML="player 1 Wins✨😃" ;
}
else if(randomnumber1 < randomnumber2){
    document.querySelector("h1").innerHTML="player 2 Wins✨😃" ;
}

else{
    document.querySelector("h1").innerHTML="Draw😎";

}
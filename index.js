var n=Math.random();
var n=Math.floor(n*6)+1;
var ris="images/"+"dice"+n+".png";
document.querySelector(".img1").setAttribute("src",ris);
var n1=Math.random();
var n1=Math.floor(n1*6)+1;
var ris1="images/"+"dice"+n1+".png";
document.querySelector(".img2").setAttribute("src",ris1);
if(n>n1)
{
  document.querySelector("h1").innerHTML=" Player 1 Wins!🎉";
}
else if(n<n1)
{
  document.querySelector("h1").innerHTML=" 🎉Player 2 Wins! ";
}
else
{
  document.querySelector("h1").innerHTML="Draw!";
}

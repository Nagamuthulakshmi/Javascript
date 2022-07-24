function msg(){
    alert("Hi From External Js File");
}

function Multiply(p1, p2) {
    p3=p1*p2;
    document.getElementById("mulans").innerHTML=p3;
}

function add()
{
  var num1, num2, sum;
  num1 = parseInt(document.getElementById("firstnumber").value);
  num2 = parseInt(document.getElementById("secondnumber").value);
  sum = num1 + num2;
  document.getElementById("answer").value = sum;
}

var num1, num2, sum;
function FirstNum()
{
  num1 = parseInt(document.getElementById("firstNumber").value);
  if(num1)
  {
    temp = document.getElementById("blockOne");
    temp.style.display = "none";
    temp = document.getElementById("blockTwo");
    temp.style.display = "block";
  }
}
function SecondNum()
{
  num2 = parseInt(document.getElementById("secondNumber").value);
  if(num1 && num2)
  {
    temp = document.getElementById("blockOne");
    temp.style.display = "none";
    temp = document.getElementById("blockTwo");
    temp.style.display = "none";
    sum = num1 + num2;
    temp = document.getElementById("blockThree");
    temp.style.display = "block";
    document.getElementById("res").innerHTML = sum;
  }
}



  
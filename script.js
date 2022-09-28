
//1.display number in text box
function displayNum(num){   
    d.value +=num;
}

//2.clear text box
function clearBox(){
    d.value = "";
}

//evaluate expression
function evaluateExpression(){
    expression=d.value;
    output=eval(expression);
    d.value=output;
}


//remove last item from text box
function removeLastItem(){
    currentExpression=d.value;
    d.value=currentExpression.slice(0,-1);
}
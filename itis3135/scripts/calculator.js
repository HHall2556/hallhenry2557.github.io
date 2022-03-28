//variables are changed in many different functions. global easiest solution so far. 
let endOfFirstIndex = 0;
let isDecimal = false;
let percentageAllowed = false;
let firstNumOver = false;
let display = document.getElementById("display-result");
let equationP = document.getElementById("equation");
const calculatorButton = document.querySelector("calculator_keys");

//clears only the display area
//resets global variables.
function clearEntry()
{
    display.innerHTML = "0";
    percentageAllowed = false;
    isDecimal = false;
    firstNumOver = false;
    endOfFirstIndex = 0;
}

//clears the display area and the equationP text above it
//resets global variables.
function clearTotal()
{
    display.innerHTML = "0";
    equationP.innerHTML = "0";
    percentageAllowed = false;
    isDecimal = false;
    firstNumOver = false;
    endOfFirstIndex = 0;
}

//removes the last character from the display
//when display is empty, resets global variables.
function backspace()
{
    let display = document.getElementById("display-result");

    if(display.innerHTML.length > 1)
    {
        display.innerHTML = display.innerHTML.slice(0,-1);
    }    
    else
    {
        display.innerHTML = "0";
        percentageAllowed = false;
        isDecimal = false;
    }

}

//Main Calculation function. collects data and calls other calculation functions. 
//is called by html
//percentage is a boolean value passed from the HTML page 
//saying if this is using the percentage function or not.
function calculateExpression(percentage)
{
    //not defined because I test for isNaN();
    let num1;
    let num2;

    let result = 0;
    let notRealNumber = false;

    num1 = parseFloat(display.innerHTML.substring(0,endOfFirstIndex + 1));

    //if only one number is present, the second number is NAN.
    if((display.innerHTML.substring(0,endOfFirstIndex + 1).length == display.innerHTML.length))
    {
        notRealNumber = true;
    }
    else
    {
        num2 = parseFloat(display.innerHTML.substring(endOfFirstIndex + 1, display.innerHTML.length));
    }
    
    let sign = display.innerHTML.substring(endOfFirstIndex, endOfFirstIndex + 1);

    if(percentage)
    {
        percentageCalculation(num1, num2);
    }
    else
    {
        //verify if num2 has a value or not
        notRealNumber = isNaN(parseInt(num2));

        if(!percentageAllowed || notRealNumber)
        {
            result = num1;
        }
        else
        {
            result = calculation(num1, num2, sign);
        }

        //changes the display with the results that have been calculated
         equationP.innerHTML = display.innerHTML + '=';
         display.innerHTML = result;

         //updates endOfFirstIndex global var
         endOfFirstIndex = display.innerHTML.length;


         //checks if the result has a decimal or not. 
         if(result - Math.floor(result) !== 0)
         {
            isDecimal = true; 
         }
         else
         {
            isDecimal = false;
         }         
    }
}

//If percent button is pressed, calculateExpression will call this function
function percentageCalculation(number1, number2)
{
        //percentage is used for second value, not first. 
        if(percentageAllowed && !isNaN(number2))
        {
            equationP.innerHTML = number2 + " \u00f7 100 = ";
            number2 = number2 / 100;
            display.innerHTML = display.innerHTML.substring(0,endOfFirstIndex + 1) + number2;
            equationP.innerHTML += number2;
            return false;
        }
        //percentage can be used on the result of a previous calculation
        else if(isNaN(number2) && percentageAllowed)
        {
            equationP.innerHTML = number1 + " \u00f7 100 = ";
            number1 = parseFloat(number1 / 100);
            if(number1 == 0)
            {
                display.innerHTML = '0';
                isDecimal = false;
                percentageAllowed = false;
            }
            display.innerHTML = number1;
            equationP.innerHTML += number1;
            endOfFirstIndex = display.innerHTML.length - 1;
            return false;
        }
        //if percentage is used incorrectly, reset to 0
        else
        {
            display.innerHTML = "0";
            equationP.innerHTML = "0";
            percentageAllowed = false;
            isDecimal = false;
            return false;
        }
}

//function created to lower clutter of calculateExpression
//requires two numbers and sign input
function calculation(n1, n2, sign)
{
    switch(sign)
    {
        case '+':
            return n1 + n2;
        case '-':
            return n1 - n2;
        case '\u002A': //multiplication unicode
            return n1 * n2;
        case '\u00F7': //division unicode
            return n1 / n2;
        default: 
            alert('Mistake');
    }
}

//This function calculates expressions that only use one number.
function singleNumberCalculation(sign)
{
    let result = 0;
    num1 = parseFloat(display.innerHTML);
    percentageAllowed = true;
    switch(sign)
    {
        case '\u221A': //sqaure root unicode
            result = Math.sqrt(num1);
            equationP.innerHTML = '\u221A ' + display.innerHTML + ' =';
            display.innerHTML = result;
            endOfFirstIndex = display.innerHTML.length;
            break;
        case 'x^2':
            result = num1 * num1;
            equationP.innerHTML = num1 + '^2' + ' =';
            display.innerHTML = result;
            endOfFirstIndex = display.innerHTML.length;
            break;
        case '1/x':
            result = 1 / num1;
            equationP.innerHTML = '1 / ' + num1 + ' =';
            display.innerHTML = result;
            endOfFirstIndex = display.innerHTML.length;
            break;
    }
}

//adds numbers to the display based on what button was pushed. number passed from HTML
function addnumbers(number)
{
    if(display.innerHTML.slice(0,1) === "0" && display.innerHTML.length == 1)
    {
        display.innerHTML = number;
    }
    else
    {
        if(!firstNumOver)
        {
            endOfFirstIndex++;
        }
        display.innerHTML += number;   
    } 
}

//adds sign based on which sign button was pressed. string passed from HTML
function addSigns(sign)
{
    if(display.innerHTML.slice(0,1) === "0" && display.innerHTML.length == 1)
    {
        return false;
    }
    else if(isNaN(display.innerHTML.substring(endOfFirstIndex)))
    {
        return false;
    }
    else
    {
        display.innerHTML += sign;
        isDecimal = false;
        endOfFirstIndex = display.innerHTML.length - 1;
        percentageAllowed = true;
        firstNumOver = true;
    }
}

//adds a decimal to the number being typed. If a decimal already exists, it returns false;
function addDecimal()
{
    let display = document.getElementById("display-result");
    if(isDecimal)
    {
        return false;
    }
    else
    {
        display.innerHTML += '.';
        isDecimal = true;
    }
    return false;
}

//Changes number1 from pos-neg. want to upgrade this function.
function changeSign()
{
    let display = document.getElementById("display-result");
    if(parseFloat(display.innerHTML) > 0)
    {
        display.innerHTML = "-" + display.innerHTML;
        endOfFirstIndex++;
    }
    else if(display.innerHTML === "0")
    {
        display.innerHTML = "0";
    }
    else
    {
        display.innerHTML = display.innerHTML.substring(1);
    }
}

//hack to get around the inability to pass values easily. 
//Not a solution I am proud of, but it got the job done for this without rewriting everything.
function initilizePercentage()
{
    calculateExpression(true);
}
function oneOverX()
{
    singleNumberCalculation("1/x");
}
function xSqaured()
{
    singleNumberCalculation("x^2");
}
function sqrtX()
{
    singleNumberCalculation('\u221A');;
}
function division()
{
    addSigns('\u00f7');
}
function numpad0()
{
    addnumbers(0);
}
function numpad1()
{
    addnumbers(1);
}
function numpad2()
{
    addnumbers(2);
}
function numpad3()
{
    addnumbers(3);
}
function numpad4()
{
    addnumbers(4);
}
function numpad5()
{
    addnumbers(5);
}
function numpad6()
{
    addnumbers(6);
}
function numpad7()
{
    addnumbers(7);
}
function numpad8()
{
    addnumbers(8);
}
function numpad9()
{
    addnumbers(9);
}
function plus()
{
    addSigns('+');
}
function minus()
{
    addSigns('-');
}
function multi()
{
    addSigns('\u002A');
}
function calcNotPercent()
{
    calculateExpression(false);
}
window.onload = function()
{
    document.getElementById("percentage-sign").onclick = initilizePercentage;
    document.getElementById("clear-entry").onclick = clearEntry;
    document.getElementById("clear-complete").onclick = clearTotal;
    document.getElementById("back-space").onclick = backspace;
    document.getElementById("one-over-x").onclick = oneOverX;
    document.getElementById("x-sqaured").onclick = xSqaured;
    document.getElementById("multi").onclick = multi;
    document.getElementById("sqrt-x").onclick = sqrtX;
    document.getElementById("division").onclick = division;
    document.getElementById("numpad7").onclick = numpad7;
    document.getElementById("numpad8").onclick = numpad8;
    document.getElementById("numpad9").onclick = numpad9;
    document.getElementById("numpad4").onclick = numpad4;
    document.getElementById("numpad5").onclick = numpad5;
    document.getElementById("numpad6").onclick = numpad6;
    document.getElementById("subtract").onclick = minus;
    document.getElementById("numpad1").onclick = numpad1;
    document.getElementById("numpad2").onclick = numpad2;
    document.getElementById("numpad3").onclick = numpad3;
    document.getElementById("addition").onclick = plus;
    document.getElementById("pos-neg").onclick = changeSign;
    document.getElementById("numpad0").onclick = numpad0;
    document.getElementById("decimal").onclick = addDecimal;
    document.getElementById("equals").onclick = calcNotPercent;    
}

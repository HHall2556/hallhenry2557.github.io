function getDate()
{
    let date = new Date();
    document.write(date);
}
function nameAndFeeling()
{
        let userName = document.getElementById("getname").value;
        let feeling = document.getElementById("getfeeling").value;
        document.getElementById("nameresult").innerHTML= 
        "The Hot Pink Hippos Welcomes you, "  + userName + "!";
        document.getElementById("feelingresult").innerHTML= "We\'re glad you are doing " + feeling;

}
function continentSelect()
{
    let continent = document.getElementById("continentquestion").value;
    switch(continent.valueOf()) 
    {
        case "North America":
            document.getElementById("continentresult").innerHTML= "In North America, "
            + "there are nine hundred thousand Hot Pink Hippos";
            break;
        case "South America":
            document.getElementById("continentresult").innerHTML= "In South America, "
            + "there are over nine thousand Hot Pink Hippos";
            break;
        case "Africa":
            document.getElementById("continentresult").innerHTML= "In Africa, "
            + "there are forty nine billion Hot Pink Hippos.";
            break;
        case "Europe":
            document.getElementById("continentresult").innerHTML= "In Europe, "
            + "there are fifty nine thousand, four hundred and twenty two Hot Pink Hippos";
            break;
        case "Antarctica":
            document.getElementById("continentresult").innerHTML= "In Antarctica, "
            + "there are forty two Hot Pink Hippos";
            break;
        case "Australia":
            document.getElementById("continentresult").innerHTML= "In Australia, "
            + "there are sixty nine million Hot Pink Hippos";
            break;
        default:
            document.getElementById("continentresult").innerHTML= "In Asia, "
            + "there are seven hundred and thirty four thousand Hot Pink Hippos";
            break;
    }
}
function favoriteDrink()
{
    document.getElementById("favoritedrinkresult").innerHTML= "Clean water. Maybe not that suprising";
}
function caluclateHippoPower()
{
    let hippoValue = document.getElementById("hippopower").value;
    let hippoValidate = validateEntry(hippoValue);
    if(hippoValidate)
    {
        document.getElementById("hippopowerresult").innerHTML = hippoValue * 13 + 
        " Hippo Power. Now that's a lot of damage";
    }
    else
    {
        document.getElementById("hippopowerresult").innerHTML = "Half a hippo is a dead hippo." +
        " You also can't have negative hippos";
    }
}
function crocHippoBattle()
{
    let hippoNumber = document.getElementById("hippo_numbers").value;
    let crocNumber = document.getElementById("croc_numbers").value;
    hippoNumber = parseInt(hippoNumber);
    crocNumber = parseInt(crocNumber);
    entry1Valid = validateEntry(hippoNumber);
    entry2Valid = validateEntry(crocNumber);
    let hippoWin = true;

    if(entry1Valid && entry2Valid)
    {
        while((crocNumber > 0) && (hippoNumber > 0))
        {
            victor = roundVictory(100);
            if(victor <= 50)
            {
                crocNumber--;
            }
            else
            {
                hippoNumber--;
            }
            if(hippoNumber == 0)
            {
                hippoWin = false;
            }

        }
        if(hippoWin)
        {
            document.getElementById("battle_result").innerHTML= "The Brave Hippos defeated the Crocodiles this battle" +
            " With " + hippoNumber + " reinforcments remaining";
        }
        else 
        {
            document.getElementById("battle_result").innerHTML= "The Crocodiles defeated the Valiant Hippos this battle" +
            " With " + crocNumber + " reinforcments remaining";
        }
    }
    else
    {
        document.getElementById("battle_result").innerHTML= "You entered an impossible combination. " 
        + "Try whole numbers above zero";
        return false;
    }
}
function roundVictory(max)
{
    return Math.floor(Math.random() * max);
}
function validateEntry(entry)
{
    if(entry > 0)
    {
        return true;
    }
    else
    {
        return false;
    }

}

function hippoExportTax()
{
    let radios = document.getElementsByName('hippotax')
    let hippoNumber = 1;
    for(var radio of radios)
    {
        if(radio.checked)
        {
            hippoNumber = radio.value;
        }
    }
    if(hippoNumber == "1")
    {
        document.getElementById("hippoExportTaxResult").innerHTML= "You will pay a 10% export tax";
    }
    else if(hippoNumber == "2")
    {
        document.getElementById("hippoExportTaxResult").innerHTML= "You will pay a 20% export tax";
    }
    else
    {
        document.getElementById("hippoExportTaxResult").innerHTML= "You will pay a 35% export tax";
    }
}
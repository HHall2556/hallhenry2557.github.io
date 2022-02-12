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
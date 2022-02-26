function alertThatPolygon()
{
    let numOfSides = document.getElementById("polygongen").value;
    numOfSides = Math.abs(Math.round(numOfSides));
    let validation = validateEntry(numOfSides);
    if(validation)
    {
        document.getElementById("polygon_error_message").innerHTML= "Thank you. Have a HOT PINK HIPPO DAY!";
        switch(numOfSides)
        {
            case 1:
                alert('Henagon');
                break;
            case 2:
                alert('Digon');
                break;
            case 3:
                alert('Trigon');
                break;
            case 4:
                alert('Tetragon');
                break;
            case 5:
                alert('Pentagon');
                break;
            case 6:
                alert('Hexagon');
                break;
            case 7:
                alert('Heptagon');
                break;
            case 8:
                alert('Octagon');
                break;
            case 9:
                alert('Enneagon');
                break;
            default:
                alert('Decagon');
                break;
        }
    }
    else
    {
        document.getElementById("polygon_error_message").innerHTML= "That isn't a valid answer." + 
        " Try a number between 1 and 10";
        return false;
    }
}
function validateEntry(entry)
{
    if(entry > 0 && entry < 11)
    {
        return true;
    }
    else
    {
        return false;
    }

}
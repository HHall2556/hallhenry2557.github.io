const people = 
[
    "Bob the Builder",
    "Dio Brando",
    "Todo Takayuki",
    "Haytham Kenway",
    "Niko Bellic",
    "Ezio Audtiore",
    "Zeratul"
];
const salaries = 
[
    "80000",
    "120000",
    "90000",
    "82000",
    "65000",
    "63000",
    "45000",
];
function createSelect()
{
    select = document.getElementById("employee_select")
    removeAllChildNodes(select);
    for(i=0; i < people.length; i++)
    {
        let option = document.createElement('option');
        option.value = i;
        option.innerHTML = people[i];
        select.appendChild(option);
    }
}
function showSalary()
{
    let selected = document.getElementById("employee_select").value;
    document.getElementById("show_one_salary").innerHTML = people[selected] + 
    " makes a salary of " + salaries[selected] + " dollars a year."
}
function addSalary()
{
    newName = document.getElementById("new_name").value;
    newSalary = parseInt(document.getElementById("new_salary").value);
    let validateName = validateStringEntry(newName);
    let validateSalary = validateNumberEntry(newSalary);
    
    if(validateName && validateSalary)
    {
        people.push(newName);
        salaries.push(newSalary);
        document.getElementById("added_confirm").innerHTML = "You successfully added a new employee!";
        createSelect();
    }
    else
    {
        document.getElementById("added_confirm").innerHTML = "You entered invalid information.\n" +
        "All salaries are in range(40,000 - 150,000) and name must not be empty";
    }
    
}
function displayResults()
{
    let results = document.getElementById("results");
    removeAllChildNodes(results);
    let header = document.createElement("h2");
    let avgP = document.createElement("p");
    let highestP = document.createElement("p");

    let average = findAvgSalary();
    let indexOfLargestSalary = findLargestSalaryIndex();

    header.innerHTML = "Here are the results for the highest and average salaries of all employees listed.";
    results.appendChild(header);

    avgP.innerHTML = "The average salary of all listed employees is: " 
    + average + " dollars per year.\n";
    results.appendChild(avgP);

    highestP.innerHTML = "The largest salary is " + salaries[indexOfLargestSalary] 
    + " made by " + people[indexOfLargestSalary];
    results.appendChild(highestP);
    return false;
}
function findAvgSalary()
{
    let sum = 0;
    for(i = 0; i < salaries.length; i++)
    {
        
        sum+= parseInt(salaries[i]);
    }
    let avg = parseFloat(sum / salaries.length).toFixed(2);
    return avg;
}
function findLargestSalaryIndex()
{
    let highestIndex = 0;
    let highestValue = 0;
    for(i = 0; i < salaries.length; i++)
    {
        if(parseInt(salaries[i]) > highestValue)
        {
            
            highestValue = salaries[i];
            highestIndex = i;
        }
    }
    return highestIndex;
}
function displaySalary()
{
    let currentSelection = document.getElementById("results_table");
    removeAllChildNodes(currentSelection);
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    currentSelection.appendChild(thead);
    currentSelection.appendChild(tbody);

    let heading1 = document.createElement('th');
    heading1.innerHTML = "Name";
    let heading2 = document.createElement('th');
    heading2.innerHTML = "Salary";
    let rowHead = document.createElement('tr');
    rowHead.appendChild(heading1);
    rowHead.appendChild(heading2);
    thead.appendChild(rowHead);

    for(i = 0; i < people.length; i++)
    {
        let row_i =  document.createElement('tr');
        let name_i =  document.createElement('td');
        let salary_i = document.createElement('td');


        name_i.innerHTML = people[i];
        salary_i.innerHTML = salaries[i];

        row_i.appendChild(name_i);
        row_i.appendChild(salary_i);
        tbody.appendChild(row_i);
    }
}
function removeAllChildNodes(parent)
{
    while (parent.firstChild)
    {
        parent.removeChild(parent.firstChild);
    }
}
function validateNumberEntry(entry)
{
    let minStartPay = 40000;
    let maxStartPay = 150000;
    if(entry >= minStartPay && entry <= maxStartPay)
    {
        return true;
    }
    else
    {
        return false;
    }

}
function validateStringEntry(entry)
{
    if(entry)
    {
        return true;
    }
    else
    {
        return false;
    }

}
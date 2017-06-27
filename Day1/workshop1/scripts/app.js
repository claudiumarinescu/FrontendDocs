var employeesList = [
    {
        firstName: 'John',
        lastName:'King',
        phone:'0123456789',
        salary:4590
    },
    {
        firstName: 'Steven',
        lastName:'Gerard',
        phone:'0123956789',
        salary:4500
    },
    {
        firstName: 'Diana',
        lastName:'Ross',
        phone:'0123456789',
        salary:8500
    },
    {
        firstName: 'Mike',
        lastName:'Bob',
        phone:'0023456789',
        salary:4500
    },
    {
        firstName: 'Emily',
        lastName:'Hudson',
        phone:'0123459989',
        salary:4500
    }];

// prints a table of employees
function showList()
{
    var myTable = '<table class="table table-bordered" id="tabel"><tr><th>' +
        'First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th>' +
        '<th>Show</th><th>Delete</th></tr>';
    var totalSalaries = 0;
    for (var i in employeesList)
    {
        totalSalaries += parseInt(employeesList[i].salary);
        myTable += '<tr id="row' + i + '"><td>'+employeesList[i].firstName+'</td><td>' + employeesList[i].lastName
            + '</td><td>' + employeesList[i].phone + '</td><td>' + employeesList[i].salary
            + '</td><td>' + '<button onclick="vizualizare(' + i + ')">Show</button>'
            + '</td><td>' + '<button onclick="stergere(' + i + ')">Delete</button>' + '</td></tr>';
    }
    myTable += '</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;

    computeSearches(totalSalaries);
}

// prints the most used firstName, number of unique lastNames,
// most used 5 digits and the average salary
function computeSearches(totalSalaries) {
    var names = [];
    var apar = [];
    var found = false;
    for (var i in employeesList) {
        found = false;
        for (var j in names) {
            if (employeesList[i].firstName == names[j]) {
                found = true;
                apar[j]++;
                break;
            }
        }
        if (!found) {
            names.push(employeesList[i].firstName);
            apar.push(1);
        }
    }
    var max = 0;
    var name = "";
    for (var i in apar) {
        if (apar[i] > max) {
            max = apar[i];
            name = names[i];
        }
    }

    names = [];
    for (var i in employeesList) {
        found = false;
        for (var j in names) {
            if (employeesList[i].lastName == names[j]) {
                found = true;
                apar[j]++;
                break;
            }
        }
        if (!found) {
            names.push(employeesList[i].lastName);
            apar.push(1);
        }
    }
    var count = 0;
    for (var k in names) {
        if (apar[k] == 1)
            count++;
    }
    var myTable2 = '<table class="table table-bordered"><tr><th>' + name + '</th><th>' + count
                    + '</th><th>Undefined</th><th>' + totalSalaries/employeesList.length
                    + '</th><th></th><th></th></tr></table>';
    var container2 = document.getElementById('listcontainer3');
    container2.innerHTML = myTable2;
}

// deletes a specific employee
function stergere(i) {
    employeesList.splice(i,1);
    showList();
}

// shows in an alert box infos of an employee
function vizualizare(i) {
    var msg = "First name: " + employeesList[i].firstName
            + "\nLast name: " + employeesList[i].lastName
            + "\nPhone: " + employeesList[i].phone
            + "\nSalary: " + employeesList[i].salary;
    alert(msg);
}

// computes the total sum of salaries
function calculate() {
    var sum = 0;

    for (var i in employeesList) {
        sum += parseInt(employeesList[i].salary);
    }
    var myTable1 = '<table class="table table-bordered"><tr><th>Salary</th><td>' + sum + '</td></tr></table>';
    var container = document.getElementById('listcontainer2');
    container.innerHTML = myTable1;
}

// deletes the last employee from the table
function deleteEmployee() {
    employeesList.splice(-1, 1);
    showList();
}

// constructor for employees objects
var Employee = function(firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName  = lastName;
    this.phone     = phone;
    this.salary    = salary;
}

// adds an employee
function addEmployee() {
    var firstName = document.getElementById("firstName").value;
    var lastName  = document.getElementById("lastName").value;
    var phone     = document.getElementById("phone").value;
    var salary    = document.getElementById("salary").value;
    employeesList.push(new Employee(firstName, lastName, phone, salary));
    showList();
}

// converts salaries from RON to EURO
function convertSalary() {
    for (var i in employeesList) {
        employeesList[i].euroValue = parseFloat(employeesList[i].salary) / 4.5;
    }
    var myTable = '<table class="table table-bordered"><tr><th>' +
        'First Name</th><th>Last Name</th><th>Phone</th><th>Salary(RON)</th><th>Salary(EURO)</th></tr>';
    for (var i in employeesList) {
        myTable += '<tr><td>' + employeesList[i].firstName + '</td><td>' + employeesList[i].lastName
            + '</td><td>' + employeesList[i].phone + '</td><td>' + employeesList[i].salary
            + '</td><td>' + employeesList[i].euroValue + '</td></tr>';
    }
    myTable += '</table>';

    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}

// sorts the employees by a specific criteria
function sorteaza() {
    var sortType = document.getElementById("sorttype").value;
    switch (parseInt(sortType)){
        case 1:
            for (var i in employeesList) {
                 for (var j=i+1 in employeesList)
                     if (employeesList[i].firstName < employeesList[j].firstName){
                         var aux = employeesList[i];
                         employeesList[i] = employeesList[j];
                         employeesList[j] = aux;
                     }
            }
            break;

        case 2:
             for (var i in employeesList) {
                 for (var j = i + 1 in employeesList)
                     if (employeesList[i].lastName < employeesList[j].lastName) {
                         var aux = employeesList[i];
                         employeesList[i] = employeesList[j];
                         employeesList[j] = aux;
                     }
             }
             break;

        case 3:
             for (var i in employeesList) {
                 for (var j=i+1 in employeesList)
                     if (employeesList[i].phone < employeesList[j].phone){
                         var aux = employeesList[i];
                         employeesList[i] = employeesList[j];
                         employeesList[j] = aux;
                     }
             }
             break;

        case 4:
             for (var i in employeesList) {
                 for (var j=i+1 in employeesList)
                     if (employeesList[i].salary > employeesList[j].salary){
                         var aux = employeesList[i];
                         employeesList[i] = employeesList[j];
                         employeesList[j] = aux;
                     }
             }
             break;
        default:
            alert("Numere valide: 1, 2, 3, 4!");
    }
    showList();
}

// searches a specific word in the table
function cauta(){
    var nemo = document.getElementById("cauta").value;

    for (var i in employeesList){
        if (!((nemo == employeesList[i].firstName)
                || (nemo == employeesList[i].lastName)
                || (nemo == employeesList[i].phone)
                || (nemo == employeesList[i].salary))) {
            document.getElementById("row" + i).style.display = 'none';
        }
    }
}

var facts = ["Chuck Norris threw a grenade and killed 50 people, then it exploded.",
            "Chuck Norris counted to infinity. Twice.",
            "Chuck Norris can kill two stones with one bird.",
            "Chuck Norris can hear sign language."];
var iterator = 0;

// shows a fact on Chuck click
function showFacts() {
    alert(facts[iterator++%4]);
}

// hides the black square on mouse over
function hideSqr() {
    var sqr = document.getElementById("square");
    var img = document.getElementById("img");
    sqr.style.visibility = 'hidden';
    img.style.visibility = 'visible';
}

// hides Chuck on mouse leave
function hideImg() {
    var sqr = document.getElementById("square");
    var img = document.getElementById("img");
    sqr.style.visibility = 'visible';
    img.style.visibility = 'hidden';
}
var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '01234567890',
        salary: 12
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 13
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 12
    },
    {
        firstName: 'Bob',
        lastName: 'Mike',
        phone: '0123456789',
        salary: 12
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 11
    },

];

function showList() {
    var myTable = '<table border="1"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th></tr>';
    for(var i in employeesList) {
        myTable +=
            '<tr><td>'+employeesList[i].firstName+'</td><td>'+employeesList[i].lastName+'</td><td>'+employeesList[i].phone+'</td><td>'+employeesList[i].salary+'</td></tr>';
    }
    myTable += '</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}

var Employee = function (firstName , lastName , phone , salary)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}

function addEmployee()
{
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;

    employeesList.push(new Employee(firstName , lastName , phone , salary));
    showList();

}

function salariutotal()
{
    var salariu = 0 ;
    for (var i in employeesList)
        salariu += employeesList[i].salary;
    var container2 = document.getElementById('total');
    container2.innerHTML = salariu;
}

function deleteLast ()
{

    var myTable = '<table border="1"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th></tr>';
    for(var i in employeesList) {
        myTable +=
            '<tr><td>'+employeesList[i].firstName+'</td><td>'+employeesList[i].lastName+'</td><td>'+employeesList[i].phone+'</td><td>'+employeesList[i].salary+'</td></tr>';
    }
    myTable += '</table>';
    employeesList.splice(-1,1);
    showList();

}

/*employeesList.sort(function(a, b){
    var abc;
    var abc2 = document.getElementbyId("SortBy").value;
    switch (abc)
    {
        case "1":
            return a.firstName == b.firstName ? 0 : a.firstName < b.firstName ? -1 : 1;
        case "2":
            return a.lastName == b.lastName ? 0 : a.lastName < b.lastName ? -1 : 1;
        case "3":
            return a.phone == b.phone ? 0 : a.phone < b.phone ? -1 : 1;
        case "4":
            return a.salary == b.salary ? 0 : a.salary < b.salary ? -1 : 1;

    }
    showList();


})*/

function convert()
{
    var myTable = '<table border="1"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Euro</th></tr>';
    for(var i in employeesList) {
        myTable +=
            '<tr><td>'+employeesList[i].firstName+'</td><td>'+employeesList[i].lastName+'</td><td>'+employeesList[i].phone+'</td><td>'+(employeesList[i].salary / 4.5)+'</td></tr>';
    }
    myTable += '</table>';
    var container = document.getElementById('total2');
    container.innerHTML = myTable;

}

function problema2()
{
    var myTable = '<table border="1"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Euro</th><th>Vizualizare</th><th>Stergere</th></tr>';
    for(var i in employeesList) {
        myTable +=
            '<tr>' +
            '<td>'+employeesList[i].firstName+'</td>' +
            '<td>'+employeesList[i].lastName+'</td>' +
            '<td>'+employeesList[i].phone+'</td>' +
            '<td>'+employeesList[i].salary+'</td>' +
            '<td>'+'<button onclick="Vizualizare()">Vizualizare</button>'+'</td>' +
            '<td>'+'<button onclick="stergere(' + i +')">stergere</button>'+'</td></tr>';
    }
    myTable += '</table>';
    var container = document.getElementById('listcontainer3');
    container.innerHTML = myTable;
}
function Vizualizare ()
{
    '<table border="1"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>salary</th></tr>';
    for ( var i in employeesList)
    {
        myTable +=
            '<tr><td>'+employeesList[i].firstName+'</td><td>'+employeesList[i].lastName+'</td><td>'+employeesList[i].phone+'</td><td>'+employeesList[i].salary+'</td></tr>';

    }
    myTable += '</table>';
    var container = document.getElementById('listcontainer3');
    container.innerHTML = myTable;
}

function stergere (i)
{
    document.querySelector("#myTable tr")[i+1].deleteRow();
}

//problema 3


function frecventa(array)
{
    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}
function average ()
{
    medie = 0.0;
    suma = 0;
    nr = 0;
    for ( var  i in employeesList )
    {
        suma += employeesList[i].salary;
        nr ++;
    }
    medie = suma / nr;
}
function telefon()
{
    var counts2 = employeesList.reduce(function(map, fruit) {
        map[fruit] = (map[fruit] || 0) + 1;
        return map;
    }, {});

    var sorted = Object.keys(counts).sort(function(a, b) {
        return counts2[b] - counts2[a];
    });
//primele 5 cele mai frecvente
    var top5 = sorted.slice(0, 5);

}
//functie care returneaza count pentru fiecare element distinct
function numarare()
{
    var counts = {};
    for (var i = 0; i < arr.length; i++) {
        counts[arr[i]] = 1 + (counts[arr[i]] || 0);
    }
}

function problema5()
{

    var myTable = '<table border="1"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th></tr>';
    for(var i in employeesList) {
            if (employeesList[i].firstName == document.getElementById('filtrare').value || employeesList[i].lastName == document.getElementById('filtrare').value || employeesList[i].phone == document.getElementById('filtrare').value  || employeesList[i].salary == document.getElementById('filtrare').value){
            myTable +=
                '<tr><td>' + employeesList[i].firstName + '</td><td>' + employeesList[i].lastName + '</td><td>' + employeesList[i].phone + '</td><td>' + employeesList[i].salary + '</td></tr>';
            }
    }
        myTable += '</table>';
    var container4 = document.getElementById('listcontainer4');
    container4.innerHTML = myTable;

}


const DOMID = (id) => document.getElementById(id)
const STORAGEKEY = 'employees'

// CREATE AN ARRAY OF EMPLOYEES
let employees = []

employees = [
    [ 10000001, 'Fred Firstson',     1001, 'fred@vecta.com',    'Administrative'],
    [ 10000002, 'Sara Secondson',    1002, 'sara@vecta.com',    'Engineering'],
    [ 10000003, 'Terry Thirdson',    1003, 'terry@vecta.com',   'Executive'],
    [ 10000004, 'Fara Fourthson',    1004, 'fara@vecta.com',    'Marketing'],
    [ 10000005, 'Finn Fiveson',      1005, 'finn@vecta.com',    'Quality Assurance'],
    [ 10000006, 'Sera Sixthson',     1006, 'sera@vecta.com',    'Sales'],
]

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (window.localStorage.length > 0) {
    employees = JSON.parse(localStorage.getItem(STORAGEKEY))
    // console.log('the if statement')
}
// console.log(window.localStorage.length)

// sara secondson
// console.log(employees[1][1])

// GET DOM ELEMENTS
let empTable =          DOMID('empTable')
let form =              DOMID('addForm')
let empID =             DOMID('id')
let empName =           DOMID('name')
let empExt =            DOMID('extension')
let empEmail =          DOMID('email')
let empDepartment =     DOMID('department')
let empCount =          DOMID('empCount')

// console.log(empTable.childNodes.length)
// console.log(empTable.childNodes)
// console.log(empTable.children)
// console.log(tableBody)

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid()


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmployee = [
        empID.value, 
        empName.value, 
        empExt.value, 
        empEmail.value, 
        empDepartment.value
    ]
    // console.log(newEmployee)

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee)

    // BUILD THE GRID
    buildGrid()

    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    empID.focus()

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {

    // REMOVE DELETE FUNCTIONALITY FROM THEAD  
    // console.log(e.target.parentNode.parentNode.tagName)
    if (e.target.parentNode.parentNode.tagName != 'THEAD') {
        // CONFIRM THE DELETE
        if (window.confirm(`Permanently delete ${e.target.parentNode.children[1].innerText} from records?`)) {

            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let rowIndex = e.target.parentNode.rowIndex - 1
            //console.log(e.target.parentNode)
            //console.log(rowIndex)

            // REMOVE EMPLOYEE FROM ARRAY
            employees.splice(rowIndex, 1)

            // BUILD THE GRID
            buildGrid()
        }
    }
});



// BUILD THE EMPLOYEES GRID
function buildGrid() {

    // GRAB THE TBODY OF THE EMPLOYEES TABLE   
    empTable.childNodes.forEach(element => {
        if (element.nodeName == 'TBODY') {

            // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION            
            element.remove()
        }
    });

    // REBUILD THE TBODY FROM SCRATCH
    let tableBody = document.createElement('tbody')

    // LOOP THROUGH THE ARRAY OF EMPLOYEES 
    for (let elements of employees) {

        let newTR = document.createElement('tr')
    // REBUILDING THE ROW STRUCTURE        
        for (let element of elements) {
            let newTD = document.createElement('td')
            newTD.innerHTML = element
            // console.log(element)
            newTR.appendChild(newTD)
        }

    // BIND THE TBODY TO THE EMPLOYEE TABLE        
        tableBody.appendChild(newTR)
    }
    empTable.appendChild(tableBody)

    // UPDATE EMPLOYEE COUNT
    empCount.value = employees.length

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem(STORAGEKEY, JSON.stringify(employees))
    // console.log(JSON.parse(localStorage.getItem(STORAGEKEY)))

};
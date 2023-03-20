
// GLOBAL VARIABLES
let addForm;
let submit; // HTML ELEMENT (BUTTON)
let output; // HTML ELEMENT (OUTPUT)
let empCount;
let selectedtable;
// HELPER FUNCTION TO GET DOM ELEMENTS
const $ = (i) => document.getElementById(i);

// GET DOM ELEMENTS
form = $("addForm");
submit = $("submit");
empCount = $("empCount");
selectedtable = $("employees");
output = document.querySelector('output')



// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
// let counter = selectedtable.rows.length-1
// empCount.value = counter++


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    id = document.querySelector("#id").value;
    fname = document.querySelector("#name").value;
    extension = document.querySelector("#extension").value;
    email = document.querySelector("#email").value;
    department = document.querySelector("#department").value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = selectedtable.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell();
    let cellNAME = row.insertCell();
    let cellEXT = row.insertCell();
    let cellEMAIL = row.insertCell();
    let cellDEPARTMENT = row.insertCell();

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let textID = document.createTextNode(id);
    cellID.appendChild(document.createTextNode(id));
    cellNAME.appendChild(document.createTextNode(fname));
    cellEXT.appendChild(document.createTextNode(extension));
    cellEMAIL.appendChild(document.createTextNode(email));
    cellDEPARTMENT.appendChild(document.createTextNode(department));

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement("button");

     //deleteBtn.className = "btn btn-danger";
    let textDelete = document.createTextNode("x");
    a = deleteBtn.appendChild(textDelete);
    let cellDELETE = row.insertCell();
    cellDELETE.className = "btn btn-danger btn-sm mt-1 mb-1 ";
    cellDELETE.appendChild(a);
    // RESET THE FORM
    form.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
   console.log(output.innerHtml)
   console.log(empCount)
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    let counter = selectedtable.rows.length-1
    empCount.value = counter++
})

// DELETE EMPLOYEE
selectedtable.addEventListener("click", (e) => {
    //ckech if delete class exist
  
    if (confirm(`Are you sure you want to delete ?`)) {
      selectedtable.deleteRow(e.target.parentNode.rowIndex);
      console.log(e.target.parentNode.rowIndex);
    }
    let counter = selectedtable.rows.length-1
    empCount.value = counter--
  });
  
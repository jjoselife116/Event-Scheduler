function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


$(document).ready(function(){
  let typeofKey;
  let empArry = [];
  let employee;
  let myTable = document.getElementById('wholeTable');
  let colFill = false;
  let color = null;
        //cols of the employee names
  for (var i = 0; i < localStorage.length; i++){
      empArry.push(localStorage.key(i))
  }
  // loop through the local storage and pull the data
  for(let j = 0; j < empArry.length; j++){
    employee = JSON.parse(localStorage.getItem(empArry[j]));
    color = employee["Employee Color"];
    console.log(color);
    // If employee has any task
    if("Task" in employee){
      // while employee has task in his array
      for(let taskIndex = 0; taskIndex < employee.Task.length; taskIndex++){
         for(let k = 1; k < myTable.rows[0].cells.length; k++) {
           if(myTable.rows[0].cells[k].innerHTML == employee.Task[taskIndex]["Task Start Date"]) {
             colFill = true;
           }
           if(colFill == true) {
             myTable.rows[j+1].cells[k].innerHTML += '<div style="background-color:' + color + '">' + employee.Task[taskIndex]["Task Name"] + '</br></div>';
           }
           if(myTable.rows[0].cells[k].innerHTML == employee.Task[taskIndex]["Task End Date"]) {
             colFill = false;
           }
         }
       }
     }
   }
});

function remove_Emp(form){
    // pull employee to remove from dropdown list
    let employee = localStorage.getItem($('#removeEmpDropDown').val());

    employee = JSON.parse(employee);
    // Remove selected employee from the local storage
    localStorage.removeItem(employee["Employee Name"]);

}

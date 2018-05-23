function remove_Emp(form){


    let employee = localStorage.getItem($('#removeEmpDropDown').val());

    employee = JSON.parse(employee);

  localStorage.removeItem(employee["Employee Name"]);

}

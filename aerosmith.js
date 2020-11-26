var entry = document.getElementById("enter");
enter.addEventListener("click",displaydetails);

var row=1;
function displaydetails(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var gender = document.getElementById("gender").value;
    var mobile = document.getElementById("mobile").value;
    var check = document.getElementById("check").checked;

    if(!fname || !lname || !email || !gender || !mobile){
        alert("please enter values");
        return;
    }
    if(check!=true){
        alert("I Agree to The Terms and Conditions");
        return;
    }
    console.log(gender)
    var display = document.getElementById("display");

    var newrow = display.insertRow(row);

    var cell1 = newrow.insertCell(0);

    var cell2 = newrow.insertCell(1);

    var cell3 = newrow.insertCell(2);

    var cell4 = newrow.insertCell(3);

    var cell5 = newrow.insertCell(4);



    cell1.innerHTML = fname;
    cell2.innerHTML = lname;
    cell3.innerHTML = email;
    cell4.innerHTML = gender;
    cell5.innerHTML = mobile;
    

    row++;
    document.getElementById("myform").reset();
    selectedRowToInput();                                       
    document.getElementById("myform").reset();
}
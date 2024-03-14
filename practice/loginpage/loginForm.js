
let existingUsers = [
    {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "password": "password1",
        "address": "123 Main St",
        "zip_code": "12345",
        "phone_number": "123-456-7890",
    },
    {
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "password": "password2",
        "address": "456 Elm St",
        "zip_code": "23456",
        "phone_number": "234-567-8901",
    },
    {
        "name": "Michael Johnson",
        "email": "michael.johnson@example.com",
        "password": "password3",
        "address": "789 Oak St",
        "zip_code": "34567",
        "phone_number": "345-678-9012",
    },
    {
        "name": "Dre Taylor",
        "email": "dre.taylor@example.com",
        "password": "password4",
        "address": "888 Potato St",
        "zip_code": "87654",
        "phone_number": "678-999-8212",
    },


];



function getLogin() {
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    // console.log("Email Provided: ", email.value);            //debugging codes for reference**
    // console.log("Password Provided: ", password.value);

    let isCorrect = false;
    for(i = 0; i < existingUsers.length; i++) {
        // console.log("Round: ", i);
        // console.log("Email Database: ", existingUsers[i].email);
        // console.log("Password Database: ",existingUsers[i].password);
        if(email.value === existingUsers[i].email && password.value === existingUsers[i].password) {
            isCorrect = true;
            break;
        } else {
            isCorrect = false;
        }
    }

    if(isCorrect == true) {
        console.log("Logged In");
    } else {
        console.log("Failed");
        alert("WRONG YOU FAILED! Try again please.");
    }

}

    

    

    
            




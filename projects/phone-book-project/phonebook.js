
/* Using the random user generator, create a phone book of users.
Use fetch to grab 20 users from the API https://randomuser.me/documentation#howto
Add each user to an array that you create that only holds their first name, last name, phone number, street address, and a photo of them
Create a webpage that displays a contact card for each user displaying the aforementioned data
Deploy the website */



fetch('https://randomuser.me/api/?results=20')
    .then((response) => response.json())
    .then((data) => {
        let userDatabase = [];
        userDatabase.push(data);  
        // console.log(userDatabase);
        let usersInfo = [];
        for(i = 0; i < userDatabase[0].results.length; i++) {
            let users = {
                firstName: userDatabase[0].results[i].name.first,
                lastName: userDatabase[0].results[i].name.last,
                phoneNumber: userDatabase[0].results[i].phone,
                streetAddress: userDatabase[0].results[i].location.street.number + ' ' + userDatabase[0].results[i].location.street.name,
                photo: userDatabase[0].results[i].picture.medium,
            };
            usersInfo.push(users);
            
        } 
        console.log(usersInfo);

        // let card = document.createElement("div");
        // card.classList.add("user1");
        // let container = document.getElementById("cardContainer");
        // let pics = document.createElement("img");
        // pics.src = usersInfo[0].photo;
        // pics.alt = "Picture";

        // card.appendChild(picture);



        // let image = document.getElementById("user1");
        // image.innerText = "PLEASE WORK IM TIRED GRANDPA";  🥺
        // console.log(image);


        // let imageTest = {"Image": usersInfo[0].photo};
        // document.getElementById("image1").src = [imageTest];

        

        // document.body.onload = testFunction;

        // function testFunction() {
        //     let test = document.createElement("div");
        //     let testContent = document.createTextNode("TEST TEST");
        //     test.appendChild(testContent);
        //     let originalTest = document.getElementById("user1");
        //     document.body.insertBefore(test, originalTest);
        // }

    // window.addEventListener ("load", testFunction);
            
            let img = getElementById("image1");
            img.src = "https://randomuser.me/api/portraits/med/women/57.jpg";
            // user1.appendChild(img);
            console.log(img.src);
    
        // let user = document.getElementsByClassName('user');      // document is undefined?? 
        
        user1.innerText = `${"First Name: " + usersInfo[0].firstName} \n ${"Last Name: " + usersInfo[0].lastName} \n ${"Phone Number: " + usersInfo[0].phoneNumber} \n ${"Street Address: " + usersInfo[0].streetAddress} \n ${"Photo ID: " + usersInfo[0].photo}`;
        
        user2.innerText = `${"First Name: " + usersInfo[1].firstName} \n ${"Last Name: " + usersInfo[1].lastName} \n ${"Phone Number: " + usersInfo[1].phoneNumber} \n ${"Street Address: " + usersInfo[1].streetAddress} \n ${"Photo ID: " + usersInfo[1].photo}`;
        
        user3.innerText = `${"First Name: " + usersInfo[2].firstName} \n ${"Last Name: " + usersInfo[2].lastName} \n ${"Phone Number: " + usersInfo[2].phoneNumber} \n ${"Street Address: " + usersInfo[2].streetAddress} \n ${"Photo ID: " + usersInfo[2].photo}`;

        user4.innerText = `${"First Name: " + usersInfo[3].firstName} \n ${"Last Name: " + usersInfo[3].lastName} \n ${"Phone Number: " + usersInfo[3].phoneNumber} \n ${"Street Address: " + usersInfo[3].streetAddress} \n ${"Photo ID: " + usersInfo[3].photo}`;

        user5.innerText = `${"First Name: " + usersInfo[4].firstName} \n ${"Last Name: " + usersInfo[4].lastName} \n ${"Phone Number: " + usersInfo[4].phoneNumber} \n ${"Street Address: " + usersInfo[4].streetAddress} \n ${"Photo ID: " + usersInfo[4].photo}`;
        
        user6.innerText = `${"First Name: " + usersInfo[5].firstName} \n ${"Last Name: " + usersInfo[5].lastName} \n ${"Phone Number: " + usersInfo[5].phoneNumber} \n ${"Street Address: " + usersInfo[5].streetAddress} \n ${"Photo ID: " + usersInfo[5].photo}`;

        user7.innerText = `${"First Name: " + usersInfo[6].firstName} \n ${"Last Name: " + usersInfo[6].lastName} \n ${"Phone Number: " + usersInfo[6].phoneNumber} \n ${"Street Address: " + usersInfo[6].streetAddress} \n ${"Photo ID: " + usersInfo[6].photo}`;

        user8.innerText = `${"First Name: " + usersInfo[7].firstName} \n ${"Last Name: " + usersInfo[7].lastName} \n ${"Phone Number: " + usersInfo[7].phoneNumber} \n ${"Street Address: " + usersInfo[7].streetAddress} \n ${"Photo ID: " + usersInfo[7].photo}`;

        user9.innerText = `${"First Name: " + usersInfo[8].firstName} \n ${"Last Name: " + usersInfo[8].lastName} \n ${"Phone Number: " + usersInfo[8].phoneNumber} \n ${"Street Address: " + usersInfo[8].streetAddress} \n ${"Photo ID: " + usersInfo[8].photo}`;
        
        user10.innerText = `${"First Name: " + usersInfo[9].firstName} \n ${"Last Name: " + usersInfo[9].lastName} \n ${"Phone Number: " + usersInfo[9].phoneNumber} \n ${"Street Address: " + usersInfo[9].streetAddress} \n ${"Photo ID: " + usersInfo[9].photo}`;
        
        user11.innerText = `${"First Name: " + usersInfo[10].firstName} \n ${"Last Name: " + usersInfo[10].lastName} \n ${"Phone Number: " + usersInfo[10].phoneNumber} \n ${"Street Address: " + usersInfo[10].streetAddress} \n ${"Photo ID: " + usersInfo[10].photo}`;
        
        user12.innerText = `${"First Name: " + usersInfo[11].firstName} \n ${"Last Name: " + usersInfo[11].lastName} \n ${"Phone Number: " + usersInfo[11].phoneNumber} \n ${"Street Address: " + usersInfo[11].streetAddress} \n ${"Photo ID: " + usersInfo[11].photo}`;
        
        user13.innerText = `${"First Name: " + usersInfo[12].firstName} \n ${"Last Name: " + usersInfo[12].lastName} \n ${"Phone Number: " + usersInfo[12].phoneNumber} \n ${"Street Address: " + usersInfo[12].streetAddress} \n ${"Photo ID: " + usersInfo[12].photo}`;
        
        user14.innerText = `${"First Name: " + usersInfo[13].firstName} \n ${"Last Name: " + usersInfo[13].lastName} \n ${"Phone Number: " + usersInfo[13].phoneNumber} \n ${"Street Address: " + usersInfo[13].streetAddress} \n ${"Photo ID: " + usersInfo[13].photo}`;
        
        user15.innerText = `${"First Name: " + usersInfo[14].firstName} \n ${"Last Name: " + usersInfo[14].lastName} \n ${"Phone Number: " + usersInfo[14].phoneNumber} \n ${"Street Address: " + usersInfo[14].streetAddress} \n ${"Photo ID: " + usersInfo[14].photo}`;

        user16.innerText = `${"First Name: " + usersInfo[15].firstName} \n ${"Last Name: " + usersInfo[15].lastName} \n ${"Phone Number: " + usersInfo[15].phoneNumber} \n ${"Street Address: " + usersInfo[15].streetAddress} \n ${"Photo ID: " + usersInfo[15].photo}`;

        user17.innerText = `${"First Name: " + usersInfo[16].firstName} \n ${"Last Name: " + usersInfo[16].lastName} \n ${"Phone Number: " + usersInfo[16].phoneNumber} \n ${"Street Address: " + usersInfo[16].streetAddress} \n ${"Photo ID: " + usersInfo[16].photo}`;
        
        user18.innerText = `${"First Name: " + usersInfo[17].firstName} \n ${"Last Name: " + usersInfo[17].lastName} \n ${"Phone Number: " + usersInfo[17].phoneNumber} \n ${"Street Address: " + usersInfo[17].streetAddress} \n ${"Photo ID: " + usersInfo[17].photo}`;

        user19.innerText = `${"First Name: " + usersInfo[18].firstName} \n ${"Last Name: " + usersInfo[18].lastName} \n ${"Phone Number: " + usersInfo[18].phoneNumber} \n ${"Street Address: " + usersInfo[18].streetAddress} \n ${"Photo ID: " + usersInfo[18].photo}`;

        user20.innerText = `${"First Name: " + usersInfo[19].firstName} \n ${"Last Name: " + usersInfo[19].lastName} \n ${"Phone Number: " + usersInfo[19].phoneNumber} \n ${"Street Address: " + usersInfo[19].streetAddress} \n ${"Photo ID: " + usersInfo[19].photo}`;



        document.getElementById("image1").src = usersInfo[0].photo;

        // usersInfo.map(getUserData);
        // function getUserData(item) {
        //     return [item.firstName, item.lastName, item.phoneNumber, item.streetAddress, item.photo].join(" ");
        // }
        
    })
    


// document.getElementById('user1').innerHTML = users[0];
// console.log(printUser);

    // .then(() => {
    //     console.log(userDatabase);
    // })
    // .then(() => {
    //     let allData = [];
    //     allData.push(userDatabase);
    //     console.log(allData);
    // })
    

// // for(i = 0; i < userDatabase.length; i++) {
//     let userInformation = {
//         firstName: data.result[i].name.first,
//         lastName: data.result[i].name.last,
//         phoneNumber: data.result[i].phone,
//         streetAddress: data.result[i].location.street.number + ' ' + data.result[i].location.street.name,
//         photo: data.result[i].picture.medium,
//     }
//     console.log(userInformation);
// // }
    
// let userInformation = {
//     firstName: userDatabase[0].data.results[0].name.first,
//     lastName: userDatabase[0].data.results[0].name.last,
//     phoneNumber: userDatabase[0].data.results[0].phone,
//     streetAddress: userDatabase[0].data.results[0].location.street.number + ' ' + userDatabase[0].data.results[0].location.street.name,
//     photo: userDatabase[0].data.results[0].picture.medium,
// }

// console.log(userInformation);

    
    
    


    





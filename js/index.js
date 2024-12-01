
var GetUserGmail=document.getElementById("GetUserGmail");
var GetUserPassword=document.getElementById("GetUserPassword");
var LoginButton=document.getElementById("LoginButton");
var alertInputWrong=document.getElementById("alertInputWrong");
var alerInuptEmpty=document.getElementById("alerInuptEmpty");
var GetStoredData = JSON.parse(localStorage.getItem('UserData'));
var userFound = false;
var GetStoredData = JSON.parse(localStorage.getItem('UserData')) || [];
// ====================Get Data From User Function ===================

if (GetStoredData) {
    console.log(GetStoredData);
} else {
    console.log("No user data found in storage.");
}


function GetUserData(){
    var User={
        email:GetUserGmail.value,
        password:GetUserPassword.value
        
    };

    if(User.email===""|| User.password==="")
        {
            alertInputWrong.classList.replace('d-block', 'd-none');
             alerInuptEmpty.classList.replace('d-none','d-block');
            }

else{
    for (let i = 0; i < GetStoredData.length; i++) {
        if (GetStoredData[i].email === User.email && 
            GetStoredData[i].password === User.password)
             {
                userFound = true;
                if(alerInuptEmpty.classList.contains("d-block")){alerInuptEmpty.classList.replace('d-block', 'd-none')}
                if(alertInputWrong.classList.contains("d-block")){alertInputWrong.classList.replace('d-block', 'd-none')}  
            }
    }
    if (userFound) {
        window.location.href = "home.html";
        localStorage.setItem('UserData', JSON.stringify(GetStoredData));
        console.log("the data user enter, ", GetStoredData);
    
    } 
    else {
        alertInputWrong.classList.replace('d-none', 'd-block');
        if(alerInuptEmpty.classList.contains("d-block")){alerInuptEmpty.classList.replace('d-block', 'd-none')}
    }


}
ClearInput();
}
// =====================clean funtion===================================
function ClearInput(){
  
    GetUserPassword.value=null;
    GetUserGmail.value=null;

}
LoginButton.addEventListener('click', GetUserData);


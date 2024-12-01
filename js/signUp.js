var UserName=document.getElementById("UserName");
var UserEmail=document.getElementById("UserEmail");
var UserPassword=document.getElementById("UserPassword");
var SignUpButton=document.getElementById("SignUpButton");
var formData=document.querySelectorAll(".FormData .form-input");
var InputSuccess= document.getElementById("InputSuccess");
var InputWrong=document.getElementById("InputWrong");
var EmailStorge=document.getElementById("EmailStorge");
var UserDataList=[];



// =========================local storge:==========

function UserData(){
    if(InputSuccess.classList.contains('d-block'))
        { InputSuccess.classList.replace('d-block','d-none'); }

    UserDataList = JSON.parse(localStorage.getItem('UserData')) || [];
    var User={
        name:UserName.value,
        email:UserEmail.value,
        password:UserPassword.value
        
    };
  // ======================check Email==============================

    for (let i = 0; i < UserDataList.length; i++) {
        if (UserDataList[i].email === User.email) {
            EmailStorge.classList.replace('d-none','d-block');
            return; 
        }
       else
       {EmailStorge.classList.replace('d-block','d-none');}
        
    }

// =====================add data to the Object List===============

if(validateData(UserName)&&
   validateData(UserPassword)&&
   validateData(UserEmail)){  

    if(InputWrong.classList.contains('d-block'))
    { InputWrong.classList.replace('d-block','d-none'); }

    UserDataList.push(User);
    localStorage.setItem('UserData', JSON.stringify(UserDataList));
    ClearInput();
    InputSuccess.classList.replace('d-none','d-block');
   
    console.log("Data was save", User);
}
else
{InputWrong.classList.replace('d-none','d-block');}

}

// ========================clean funtion==================
function ClearInput(){
    UserName.value=null;
    UserEmail.value=null;
    UserPassword.value=null;

}


// ========================Button event====================
SignUpButton.addEventListener('click',UserData);


// =========================Validation==================

function validateData(ListInputsData){
    console.log("Validation function triggered for:", ListInputsData.id);
    var regex={
      UserName: /^[A-Z][a-zA-Z\s]+$/,
      UserEmail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/,
      UserPassword:/^\d{6,}$/
      
    };
  
console.log(regex.UserName);

// ==========conation for alert and mark validtion==============

if(regex[ListInputsData.id].test(ListInputsData.value)){

    if(ListInputsData.nextElementSibling.classList.contains('d-block'))
     {ListInputsData.nextElementSibling.classList.replace('d-block', 'd-none') }

    if(ListInputsData.classList.contains("is-invalid"))
    {ListInputsData.classList.remove('is-invalid');}

ListInputsData.classList.add('is-valid');
return true;

}
else{
       if(ListInputsData.nextElementSibling.classList.contains('d-none'))
        { ListInputsData.nextElementSibling.classList.replace('d-none', 'd-block') }

        if(ListInputsData.classList.contains('is-valid'))
          { ListInputsData.classList.remove('is-valid')}

ListInputsData.classList.add('is-invalid');
return false;
}


}
// =========================loop for blur================
for(var i=0 ; i < formData.length; i++){

    formData[i].addEventListener('blur', function(){
        validateData(this , );
    
    
    })
    
    }



var UserNameLabel=document.getElementById("UserNameLabel");
var greeting=document.getElementById("greeting");
var GetStoredData = JSON.parse(localStorage.getItem('UserData')) || [];
UserNameLabel.style.fontSize = "40px";
console.log("data enter ", GetStoredData);
for(var i=0; i< GetStoredData.length ; i++){ 
UserNameLabel.textContent = "welcome" +" "+ GetStoredData[i].name;
}
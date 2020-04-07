var keyList = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_-+=";

var tmp = "";
function generatePassword(plength){
    
    tmp = "";
    for(i=0;i<plength;i++){
        tmp +=keyList.charAt(Math.floor(Math.random()*keyList.length));   
    }
    return tmp;
}

function populateForm(){
    var plength = document.getElementById("lengthOfPassword").value;
    document.myform.output.value = generatePassword(plength);
}
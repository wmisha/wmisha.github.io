
 
function validateAge(){
    
    const birth = document.getElementById("Birth").value;

    var ageDifMs = Date.now() - (new Date(birth)).getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    const age =  Math.abs(ageDate.getUTCFullYear() - 1970);
    console.log("age: ",age);
    if(age< 13){
        alert("Children under 13 are not allowed into this website!");
        return false;
    }
    return true;
    
}
   
function validateEmail(){
    console.log(document.getElementById("email").value);
    const adr = document.getElementById("email").value;
    console.log(typeof adr);
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(adr.match(mailformat))
        return true;
    
   alert("You have entered an invalid email address!");
    return false; 
}



// Do not edit the code below. These are for testing purposes only. Think of it as a unit test

function urldecode(str) {
    return decodeURIComponent((str+'').replace(/\+/g, '%20'));
}
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable){return urldecode(pair[1]);}
    }
    return(false);
}
document.getElementById("response").innerHTML = '\
Name: ' + getQueryVariable("name") + '<br/>\
DOB: ' + getQueryVariable("birth") + '<br/>\
E-mail address: ' + getQueryVariable("mail") + '<br/>\
Gender: ' + getQueryVariable("gender") + '<br/>\
Country: ' + getQueryVariable("country") + '<br/>\
';

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
E-mail address: ' + getQueryVariable("email") + '<br/>\
Gender: ' + getQueryVariable("gender") + '<br/>\
Country: ' + getQueryVariable("country") + '<br/>\
';

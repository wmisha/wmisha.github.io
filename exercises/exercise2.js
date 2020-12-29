function countWords(str){
    let words = str.split(' ');
    let count = words.length;
    for(let word of words){
        if(word === "")
            count--;
    }
    return count;
}

function update() {
    var x = document.getElementById("userinput").value;
    console.log(x.trim().split(' '));
    document.getElementById("display").innerHTML = "Your string is: '" + x + "'. Length is " + countWords(x) + ".";   
}



function processCurrentText(){
    let curr_input = document.getElementById("userinput").value;
    curr_input_array = curr_input.trim().split(' ');
}
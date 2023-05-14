function group(input){
    input.value = input.value.replace(/\D/g,"")//replaces any character that is not a digit with empty string
    var space = "";
    for(let i = 0; i < input.value.length; i = i + 1){
        if (i % 4 == 0){  
            space = space + " ";
        }
        space = space + input.value[i];
    }
    input.value = space; 
}
function num(input){
    input.value = input.value.replace(/\D/g,"");
}
function cardname(input){
    var name = document.querySelector(".card-name");
    name.textContent = input.value;
}
function cardnum(input){
    var num = document.querySelector(".card-number span");
    num.textContent = input.value;
}
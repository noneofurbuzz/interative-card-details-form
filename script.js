//function that sees if length of input is greater than the max length it should be on input and then only returns the from 0 to the max.length
function maximum(input) {
    if (input.value.length > input.max.length ) {
        input.value = input.value.slice(0, input.max.length);
    }
}
function increment(input){
    input.value = input.value.replace(/\D/g,"")
    var space = "";
    for(let i = 0; i < input.value.length; i = i + 1){
        if (i % 4 == 0){
            space = space + " ";
        }
        space = space + input.value[i];
    }
    input.value = space;


}

    


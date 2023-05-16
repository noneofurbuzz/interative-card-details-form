function group(input){
    input.value = input.value.replace(/\D/g,"")//replaces any character that is not a digit with empty string
    let space = "";
    for(let i = 0; i < input.value.length; i = i + 1){
        if (i % 4 == 0){  //if i is divisible by 4 then whitespace is added to space
            space = space + " ";
        }
        space = space + input.value[i];
    }
    input.value = space; 
}
function num(input){
    input.value = input.value.replace(/\D/g,"");//replaces input that is not a digit with empty string
    
}
function max_len(input){//slices the input from index 0 to maxlength if input greater than maxlength
    if (input.value > input.maxlength){
        input.value = input.value.slice(0,input.maxlength);
    }
}

function cardname(input){
    input.value = input.value.replace(/[^a-zA-Z ]/g,"");
    var name = document.querySelector(".card-name");
    name.textContent = input.value;
}

function cardcvc(input){
    let card_cvc = document.querySelector(".card-cvc");
    let content = "";
    for (let i = 0;i < input.value.length;i =i + 1){
        content = content + input.value[i]; //content is being incremented by adding input[i]
        card_cvc.textContent = content + card_cvc.textContent.slice(i+1);//card_cvc is sliced from index after the current input to get the leftover zeros and added to content
        }   
}

function cardnum(input){
    let card_num = document.querySelector(".card-number");
    let content = "";
    for (let i = 0;i < input.value.length;i =i + 1){
        content = content + input.value[i];
        card_num.textContent = content + card_num.textContent.slice(i+1);
        }   
}

function cardmonth(input){
    let card_month = document.querySelector(".card-date .month");
    let content = "";
    for (let i = 0;i < input.value.length;i =i + 1){
        content = content + input.value[i];
        card_month.textContent = content + card_month.textContent.slice(i+1);
        }   
}

function cardyear(input){
        let card_year = document.querySelector(".card-date .year");
        let content = "";
        for (let i = 0;i < input.value.length;i =i + 1){
            content = content + input.value[i];
            card_year.textContent = content + card_year.textContent.slice(i+1);
            }   
}

function delete_cardnum(input){
    const key = event.key; 
    let cardnum = document.querySelector(".card-number");
    let zero = "";
    if((key === "Backspace") || (key === "Delete")){ //detects if backspace or delete key is pressed
        for(let i = 0;i < (input.value.length);i = i +1){ 
            if (i % 5 == 0){     //if i is a whitespace rather than a value then zero is equals to whitespace in order to not change the format
                zero = zero + " ";
            }
            else{
                zero = zero + "0"; //else zero is just equals to zero
            }
        }
        cardnum.textContent = zero + cardnum.textContent.slice(input.value.length)
    }
}

function delete_cardcvc(input){
    const key = event.key;
    let zero = "";
    let cvc = document.querySelector(".card-cvc");
    if((key === "Backspace") || (key === "Delete")){
        for(let i = 0;i < (input.value.length);i = i +1){
            zero = zero + "0";
        }
        cvc.textContent = zero + cvc.textContent.slice(input.value.length)
    }
}

function delete_cardyear(input){
    const key = event.key;
    let zero = "";
    let year = document.querySelector(".card-date .year");
    if((key === "Backspace") || (key === "Delete")){
        for(let i = 0;i < (input.value.length);i = i +1){
            zero = zero + "0";
        }
        year.textContent = zero + year.textContent.slice(input.value.length)
    }
}

function delete_cardmonth(input){
    const key = event.key;
    let zero = "";
    let month = document.querySelector(".card-date .month");
    if((key === "Backspace") || (key === "Delete")){
        for(let i = 0;i < (input.value.length);i = i +1){
            zero = zero + "0";
        }
        month.textContent = zero + month.textContent.slice(input.value.length);
    }
}

function delete_cardname(input){
    const key = event.key;
    let cardname = document.querySelector(".card-name");
    if((key === "Backspace") || (key === "Delete")){
        if(input.value == ""){
            cardname.textContent = "JANE APPLESEED";//replaces card name with JANE APPLESEED if it's empty
        }
    }
}

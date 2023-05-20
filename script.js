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
    let maxLength = 24;
    if (input.value.length > maxLength){
        input.value = input.value.slice(0,maxLength);
    }
}

function cardname(input){
    input.value = input.value.replace(/[^a-zA-Z ]/g,"");
    var name = document.querySelector(".card-name");
    name.textContent = input.value;
    document.getElementById("name_blank").style.display = "none";
    document.getElementById("cardholdername").style.borderColor = "transparent";
    document.getElementById("name_length").style.display = "none";
}

function cardcvc(input){

    let card_cvc = document.querySelector(".card-cvc");
    let content = "";
    for (let i = 0;i < input.value.length;i =i + 1){
        content = content + input.value[i]; //content is being incremented by adding input[i]
        card_cvc.textContent = content + card_cvc.textContent.slice(i+1);//card_cvc is sliced from index after the current input to get the leftover zeros and added to content
        }   
        document.getElementById("cvc_blank").style.display = "none";
        document.getElementById("cvc").style.borderColor = "transparent";
        document.getElementById("cvc_length").style.display = "none";
}

function cardnum(input){
    let card_num = document.querySelector(".card-number");
    let content = "";
    for (let i = 0;i < input.value.length;i =i + 1){
        content = content + input.value[i];
        card_num.textContent = content + card_num.textContent.slice(i+1);
        }   
        document.getElementById("cardnum_blank").style.display = "none";
        document.getElementById("number").style.borderColor = "transparent";
        document.getElementById("number_length").style.display = "none";
}

function cardmonth(input){
    let card_month = document.querySelector(".card-date .month");
    let content = "";
    for (let i = 0;i < input.value.length;i =i + 1){
        content = content + input.value[i];
        card_month.textContent = content + card_month.textContent.slice(i+1);
        }   
        document.getElementById("date_blank").style.display = "none";
        document.getElementById("date").style.borderColor = "transparent";
        
        document.getElementById("date_length").style.display = "none";
}

function cardyear(input){
        let card_year = document.querySelector(".card-date .year");
        let content = "";
        for (let i = 0;i < input.value.length;i =i + 1){
            content = content + input.value[i];
            card_year.textContent = content + card_year.textContent.slice(i+1);
            }   
            document.getElementById("date_blank").style.display = "none";
            document.getElementById("year").style.borderColor = "transparent";
            document.getElementById("date_length").style.display = "none";
      
        
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
        cardnum.textContent = zero + cardnum.textContent.slice(input.value.length);
        if(input.value == ""){
            cardnum.textContent = " 0000 0000 0000 0000";//replaces card number with " 0000 0000 0000 0000" if it's empty
        }
        if(input.value == ""){
            document.getElementById("cardnum_blank").style.display = "inline-block";
            document.getElementById("number").style.borderColor = "hsl(0, 100%, 66%)";
        }

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
        cvc.textContent = zero + cvc.textContent.slice(input.value.length);

        if(input.value == ""){
            document.getElementById("cvc_blank").style.display = "inline-block";
            document.getElementById("cvc").style.borderColor = "hsl(0, 100%, 66%)";
    }
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
        if(input.value == ""){
            document.getElementById("date_blank").style.display = "inline-block";
            document.getElementById("year").style.borderColor = "hsl(0, 100%, 66%)";
            document.getElementById("date").style.borderColor = "hsl(0, 100%, 66%)";
    }
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
        if(input.value == ""){
            document.getElementById("date_blank").style.display = "inline-block";
            document.getElementById("date").style.borderColor = "hsl(0, 100%, 66%)";
            document.getElementById("year").style.borderColor = "hsl(0, 100%, 66%)";
    }
       document.getElementById("date_invalid").style.display = "none";
       document.getElementById("year_invalid").style.display = "none";
    
    }
}

function delete_cardname(input){
    const key = event.key;
    let card_name = document.querySelector(".card-name");
    if((key === "Backspace") || (key === "Delete")){
        if(input.value == ""){
            card_name.textContent = "JANE APPLESEED";
        }
        if(input.value == ""){
            document.getElementById("name_blank").style.display = "inline-block";
            document.getElementById("cardholdername").style.borderColor = "hsl(0, 100%, 66%)";
        }
    }
}

function blankcvc_error(input){
    const key = event.key; 
    if((key === "Backspace") || (key === "Delete"))
        {
            if(input.value == ""){//if input is an empty string then it displays an error message "can't be blank"
                document.getElementById("cvc_blank").style.display = "inline-block";
                document.getElementById("cvc").style.borderColor = "hsl(0, 100%, 66%)";
        }
        if(input.value.length < 3 && input.value !== ""){
            document.getElementById("cvc_length").style.display = "inline-block";
            document.getElementById("cvc").style.borderColor = "hsl(0, 100%, 66%)";
            }
    }
}
function blanknum_error(input){
    const key = event.key; 
    if((key === "Backspace") || (key === "Delete"))
        {
            if(input.value == ""){
                document.getElementById("cardnum_blank").style.display = "inline-block";
                document.getElementById("number").style.borderColor = "hsl(0, 100%, 66%)";
        }
            if(input.value.length < 20 && input.value !== ""){
            document.getElementById("number_length").style.display = "inline-block";
            document.getElementById("number").style.borderColor = "hsl(0, 100%, 66%)";
            }
    }
}
function blankname_error(input){
    const key = event.key; 
    let card_name = document.querySelector(".card-name");
    if((key === "Backspace") || (key === "Delete"))
        {
            if(input.value == ""){
                card_name.textContent = "JANE APPLESEED";//replaces card name with JANE APPLESEED if it's empty
            }
            if(input.value == "" ){
                document.getElementById("name_blank").style.display = "inline-block";
                document.getElementById("cardholdername").style.borderColor = "hsl(0, 100%, 66%)";
            }
            if(input.value.length < 3 && input.value !== ""){
                document.getElementById("name_length").style.display = "inline-block";
                document.getElementById("cardholdername").style.borderColor = "hsl(0, 100%, 66%)";
            }
    }
}
function blankdate_error(input){
    const key = event.key; 
    if((key === "Backspace") || (key === "Delete"))
        {
            if(input.value == ""){
                document.getElementById("date_blank").style.display = "inline-block";
                {
                    document.getElementById("date").style.borderColor = "hsl(0, 100%, 66%)";
                    document.getElementById("year").style.borderColor = "hsl(0, 100%, 66%)";
                }
                    
                }
                if(input.value.length < 2 && input.value !== ""){
                    document.getElementById("date_length").style.display = "inline-block";
                        document.getElementById("date").style.borderColor = "hsl(0, 100%, 66%)";
                        document.getElementById("year").style.borderColor = "hsl(0, 100%, 66%)";
                    } 
                       document.getElementById("date_invalid").style.display = "none";
                       document.getElementById("year_invalid").style.display = "none";
         }
    }
                
            
    

function colour_change_month(input){
    const currentdate = new Date();
    let currentyear = currentdate.getFullYear();
    currentyear = currentyear.toString().slice(2,4);
    let currentmonth = currentdate.getMonth();
    currentmonth = currentmonth + 1;
        if((document.getElementById("date").value == "") || (document.getElementById("year").value == "")){
                document.getElementById("date_blank").style.display = "inline-block";
                document.getElementById("date").style.borderColor = "hsl(0, 100%, 66%)";
                document.getElementById("year").style.borderColor = "hsl(0, 100%, 66%)";

            }
        else{
            document.getElementById("date").style.borderColor ="hsl(270, 3%, 87%";
            document.getElementById("year").style.borderColor = "hsl(270, 3%, 87%";
        }
        if(((document.getElementById("year").value.length < 2) || (document.getElementById("date").value.length < 2)) && ((document.getElementById("year").value !== "") && (document.getElementById("date").value !== ""))) {
            document.getElementById("date_length").style.display = "inline-block";
            document.getElementById("date").style.borderColor = "hsl(0, 100%, 66%)";
            document.getElementById("year").style.borderColor = "hsl(0, 100%, 66%)"; 
         
            }
        if(((document.getElementById("year").value.length === 2) && (document.getElementById("date").value.length === 2)) && (parseInt(document.getElementById("date").value)) > 12){
            document.getElementById("date_invalid").style.display = "inline-block";
            document.getElementById("date").style.borderColor = "hsl(0, 100%, 66%)";
            document.getElementById("year").style.borderColor = "hsl(0, 100%, 66%)"; 
        }
        if(((document.getElementById("year").value.length === 2) && (document.getElementById("date").value.length === 2)) && (parseInt(document.getElementById("date").value)) < 13){
            if((parseInt(document.getElementById("year").value)) < parseInt(currentyear)){
             document.getElementById("year_invalid").style.display = "inline-block";
             document.getElementById("date").style.borderColor = "hsl(0, 100%, 66%)";
             document.getElementById("year").style.borderColor = "hsl(0, 100%, 66%)"; 
            }
         }
         if(((document.getElementById("year").value.length === 2) && (document.getElementById("date").value.length === 2)) && (parseInt(document.getElementById("date").value)) < 13){
             if((parseInt(document.getElementById("year").value)) == parseInt(currentyear)){
                 if((parseInt(document.getElementById("date").value))< parseInt(currentmonth)){
                     document.getElementById("year_invalid").style.display = "inline-block";
                     document.getElementById("date").style.borderColor = "hsl(0, 100%, 66%)";
                     document.getElementById("year").style.borderColor = "hsl(0, 100%, 66%)"; 
                 }
             }
          }
    }
      
    
 function colour_change_cvc(input){
        if(input.value == ""){
            input.style.borderColor = "hsl(0, 100%, 66%)";
            document.getElementById("cvc_blank").style.display = "inline-block";
        }
        else{
            input.style.borderColor = "hsl(270, 3%, 87%";
        }
        if(input.value.length < 3 && input.value !== ""){
            document.getElementById("cvc_length").style.display = "inline-block";
            document.getElementById("cvc").style.borderColor = "hsl(0, 100%, 66%)";
        }
}
function colour_change_num(input){
    if(input.value == ""){
        input.style.borderColor = "hsl(0, 100%, 66%)";
        document.getElementById("cardnum_blank").style.display = "inline-block";
    }
    else{
        input.style.borderColor = "hsl(270, 3%, 87%";
    }
    if(input.value.length < 20 && input.value !== ""){
        document.getElementById("number_length").style.display = "inline-block";
        document.getElementById("number").style.borderColor = "hsl(0, 100%, 66%)";
        }
}
function colour_change_name(input){
    if(input.value == ""){
        input.style.borderColor = "hsl(0, 100%, 66%)";
        document.getElementById("name_blank").style.display = "inline-block";
    }
    else{
        input.style.borderColor = "hsl(270, 3%, 87%";
    }
    if(input.value.length < 3 && input.value !== ""){
        document.getElementById("name_length").style.display = "inline-block";
        document.getElementById("cardholdername").style.borderColor = "hsl(0, 100%, 66%)";
    }

}
function focus_color_name(input){
    input.style.borderColor = "transparent";
    document.getElementById("name_blank").style.display = "none";
    document.getElementById("name_length").style.display = "none";
}
function focus_color_num(input){
    input.style.borderColor = "transparent";
    document.getElementById("cardnum_blank").style.display = "none";
    document.getElementById("number_length").style.display = "none";
}
function focus_color_month(input){
    input.style.borderColor = "transparent";
    document.getElementById("date_blank").style.display = "none";
    document.getElementById("date_length").style.display = "none";
    document.getElementById("date_invalid").style.display = "none";
    document.getElementById("year_invalid").style.display = "none";
    
}
function focus_color_year(input){
    input.style.borderColor = "transparent";
    document.getElementById("date_blank").style.display = "none";
    document.getElementById("date_length").style.display = "none";
    document.getElementById("date_invalid").style.display = "none";
    document.getElementById("year_invalid").style.display = "none";
}
function focus_color_cvc(input){
    input.style.borderColor = "transparent";
    document.getElementById("cvc_blank").style.display = "none";
    document.getElementById("cvc_length").style.display = "none";
}
 function validateform(){//a function that validates if input is not empty, in the correct format and valid on submit
    let error = 0;
    const currentdate = new Date();
    let currentyear = currentdate.getFullYear();
    currentyear = currentyear.toString().slice(2,4);
    let currentmonth = currentdate.getMonth();
    currentmonth = currentmonth + 1;
    let name = document.getElementById("cardholdername");
    let number = document.getElementById("number");
    let date = document.getElementById("date");
    let cvc = document.getElementById("cvc");
    let year = document.getElementById("year");
    if (name.value == "" || name.value == null){// if card name is empty on submit then display error message
        document.getElementById("name_blank").style.display = "inline-block";
        document.getElementById("cardholdername").style.borderColor = "hsl(0, 100%, 66%)";
        error = error + 1;
    
    }
    if (name.value.length < 3 && name.value !== ""){ 
        document.getElementById("name_length").style.display = "inline-block";
        document.getElementById("cardholdername").style.borderColor = "hsl(0, 100%, 66%)";
        error = error + 1;
    }
    if (number.value == "" || number.value == null){
        document.getElementById("cardnum_blank").style.display = "inline-block";
        document.getElementById("number").style.borderColor = "hsl(0, 100%, 66%)";
        error = error + 1;
 
    }
    if(number.value.length < 20 && number.value !== ""){
        document.getElementById("number_length").style.display = "inline-block";
        document.getElementById("number").style.borderColor = "hsl(0, 100%, 66%)";
        error = error + 1
        }
    if((document.getElementById("date").value == "") || (document.getElementById("year").value == "")){
        document.getElementById("date_blank").style.display = "inline-block";
        document.getElementById("date").style.borderColor = "hsl(0, 100%, 66%)";
        document.getElementById("year").style.borderColor = "hsl(0, 100%, 66%)";
        error = error + 1

        }
    if(((document.getElementById("year").value.length < 2) || (document.getElementById("date").value.length < 2)) && ((document.getElementById("year").value !== "") && (document.getElementById("date").value !== ""))) {
        document.getElementById("date_length").style.display = "inline-block";
         document.getElementById("date").style.borderColor = "hsl(0, 100%, 66%)";
        document.getElementById("year").style.borderColor = "hsl(0, 100%, 66%)";
        error = error + 1;
            
    }
    if(((document.getElementById("year").value.length === 2) && (document.getElementById("date").value.length === 2)) && (parseInt(document.getElementById("date").value)) > 12){
        document.getElementById("date_invalid").style.display = "inline-block";
        document.getElementById("date").style.borderColor = "hsl(0, 100%, 66%)";
        document.getElementById("year").style.borderColor = "hsl(0, 100%, 66%)"; 
        error = error + 1;
    }
    if(((document.getElementById("year").value.length === 2) && (document.getElementById("date").value.length === 2)) && (parseInt(document.getElementById("date").value)) < 13){
       if((parseInt(document.getElementById("year").value)) < parseInt(currentyear)){
        document.getElementById("year_invalid").style.display = "inline-block";
        document.getElementById("date").style.borderColor = "hsl(0, 100%, 66%)";
        document.getElementById("year").style.borderColor = "hsl(0, 100%, 66%)"; 
        error = error + 1;
       }
    }
    if(((document.getElementById("year").value.length === 2) && (document.getElementById("date").value.length === 2)) && (parseInt(document.getElementById("date").value)) < 13){
        if((parseInt(document.getElementById("year").value)) == parseInt(currentyear)){
            if((parseInt(document.getElementById("date").value))< parseInt(currentmonth)){
                document.getElementById("year_invalid").style.display = "inline-block";
                document.getElementById("date").style.borderColor = "hsl(0, 100%, 66%)";
                document.getElementById("year").style.borderColor = "hsl(0, 100%, 66%)"; 
                error = error + 1;
            }
        }
     }
    if ((cvc.value == "") || (cvc.value == null)){
        document.getElementById("cvc_blank").style.display = "inline-block";
        document.getElementById("cvc").style.borderColor = "hsl(0, 100%, 66%)";
        error = error + 1;
        
    }
    if(cvc.value.length < 3 && cvc.value !== ""){
        document.getElementById("cvc_length").style.display = "inline-block";
        document.getElementById("cvc").style.borderColor = "hsl(0, 100%, 66%)";
        error = error + 1;
    }
    if (error === 0){
        document.write("hi")
    }
}


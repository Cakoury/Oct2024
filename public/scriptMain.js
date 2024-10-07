

// event listener and call function calaculation when button is clicked
document.getElementById("btn").addEventListener("click", calculation);


//function
function calculation(){
    

    //assign the value of first text to variable one and check if one is equal or less then Zero
    let one = document.getElementById("textOne").value;
    if(one <=0){
        alert("number should be Greater then 0");
        //exit the function if one is equal or less then zero
        return 0;
    }

    //assign the value of second text to variable two and check if two is equal or less then Zero
    let two = document.getElementById("textTwo").value;
    if(two <=0){
        alert("number should be Greater then 0");
        //exit the function if one is equal or less then zero
        return 0;
    }

    //assign the value of the select option to variable op 
    let op = document.getElementById("op").value;
   
    // convert one and two from string to numbers 
    one= Number(one);
    two = Number(two);


 // check the value of op variable to make the operation base on user selection
   switch(op)
    {

        case "addition":
            //display the value in the result text field
            document.getElementById("textResult").value = one + two;
            break;
        case "substraction":
            if(one > two){
                //display the value in the result text field
                document.getElementById("textResult").value = one - two;
            }
            else{
                //display the value in the result text field
                document.getElementById("textResult").value = two -one;
            }
            break;
            
        case "division":
            //display the value in the result text field
            document.getElementById("textResult").value = one / two;
            break;
        case "multiplication":
            //display the value in the result text field
            document.getElementById("textResult").value = one * two;
          

        }    
  

   

}
 

document.addEventListener('DOMContentLoaded', function() { 
 rslt = document.getElementById("inputext");

})

var rslt ;
function Calculate(number){
    rslt.value+=number;
}


let Result=()=>{
    try {
        rslt.value=eval(rslt.value);
    } catch (error) {
        alert("Enter the valid input");
    }
}
function clr(){
    rslt.value="";
}

function del(){
    rslt.value=rslt.value.slice(0,-1);
}
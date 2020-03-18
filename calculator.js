function select(){
    var x = document.getElementById("operations").value;
    console.log(x);
//    document.getElementById("display").innerHTML = x;
    }
function sumNumbers(num1,num2){
    var num1 = document.getElementById("num1").value;
    console.log(num1);
    var num2 = document.getElementById("num2").value;
    var operations = document.getElementById("operations").value;

    if (operations === '+')
    {
        var result = parseFloat(num1) + parseFloat(num2);
    }

    else if (operations === '-')
    {
        var result = parseFloat(num1) - parseFloat(num2);
    }

    else if (operations === '*')
    {
        var result = parseFloat(num1) * parseFloat(num2);
    }

    else if (operations === '/')
    {
        var result = parseFloat(num1) / parseFloat(num2);
    }
    else if (operations === 'mod')
    {
        var result = parseFloat(num1) % parseFloat(num2);
    }

//    var result = parseFloat(num1) + parseFloat(num2);

    if(!isNaN(result))
    {
        document.getElementById("answer").innerHTML="The answer to " +num1 +" " +operations +" "+num2 +" = " +result;
    }
    console.log(result);
}
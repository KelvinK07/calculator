
let result = document.getElementById("result");

const checker = (val) =>{
    console.log(val);
    const equation = ['+',"-","×","÷","%"];
    console.log(equation.includes(val));
    return equation.includes(val);
}


let ac = document.getElementById("clear");
ac.onclick = function(){
    result.innerHTML = 0;
}

let mul = document.getElementById("multiply");
mul.onclick = function(){
    if(result.innerHTML != 0 && !checker(result.innerHTML[result.innerHTML.length-1])){
        result.innerHTML += '×';
    };
    
}

let cs = document.getElementById("changesign");
cs.onclick = function(){
    if(result.innerHTML != 0 && !checker(result.innerHTML[result.innerHTML.length-1])){
        let input = result.innerHTML;
        input = eval(input)
        if (input[0] == "-"){
            input = input.slice(1);
        }
        else{
            input = -input;
        }
        result.innerHTML = input;
    };
}

let per = document.getElementById("percentage");
per.onclick = function(){
    let input = result.innerHTML;
    input += '/100';
    result.innerHTML = eval(input);
}
let div = document.getElementById("divide");
div.onclick = function(){
    if(result.innerHTML != 0 && !checker(result.innerHTML[result.innerHTML.length-1])){
        result.innerHTML += '÷';
    };
}

let minus = document.getElementById("minus");
minus.onclick = function(){
    if(result.innerHTML != 0 && !checker(result.innerHTML[result.innerHTML.length-1])){
        result.innerHTML += '-';
    };
}

let plus = document.getElementById("plus");
plus.onclick = function(){
    if(result.innerHTML != 0 && !checker(result.innerHTML[result.innerHTML.length-1])){
        result.innerHTML += '+';
    };
}
let equal = document.getElementById("equal");
equal.onclick = function(){
    if(result.innerHTML != 0 && !checker(result.innerHTML[result.innerHTML.length-1])){
        let input = result.innerHTML;
        input = input.replace("×","*")
        input = input.replace("÷","/")

        result.innerHTML = eval(input);
    };
}

let comma = document.getElementById("comma");
comma.onclick = function(){
    if(!checker(result.innerHTML[result.innerHTML.length-1])){
        result.innerHTML += '.';
    };
}


//-------------------------------------------------------------------------------------

const addNumber = (iVal,num) =>{
    if(iVal === "0"){
        iVal = num;
    }
    else{
        iVal += num;
    }
    return iVal;
}

let sev = document.getElementById("b7");
sev.onclick = function(){
    result.innerHTML = addNumber(result.innerHTML,7);
}
let eig = document.getElementById("b8");
eig.onclick = function(){
    result.innerHTML = addNumber(result.innerHTML,8);
}
let nin = document.getElementById("b9");
nin.onclick = function(){
    result.innerHTML = addNumber(result.innerHTML,9);
}
let six = document.getElementById("b6");
six.onclick = function(){
    result.innerHTML = addNumber(result.innerHTML,6);
}
let five = document.getElementById("b5");
five.onclick = function(){
    result.innerHTML = addNumber(result.innerHTML,5);
}
let four = document.getElementById("b4");
four.onclick = function(){
    result.innerHTML = addNumber(result.innerHTML,4);
}
let three = document.getElementById("b3");
three.onclick = function(){
    result.innerHTML = addNumber(result.innerHTML,3);
}
let two = document.getElementById("b2");
two.onclick = function(){
    result.innerHTML = addNumber(result.innerHTML,2);
}
let one = document.getElementById("b1");
one.onclick = function(){
    result.innerHTML = addNumber(result.innerHTML,1);
}
let zero = document.getElementById("b0");
zero.onclick = function(){
    result.innerHTML = addNumber(result.innerHTML,0);
}









var a = document.getElementById("a").value 
document.getElementById("b").innerText = a
let x ='+'
let c
if (x=='+'){
    c = a+b
    document.getElementById("c").innerText = c
}else if(x=='-'){
    c = a-b
    document.getElementById("c").innerText = c
}else if( x=='*'){
    c = a*b
    document.getElementById("c").innerText = c
}else if(x=='/'){
    c = a/b
    document.getElementById("c").innerText = c
}

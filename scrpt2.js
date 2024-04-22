let input=document.getElementById('input-box')
// let's select all buttons using query selector 
let buttons=document.querySelectorAll('button')
// let's now take a string 
let str="";
// jaise ki ab hame saare buttons chahe to ham kya karenge ek array bana lenge saare buttons ka 
let arr=Array.from(buttons);//array jo hein ek class hein ye hame buttons ka ek array bana ke de dega jiska name hein arr
// let's make a loop for traversing each array buttons 
arr.forEach(button=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML=='='){
            str=eval(str);//evaluate is inbuilt function for calculating in javascript.
            input.value=str;
        }
        else if(e.target.innerHTML == 'AC'){
            str="";
            input.value=str;
        }
        else if(e.target.innerHTML == 'DEL' ){
            str=str.substring(0,str.length-1)
            input.value=str;
        }
        else{
        str+=e.target.innerHTML;
          input.value=str;
    }
    })
})

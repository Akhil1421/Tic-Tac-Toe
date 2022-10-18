let a = document.querySelectorAll("button");
var turns=0;
let instruction = document.getElementsByTagName("h1");
let str ="";
window.addEventListener("load", f1);
function f1(){
    str="X";
    instruction[0].innerText+=str;
    for(let i=0;i<a.length;i++){
        a[i].addEventListener("click", f3);
    }
}
let str2="X";
function f3(){
    console.log("Clicked");
    if(turns%2==0){
        str="X";
        str2="O";
    }
    else{
        str="O";
        str2="X";
    }
    turns++;
    console.log(turns);
    this.innerText=str;
    this.style.color="#900C3F";
    instruction[0].textContent="Turn of : " + str2;
    f5();
    this.removeEventListener("click", f3);
}
function f5(){
    let k=0;
    for(let i=0;i<3;i++){
    if((a[i].innerText==a[i+3].innerText)&&(a[i].style.color==a[i+3].style.color)&&
    (a[i].innerText==a[i+6].innerText)&&(a[i].style.color==a[i+6].style.color)){
        console.log("Yes column  "+ i);
        instruction[0].innerText=str +" wins"; 
        turns=0;
        for(let i=0;i<a.length;i++){
            a[i].removeEventListener("click", f3);
        }
        k=1;
        break;
    }
}
    for(let i=0;i<9;i+=3){
        if((a[i].innerText==a[i+1].innerText)&&(a[i].style.color==a[i+1].style.color)&&
        (a[i].innerText==a[i+2].innerText)&&(a[i].style.color==a[i+2].style.color)){
            console.log("Yes row  "+ i-3);
            instruction[0].innerText=str +" wins";
            for(let i=0;i<a.length;i++){
                a[i].removeEventListener("click", f3);
            }
            k=1;
            break;
        }
    }
    if((a[0].innerText==a[4].innerText)&&(a[0].style.color==a[4].style.color)&&
        (a[4].innerText==a[8].innerText)&&(a[4].style.color==a[8].style.color)){
            console.log("Yes diagonal");
            instruction[0].innerText=str +" wins";
            for(let i=0;i<a.length;i++){
                a[i].removeEventListener("click", f3);
            }
            k=1;
        }
    else if((a[2].innerText==a[4].innerText)&&(a[2].style.color==a[4].style.color)&&
    (a[4].innerText==a[6].innerText)&&(a[4].style.color==a[6].style.color)){
        console.log("Yes diagonal");
        instruction[0].innerText=str +" wins";
        for(let i=0;i<a.length;i++){
            a[i].removeEventListener("click", f3);
        }
        k=1;
    }
    if((turns>8)&&(k!=1)){
        instruction[0].textContent="It's a Draw !!"
    }
}

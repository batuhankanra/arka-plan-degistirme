const body=document.querySelector("body");
const button=document.querySelector("button");
const colors= [
    "green",
    "blue",
    "yellow",
    "black"
];
let sira=0;
button.addEventListener("click" ,colorchenge1)

function colorchenge1(){
   
    const secilenrenk=colors[sira];
    if(sira>=colors.length)
    {
        sira=0;
    }
   
    body.style.backgroundColor=secilenrenk
    console.log(sira)
    sira++;

}
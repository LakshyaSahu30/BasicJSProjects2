
let result=document.querySelector(".result");
let check=document.querySelector(".inc");

fun=()=>{
  let ck=true;
  let num=document.querySelector(".input").value;
if(num<=1){
  result.innerText="Please Choose a valid Number";
  result.style.color="red";
}
else{
  for(let i=2;i<=Math.sqrt(num);i++){
    if(num%i==0){
      result.innerText=`${num} is Not a Prime Number`;
      result.style.color="Green";
      ck=false;
      break;
    }
  }
  if(ck){
    result.innerText=`${num} is A Prime Number`;
      result.style.color="Blue";
  }
  console.log(result.innerText);
}
}
check.addEventListener("click",()=>{
 fun();
});

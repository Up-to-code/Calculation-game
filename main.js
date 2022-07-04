function getRandomitm(arr) {
    const Randomitm = Math.floor(Math.random() * arr.length);
    const itme = arr[Randomitm];
    return itme;
}
////////////////////////////
let n1 = document.getElementById("feirsnaber");
let n2 =document.getElementById("endnabers");
let bgN1 = document.getElementById("na")
 let end = document.getElementById("end");
 let allBoxs =document.getElementById("allBoxs");
 let btn = document.getElementById("btn")
 let input = document.getElementById("input")
 
////////////////////////////
const arry = [1,2,3,4,5,6,7,8,9,10]
const bgColor = ["#ffa837", " #ff3737", "#37c0ff" ,"#ff6637"]
/////////////////////////////
let homeArrey = [];
 let home = [];
 let zx;
 let ecole 
////////////////////////////////
function getn1() {
    n1.innerHTML = getRandomitm(arry);;
    n2.innerHTML = getRandomitm(arry);;
     ecole = +n1.innerHTML + +n2.innerHTML;
    end.innerHTML = "?";


    for (let index = 0; index < 7; index++) {
        if (index > 3) {
            homeArrey.push(ecole); 
            if (index > 4) {
                let ret =getRandomitm(arry);;
                homeArrey.push(ret);
            }
        }else{
        let ret =getRandomitm(arry);;
        homeArrey.push(ret);
        }
    }

   for (let index = 0; index < 6 ; index++) {
     zx = getRandomitm (homeArrey);;
      home.push(zx);
}

for (let index = 0; index < home.length; index++) {
    const element = home[index];
   
   
    allBoxs.innerHTML +=`
    <div class="nabrs" id="a${index}">
    ${element}
     </div>  
    `
    let bg = getRandomitm (bgColor);;
    let st = document.getElementById("a"+ index);
    st.style.background =bg;
}
///////////////////////////
let bg = getRandomitm (bgColor);;
bgN1.style.background =bg;
 bg = getRandomitm (bgColor);;
n2.style.background =bg;
 bg = getRandomitm (bgColor);;
end.style.background =bg;
bg = getRandomitm (bgColor);;
btn.style.background =bg;
/////////////////////
}
getn1()



btn.onclick =function () {
 let i =    input.value;
  if (ecole == i) {
    console.log("yes")
    allBoxs.innerHTML = "";
        homeArrey = [];
        home = [];
        zx = 0;
        ecole =0;
    getn1()
    clek()
    input.value =""
}
else{
    console.log("no")
}
}








function clek() {
    ////////////////////////
let a0 = document.getElementById("a0");
let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");
let a3 = document.getElementById("a3");
let a4 = document.getElementById("a4");
let a5 = document.getElementById("a5");
///////////////////////////////////////
///////////////////////////
    a0.onclick = function(){
    input.value = a0.innerText;
}
a1.onclick = function(){
    input.value = a1.innerText;
}
a2.onclick = function(){
    input.value = a2.innerText;
}
a3.onclick = function(){
    input.value = a3.innerText;
}
a4.onclick = function(){
    input.value = a4.innerText;
}
a5.onclick = function(){
    input.value = a5.innerText;
}
}
clek()



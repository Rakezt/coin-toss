var head=document.querySelector("#head")
var tail=document.querySelector("#tail")
var output=document.querySelector("#output")

head.addEventListener("click", selectHead)
tail.addEventListener("click", selectTail)
var head=0;

function selectHead(){
    head=head+1;
    var randomNumber=Math.floor(Math.random()*2)
    console.log(randomNumber)
    console.log(head)
    if (Number(randomNumber)===Number(head)){
        output.innerText=`You have selected head and you win 🚀🚀`
        head=0;
        ;
    }else {
        output.innerText=`You have selected head still you didn't win 😭😭`
        head=0;
    }
}
function selectTail(){
    var randomNumber=Math.floor(Math.random()*2)
    console.log(randomNumber)
    console.log(head)
    if (Number(randomNumber)===Number(head)){
        output.innerText=`You have selected tail and you still win 😇😇`
        head=0;
        
    }else {
        output.innerText=`You are the unluckiest person, take a bath please 😭😭`
        head=0;
    }
}
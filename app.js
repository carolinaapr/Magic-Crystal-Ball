const points =[
    "it is certain",
    "Without doubt",
    "You may rely on it!",
    "Yes, it's definitely",
    "It is deceidely so",
    "Ah I see it, yes",
    "Most likely",
    "Yes",
    "Outlook good",
    "Signs point to yes",
    "Reply hazy try again",
    "Better not tell you now",
    "Ask again later",
    "cannot predict it now",
    "Concentrate and ask again",
    "Don't count on it",
    "Outlook not so good",
    "My sources say no!",
    "Sorry, very doubtful",
    "My reply is No!",
    "do coin flip and trust it!"
];

const input = document.getElementById("myInput");

function clickEnter(){
    points.sort(function(a,b){return 0.5- Math.random()});
    document.getElementById("response").innerHTML=points[0];
    document.getElementById("response").style.fontSize="16px";
    setTimeout(timeup,4000)

    function timeup(){
        document.getElementById("response").innerHTML="Ask again?";
        document.getElementById("response").style.fontSize="16px"
    }
}

// saat menekan tombol enter
input.addEventListener("keypress",function(event){
  if(event.key === "Enter"){
    clickEnter()
  }
})
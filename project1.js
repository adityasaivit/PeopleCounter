let count=0

function increment()
{
    count=count+1
    document.querySelector(".count").innerHTML=count;
    document.querySelector(".reset-msg").innerHTML="";
}

function reset()
{
    count=0
    document.querySelector(".count").innerHTML=count;
    document.querySelector(".reset-msg").innerHTML="Just Reset!"
}

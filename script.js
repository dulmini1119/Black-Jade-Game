function main()
{
    let confirm = document.getElementById('mainResult').innerHTML;
    if(confirm == "You've Lost!!" )
    {
        alert("Game Over!!Please Try Again..");
    }
    else{
    let x;
    do{
    x = Math.floor(Math.random()*100 / 7.6);
    }while(x==0);
    
    let currenT =parseInt(document.getElementById("result").innerHTML);
    let total = currenT + x;
    document.getElementById('result').innerHTML = total;

    if(total < 21)
    {
        document.getElementById('mainResult').innerHTML= "Generate another Card";

    }
    else if (total == 21)
    {
        document.getElementById('mainResult').innerHTML= "You've Won!!";
        alert("Congradulations");
        document.getElementById('btn-res').style.display = "block";

    }
    else if(total > 21)
    {
        document.getElementById('mainResult').innerHTML= "You've Lost!!";
        alert("You lost! click here to restart again!");
        document.getElementById('btn-res').style.display = "block";
    }

    var img = document.createElement("img");
    img.src = "images/" + x + ".png";
    img.height = 300;

    document.body.appendChild(img);

   

}
}
function restart()
{
    location.reload();
}
function login(){
    var login = document.getElementById('login').value;
    var password = document.getElementById('password').value;
    var password = password.toLowerCase();
    if(login=="admin" && password=="admin"){
        window.open("mainpage.html");
    }else if(login==0 || password==0) {
        document.getElementById("wrongPassword").innerHTML="You can not left empty fields.";
        }else{
        document.getElementById("wrongPassword").innerHTML="Login or password incorrect. Try Again.";
        }
}        

function wynik(){
    var liczymy = document.getElementById("wynik").innerText=ruletko[Math.floor(Math.random() * 4)];
}

var ruletko = ["When Henry Ford made cheap, reliable cars people said, 'Nah, what's wrong with a horse?' That was a huge bet he made, and it worked.","Patience is a virtue, and I'm learning patience. It's a tough lesson.","Great companies are built on great products. Elon Musk","Even if there's a zombie apocalypse, you'll still be able to travel using the Tesla Supercharging system."];
    function date(){
        var timer = new Date();
        var timerxx = timer.getDay()
        var timerx =  timerxx+2+ "/09/2017";
        document.getElementById("date").innerHTML=timerx;
        }


  
    function quiz(){;
        var a = 1;
        var b = 2;
        var klocuch = 0;
        var cztery = 4;
        if(document.getElementById("question1y").checked){
            klocuch++;
        }
        if(document.getElementById("question2y").checked){
            klocuch++;
        }
        if(document.getElementById("question3y").checked){
            klocuch++;
        }
        
        if(klocuch<1){
            document.getElementById("resultt").innerHTML="scored "+0+" points. Press reset to try again";
            document.getElementById("photo1").style.display = "inline";
        }
        else if(klocuch>1 && klocuch <3){
            document.getElementById("resultt").innerHTML="scored "+2+" points. Press reset to try again";
            document.getElementById("photo3").style.display = "inline";
        }
        else if(klocuch>2){
            document.getElementById("resultt").innerHTML="scored "+4+" points. Great";
            document.getElementById("photo4").style.display = "inline";
        }
        else if(klocuch=1){
            document.getElementById("resultt").innerHTML="scored "+1+" points. Press reset to try again";
            document.getElementById("photo2").style.display = "inline";
        }
        
        $(document).ready(function(){
            $("#Q :input").prop("disabled", true);
        });
        document.getElementById("reset").disabled = false;
        

        return false;
    }
    function reset(){
        $(document).ready(function(){
            $("#Q :input").prop("disabled", false);
        });
        return false;
    }

    


function adduser(){
    var player1= document.getElementById("player1_name").value;
       var player2= document.getElementById("player2_name").value
       localStorage.setItem("Player1",player1);
       localStorage.setItem("Player2",player2);
    window.location="quiz_game_page.html";
    }
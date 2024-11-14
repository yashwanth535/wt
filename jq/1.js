<!-- 1.jquery events-focus,blur ...etc,,-->


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
</head>
<body>
  <button id="mouse-enter"> MOUSE ENTER/LEAVE </button>
  <button id="hover"> MOUSE HOVER(enter & leave) </button>
  <button id="click"> CLICK </button>
  <button id="dbl-click" style="margin-top: 20px;">DOUBLE CLICK</button>
  <button id="mouse-up"> MOUSE UP/DOWN </button>

 <input id="input-event" placeholder="Enter to see focus"></input>



  <div id="message"></div>

</body>
<script>
 $(document).ready(function(){
  const msg=document.getElementById('message');
  $('#mouse-enter').mouseenter(function(){
      msg.innerHTML="mouse Enterd";

  });

  $('#mouse-enter').mouseleave(function(){
      msg.innerHTML="mouse left";
  });

  $("#click").click(function(){
    msg.innerHTML="mouse CLICKED";
  });

  $("#dbl-click").dblclick(function(){
    msg.innerHTML="Double CLICK";
  });

  $("#mouse-up").mousedown(function(){
    msg.innerHTML="Mouse right button clicked";
  });
  $("#mouse-up").mouseup(function(){
    msg.innerHTML="Mouse right button released";
  });

  $("#hover").hover(function(){
    msg.innerHTML="mouse hover(enter)";
  },
function(){
  msg.innerHTML="mouse hover(leave)";
});

$("#input-event").focus(function(){
  $('#input-event').attr("placeholder","exit to see blur");
});

$("#input-event").blur(function(){
  $('#input-event').attr("placeholder","enter to see focus");
});


 });

</script>
</html>

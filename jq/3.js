<--3.fade Methods-->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
</head>
<body>
  <button id="fadeIn"> fadeIn </button>
  <button id="fadeOut"> fadeOut</button>
  <button id="fadeToggle">fadeToggle</button>

  <p id="content" style="margin-top: 20px;">This is the Content</p>


</body>
<script>
  $(document).ready(function(){
    $("#fadeIn").click(function(){
      $("#content").fadeIn("slow");
    });

    $("#fadeOut").click(function(){
      $("#content").fadeOut("slow");
    });

    $("#fadeToggle").click(function(){
      $("#content").fadeToggle("slow");
    });

  });

</script>
</html>

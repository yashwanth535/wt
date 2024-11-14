<--4.slide Methods-->
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
</head>
<body>
  <button id="slideUp"> slideUp</button>
  <button id="slideDown"> slideDown </button>
  <button id="slideToggle">slideToggle</button>

  <p id="content" style="margin-top: 20px;">This is the Content</p>


</body>
<script>
  $(document).ready(function(){
    $("#slideDown").click(function(){
      $("#content").slideDown("slow");
    });

    $("#slideUp").click(function(){
      $("#content").slideUp("slow");
    });

    $("#slideToggle").click(function(){
      $("#content").slideToggle("slow");
    });

  });

</script>
</html>

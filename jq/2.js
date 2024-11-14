<!-- 2.jquery effects--show,hide,toggle -->


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
</head>
<body>
  <button id="hide-btn">Hide</button>
  <button id="show-btn">show</button>
  <button id="toggle-btn">toggle</button>
  <div id="content" style="margin-top: 20px;">this is the content</div>

</body>
<script>
 $(document).ready(function(){
  $("#hide-btn").click(function(){
    $("#content").hide();
  });

  $('#show-btn').click(function(){
    $('#content').show();
  });

  $('#toggle-btn').click(function(){
    $('#content').toggle();
  })
 });

</script>
</html>

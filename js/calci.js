//calculator.js

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script>
function start(){
  var a=prompt("Enter your choice :\n1:basic calculator \n 2:scientific calculator")
  switch(a){
    case "1":basciCalci();break;
    case "2":scientificCalci();break;
    case "3":console.log("Thank you ");break;
  }
}
start();

function basciCalci(){
  var a=parseFloat(prompt("Enter operator one"));
  var op=prompt("Enter operaton :(+,-,*,/) :");
  var b=parseFloat(prompt("Enter operator two"));
  let result;
    switch (op) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break;
        default:
            console.log("Invalid operator");
            return;
    }

    document.write(`Result: ${result}`);

}

function scientificCalci() {
  const operations = [
      'sin', 'cos', 'tan', 'log', 'ln', 'sqrt', 'square'
  ];


  const operation = prompt("Choose an operation:"+operations).toLowerCase();
  if (!operations.includes(operation)) {
    console.log("Invalid operation");
    return;
}

  const num = parseFloat(prompt("Enter a number:"));
  let result;

  switch (operation) {
      case 'sin':
          result = Math.sin(num);
          break;
      case 'cos':
          result = Math.cos(num);
          break;
      case 'tan':
          result = Math.tan(num);
          break;
      case 'log':
          result = Math.log10(num);
          break;
      case 'ln':
          result = Math.log(num);
          break;
      case 'sqrt':
          result = Math.sqrt(num);
          break;
      case 'square':
          result = num * num;
          break;
  }

  document.write(`Result: ${result}`);
}



  </script>
</head>
<body>
  
</body>
</html>

//fibonacci series

fib(100);
function fib(n){
  var a=0;
  var b=1;
  var c=a+b;

  while(c<=n){
    console.log(c);
    if(c>=n)return;
    a=b;
    b=c;
    c=a+b;
  }
}

//fibonacci series

function fib(n,a=0,b=1){
  if(a>n)return;
  console.log(a);
  fib(n,b,a+b);
}
fib(100);

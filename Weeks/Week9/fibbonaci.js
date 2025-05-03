function fibbonaci (n) { 
    if (n <= 1) {
      return n
    }
    return fibbonaci (n - 1) + fibbonaci (n - 2)
  }
  
  function printfibonaci(n){
    var list = []
    for ( var i = 1; i <= n; i++){
      list.push(fibbonaci(i))
    }
    console.log(list)
  }
  console.log (fibbonaci (7))
  printfibonaci(10)
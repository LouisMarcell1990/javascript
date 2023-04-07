 function call() {
   console.log('Hello')
 }
 
 function printAsyncName (callback, name) {
    setTimeout(() => callback(), 1000);
    setTimeout(() => console.log('Louis'), 2000) 
 }

 printAsyncName(call)
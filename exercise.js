 function printAsyncName (callback, name) {
    setTimeout(() => console.log(callback), 1000);
    setTimeout(() => console.log(name), 2000)  
 }

 printAsyncName('Hello','Louis')
// console.log(5)

// console.log(typeof fs);

// const fs = require('fs')

// fs.writeFileSync('CodeCamp.txt',`Hello World\n`)
// fs.appendFileSync('CodeCamp.txt',`Hello code camp`)

// let content = fs.readFileSync('CodeCamp.txt',{
//     encoding : 'utf-8'

// }) ;
// console.log(content);


//Callback 
function mal(a, b, callbackFn) {
    callbackFn (a * b);
  }
  
  mal(2, 3,(result) => {
      console.log(result)

  });


  function max(a, b, callbackFn) {
   if(a>b){
       callbackFn(a)
   }else{
       callbackFn(b)
   }

  }
  
  max(2, 3,(result) => {
      console.log(result)

  });

  /*1.8 Callback
  Lab - 1
  ใช้ setTimeout เพื่อให้ console.log(‘a’) เมื่อเวลาผ่านไป 1 วินาที
  (ต่อจากข้อ 1) เมื่อ console.log(‘a’) เสร็จ ให้ทำการ console.log(‘b’) เมื่อเวลาผ่านไป 1 วินาที
  (ต่อจากข้อ 2) เมื่อ console.log(‘b’) เสร็จ ให้ทำการ console.log(‘c’) เมื่อเวลาผ่านไป 1 วินาที
  (ต่อจากข้อ 3) เมื่อ console.log(‘c’) เสร็จ ให้ทำการ console.log(‘d’) เมื่อเวลาผ่านไป 1 วินาที*/
  setTimeout(()=> {
    console.log('a')
    setTimeout(()=> {
        console.log('b')
        setTimeout(()=> {
            console.log('c')
            setTimeout(()=> {
                console.log('d')
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)


/* Promise
Lab - 1
ทำ ใช้ setTimeout เพื่อให้ console.log(input) เมื่อเวลาผ่านไป 1 วินาที เป็น Promise ที่ชื่อ function ว่า setTimeoutAndLog(input) แล้วลองเรียกใช้ดู
ใช้ Promise จากข้อที่ 1 แล้วทำให้สามารถได้ผลลัพท์แบบเดียวกันกับ Lab ก่อนหน้า 
ผ่านไป 1 วินาทีแล้ว console.log(‘a’)
ผ่านไป 1 วินาทีแล้ว console.log(‘b’)
ผ่านไป 1 วินาทีแล้ว console.log(‘c’)
ผ่านไป 1 วินาทีแล้ว console.log(‘d’)*/

function setTimeoutAndLog(input){
    return new Promise(function(fulfill, reject){
        setTimeout(()=>{
            fulfill(input)
        },1000);
    })
}

setTimeoutAndLog('a')
.then(function(result){
    console.log(result);
    return setTimeoutAndLog('b')
}).then(function(result){
    console.log(result);
    return setTimeoutAndLog('c')
}).then(function(result){
    console.log(result);
    return setTimeoutAndLog('d')
}).then(function(result){
    console.log(result);
    
});
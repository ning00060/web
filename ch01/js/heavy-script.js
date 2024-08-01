/** heavy-script.js*/

window.addEventListener("load",function()  {

    console.log('start script...');



// js 현재 시간 정보 객체 --> Date
let startTime=new Date().getTime();
let delay=3000; // 3초


// 3초동안 브라우저 렌더링 과정을 블로킹
while(new Date().getTime()< startTime + delay){
    // 3초 동안 루프 동작함
}
    console.log('end script...');
});
// const clock = document.querySelector("h2#clock");

// greeting.innerHTML = "Time Until Christmas Eve"

// function getClock() {
//     //아래 과제
//     // const xmas = new Date('November 25, 22 00:00:00');
//     // const today = new Date();


//     // const diff = xmas.getTime() - today.getTime();


//     // const day = Math.floor(diff/(1000*60*60*24));
//     // const hours = String(Math.floor((diff % (1000*60*60*24))/(1000*60*60))).padStart(2, "0");
//     // const minutes = String(Math.floor((diff % (1000*60*60))/(1000*60))).padStart(2, "0");
//     // const seconds = String(Math.floor((diff % (1000*60))/1000)).padStart(2, "0");

    
//     // clock.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;


//     // D-Day 날짜를 가져오고,
//    // 삼항 연산자를 사용해서 값이 10보다 작을 경우에 대해 조건부 렌더링을 해준다.

//     // ` ${day}d ${hours < 10 ? `0${hours}` : hours}h ${minutes < 10 ? `0${minutes}` : minutes}m ${seconds < 10 ? `0${seconds}` : seconds}s `;


//     console.log(today.getDate());

//     const leftDays = xmas.getDate()-today.getDate();
//     // console.log(today.getDay());

//     const leftyear = xmas.getFullYear() -  today.getFullYear();
//     const leftmonth = xmas.getMonth() -  today.getMonth();

//     console.log(leftmonth);

//     const hours = String(today.getHours()).padStart(2, "0");
//     const minutes = String(today.getMinutes()).padStart(2, "0");
//     const seconds = String(today.getSeconds()).padStart(2, "0");

//     clock.innerText = `${hours}:${minutes}:${seconds}`;
// }
// getClock();
// setInterval(getClock, 1000);
// // setTimeout(sayHello, 5000);




function getClock() {
const date = new Date();
clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
const hours = String(date.getHours()).padStart(2, "0");
const minutes = String(date.getMinutes()).padStart(2, "0");
const seconds = String(date.getSeconds()).padStart(2, "0");
clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
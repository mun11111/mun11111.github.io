const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
const chosenImage = images[(Math.floor(Math.random() * images.length))];
console.log(chosenImage);

const bgImage = document.createElement("img");
console.log(bgImage);

// bgImage.src = `img/${chosenImage}` ; // <img src="img/0.jpeg"/>
// console.log(bgImage);

// document.body.appendChild(bgImage) ;

const style = `background-image: url('../momentum/img/${chosenImage}')`;
document.body.style = style;

//랜덤 색상 백그라운드 뷰 과제
// const colors = [
//     "#ef5777",
//     "#575fcf",
//     "#4bcffa",
//     "#34e7e4",
//     "#0be881",
//     "#f53b57",
//     "#3c40c6",
//     "#0fbcf9",
//     "#00d8d6",
//     "#05c46b",
//     "#ffc048",
//     "#ffdd59",
//     "#ff5e57",
//     "#d2dae2",
//     "#485460",
//     "#ffa801",
//     "#ffd32a",
//     "#ff3f34"
//   ];
  
// const Button = document.querySelector("button");


// function changeBG () {

//     const color1 = colors[Math.floor(Math.random() * colors.length)];
//     const color2 = colors[Math.floor(Math.random() * colors.length)];
    
//     const style = `background: linear-gradient(to right, ${color1}, ${color2})`;
//     document.body.style = style;
    

// }
// Button.addEventListener("click", changeBG);
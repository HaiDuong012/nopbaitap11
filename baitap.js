//bai tap loops tren lop

//bai 1
// let N = parseInt(prompt("moi nhap so N"));
// if (N < 2 || N > 100) {
//   console.log("moi nhap lai");
// } else {
//   for (let a = 2; a <= N; a++)
//     if ((a * a) % 2 === 0) {
//       console.log(a * a);
//     } else {
//       console.log(a * a, "Loai");
//     }
// }

//bai 2

// let M = parseInt(prompt("moi nhap so M"));
// if (M < 2 || M > 100) {
//   console.log("moi nhap lai");
// } else {
//   for (let a = 2; a <= M; a++)
//     if (a % 2 === 0) {
//       console.log(a * a);
//     } else {
//       console.log(a * a, "Loai");
//     }
// }

//bai 1 cach 2
// let M = parseInt(prompt("moi nhap so M"));
// if (M < 2 || M > 100) {
//   console.log("moi nhap lai");
// } else {
//lap cac so tu 2 den N
//   for (let a = 2; a <= M; a++){
//binh phuong
// let square = math.pow(i,2);
//kiem tra gia tri
// if (square % 2 ===0) {
//     console.log("square:",square);
// }
//}
//}
//sô nguyên tố là số có 2  ước là 1 và chính nó.: biến đếm số ước
//sô nt bé nhất là 2
//liet kke 20 sô nt

// let count = 0;
// let number = 2;
// while (count < 20) {
//   let isPrime = true;
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i == 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(isPrime, number);
//     count++;
//   }

//   number++;
// }

// let count = 1;
// let number = 2;
// while (count <= 20) {
//   // let nt = true;

//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i != 0) {
//       // nt = false;
//       console.log(number);
//     } else {
//       false;
//       break;
//     }
//   }
//   count++;

// if (nt) {
//   console.log(number);
//   count++;
// }

//   number++;
// }

// console.log(`\x1b[31m%s\x1b[0m`, "Chữ màu");
//lặp từ 1-8

// for (let i = 0; i < 10; i++) {
// doi mau ngau nhien
//   let mau = Math.floor(100000 + Math.random() * 899999);
//   console.log(`%cThis text is red and has a larger font!`, `color: #${mau};`);
// }

let random = Math.floor(Math.random() * 10);
console.log(random);

for (let i = 1; i < random; i++) {
  console.log(`\x1b[3${i}m%s\x1b[0m`, "Chữ màu");
}

// for (let i = 1; i <= 10; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row = row + "*";
//   }
//   console.log(row);
// }

// for (let i = 10; i >= 1; i--) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row = row + "*";
//   }
//   console.log(row);
// }

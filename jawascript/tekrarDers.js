document.getElementById("fullName").innerHTML = "Zeynep";

let ad = "Veli";
let soyad = "Aydın";
let ePosta = "sdfsd@gmail.com";
let sifre = "123!*";
let phoneNumber = 12345;

document.getElementById("name").innerHTML = ad;
document.getElementById("surname").innerHTML = soyad;
document.getElementById("email").innerHTML = ePosta;
document.getElementById("password").innerHTML = sifre;
document.getElementById("phoneNumber").innerHTML = phoneNumber;

var kullanici_adi = prompt("Kullanıcı adınızı Giriniz");//promt giriş için ekranı açmaya yarar
console.log(kullanici_adi);
document.getElementById("fullName").innerHTML = kullanici_adi;

// //BUYUKTUR KUCUKTUR const ve let arasındaki var değişken tanımlarken const değişir letler değiştirilemez
// const a = 10;
// const b = 5;
// const c = 5;
// const d = "5";
// const e = 3;

// console.log(a > b);
// console.log(c == b);
// console.log(c == d);
// console.log(c === d);
// console.log(b >= c);
// console.log(b <= c);
// console.log(a < e);

console.log((2 + 5) * 10); //işlem önceliği bulunmakta

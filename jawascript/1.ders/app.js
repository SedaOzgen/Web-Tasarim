console.log("bakalım bu logu yazdıracak mı");
var kullanici_adi = prompt("Adınızı Giriniz");
var soyisim = prompt("soyadınızı Giriniz");
console.log(kullanici_adi);
// var kullanici_adi = document.getElementById("kad").value;
// document.getElementById("name").innerHTML = kullanici_adi;
document.getElementById("surname").innerHTML = soyisim;

document.getElementsByClassName("name").innerHTML =kullanici_adi;


let isim = "Büşra";
let soyIsım = "Ceylan";
let eMail = "bbbb@gmail.com";
let password = "123456";
let telefonNumarasi = "05555555555";
let a = 10;
let b = "20";
let c = 30;
let mezunMu1 = "Evet";

console.log("YENİ TOPLAM:", a + parseInt(b));
console.log("iki sayinin toplami:", a + c);
console.log("İSİM soyisim:", isim + " " + soyIsım);
console.log("MezunMu:", mezunMu1);
console.log("KArakter sayısı:", isim.length);

// document.getElementById("name").innerHTML = "Ad: " + kullanici_adi;
// document.getElementById("surname").innerHTML = "Ad: " + soyisim;
document.getElementById("email").innerHTML = eMail;
document.getElementById("password").innerHTML = password;
document.getElementById("phoneNumber").innerHTML = telefonNumarasi;

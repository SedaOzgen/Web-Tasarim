let paraMiktari;
let simitParasi = 20;

// paraMiktari = prompt("Para Miktarını giriniz");
// document.getElementById("paraMiktari").innerHTML = paraMiktari;

// if (paraMiktari < simitParasi) {
//   console.log(
//     "Simit alamazsınız paranız yetersizdir.",
//     simitParasi - paraMiktari,
//     " ₺ kadar paranız eksiktir"
//   );
//   document.getElementById("alisDurumu").innerHTML = "Alamazsın paran yetersiz.";
// } else {
//   console.log("Simit alabilirsiniz");
//   document.getElementById("alisDurumu").innerHTML = "alabilirsin";
// }

// Math.floor(Math.random()) * 10;

// let sinavNotu;
// sinavNotu = prompt("Sınav notunu gir");

//90-100 ->AA
//80-90->BA
//60-80->BB
//30-60->CC
//0-30->FF
//0->sinava girmedi

// if (sinavNotu >= 90 && sinavNotu <= 100) {
//   console.log("başarı harfiniz: AA");
// } else if (sinavNotu >= 80 && sinavNotu <= 90) {
//   console.log("başarı harfiniz:BA");
// } else if (sinavNotu >= 60 && sinavNotu <= 80) {
//   console.log("başarı harfiniz:CC");
// } else if (sinavNotu > 30 && sinavNotu <= 60) {
//   console.log("başarı harfiniz:DC");
// } else if (sinavNotu > 0 && sinavNotu <= 30) {
//   console.log("başarı harfiniz:FF");
// } else {
//   console.log("sinavNotu:", sinavNotu);
// }

//2 tane değişken al vizeNotu, finalNotu
//ortalama değişkeni oluştur .vize*0.4 + final*0.6 işlemini yap ortalama değişkenine ata.
//if else ile harf durumuna göre ekrana getElementById kullanarak yazdır.

// let sayi1 = 50;
// let sayi2 = 25;

// //Geri değer donduren fonksiyon
// function geriDegerDondurenToplam() {
//   return sayi1 + sayi2;
// }

// console.log("return degeri:", geriDegerDondurenToplam());

// var toplam = geriDegerDondurenToplam();
// console.log("toplam:", toplam);

// function sayiTopla(sayi1, sayi2) {
//   console.log("sayıların toplamı:", sayi1 + sayi2);
//   alert("sayiların toplamı:", sayi1 + sayi2);
// }

// function sayiCikart(a, b) {
//   console.log("sayiların farkı:", a - b);
// }

// sayiTopla(30, 30);
// sayiCikart(12, 18);

//parametresiz fonksyion
// function sayHi() {
//   alert("hoş geldiniz");
// }
// sayHi();

// const PI = 3.14;

// function daireAlanHesapla(yaricap) {
//   return PI * yaricap * yaricap;
// }
// function alanlarCarpimDegeri(alan1, alan2) {
//   return alan1 * alan2;
// }

// var alan1 = daireAlanHesapla(3);
// var alan2 = daireAlanHesapla(7);
// // var alanlarCarpimi = alan1 * alan2;
// // console.log("alanlarCarpimi:", alanlarCarpimi.toFixed(2));
// console.log("Alanların carpim değeri:", alanlarCarpimDegeri(alan1, alan2));

// // var alan = daireAlanHesapla(5);
// // console.log("daire alani:", alan);

// function daireCevreHesapla(yaricap) {
//   var cevre = 2 * PI * yaricap;
//   return cevre;
// }

// let sonuc = daireCevreHesapla(5);
// console.log("Dairenin çevresi:", sonuc.toFixed(2));

// function cikart() {
//   console.log("çıkartma sonucu:", sayi1 - sayi2);
// }

// cikart();

// document.getElementById("gonder").addEventListener("click", ekranaYazdir);

// function ekranaYazdir() {
//   let deger3 = document.getElementById("adSoyad").value;
//   console.log("girilen metin:", deger3);
//   document.querySelector("#girilenDeger").innerHTML = deger3;
// }

// document.getElementById("tahminEt").addEventListener("click", tahminEtFunc);

// function tahminEtFunc() {
//   let randomSayi = Math.floor(Math.random() * 10);
//   console.log("random sayi:", randomSayi);
//   let girilenDeger = document.getElementById("girilenSayi").value;
//   console.log("girilenDeger", girilenDeger);

//   if (randomSayi === girilenSayi) {
//     alert("Tebrikler sayıyı doğru tahmin ettiniz.");
//   } else if (girilenDeger > 10) {
//     alert("10 sayısından yüksek sayı girdiniz. Lütfen 0-10 arası sayı giriniz");
//   } else {
//     alert(
//       "Maalesef sayıyı bilemediniz.Tekrar deneyiniz.Üretilen sayı:",
//       randomSayi
//     );
//   }
// }

//sayıyı tahmin et
// let girilenSayi;

// girilenSayi = document
//   .getElementById("number")
//   .addEventListener("input", sayiDegisti);

// function sayiDegisti() {
//   girilenSayi = document.getElementById("number").value;
//   console.log("girilen sayı:", girilenSayi);
// }

//DİZİLER//

var meyveler = ["çilek", "elma", "portakal", "kiraz"];
console.log("dizi degeri:", meyveler);

console.log("meyveler 3:", meyveler[3]);

var rakamlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log("rakamlar degeri:", rakamlar);

//dizi içindeki değeri değiştirdi.
var sayilar = ["sıfır", "bir", "iki", "üç"];
console.log(sayilar);
console.log("sayilar[2]", sayilar[2]);
sayilar[2] = "iikii";
console.log("sayilar[2]", sayilar[2]);
console.log(sayilar);

//dizi birleştirme
//sondan ekleme
var sayilar = ["sıfır", "bir", "iki", "üç"];
console.log("sayilar eklenmeden önce", sayilar);
sayilar.push("dört", "beş");
console.log("sayilar eklendikten sonra", sayilar);

//diziye baştan ekleme
var sayilar = ["sıfır", "bir", "iki", "üç"];
sayilar.unshift("eksi üç", "eksi iki", "eksi bir");

//Silme işlemleri
var sayilar = ["sıfır", "bir", "iki", "üç"];
console.log("sayilar silinmeden önce", sayilar);
sayilar.pop();
console.log("sayilar sondan silinince", sayilar);
sayilar.shift();
console.log("sayilar baştan silinince", sayilar);

//Dizi birleştirme
var sayilar = ["sıfır", "bir", "iki", "üç"];
var cinler = ["zinzin", "zomzom", "zepzep"];
var sayilar_ve_cinler = sayilar.concat(cinler);
console.log("birleştirme:", sayilar_ve_cinler);

var meyveler = ["çilek", "elma", "portakal", "kiraz"];
var sebzeler = ["patates,", "ıspanak", "kabak"];
var yiyecek = meyveler.concat(sebzeler);
console.log("yiyecekler:", yiyecek);

//dizi sıralaması

var rakamlar3 = [1, 5, 4, 7, 9, 0, 3, 6];
document.write(rakamlar3.sort());
console.log("Sort :", rakamlar3);
console.log("ters çevirme:", rakamlar3.reverse());

const products = [
  "Mikrofon",
  "Kablo",
  "Telefon",
  "Bilgisayar",
  "Mouse",
  "Klavye",
  "Ekran",
];
const newProducts = products.filter((eleman) => eleman.length > 5);
console.log(newProducts);

const newProductsMap = products.map((eleman) => eleman.length == 5);
console.log(newProductsMap);

// Bir dizideki sayıların 5 katından oluşan başka bir dizi oluşturalım:
const sayilar7 = [1, 2, 3];
let sayilarin5kati = sayilar7.map(function (sayi) {
  return sayi * 5;
});
console.log(sayilarin5kati);
// Çıktı olarak [5,10,15] görmeyi bekleriz.
console.log(sayilar7);
// Çıktı olarak [1,2,3] görmeyi bekleriz. Orijinal dizimiz aynı kalır.

//DÖNGÜLER
var i;
toplam = 0;
for (i = 0; i < 5; i++) {
  console.log("i degeri:", i);
  // toplam += i;
  toplam = toplam + i;
  console.log("toplam deger:", toplam);
}
// alert(toplam);

var meyveler9 = ["çilek", "elma", "portakal", "kiraz"];
var i = 0;
var meyveUzunlugu = meyveler9.length;
for (i = 0; i < meyveUzunlugu; i++) {
  document.write(meyveler[i], " ");
}

let arr = [1, 2, 3, "dört", "beş"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

var i,
  sonuc6 = 0;
for (i = 0; i < 11; i += 2) {
  sonuc6 += i;
  console.log("sonuc", sonuc6);
}

// var liste = ["Elma", "Armut", "Portakal", "Muz", "Kivi", "Karpuz", "Çilek"];
// var i,
//   listeUzunluk = liste.length;
// for (i = 0; i < listeUzunluk; i++) {
//   console.log("liste elemanları:", liste[i]);
// }

var liste = ["Elma", "Armut", "Portakal", "Muz", "Kivi", "Karpuz", "Çilek"];
for (i in liste) {
  console.log("i. elemanın", i, "i.nci degeri:", liste[i]);
}
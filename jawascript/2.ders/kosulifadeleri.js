//let paraMiktari;
//let simitParasi = 20;

//if (paraMiktari < simitParasi) {
// console.log(
//   "Simit alamazsınız paranız yetersiz.", 
//  simitParasi - paraMiktari, 
//   " ₺ kadar para eksiktir."
//   );

//} else{
//  console.log("Simit alabilirsiniz")
//}

//paraMiktari = prompt("para miktarınızı Giriniz");
//document.getElementById("paraMiktari").innerHTML = paraMiktari



//if (paraMiktari < simitParasi) {
// console.log(
//      "Simit alamazsınız paranız yetersiz.",
//       simitParasi - paraMiktari,
//     " ₺ kadar para eksiktir."
//   );
//  document.getElementById("alisDurumu").innerHTML = "Alamazsın paran yetersiz.";
//} else {
// console.log("Simit ALABİLİRSİN")
//   document.getElementById("alisDurumu").innerHTML = "Alabilirsiniz"
//}


//let sinavNotu;
//sinavNotu = prompt("Sınav notunu giriniz");
// 90-100 AA
// 80-90 BA
// 60-80 BB
// 30-60 CC
// 0-30 FF 
// O ise Sınava Girmediniz
//if (sinavNotu >= 90 && sinavNotu <= 100) { console.log("Başarı Notunuz AA"); }
//else if (sinavNotu >= 60 && sinavNotu <= 80) { console.log("Başarı harfiniz BB"); }
//else if (sinavNotu >= 30 && sinavNotu <= 60) { console.log("Başarı harfiniz CC"); }
//else if (sinavNotu > 0 && sinavNotu <= 30) { console.log("Başarı harfiniz FF"); }
//else if( sinavNotu== 0) { console.log("Sınava Girmediniz")}
//else { console.log("sinavNotu", sinavNotu) }



//2 tane değişken vizeNotu finalNotu
// ortDeğişkeni oluştur vize*0.4+final*0.6
//h1 title içine span kullan vize ve final ort durum yazdr
//if else ile harf duerumuna göre ekrana getelementbyıd kullanaarak yazdır

// let vizeNotu;
// let finalNotu;
// let ortalama;

// vizeNotu = prompt("Vize Notunuzu Giriniz")
// finalNotu = prompt("Final Notunuzu Giriniz")

// ortalama = vizeNotu * 0.40 + finalNotu * 0.60
// console.log("ortalama",ortalama)

// if (ortalama >= 90 && ortalama <= 100) { console.log("Başarı Notunuz AA"); 
// }
// else if (ortalama >= 60 && ortalama <= 80) { console.log("Başarı harfiniz BB");
// document.getElementById("vizeNotu").innerHTML=vizeNotu ;
// document.getElementById("finalNotu").innerHTML=finalNotu;
// document.getElementById("ortalama").innerHTML="ortalama: "+ortalama }



// else if (ortalama >= 30 && ortalama<= 60) { console.log("Başarı harfiniz CC");
// document.getElementById("ortalama").innerHTML="ortalama: "+ortalama +"harf notu: CC" }

// else if (ortalama > 0 && ortalama <= 30) { console.log("Başarı harfiniz FF"); }
// else if( ortalama== 0) { console.log("Sınava Girmediniz")}
// else { console.log("sinavNotu", sinavNotu) }


let sayi1 = 50
let sayi2 = 25

function geriDegerDondurenToplam(){
    return sayi1+sayi2;
}

var toplam=geriDegerDondurenToplam();
console.log("Toplam", toplam)


console.log(" Return Değeri",geriDegerDondurenToplam());

function sayiTopla(sayi1, sayi2) {

    console.log("sayıların toplamı:", sayi1 + sayi2);
    alert("sayıların toplamı:", sayi1-sayi2);
}

sayiTopla(30,30);

//parametresiz function
// function sayHi() {
//     alert("Hoşgeldiniz")
// }
// sayHi()

function cikart(sayi1, sayi2) {
    console.log("sayıların çıkartması", sayi1 - sayi2);
    alert("sayıların çıkartması:", sayi1-sayi2);
}
cikart(20,10)


const PI=3.14;

function daireAlanhesapla(yaricap) {
    return PI* yaricap * yaricap;
}
var alan=daireAlanhesapla(5);
console.log("Daire Alanı", alan);



//daire cevre hesap

function daireCevreHesapla(yaricap) {
     return 2* PI* yaricap;
}
var cevre=daireCevreHesapla(5);
console.log("Daire ÇEVRESİ", cevre.toFixed(3)); //toFixed virgül sonrası kaç basamak olacaksa ayarlamak için

// iki tane alan hesapla farklı değerlere gre 3 ve 7 için çarpımını ekrana bastır


function daireAlanhesapla(yaricap) {
    return PI* yaricap * yaricap;
}

function alanlarCarpimDegeri(alan1,alan2){
    return alan1*alan2
}

var alan1=daireAlanhesapla(3);
console.log("Alan1", alan1.toFixed(3));

var alan2=daireAlanhesapla(7);
console.log("Alan1", alan2.toFixed(7));


console.log("Alanların carpım değeri:", alanlarCarpimDegeri(alan1,alan2))


// var alanlarCarpimi=alan1*alan2
// console.log("Alanlar Çarpımı",alanlarCarpimi.toFixed(2))



// var alancarp=alan1*alan2;
// console.log("Alan Çarpımı",alan1*alan2)







// ödev 
// 1- kullanıcı adı karakterse legnt ile 5 ten büyükse 
// 2- şifre 5 ile 8 arasındysa kullanıcı giriş yapabilecek giriş basarılı yazacak
//değilse başarısız olacak iki şartta yoksa giriş bilg uygun değil desin


// function login() {
//     let username = document.getElementById('username').value;
//     let password = document.getElementById('password').value;
//     let pas = '123456';
//     let message = '';

//     document.getElementById('message').innerHTML = message;
//     if (username.length < 5) {
//         message = 'Kullanici Adi 5 karakterden kucuk olamaz!';

//     } else {
//         if (password.length >= 5 && password.length <= 8 && password == pas) {
//             message = 'Basarili';
//         } else {
//             message = 'Giris Bilgileri Uygun Degil!';
//         }

//     }

//     document.getElementById('message').innerHTML = message;

// }



/* 
   
   1- Dizi tanimlama
   2- Dizi ye eleman ekleme
   3- Dizi elemanlarini degistirme
   4- Dizi Filtreleme
   5- Dizi silme
   6- Dizi elemanlari arasinda donme

*/

/* 
     Terminal uzerinden web sayfasindan bagimsiz olarak js dosyalarini calistirip console.log ile terminal ekraninda ciktilari gorebilirsin
     node array.js
*/

let ad = 'Seda';
let ad1 = 'oguzhan';
let ad2 = 'Kivanc';
let ad3 = 'Pamuk';
const ad4 = 'Rocky';

var soyad = 'Ozgen';
yas = 5;

// console.log(ad4);
ad3 = 'asd';
//console.log(ad3);

// sabit dizi olusturma
const arr = ['seda', 'kivanc', 'oguzhan', 9];
//index'i 2 olan dizinin degerini degistirme 
// dizi elemanlarina index uzerinden erisiyoruz
// arr[index] seklinde dizi degerine erisiyoruz
arr[2] = 'Pamuk';
// push ile en sona yeni eleman ekliyoruz
arr.push('1');
arr.push('2');
// Mevcut dizi de araya yeni deger ekleme
arr.splice(1, 0, 'osman zeki', 'Doga');

// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr.toString());
console.log(arr);
// splice methodu ile dizi nin icerisinden belirtilen indexten itibaren belirtilen sayi kadar elemani siler
// arr.splice(baslangic indexi, silinecek kayit sayisi)
// arr.splice(1, 2);
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift('Seda');
// console.log(arr);


// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);
    
// }
// console.log('------------');
// for (let index =  arr.length -1 ; index >= 0; index--) {
//     const element = arr[index];
//     console.log(element);
    
// }
// console.log('------------');

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     if (element=='Pamuk') {
//         console.log(element);
//     }
  
    
// }
// console.log('------------');

// break ile herhangi bir donguden cikabiliyorsun
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
   
//     console.log(element);
//     if (element=='Pamuk') {
//         break;
//     }
    
// }

//forEach ile dizi icerisinde index olmadan dogrudan dizi elemanlarina eriserek islem yapabilirsin
arr.forEach(a => {
    console.log(a);
});

console.log('------------');
const y = arr.filter(item=> item == 'Pamuk' );
// filter mevcut dizi uzerinde herhangi bir degisiklik yapmadan mevcut dizi uzerinde verilen sarti saglamasi durumunda geriye yeni bir dizi dondurur
// yani filtrelenmis elemanlari elde edersin
// donen yeni deger uzerinde mutleke undefined yada null olma durumunu kontrol et yani deger varsa islem yap
if (y && y.length > 0) {
    console.log(y);
}

console.log(arr);










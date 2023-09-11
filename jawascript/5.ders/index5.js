// console.log("ssssss")


// const rakamlar = [1, 2, 3, 4, 5]
// const car = {

//     brand: "BMW",
//     year: 2022,
//     tutar: "2500",
//     model: " İ 20",

// }
// console.log("CAR OBJESİ:", car);
// console.log("CAR OBJESİNİN MARKASI:", car.brand);
// document.getElementById("carBrand").innerHTML = car.brand;

const cicek= [{

    name:"orkide",
    color:"pembe",
},
{

    name:"papatya",
    color:"beyaz",
},
{

    name:"gül",
    color:"kırmızı",
}

];

for (let i = 0; i < cicek.length; i++) {
    console.log("i değeri:",i);
    const anlıkCicek=cicek[i]
    console.log("CİCEK[i]", cicek[i]);
    var ulElementi= document.getElementById("cicekler");
    var cicek1=document.createElement("li");
    cicek.innerHTML=
    "çiçek adı:" + anlıkCicek.name + "Çiçek rengi:" + anlıkCicek.color;
    ulElementi.appendChild(cicek1);

    
    }




var ulElementi=document.getElementById("cicekler");

var cicek1=document.createElement("li");

cicek1.innerHTML= "çiçek adı:" + cicek.name +  "çiçek rengi:" + cicek.color;

ulElementi.appendChild(cicek1);


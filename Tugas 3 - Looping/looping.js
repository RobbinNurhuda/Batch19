// Soal No. 1
console.log("LOOPING PERTAMA")
var looping = 2;
var text = " - I Love Coding"
while(looping <= 20) {
    console.log(looping + text);
    looping+=2;
}
console.log("LOOPING KEDUA")
var looping2 = 20;
var text2 = " - I Will Become A Mobile Developer"
while(looping2 >= 2) {
    console.log(looping2 + text2);
    looping2-=2;
}

console.log("\n");

// Soal No. 2
for(var angka = 1; angka <= 20; angka++){
    if ((angka % 2) == 0){
        console.log(angka + " - Berkualitas");
    } else if ((angka%3)===0){
        console.log(angka + " - I Love Coding");
    } else if ((angka%2) == 1){
        console.log(angka + " - Santai");
    }
}

console.log("\n");

// Soal No. 3
var a = "";
for(var b = 0; b < 4; b++) {
    for(var c = 0; c < 8 ; c++) {
        a += "#";
    }
    a += "\n";
}
console.log(a);

// Soal No. 4
var f = "";
for(var d = 0; d < 8; d++) {
    for(var e = 0; e < d; e++) {
        f += "#";
    }
    f += "\n";
}
console.log(f);

// Soal No. 5
var space = " ";
var pagar = "#";
var hasil = " ";
for(var i = 0 ; i < 8; i++) {
    for(var j = 0; j < 8; j++){
        if((i%2)===0){
            if((j%2)==0){
                hasil = hasil + space;
            } else {
                hasil = hasil + pagar;
            }
        } else {
            if((j%2)==0){
                hasil = hasil + pagar;
            } else {
                hasil = hasil + space;
            }
        }
    }
    hasil = hasil + " \n ";
    console.log(hasil);
    hasil = " ";
}
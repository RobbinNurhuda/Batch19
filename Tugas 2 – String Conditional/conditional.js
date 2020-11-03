
// Soal If-else
var nama = ""
var peran = ""

if(nama == "" && peran == "") {
    console.log("Nama harus diisi!")
} if(nama == "John" && peran == "") {
    console.log("Halo John, Pilih peranmu untuk memulai game!")
} else if(nama == "Jane" || peran == "Penyihir") {
    console.log("Selamat datang di Dunia Werewolf, Jane")
    console.log("Halo Penyihir Jane, kamu dapat melihat siapa yang menjadi werewolf!")
} else if(nama == "Jenita" || peran == "Guard") {
    console.log("Selamat datang di Dunia Werewolf, Jenita")
    console.log("Halo Guard Jenita, kamu akan membantu melindungi temanmu dari serangan werewolf.")
} else if (nama == "Junaedi" || peran == "Werewolf") {
    console.log("Selamat datang di Dunia Werewolf, Junaedi")
    console.log("Halo Werewolf Junaedi, Kamu akan memakan mangsa setiap malam!")
}

// Soal Switch Case
var hari = 2
var bulan = 10
var tahun = 2005

switch(bulan) {
    case 0: bulan = "Januari"; break;
    case 1: bulan = "Februari"; break;
    case 2: bulan = "Maret"; break;
    case 3: bulan = "April"; break;
    case 4: bulan = "Mei"; break;
    case 5: bulan = "Juni"; break;
    case 6: bulan = "Juli"; break;
    case 7: bulan = "Agustus"; break;
    case 8: bulan = "September"; break;
    case 9: bulan = "Oktober"; break;
    case 10: bulan = "November"; break;
    case 11: bulan = "Desember"; break;
}

var tanggal = hari + " " + bulan + " " + tahun
console.log(tanggal);
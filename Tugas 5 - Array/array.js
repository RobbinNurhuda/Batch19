//Soal No.1
console.log("Soal No. 1");
function range(startNum, finishNum) {
    startNum = typeof startNum === 'undefined' ? null : startNum;
    finishNum = typeof finishNum === 'undefined' ? null : finishNum;
    var arrNum = []

    if(startNum !== null && finishNum !== null) {
        if(startNum<finishNum){
            for(var a = startNum; a <= finishNum; a++) {
                arrNum.push(a)
            }
        } else {
            for(var a = startNum; a >= finishNum; a--) {
                arrNum.push(a)
            }
        }
        return arrNum
    } else {
        return -1;
    }
}

console.log(range(1, 10))
console.log(range(1))
console.log(range(11,18))
console.log(range(54, 50))
console.log(range())


console.log(" ")

//Soal No.2
console.log("Soal No. 2");
function rangeWithStep(startNum, finishNum, step) {
    startNum = typeof startNum === 'undefined' ? null : startNum;
    finishNum = typeof finishNum === 'undefined' ? null : finishNum;
    step = typeof step === 'undefined' ? 1 : step;
    var arrNum = []

    if(startNum !== null && finishNum !== null) {
        if(startNum<finishNum){
            for(var b = startNum; b <= finishNum; b += step) {
                arrNum.push(b)
            }
        } else {
            for(var b = startNum; b >= finishNum; b -= step) {
                arrNum.push(b)
            }
        }
        return arrNum
    } else {
        return -1;
    }
}

console.log(rangeWithStep(1, 10, 2))
console.log(rangeWithStep(11, 23, 3))
console.log(rangeWithStep(5, 2, 1))
console.log(rangeWithStep(29, 2, 4))


console.log(" ")

//Soal No.3
console.log("Soal No. 3");
function sum(startNum, finishNum, step) {
    startNum = typeof startNum === 'undefined' ? null : startNum;
    finishNum = typeof finishNum === 'undefined' ? null : finishNum;

    if(startNum === null || finishNum === null) {
        return startNum === null ? 0 : startNum;
    } else {
        var arrNum = rangeWithStep(startNum, finishNum, step)
        var sumArr = 0
        for(var a=0;a<arrNum.length;a++) sumArr += arrNum[a]
        return sumArr   
    } 
}

console.log(sum(1,10))
console.log(sum(5, 50, 2))
console.log(sum(15,10))
console.log(sum(20, 10, 2))
console.log(sum(1))
console.log(sum())


console.log(" ")

//Soal No.4
console.log("Soal No. 4");
function dataHandling(input) {
    var txtData = ""    
    for(var c = 0; c < input.length; c++) {
        // txtData += "Nomor ID: " + input[i][0] + "\n"
        // txtData += "Nama Lengkap: " + input[i][1] + "\n"
        // txtData += "TTL: " + input[i][2] + " " + input[i][3] + "\n"
        // txtData += "Hobi: " + input[i][4] + "\n"
        // txtData += "\n"

        for(var d = 0; d < 5; d++) {
            switch(d){
                case 0 : { txtData += "Nomor ID: " + input[c][d] + "\n"; break }
                case 1 : { txtData += "Nama Lengkap: " + input[c][d] + "\n"; break }
                case 2 : { txtData += "TTL: " + input[c][d]; break }
                case 3 : { txtData += input[c][d] + "\n"; break }
                case 4 : { txtData += "Hobi: " + input[c][d] + "\n\n"; break }
                default : "";
            }
        }
    }
    return txtData
}

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
] 
console.log(dataHandling(input)) 

//Soal No.5
console.log("Soal No. 5");
function balikKata(input) {
    var output = ""
    for(var e = input.length-1; e >= 0; e--) {
        output += input[e]
    }
    return output
}

console.log(balikKata("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("SanberCode")) // edoCrebnaS
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Sanbers")) // srebnaS ma I 


console.log(" ") //baris kosong

//Soal No.6
console.log("Soal No. 6");
function dataHandling2 (input) {
    var output = ""
    input.splice(1,1,"Roman Alamsyah Elsharawy")
    input.splice(2,1,"Provinsi Bandar Lampung")
    input.splice(4,1,"Pria","SMA International Metro")
    output = JSON.stringify(input)

    var bulan = input[3].split("/")    
    switch(bulan[1]){
        case "01" : { namaBulan = "Januari" ; break; }
        case "02" : { namaBulan = "Februari" ; break; }
        case "03" : { namaBulan = "Maret" ; break; }
        case "04" : { namaBulan = "April" ; break; }
        case "05" : { namaBulan = "Mei" ; break; }
        case "06" : { namaBulan = "Juni" ; break; }
        case "07" : { namaBulan = "Juli" ; break; }
        case "08" : { namaBulan = "Agustus" ; break; }
        case "09" : { namaBulan = "September" ; break; }
        case "10"  : { namaBulan = "Oktober" ; break; }
        case "11"  : { namaBulan = "November" ; break; }
        case "12"  : { namaBulan = "Desember" ; break; }
        default : namaBulan = ""
    }
    output += "\n" + namaBulan

    bulan.sort(function (value1, value2) { return value2 - value1 })
    output += "\n" + JSON.stringify(bulan)
    
    bulan = input[3].split("/")    
    output += "\n" + bulan.join("-")

    output += "\n" + input[1].slice(0,14)

    return output
}
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"]  
console.log(dataHandling2(input)) 
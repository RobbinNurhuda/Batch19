console.log("===== Soal No. 1 =====") // Soal No. 1

var input = [
     ["Bruce", "Banner", "male", 1975],
     ["Natasha", "Romanoff", "female"],
     ["Tony", "Stark", "male", 1980],
     ["Pepper", "Pots", "female", 2023]
]
function arrayToObject(input) {
    for(var i = 0; i < 4; i++) {
        var object = {}
        var tahunLahir = input[i][3]
        var tahunSekarang = new Date().getFullYear()
        if(tahunSekarang - tahunLahir > 0){
            umur = tahunSekarang - tahunLahir
        } else {
            umur = "Invalid Birth Year"
        }
        object.firstName = input[i][0]
        object.lastName = input[i][1]
        object.gender = input[i][2]
        object.age = umur

        var output = (i+1) + '. ' + object.firstName + " " + object.lastName

        console.log(output);
        console.log(object);
        console.log("\n");
    }
}
arrayToObject(input)

console.log("===== Soal No. 2 =====") // Soal No. 2

function shoppingTime(memberId, money) {
    var priceList={
      "Sepatu Stacattu": 1500000,
      "Baju Zoro": 500000,
      "Baju H&N": 250000,
      "Sweater Uniklooh": 175000,
      "Casing Handphone": 50000,
    }
    
    var hasil={
      memberId:memberId,
      money:money,
      listPurchased:[],
      changeMoney:0
    }

    var list=[];
    
    if (memberId ==='' || (memberId===undefined && money===undefined)){
      return "Mohon maaf, toko X hanya berlaku untuk member saja";
    }else if(money<50000){
      return "Mohon maaf, uang tidak cukup";
    }else if(memberId !=='' && money>50000){
      for(var i in priceList){
        if(money>=priceList[i]){
          list.push(i);
          money=money-priceList[i];
        } 
      }
    }
    hasil.listPurchased=list;
    hasil.changeMoney=money;
    return hasil
  }
  
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
  console.log(shoppingTime('82Ku8Ma742', 170000));
  console.log(shoppingTime('', 2475000));
  console.log(shoppingTime('234JdhweRxa53', 15000));
  console.log(shoppingTime());

  console.log("\n");

  console.log("===== Soal No. 3 =====") // Soal No. 3

  function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];

  }
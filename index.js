const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...

const sorter = (data, langkahSelanjutnya) => {

  let panjangData = data.length;
  let resultNamaSorter = [];
  let resultNamaAsc = [];
  let nama = [];
  let urutanNomor = 0;

  for (let i = 0; i < panjangData; i++)
  {
      nama[i] = data[i];
      urutanNomor += 1;
      
      resultNamaSorter[i] = urutanNomor+" . "+nama[i];
      resultNamaAsc[i] = nama[i]; 
  }

  // langkahSelanjutnya(data.sort());

  if(langkahSelanjutnya == sortAscending)
  {
    return langkahSelanjutnya(data.sort());
  }

  else if(langkahSelanjutnya == sortDescending)
  {
    return langkahSelanjutnya(data.reverse());
  }

  // return resultNamaSorter;
}

// console.log(sorter(names));

// const sorter = (data) => {

//   let panjangData = data.length;
//   let resultNamaSorter = [];
//   let resultNamaAsc = [];
//   let nama = [];
//   let urutanNomor = 0;

//   for (let i = 0; i < panjangData; i++)
//   {
//       nama[i] = data[i];
//       urutanNomor += 1;
      
//       resultNamaSorter[i] = urutanNomor+" . "+nama[i];
//       resultNamaAsc[i] = nama[i];
//   }


//   return {resultNamaSorter, resultNamaAsc};

// }

// console.log(sorter(names));



// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (data) => {

  let panjangData = data.length;
  let resultNamaAsc = [];
  let nama = [];

  for (let i = 0; i < panjangData; i++)
  {
      nama[i] = data[i];
      
      resultNamaAsc[i] = nama[i];
  }

  // console.log(resultNamaAsc);
  return resultNamaAsc;
}

const sortDescending = (data) => {

  let panjangData = data.length;
  let resultNamaDesc = [];
  let nama = [];

  for (let i = 0; i < panjangData; i++)
  {
      nama[i] = data[i];
      
      resultNamaDesc[i] = nama[i];
  }

  // console.log(resultNamaDesc);
  return resultNamaDesc;
}

// console.log(sorter(names, sortAscending));
// // console.log(sorter(names, sortAscending));
// console.log(sorter(names, sortDescending));

// const sortDescending = (data) => {
//   return data;
// }


// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
// const sortDescending = null;

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};

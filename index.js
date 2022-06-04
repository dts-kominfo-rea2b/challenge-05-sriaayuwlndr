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
  let nama = [];
  let urutanNomor = 0;
  let hasilSortir = "";

  for (let i = 0; i < panjangData; i++)
  {
      nama[i] = data[i];
      urutanNomor += 1;
      
      resultNamaSorter[i] = urutanNomor+" . "+nama[i];
  }

  // langkahSelanjutnya(data.sort());

  if(langkahSelanjutnya == sortAscending)
  {
    // hasilSortir = langkahSelanjutnya(data.sort());
    hasilSortir = langkahSelanjutnya(data);
    // hasilSortir = hasilSortir.reverse();
    // hasilSortir = hasilSortir.sort();
    
  return hasilSortir.reverse();

  }

  // else if(langkahSelanjutnya == sortDescending)
  else
  {
    // hasilSortir = langkahSelanjutnya(data.reverse());
    hasilSortir = langkahSelanjutnya(data);
    // hasilSortir = hasilSortir.sort();
    // hasilSortir = hasilSortir.reverse();
  return hasilSortir.sort();

  }

  // return hasilSortir;
}

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

  return resultNamaAsc = resultNamaAsc.sort();
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
  // return resultNamaDesc.reverse();
  // return resultNamaDesc.sort();
  resultNamaDesc = resultNamaDesc.sort();
  return resultNamaDesc.reverse();

}

// console.log(sortDescending(names));
// console.log(sortAscending(names));

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
  // console.log("------------");
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};

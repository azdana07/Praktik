function setTime() {
  const header = document.getElementById("header");
  header.textContent = new Date().toString();
}
setInterval(setTime, 1000);
console.log("Program Finish");

// Fungsi untuk melakukan pembagian dengan error handling
function divideNumbers(a, b) {
  try {
    // Cek apakah input a atau b adalah undefined
    if (a === undefined || b === undefined) {
      throw new Error("Inputs cannot be undefined.");
    }

    // Cek apakah kedua input adalah angka
    if (isNaN(a) || isNaN(b)) {
      throw new Error("Both inputs must be numbers.");
    }

    // Cek apakah b adalah nol (tidak bisa membagi dengan nol)
    if (b === 0) {
      throw new Error("Cannot divide by zero.");
    }

    // Lakukan pembagian jika tidak ada masalah
    let result = a / b;
    console.log(`Result: The result of ${a} / ${b} is ${result}`);
    return result;

  } catch (error) {
    // Tangkap dan tampilkan pesan kesalahan di console
    console.error("Error:", error.message);
  }
}

// Fungsi untuk mengambil input dari pengguna dan memanggil fungsi divideNumbers
function performDivision() {
  const inputA = document.getElementById("inputA").value;
  const inputB = document.getElementById("inputB").value;

  // Ubah input menjadi angka (jika valid), dan cek apakah kosong atau undefined
  const numA = inputA !== "" ? parseFloat(inputA) : undefined;
  const numB = inputB !== "" ? parseFloat(inputB) : undefined;

  // Panggil fungsi pembagian
  divideNumbers(numA, numB);
}

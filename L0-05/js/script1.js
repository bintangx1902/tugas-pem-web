function set_nama_on_alert() {
    let name, age
    name = prompt("Masukan nama Anda : ", "Masukan Nama : ")
    age = prompt('Masukan Umur Anda : ', "Masukan Umur : ")

    alert(`hallo, ${name}, umur kamu ${age}`)

    if (age >= 17 ) {
        alert("bisa buat ktp")
    } else {
        alert("bocil pulang aja")
    }
}

function ubahBG(warna) {
    document.bgColor = warna
}
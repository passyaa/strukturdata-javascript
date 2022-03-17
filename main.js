// tipe data primitif
var nama = "Kamal"
var pekerjaan = "Ngoding"
var umur = 27
console.log("Halo Nama Saya " + nama + ", Pekerjaan saya adalah " + pekerjaan + ", dan umur saya " + umur)

// tipe data Boolean
const sukses = true
const gagal = false

// tipe data number
let hasilUjianBinar = 60
hasilUjianBinar = 85
console.log(hasilUjianBinar)

// tipe data null
let nilaiA= null
console.log(nilaiA)

// tipe data undefined
let nilaiB
console.log(nilaiB)

// object
const anime = {
    nama: "one piece",
    typeOfShip: {
        firstShip: "going merry",
        secondShip: "thousand sunny"
    },
    job: [
        "pirate",
        "sailor"
    ]
}

console.log(anime.nama)
console.log(anime["typeOfShip"]["firstShip"])
console.log(anime.typeOfShip["secondShip"])

// array di dalam Object
anime.job.forEach(function(x) {
    console.log(x + " menceritakan tentang " + anime.nama)
}) 

// array with one line
const mobil = ["toyota", "BMW", "Mazda"]

// array with multiple lines
const motor = [
    "Honda",
    "Yamaha",
    "suzuki"
]

console.log(mobil)
console.log(motor)
console.log(motor.length)

// array with new keyword
const motorBaru = new Array("BMW", "kawasaki")
console.log(motorBaru)

const arrays = [mobil, motor]
console.log(arrays)

// Array push
const marvel = ["batman", "spiderman", "ironman"]
marvel.push("hulk")
console.log(marvel) 

// Array pop
marvel.pop()
console.log(marvel)

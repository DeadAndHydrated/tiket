alert("Selamat Datang di Aplikasi Tiket")

const nama = prompt("Masukkan Nama")
const umur = prompt("Masukkan Umur")

if (umur >= 13) {
    alert(`Anda Diatas 13 Tahun, Anda Diperbolehkan Masuk Studio`)
    const studio = prompt("Pilih studio: A, B, atau C")
    alert(`Tiket ${nama}, Studio ${studio}, Umur ${umur}`)
} else if (umur <= 12) {
    alert(`Anda Dibawah 13 Tahun, Anda Tidak Diperbolehkan Masuk Studio`)
}
// for(let nyawa = 3; nyawa > 0; nyawa--){
//     const angkaTebakan = prompt(`Tebakanmu :` )
//     if (angkaTebakan == angkaBenar){
//         alert(`Selamat! Tebakanmu Benar!`)
//         break
//     } else if (angkaTebakan < angkaBenar) {
//         alert(`Tebakanmu terlalu kick! Sisa nyawa: ${nyawa - 1})`)
//     } else if (angkaTebakan > angkaBenar) {
//         alert(`Tebakanmu terlalu besar! Sisa nyawa: ${nyawa - 1})`)
//     } 
//     if (nyawa == 1) {
//         alert(`Nyawamu habis! Angka yang benar adalah ${angkaBenar}`)
//     }
// }
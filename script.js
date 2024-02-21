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

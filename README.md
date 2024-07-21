# Project Setup Instructions

Setelah mengunduh proyek ini, ikuti langkah-langkah berikut untuk menjalankannya.

## Table of Contents

- [Setting Path](#setting-path)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Running the Project](#running-the-project)
- [Contact](#contact)

## Setting Path

### Backend

1. **Navigasi ke direktori Backend:**
   Buka terminal Anda dan jalankan perintah berikut untuk berpindah ke direktori `BackEnd`:
   ```sh
   cd BackEnd
2. **Install Packages:**
   Setelah berada di direktori BackEnd, jalankan perintah berikut untuk menginstal semua package yang diperlukan berdasarkan `package.json`:
   ```sh
   npm install
3. **Jalankan Server:**
   Setelah semua package terinstal, jalankan perintah berikut untuk memulai server `backend`:
   ```sh
   nodemon index

Server akan berjalan di `http://localhost:5000` (atau port yang telah Anda tentukan dalam konfigurasi).

## Frontend

1. **Buka terminal baru dan navigasi ke direktori `Frontend`:*
   Buka terminal baru (jangan tutup terminal yang sedang menjalankan backend), lalu jalankan perintah berikut untuk berpindah ke direktori FrontEnd:
   ```sh
   cd FrontEnd

2. **Install live-server secara global:**
   Jika Anda belum menginstal `live-server`, jalankan perintah berikut untuk menginstalnya secara global:
   ```sh
   npm install -g live-server

4. *Jalankan live-server:*
   Setelah live-server terinstal, jalankan perintah berikut untuk memulai server frontend:
   ```sh
   live-server

## Running the Project
Untuk menjalankan proyek ini, ikuti langkah-langkah berikut:

1. Pastikan Anda telah mengikuti langkah-langkah di bagian `Backend` dan `Frontend`.
2. **Jalankan server backend dengan perintah berikut di terminal yang telah berada di direktori `BackEnd`:**
   ```sh
   nodemon index

3. **Jalankan server frontend dengan perintah berikut di terminal yang telah berada di direktori `FrontEnd`:**
   ```sh
   live-server

## Server backend akan berjalan di `http://localhost:5000` (atau port yang telah Anda tentukan), 
## dan server `frontend` akan berjalan di `http://localhost:8080` (atau port default live-server).

const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();

// Menggunakan middleware compression untuk mengaktifkan kompresi gzip
app.use(compression());

// Menetapkan direktori statis
app.use(express.static(path.join('Webs2', 'public')));

// // Jika dijalankan diluar Github Pages, Jalankan server pada port 3000
// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
});

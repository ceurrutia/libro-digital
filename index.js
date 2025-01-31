const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;


app.use(express.static(path.join(__dirname, 'public')));

// Archivos HTML
app.get('/:file', (req, res) => {
    const file = req.params.file;
    const filePath = path.join(__dirname, 'public', file);

    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send("Archivo no encontrado");
        }
    });
});

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicia servidor
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});

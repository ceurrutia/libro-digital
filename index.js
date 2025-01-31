const express = require('express');
const dotenv = require('dotenv');
const path = require('path')

const app = express()
const PORT = process.env.URL_PORT || 3000;
dotenv.config();

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// renderizar components
app.use('/components', express.static(path.join(__dirname, 'src', 'components')));

//server

app.listen(PORT, ()=>{
    console.log(`Server listen at port ${PORT}`)
})

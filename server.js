const express = require('express');
const axios = require('axios');
const app = express();

const PORT = 7000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/nasa', async (req, res) => {
    try {
        const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=zNmzHSA6fNsy7ikmCfTXOR1yGh3rLxnhxBdpnuFI');
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data from the NASA API');
    }
});
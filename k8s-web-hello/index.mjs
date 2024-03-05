import express from 'express';
import os from 'os'

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    const helloMessage = `Updated version: Hello from the ${os.hostname()}`;
    console.log(helloMessage);
    res.send(helloMessage);
});

app.listen(PORT, () => {
    console.log(`Web server is listening ar port ${PORT}`);
});
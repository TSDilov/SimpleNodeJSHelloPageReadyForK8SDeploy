import express from 'express';
import fetch from 'node-fetch';
import os from 'os';

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    const helloMessage = `Updated version: Hello from the ${os.hostname()}`;
    console.log(helloMessage);
    res.send(helloMessage);
});

app.get("/nginx", async (req, res) => {
    const url = 'http://nginx';
    const responce = await fetch(url);
    const body = await responce.text();
    res.send(body);
});

app.listen(PORT, () => {
    console.log(`Web server is listening ar port ${PORT}`);
});
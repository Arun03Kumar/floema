// const express = require("express")
import express from 'express'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set('views',__dirname + '/views')
app.set('view engine', 'pug')

app.get('/', (re, res) => {
    res.render('index')
})

app.listen(3000, () => {
    console.log("server is running on 3000")
})
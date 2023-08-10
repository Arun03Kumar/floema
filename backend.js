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
    res.render('./pages/home')
})

app.get('/about', (re, res) => {
    res.render('./pages/about')
})

app.get('/collections', (re, res) => {
    res.render('./pages/collections')
})

app.get('/detail', (re, res) => {
    res.render('./pages/detail')
})

app.listen(3000, () => {
    console.log("server is running on 3000")
})
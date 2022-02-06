const axios = require('axios');
const cheerio = require('cheerio');
const url = 'https://medlineplus.gov/druginfo/meds/a605007.html';

function getMedicinesDetails(body) {
    const $ = cheerio.load(body);
    let para = [];
    let title = [];

    $('.section-title').each((i, el) => {
        title.push(el);
    });
    $('.section-body').each((i, el) => {
        para.push(el);
    });
    const t = title[0];
    for(let i = 0; i < title.length; i++) {
        const heading = ($(title[i]).find("h2").text());
        const body = ($(para[i]).text());
        console.log({
            heading, body
        })
    }
    console.log(title.length);
    return "";
}
async function main() {
    const result = await axios(url);
    const body = result.data;
    const how = getHow(body);
}

main();
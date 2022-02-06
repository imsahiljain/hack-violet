const axios = require('axios');
const cheerio = require("cheerio");

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
    const result = [];
    for(let i = 0; i < title.length; i++) {
        const heading = ($(title[i]).find("h2").text());
        const body = ($(para[i]).text());
        result.push({
            heading, body
        });
    }
    return result;
}
async function fetchMedicineDetails(url) {
    const result = await axios(url);
    const body = result.data;
    return getMedicinesDetails(body);
}
const url = 'https://medlineplus.gov/druginfo/meds/a605007.html';


module.exports = fetchMedicineDetails;

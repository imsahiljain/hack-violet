const axios = require('axios');

function processBody(body) {
        let pos = body.search('<a class="title" ') + 23;
        let finalUrl = "";
        while(body[pos] != '"') {
            finalUrl += body[pos];
            pos += 1;
        }
        return (`https://vsearch.nlm.nih.gov${finalUrl}`);
}

async function getMedicineUrl(medicineName) {
    const url = `https://vsearch.nlm.nih.gov/vivisimo/cgi-bin/query-meta?v%3Aproject=medlineplus&v%3Asources=medlineplus-bundle&query=${medicineName}&binning-state=group%3d%3dDrugs%20and%20Supplements&`;
    const response = await axios(url);
    return processBody(response.data);
}

module.exports = getMedicineUrl;


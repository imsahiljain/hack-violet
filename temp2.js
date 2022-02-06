const axios = require('axios');
// const url = 'https://vsearch.nlm.nih.gov/vivisimo/cgi-bin/query-meta?v%3afile=viv_EYNUDv&amp;server=pvlb7srch13&amp;v%3astate=root%7croot&amp;url=https%3a%2f%2fmedlineplus.gov%2fdruginfo%2fmeds%2fa621024.html&amp;rid=Ndoc0&amp;v%3aframe=redirect&amp;v%3aredirect-hash=822d96fce9fd4b3c5bd7955fae3203a0&amp';
const url = 'https://medlineplus.gov/druginfo/meds/a605007.html';
function findTitle(body) {
    const identifier = 'with-also';
    let start = body.search(identifier) + identifier.length + 2;
    let title = "";
    while(body[start] != '<') {
        title += body[start];
        start += 1;
    }
    return title;
}
function getPronunciation(body) {
    const identifier = 'd-pronunciation';
    let start = body.search(identifier) + identifier.length + 2;
    let result = "";
    while(body[start] != ')') {
        result += body[start];
        start += 1;
    }
    result += ")";
    return result;
}

function getWhy(body) {
    const identifier = '<div class="section-body" id="section-1">';
    const start = body.search(identifier) + identifier.length + 3;
    const end = body.search('</p>', start);
    const result = body.substring(start, end);
    return result;
}
function getHow(body) {
    const identifier = '<div class="section-body" id="section-2">';
    const start = body.search(identifier) + identifier.length + 3;
    console.log((body.match(new RegExp(identifier, "g")) || []).length); //logs 4
    // console.log(body.substring(start, start + 10));
    const result = '';
    // const end = body.search('</p>', start);
    // const result = body.substring(start, end);
    return result;
}
async function main() {
    const result = await axios(url);
    const body = result.data;
    const title = findTitle(body);
    const pronounciation = getPronunciation(body);
    const why = getWhy(body);
    const how = getHow(body);
    console.log({
        title,
        pronounciation,
        why,
        how
    })
}

main();
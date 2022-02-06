const express = require('express');
const app = express();

function getMedicineDetails(medicineName){
    const requestUrl = `https://vsearch.nlm.nih.gov/vivisimo/cgi-bin/query-meta?v%3Aproject=medlineplus&v%3Asources=medlineplus-bundle&query=${medicineName}&binning-state=group%3d%3dDrugs%20and%20Supplements&`;
    console.log(requestUrl);
    return {
        "hello": "hello"
    };
};
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/getMedicineDetails/:medicineName', (req, res) =>  {
    const data = getMedicineDetails(req.params.medicineName);
    res.send(JSON.stringify(data));
});


const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

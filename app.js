const express = require('express');
const getMedicineUrl = require('./getMedicineUrl');
const fetchMedicineDetails = require('./getMedicineDetails');
const app = express();


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/getMedicineDetails/:medicineName', async (req, res) =>  {
    try {
        const url = await getMedicineUrl(req.params.medicineName);
        const finalData = await fetchMedicineDetails(url);
        if(finalData.length === 0) {
            res.status(400).send("Something went wrong");
            return;
        }
        res.send(JSON.stringify(finalData));
    } catch (e) {
        res.status(400).send("Something went wrong");
    }

});


const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

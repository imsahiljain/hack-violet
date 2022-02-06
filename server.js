const express = require('express');
const morgan = require('morgan');
const getMedicineUrl = require('./getMedicineUrl');
const fetchMedicineDetails = require('./getMedicineDetails');
const server = express();

server.use(morgan('tiny'));

server.get('/', (req, res) => {
    res.send('Hello World!')
})

server.get('/getMedicineDetails/:medicineName', async (req, res) =>  {
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
setInterval(() => console.log("Hello world"), 10000);

const port = process.env.PORT || 3002;
server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = server;
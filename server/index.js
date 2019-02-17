const bodyParser = require('body-parser'),
    cors = require('cors'),
    express = require('express'),
    path = require('path');

const api = require('./api');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.static(path.join(__dirname, '../client/build')));

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.post('/mint', api.receiveRequest);

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(port, () => {
    /* tslint:disable-next-line:no-console */
    console.log(`App running on port ${port}.`);
});

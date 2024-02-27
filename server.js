const express = require('express');
const { connectDB } = require('./configs/db.config');
const cors = require('cors')
const router = require('./routes/api');
const app = express();
const port = 8080;

app.use(cors())
app.use(express.json());
app.use("/visitor-count/api", router);

app.get('/', (req, res) => {
    return res.status(200).send('This is visitor counter app.')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    connectDB()
});

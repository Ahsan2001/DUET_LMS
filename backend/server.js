import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";


dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// app.use(express.json());
// app.use(cookieParser);


app.get('/ahsan', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`backend app running on port ${port}`)
})
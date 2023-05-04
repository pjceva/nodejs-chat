// Project ID: ab704708-5fef-4c84-8c7e-848d41f29250
// Private Key: ef5f7155-544e-4f0e-9fa0-0f39a64b6571

const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({origin: true}));

app.post("/authenticate", async (req, res) => {
    const {username} = req.body;

    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            {username: username, secret: username, first_name: username},
            {headers: {"private-key": "ef5f7155-544e-4f0e-9fa0-0f39a64b6571 "}}
        )
        return res.status(r.status).json(r.data)
    } catch (e){
        return res.status(e.response.status).json(e.response.data);
    }

    // return res.json({username: username, secret: "sha256..."});
});

app.listen(3001);
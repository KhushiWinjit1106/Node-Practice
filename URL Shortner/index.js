const express = require("express");
const urlRoute = require('./routes/url');
const URL = require('./models/url');
const path = require('path');


const PORT = 8001;
const app = express()

const { connectToMongodb } = require("./connect");

app.use(express.json());
app.get('/:shortID', async (req, res) => {
    try {
        const shortID = req.params.shortID;
        const entry = await URL.findOneAndUpdate(
            { shortID },
            {
                $push: {
                    VisitHistory: {
                        timestamp: Date.now()
                    }
                }
            },
            { new: true }
        );
        if (entry) {
            res.redirect(entry.redirectURL);
        } else {
            res.status(404).send("Short URL not found");
        }
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
});

app.use("/url" , urlRoute);
connectToMongodb('mongodb://localhost:27017/Shorturl').then(()=> console.log("mongosb connected"));

app.set('view engine' , "ejs");
app.set("views" , path.resolve('./views'));


app.get("/test" , async(req ,res)=>{
    const allUrls = await URL.find({});
    return res.render('home')
})


app.listen(PORT , ()=> console.log("server started"));

const express = require('express')
const _ = require("lodash")
const csvtojson = require("convert-csv-to-json")
const bodyParser = require("body-parser")
const cors = require('cors')
const mongoose = require("mongoose")
const mongoDB = require("mongodb")
const collections = require("./models")
const md5 = require("md5")

const MONGO_URL = "mongodb+srv://aryan:ermal@cluster0.7ifht.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const Person = collections.Person
const Image = collections.Image

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
}).then(() => {
    console.log("connection: success");
}).catch(err => console.log(err));

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}))


app.get("/", (req, res, err) => {
    res.status(500).send(err)
})

app.get("/admin/all", (req, res) => {

    Person.find({}, (err, data) => {
        if (err) {
            console.log(data);
            res.status(500).send(err)
        }

        else {
            let newData = data.map((ele, idx) => {
                let tmp = {
                    name: ele.name,
                    image: ele.image
                }
                return tmp
            })
            res.status(200).send({ data: newData })
        }


    })

})

app.get("/admin/images", (req, res) => {
    Image.find({}, (err, data) => {
        res.status(200).send(data)
    })
})

app.post("/admin/images", (req, res) => {
    // console.log(req.body);
    const urlNew = new Image({ imageURL: req.body.url , property:req.body.type })

    urlNew.save().then(data => {
        // console.log(data);
        res.status(200).send(data)
    }).catch(err => res.status(500).send(err))

})

app.post("/admin/delImage", (req, res) => {
    // console.log(req.body);

    Image.deleteOne({ imageURL: req.body.url }, (err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(200).send("Successfully deleted")
        }
    })
})

app.post("/login", (req, res) => {
    const info = req.body

    try {
        Person.findOne({ name: info.name, password: md5(info.password) }, (err, data) => {
            if (err) {
                res.status(500).send({ err })
            }
            else if (data === null || data === undefined) {
                res.status(400).send({ message: "Username Doesn't Exist" })
            }
            else {
                res.status(200).send({ message: "Valid User" })
            }

        })
    } catch (error) {
        // console.log(error);
        res.status(500).send({ message: "error" })
    }


})


app.post("/signup", (req, res) => {

    const info = req.body

    const newEntry = new Person({
        name: info.name,
        password: md5(info.password),
        image: info.image || "none"
    })

    newEntry.save().then((data) => {
        res.status(200).send({ message: "Succefully Created a User" })
    }).catch((err) => res.status(500).send({ message: "Already exists" }))

})


const PORT = process.env.PORT || 8000

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("server running at port 8000");
    }
})



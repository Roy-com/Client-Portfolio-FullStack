const express = require("express")
const mongoose = require("mongoose")

const personSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required:true
    },
    image: {
        type: String,
    }
    
})

const imageSchema = new mongoose.Schema({
    imageURL: {
        type: String,
        required: true,
    },
    property: {
        type: String,
        required:true
    }
})

const collaborationsSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    }
})
const certificationsSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    }
})
const Person = new mongoose.model("information", personSchema)
const Image = new mongoose.model("image", imageSchema)
const Collaborations = new mongoose.model("collaborations", collaborationsSchema)
const Certifications = new mongoose.model("certifications", certificationsSchema)


module.exports = {
    Person: Person,
    Image: Image,
    Collaborations: Collaborations,
    Certifications: Certifications
}
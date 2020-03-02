const express = require('express')
const leadsRouter = express.Router()
const Leads = require('../models/Leads.js')

//get All Leads

leadsRouter.get("/", (req, res, next) => {
    leadsRouter.find((err, lead) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(lead)
    })
})

//get Lead by UserId

leadsRouter.get("/user", (req, res, next) => {
    console.log(req.user._id)
    Leads.find({ user: req.user._id }, (err, lead) => {
        console.log(lead)
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(lead)
    })
})

//add new lead

leadsRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newLead = new Leads(req.body)
    newLead.save((err, savedLead) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedLead)
    })
})

//delete Lead

leadsRouter.delete("/:leadsId", (req, res, next) => {
    Leads.findOneAndDelete(
        { _id: req.params.leadsId, user: req.user._id },
        (err, deletedLead) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted Lead: ${deletedLead.name}`)
        }
    )
})

//update Lead

leadsRouter.put("/:leadsId", (req, res, next) => {
    Leads.findOneAndUpdate(
        { _id: req.params.leadsId, user: req.user._id },
        req.body,
        { new: true },
        (err, updatedLead) =>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedLead)
        }
    )
})

module.exports = leadsRouter
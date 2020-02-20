const express = require('express')
const proposalsRouter = express.Router()
const Proposals = require('../models/proposalSheet.js')

//get all Sheets
proposalsRouter.get("/", (req, res, next) => {
    Proposals.find((err, proposal) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(proposal)
    })
})

//get Proposal by userID
proposalsRouter.get("/user", (req, res, next) => {
    Proposals.find({ user: req.user._id }, (err, proposal) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(proposal)
    })
})

//add Proposal
proposalRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newProposal = new Proposals(req.body)
    newProposal.save((err, savedProposal) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedProposal)
    })
})

//delete proposal
proposalRouter.delete("/:proposalsId", (req, res, next) => {
    Proposals.findOneAndDelete(
        { _id: req.params.proposalsId, user: req.user._id },
        (err, deletedProposal) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully Deleted Proposal: ${deletedProposal.title}`)
        }
    )
})

//Update Proposal

proposalsRouter.put('/:proposalsId', (req, res, next) => {
    Proposals.findOneAndUpdate(
        { _id: req.params.proposalsId, user: req.user._id },
        req.body,
        { new: true },
        (err, updatedProposals) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedProposals)
        }
    )
})

module.exports = proposalsRouter
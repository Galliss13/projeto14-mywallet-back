import db from "../../db.js"

export async function getMovements(req, res) {
    try {
        const userMoviments = await db.collection("transactions").find({user:req.user.email}).toArray()
        res.status(200).send(userMoviments)
    } catch (err) {
        res.status(500).send(err.message)
    }

    res.status(200).send(transactions)
}

export async function postMoviments(req, res) {
    try {
        await db.collection("transactions").insertOne({
            user: req.user.email,
            transactions: req.body
        })
    } catch(err) {
        res.sendStatus(500)
    }
}
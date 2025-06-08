const express = require("express");
const app = express();

const users = [
    {
        name: "Jake",
        eyes: [
            {
                healthy: false
            }
        ]
    }
]

app.use(express.json())

// GET
app.get("/", function(req, res){
    const manishOfEyes = users[0].eyes;
    const numberOfEyes = manishOfEyes.length;
    let numberOfHelthyEyes = 0;

    for(let i = 0; i < manishOfEyes.length; i++){
        if(manishOfEyes[i].healthy){
            numberOfHelthyEyes = numberOfHelthyEyes + 1;
        }
    }

    const numberOfUnHealthy = numberOfEyes - numberOfHelthyEyes;
    res.json(
        {
            numberOfEyes,
            numberOfHelthyEyes,
            numberOfUnHealthy
        }
    )
})

// POST
app.post("/", function(req, res){
    const isHealthy = req.body.isHealthy;

    users[0].eyes.push(
        {
            healthy: isHealthy
        }
    )
    res.json(
        {
            msg: "is done with post req"
        }
    )
})

// PUT
app.put("/", function(req, res){
    for(i = 0; i < users[0].eyes.length; i++){
        users[0].eyes[i].healthy = true
    }

    res.json(
        {
            msg: "Put is done!"
        }
    )

})

// DELETE
app.delete("/", function(req, res){
    const newEyes = [];
    for(let i = 0; i < users[0].eyes.length; i++){
        if(users[0].eyes[i].healthy){
            newEyes.push({
                healthy: true
            })
        }
    }

    users[0].eyes = newEyes;
    res.json(
        {
            msg: "Delete request is done!"
        }
    )
})

app.listen(3000)
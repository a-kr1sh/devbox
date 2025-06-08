// in this file has users signin/users endpoint
// have 2 endpoint => {(signin), (users)}

const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "12345778"

const app = express();
app.use(express.json());

ALL_USERS = [
    {
        username: "heythere1@gmail.com",
        password: "12234",
        name: "heythere1"
    },
    {
        username: "heythere2@gmail.com",
        password: "879766",
        name: "heythere2"
    },
    {
        username: "heythere3@gmail.com",
        password: "56464",
        name: "heythere3"
    }
];


function userExists(username, password) {
    let userExists = false;
    for (let i = 0; i < ALL_USERS.length; i++) {
        if (ALL_USERS[i].username == username && ALL_USERS[i].password == password) {
            userExists = true;
        }
    }
    return userExists;
}


app.post("/signin", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: "user doesn't exist in our memory db",
        });
    }

    var token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token,
    });
});


app.get("/Users", function (req, res) {
    const authHeader = req.headers.authorization;

    // Check if the Authorization header exists
    if (!authHeader) {
        return res.status(401).json({ error: "Authorization header missing" });
    }

    // Optional: check if it starts with "Bearer "
    const token = authHeader.startsWith("Bearer ")
        ? authHeader.split(" ")[1]
        : authHeader;

    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;

        const otherUsers = ALL_USERS.filter(user => user.username !== username);

        return res.json({ users: otherUsers });
    } catch (err) {
        return res.status(403).json({ error: "Invalid token" });
    }
});


app.listen(3000);
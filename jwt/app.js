const secretkey = 'shhhhh'
const express = require("express");
const { Model } = require('objection');
const { Addusers, Users } = require('./model')
const bodyparser = require("body-parser")
const app = express();
const mysql = require("mysql")
const knex = require("./knex");
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken');
const { authjwt } = require('./middleware')


app.use(bodyparser.urlencoded({ extended: false }))
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, x-requested-with");
    next();
})
app.use(bodyparser.json())

Model.knex(knex)


app.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const results = await Users.query()
            .findOne({ email: email })
        if (results) {
            res.json({
                stauts: false,
                message: "error"
            })
            return
        }

        const hash = await bcrypt.hash(password, 10)
        const user = await Users.query().insert({
            name: name,
            email: email,
            password: hash
        })
        var token = jwt.sign({ id: user.id }, secretkey);
        res.json({
            user,
            status: true,
            message: "signup succesfuly",
            Token: token

        });
        console.log(user);
    } catch (error) {
        res.json({
            message: "User not registerd"
        })
    }



})
app.get('/signupshow', authjwt, async (req, res) => {
    const data = await Users.query();
    res.json(data);
});

//--------------------------------login------------------------------------------
app.post('/login', async (req, res) => {

    try {
        const { email, password } = req.body
        const user = await Users.query()
            .findOne({ email: email });
        console.log(user);
        if (user) {

            const validpass = await bcrypt.compare(password, user.password)
            console.log(validpass);
            if (validpass) {
                var token = jwt.sign({ id: user.id }, 'shhhhh');
                res.json({
                    status: true,
                    message: "succesfuly login",
                    Token: token,
                    user

                });
            } else {

                res.json({
                    message: "wrong password"
                })
            }
        } else {

            res.json({
                status: false,
                message: "Email not registered with us"
            })
        }
    } catch (e) {
        console.log(e);
        res.json({
            status: false,
            message: "something wrong"
        })
    }

})


//------------------------------insert adduser  ---------------------
app.post('/users', async (req, res) => {
    try {
        const users = await Addusers.query()
            .where('email', req.body.email)
        if (users) {
            res.json({
                message: "User Is already"
            })
            return
        }
        const useradd = await Addusers.query().insert({
            name: `${req.body.name}`,
            email: `${req.body.email}`
        });
        console.log(useradd);
        if (!useradd) {
            return res.json({
                message: "not inserted"
            })
        } return res.json({
            messsage: "user already In"
        });

    } catch {
        res.json({
            message: "error"
        })
    }


})

//----------------------get adduser---------------------
app.get('/usersshow', async (req, res) => {
    const addusers = await Addusers.query();
    res.json(addusers)
})
//----------------------get by id----------------------
app.get('/usersshow/:id', async (req, res) => {
    const users = await Addusers.query().findById(req.params.id);
    res.json(users)

})
//---------------------update--------------------------
app.put('/usersshow/:id', async (req, res) => {
    const userupdate = await Addusers.query()
        .findById(req.params.id)
        .patch({
            name: `${req.body.name}`,
            email: `${req.body.email}`

        });
    console.log(userupdate);
    res.json(userupdate)
})
//-------------------------delete---------------------------
app.delete('/usersshow/:id', async (req, res) => {
    const numDeleted = await Addusers.query().deleteById(req.params.id);
    return res.json({
        message: "delete user"
    })
})





app.listen(5001, () => {
    console.log("server started port 5001");
})
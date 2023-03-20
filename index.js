//------------------------------insert data ---------------------
// app.post('/users', async (req, res) => {
//     // db.query('')
//     const [users] = await knex.raw(`SELECT email From addusers WHERE email = "${req.body.email}"`)
//     if (users.length) {
//         return res.json({ err: "User Is already" })
//     }
//     const useradd = await knex.raw(`INSERT INTO addusers(name,email) VALUES("${req.body.name}","${req.body.email}")`)
//     console.log(useradd);
//     if (!useradd.length) {
//         return res.json({ err: "not insert" })
//     }
//     return res.json("user already In");
// })

/*-----get Addusers data by knex.raw----*/
//  app.get('/usersshow', async (req, res) => {
//      const usershow = await knex.raw(`SELECT id,name,email From addusers`)
//      res.json(usershow[0])
//  })

//----------------------------------get a user by id------------------
// app.get('/usersshow/:id', async (req, res) => {
//     const userid = await knex.raw(`SELECT id,name,email From addusers WHERE id = "${req.params.id}"`)
//     let user = {}
//     if (userid[0].length) {
//         user = userid[0][0]
//     }
//     res.json(user)
// })

//---------------------------------------update------------------------------
// app.put('/usersshow/:id', async (req, res) => {
//     const userupdate = await knex.raw(`UPDATE addusers SET name="${req.body.name}" , email="${req.body.email}" WHERE id = "${req.params.id}"`)
//     console.log(userupdate);
//     res.json(userupdate)
// })

//---------------------------------------delete------------------------------
// app.delete('/usersshow/:id', async (req, res) => {
//     const deleteuser = await knex.raw(`DELETE From addusers WHERE id = "${req.params.id}"`)
//     return res.json("delete")
// })

//-------------------------------------signup---------------------------------
//app.post('/signup', async (req, res) => {
    // db.query('') 
    //const [results] = await knex.raw(`SELECT email From users WHERE email = "${req.body.email}"`)
   // if (results.length) {
    //    return res.json({ err: "User Is already registered" })
    //}
    //const postmaninsert = await knex.raw(`INSERT INTO users(name,email,password) VALUES("${req.body.name}","${req.body.email}","${req.body.password}")`)
//     console.log(user);
//     if (!user.length) {
//         return res.json({ err: "not insert" })
//     }
//     return res.json("user registerd");

// })
// app.get('/signupshow', async (req, res) => {
//     const data = await knex.raw(`SELECT name,email,password From users`)
//     res.send(...data, data);
// });

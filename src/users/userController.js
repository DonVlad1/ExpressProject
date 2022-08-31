const Users = require("./userModel");

exports.listUsers = async (req, res) =>
{
    try
    {
        res.status(200).send(await Users.find({}))
    } catch (error)
    {
        console.log("Failed to list items")
        console.log(error)
    }

}


exports.userDeleteOne = async (req, res) =>
{
    try
    {
        await Users.deleteOne({ name: req.body.name, age: req.body.age })
        res.status(200).send(await Users.find({}))
    } catch (error)
    {

        res.status(200).send(console.log("Failed to list items"))
        console.log(error)
    }

}

exports.userEdit = async (req, res) =>
{
    try
    {
        await Users.updateOne({ name: req.body.name, age: req.body.age }, { name: req.body.nameR, age: req.body.ageR })
        res.status(200).send(await Users.find({}))
    } catch (error)
    {

        res.status(200).send(console.log("Failed to list items"))
        console.log(error)
    }

}


exports.addUser = async (req, res) =>
{
    try
    {
        if (req.body.name && req.body.age)
        {

            await Users.create({ name: req.body.name, age: req.body.age })
            res.status(200).send(await Users.find({}))
        }
        else
        {
            console.log("no name or age found")
            res.status(400).send({ error: "no name or age found" })
        }
    } catch (e)
    {
        console.log("error in add User")
        res.status(500).send({ error: "internal server error" })
        console.log(e)

    }
}
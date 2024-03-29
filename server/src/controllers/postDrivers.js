const { Driver, Team } = require('../db')

const postDrivers = async (req, res) => {
    try {
        const { name, surname, description, image, nationality, dob, teams } = req.body;

        if(![name, surname, description, image, nationality, dob].every(Boolean)) return res.status(401).json({ massage: "Faltan datos" });

        
        const newDriver = await Driver.create({
            name, surname, description, image, nationality, dob  
        })
        
        await newDriver.addTeams(teams);
        return res.status(200).json(newDriver);

    }catch(error) {
        console.log(error)
    }
}

module.exports = postDrivers; 
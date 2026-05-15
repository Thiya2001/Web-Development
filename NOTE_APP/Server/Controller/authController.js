const db = require("../db");
const bctypt = require("bcryptjs");

const register = async (req, res) => {
    try {
        const {username,password,email,contact} = req.body;
        const profile_image = null;
        if(!username || !password || !email) {
            return res.status(400).json({message: "USername, email and password are required."})
        }
        //Check user is already exists by username or email
        const [existingUser] = await db.query("SELECT * FROM users WHERE username=? or EMAIL=?", [username, email]);
        if(existingUser.length > 0) {
            return res.status(400).json({message: "Username or email already existed"});
        }

        //hashed password
        const hashedPassword = await bcrypt.hash(password, 10);

        //Store User data to DB
        const sql = "INSERT INTO users (username,email,contact,password,profile_image) VALUES (?,?,?,?,?)";
        await db.query("", [username,email,contact||null,hashedPassword,profile_image])
        res.status(201).json({message:"User Registered Successfully.!"});
    } catch (error) {
        res.status(500).json({message:"Server Error ",error: error.message});
    }
};

module.exports = { register };

import User from "../models/UserModel.js";
import argon2 from "argon2";

export const Login = async (req, res) =>{
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        if (!user) return res.status(404).json({ msg: "User Tidak Ditemukan" });
        const match = await argon2.verify(user.password, req.body.password);

        if (!match) return res.status(400).json({ msg: "Password Salah" });
        req.session.userId = user.uuid;
        const { uuid, name, email, role } = user;
        res.status(200).json({ uuid, name, email, role });
    } catch (err) {
        res.status(500).json({ msg: "Error during login", error: err.message });
        console.log(err);
    }
};

export const Me = async (req, res) =>{
    if(!req.session.userId){
        return res.status(401).json({msg : "Mohon Login Ke Akun Anda"});
    }
    const user = await User.findOne({
        attributes: ['uuid', 'name', 'email', 'role'],
        where : {
            uuid: req.session.userId
        }
    });
    if(!user) return res.status(404).json({msg : "User Tidak Ditemukan"});
    res.status(200).json(user);
}

export const logOut = (req, res) => {
    req.session.destroy((Err)=>{
        if(Err) return res.status(400).json({msg: "Tidak Dapat logOut"})
            res.status(200).json({msg:"Anda Telah logOut"});
    })
}

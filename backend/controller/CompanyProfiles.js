import CompanyProfile from "../models/CompanyProfileModel.js";
import Service from "../models/ServiceModel.js";
import User from "../models/UserModel.js";

export const getCompanyProfiles = async (req, res) => {
    try {
        const response = await CompanyProfile.findAll({
            attributes: ['uuid', 'name', 'address', 'phone'],
            include: [{
                model: User,
                attributes: ['name', 'email']
            }]
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const getCompanyProfileById = async (req, res) => {
    try {
        const profile = await CompanyProfile.findOne({
            where: {
                uuid: req.params.id
            },
            include: [{
                model: Service,
                attributes: ['uuid', 'name', 'price', 'details']
            }, {
                model: User,
                attributes: ['name', 'email']
            }]
        });
        if (!profile) return res.status(404).json({ msg: "Data tidak ditemukan" });
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const createCompanyProfile = async (req, res) => {
    const { name, address, phone } = req.body;
    try {
        await CompanyProfile.create({
            name: name,
            address: address,
            phone: phone,
            userId: req.userId
        });
        res.status(201).json({ msg: "Company Profile Created Successfully" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const updateCompanyProfile = async (req, res) => {
    try {
        const profile = await CompanyProfile.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if (!profile) return res.status(404).json({ msg: "Data tidak ditemukan" });
        const { name, address, phone } = req.body;
        await CompanyProfile.update({ name, address, phone }, {
            where: {
                id: profile.id
            }
        });
        res.status(200).json({ msg: "Update Company Profile Sukses" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const deleteCompanyProfile = async (req, res) => {
    try {
        const profile = await CompanyProfile.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if (!profile) return res.status(404).json({ msg: "Data tidak ditemukan" });
        await CompanyProfile.destroy({
            where: {
                id: profile.id
            }
        });
        res.status(200).json({ msg: "Delete Company Profile Sukses" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

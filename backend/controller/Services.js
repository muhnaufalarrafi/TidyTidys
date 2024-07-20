import Service from "../models/ServiceModel.js";
import CompanyProfile from "../models/CompanyProfileModel.js";
import { Op } from "sequelize";

export const getServices = async (req, res) => {
    try {
        let response;
        if (req.role === "admin") {
            response = await Service.findAll({
                attributes: ['uuid', 'name', 'price', 'details'],
                include: [{
                    model: CompanyProfile,
                    attributes: ['name', 'address', 'phone']
                }]
            });
        } else if (req.role === "mitra") {
            response = await Service.findAll({
                attributes: ['uuid', 'name', 'price', 'details'],
                where: {
                    companyId: req.userId
                },
                include: [{
                    model: CompanyProfile,
                    attributes: ['name', 'address', 'phone']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const getServiceById = async (req, res) => {
    try {
        const service = await Service.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if (!service) return res.status(404).json({ msg: "Data tidak ditemukan" });
        let response;
        if (req.role === "admin" || req.role === "mitra") {
            response = await Service.findOne({
                attributes: ['uuid', 'name', 'price', 'details'],
                where: {
                    id: service.id
                },
                include: [{
                    model: CompanyProfile,
                    attributes: ['name', 'address', 'phone']
                }]
            });
        } else {
            response = await Service.findOne({
                attributes: ['uuid', 'name', 'price', 'details'],
                where: {
                    [Op.and]: [{ id: service.id }, { companyId: req.userId }]
                },
                include: [{
                    model: CompanyProfile,
                    attributes: ['name', 'address', 'phone']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const createService = async (req, res) => {
    const { name, price, details } = req.body;
    try {
        await Service.create({
            name: name,
            price: price,
            details: details,
            companyId: req.userId
        });
        res.status(201).json({ msg: "Service Created Successfully" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const updateService = async (req, res) => {
    try {
        const service = await Service.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if (!service) return res.status(404).json({ msg: "Data tidak ditemukan" });
        const { name, price, details } = req.body;
        if (req.role === "admin" || req.role === "mitra") {
            await Service.update({ name, price, details }, {
                where: {
                    id: service.id
                }
            });
        } else {
            if (req.userId !== service.companyId) return res.status(403).json({ msg: "Akses Terlarang" });
            await Service.update({ name, price, details }, {
                where: {
                    [Op.and]: [{ id: service.id }, { companyId: req.userId }]
                }
            });
        }
        res.status(200).json({ msg: "Update Service Sukses" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const deleteService = async (req, res) => {
    try {
        const service = await Service.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if (!service) return res.status(404).json({ msg: "Data tidak ditemukan" });
        if (req.role === "admin" || req.role === "mitra") {
            await Service.destroy({
                where: {
                    id: service.id
                }
            });
        } else {
            if (req.userId !== service.companyId) return res.status(403).json({ msg: "Akses Terlarang" });
            await Service.destroy({
                where: {
                    [Op.and]: [{ id: service.id }, { companyId: req.userId }]
                }
            });
        }
        res.status(200).json({ msg: "Delete Service Sukses" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

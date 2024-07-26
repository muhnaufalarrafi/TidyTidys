// controller/Mitra.js
export const getMitra = async (req, res) => {
    try {
        const mitra = {}; // Replace with actual logic
        res.status(200).json(mitra);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

// controller/Tracking.js
export const getTracking = async (req, res) => {
    try {
        const tracking = {}; // Replace with actual logic
        res.status(200).json(tracking);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

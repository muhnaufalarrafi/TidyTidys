// controller/SupportRequests.js
export const getSupportRequests = async (req, res) => {
    try {
        const requests = {}; // Replace with actual logic
        res.status(200).json(requests);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

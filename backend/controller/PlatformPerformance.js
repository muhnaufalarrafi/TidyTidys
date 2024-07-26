// controller/PlatformPerformance.js
export const getPlatformPerformance = async (req, res) => {
    try {
        // Logic to get platform performance data
        const performanceData = {}; // Replace with actual logic
        res.status(200).json(performanceData);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

// controller/OrderStatus.js
export const getOrderStatus = async (req, res) => {
    try {
        const orderStatus = {}; // Replace with actual logic
        res.status(200).json(orderStatus);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

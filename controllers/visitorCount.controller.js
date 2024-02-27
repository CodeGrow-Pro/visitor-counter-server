const moment = require('moment');
const VisitorCountModel = require('../models/visitorCount.model');

// Function to get visitor counts for the current and last month
const getVisitorCount = async (req, res) => {
    try {
        // Get the current date using moment
        const today = moment();

        // Calculate the date range for the current month
        const firstDayOfMonth = moment(today).startOf('month');
        const lastDayOfMonth = moment(today).endOf('month');

        // Calculate the date range for the previous month
        const firstDayOfLastMonth = moment(today).subtract(1, 'month').startOf('month');
        const lastDayOfLastMonth = moment(today).subtract(1, 'month').endOf('month');

        // Query for the current month's user visits
        const currentMonthVisits = await VisitorCountModel.countDocuments({
            createdAt: { $gte: firstDayOfMonth, $lte: lastDayOfMonth },
        });

        // Query for the previous month's user visits
        const lastMonthVisits = await VisitorCountModel.countDocuments({
            createdAt: { $gte: firstDayOfLastMonth, $lte: lastDayOfLastMonth },
        });

        // Send the response with visitor counts
        return res.status(200).json({
            success: true,
            currentMonthVisits,
            lastMonthVisits,
        });

    } catch (error) {
        // Log and handle errors
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
};

// Function to increment the visitor count
const visitorCountIncrement = async (req, res) => {
    try {
        // Create a new VisitorCountModel document with count set to 1
        await VisitorCountModel.create({ count: 1 });

        // Send the response indicating success
        return res.status(201).json({
            success: true,
            message: 'Visitor Count Incremented.',
        });
    } catch (error) {
        // Log and handle errors
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
};

// Export the functions for use in other files
module.exports = {
    getVisitorCount,
    visitorCountIncrement,
};

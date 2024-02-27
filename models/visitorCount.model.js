const mongoose = require('mongoose');

// Define the schema for the VisitorCount model
const visitorCountSchema = mongoose.Schema({
    // Location of the visitor (optional, default is null) : this for future use
    location: {
        type: String,
        default: null,
    },
    // Count of the visitors (default is 1)
    count: {
        type: Number,
        default: 1,
    },
}, {
    // Enable timestamps to automatically add createdAt and updatedAt fields
    timestamps: true,
});

// Create and export the VisitorCount model using the defined schema
module.exports = mongoose.model('VisitorCount', visitorCountSchema);

// Simple test to verify environment variable loading
require('dotenv').config();
console.log('PORT from environment:', process.env.PORT);
console.log('PORT parsed as integer:', parseInt(process.env.PORT || "5000", 10));
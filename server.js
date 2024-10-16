const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost:27017/sports-booking-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

// Define the schemas and models
const bookingSchema = new mongoose.Schema({
  center: String,
  sport: String,
  court: Number,
  timeSlot: String,
  date: String,
});

const Booking = mongoose.model('Booking', bookingSchema);

// API to get bookings for a specific center, sport, and date
app.get('/bookings', async (req, res) => {
  const { center, sport, date } = req.query;
  const bookings = await Booking.find({ center, sport, date });
  res.json(bookings);
});

// API to create a new booking
app.post('/bookings', async (req, res) => {
  const { center, sport, court, timeSlot, date } = req.body;

  // Check if the booking already exists for the same court and time slot
  const existingBooking = await Booking.findOne({ center, sport, court, timeSlot, date });
  if (existingBooking) {
    return res.status(400).json({ message: 'This time slot is already booked' });
  }

  const booking = new Booking({ center, sport, court, timeSlot, date });
  await booking.save();
  res.json(booking);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


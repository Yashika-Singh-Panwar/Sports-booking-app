const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/sports-booking-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  const bookingSchema = new mongoose.Schema({
    center: String,
    sport: String,
    court: Number,
    timeSlot: String,
    date: String,
  });

  const Booking = mongoose.model('Booking', bookingSchema);

  const newBooking = new Booking({
    center: 'Indiranagar',
    sport: 'Badminton',
    court: 1,
    timeSlot: '10:00-11:00',
    date: '2024-10-16',
  });

  newBooking.save().then(() => {
    console.log('Sample booking created');
    mongoose.connection.close();
  });
})
.catch(err => console.error('Could not connect to MongoDB', err));

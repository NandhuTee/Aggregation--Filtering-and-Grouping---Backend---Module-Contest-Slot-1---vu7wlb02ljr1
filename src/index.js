const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const studentController = require('../controllers/studentController');

dotenv.config();

//connect to DB
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

const url = process.env.DATABASE_URL;
mongoose.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  async () => {
    await studentController.seedStudents();
    console.log('connected to DB');
  }
);

app.listen(3000, () => console.log('Server running......'));

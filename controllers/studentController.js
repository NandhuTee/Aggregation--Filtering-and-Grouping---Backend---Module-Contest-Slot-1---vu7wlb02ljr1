const Student = require('../models/studentModel');

const seedStudents = async () => {
  try {
    const students = [
      { name: 'Alice', age: 20, score: 85 },
      { name: 'Bob', age: 22, score: 78 },
      { name: 'Charlie', age: 20, score: 92 },
      { name: 'David', age: 21, score: 75 },
    ];

    await Student.insertMany(students);
    console.log('Sample students seeded successfully.');
  } catch (error) {
    console.error('Error seeding students:', error);
  }
};

const filterAndGroupStudents = async (req, res) => {
  try {
    // TODO: Implement the logic to filter and group students based on specific criteria
    // 1. Define your filtering criteria for students
    //    - Example: Find students with a score greater than or equal to 80
    // 2. Group the filtered students by a specific attribute
    //    - Example: Group them by 'age'
    // 3. Calculate the count or any other aggregations needed
    // 4. Retrieve the result and prepare it for the response
    // TODO: Execute the logic to filter and group students
    // TODO: Respond with the grouped result
  } catch (error) {
    // Handle errors by responding with a 500 Internal Server Error
    res.status(500).json({ message: 'Internal server error', error });
  }
};

module.exports = {
  filterAndGroupStudents,
  seedStudents,
};

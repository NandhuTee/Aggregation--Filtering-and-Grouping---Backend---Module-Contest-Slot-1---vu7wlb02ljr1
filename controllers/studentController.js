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
    const result = await Student.aggregate([
      // Step 1: Filter students with a score >= 80
      { $match: { score: { $gte: 80 } } },
      
      // Step 2: Group students by age and count them
      {
        $group: {
          _id: '$age', // Grouping by age
          students: { $push: '$$ROOT' }, // Push all student details into an array
          count: { $sum: 1 } // Count number of students in each group
        }
      },

      // Step 3: Sort by age (ascending order)
      { $sort: { _id: 1 } }
    ]);

    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error('Error filtering and grouping students:', error);
    res.status(500).json({ message: 'Internal server error', error });
  }
};

module.exports = {
  filterAndGroupStudents,
  seedStudents,
};

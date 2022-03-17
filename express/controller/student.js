const studentsData = [
  { id: 1, name: "Imran", age: 23, address: "Dhaka", phone: "0178989898" },
];

exports.getAllStudents = (req, res) => {
  try {
    res.send(studentsData);
  } catch (err) {
    console.log(err);
  }
};

exports.addStudent = (req, res) => {
  const { name, age, address, phone } = req.body;
  const newStudent = {
    id: studentsData.length + 1,
    name,
    age,
    address,
    phone,
  };
  studentsData.push(newStudent);
  res.status(201).send(newStudent);
};

exports.updateStudent = (req, res) => {
  const { id } = req.params;
  const index = studentsData.findIndex(
    (student) => student.id === parseInt(id)
  );
  studentsData[index] = {
    ...studentsData[index],
    ...req.body,
  };
  console.log(studentsData);
  res.send(studentsData[index]);
};

exports.deleteStudent = (req, res) => {
  const { id } = req.params;
  const index = studentsData.findIndex((student) => student.id === id);
  studentsData.splice(index, 1); // let arr=[1,7,8,9,10]; arr.splice(2,1); arr=[1,7,9,10];
  res.send(studentsData);
};

//import statements
const express = require("express");
const multer = require("multer");
const path = require("path");

//config
const port = process.env.PORT || 8000;

//set the storage engine
const storage = multer.diskStorage({
  destination: "../../public/uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only! or check the type of image");
  }
}

//app start
const app = express();

//app middleware

const imageUpload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

//app route
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload", imageUpload.single("image"), (req, res) => {
  res.status(201).send(req.file);
});

app.post("/uploadBulkImage", imageUpload.array("images", 4), (req, res) => {
  res.status(201).send(req.files);
});
//app listen
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

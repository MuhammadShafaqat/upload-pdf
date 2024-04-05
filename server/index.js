const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());

const cors = require('cors');
app.use(cors());
app.use("/files", express.static("files"));
const port = 5000;




mongoose.connect('mongodb://localhost:27017/upload-react-document')
  .then(() => {
    console.log('Connected to MongoDB');
    // Start your server or perform other operations that require the database connection
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

  

const multer = require('multer');

  // multer .....
//   const upload = multer({ dest: './files' });  // this will not give different names to files
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './files')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null,  uniqueSuffix + file.originalname)
    }
  })
  
  const pdfSchema =  require('./pdfSchema');
//   const PdfSchema = mongoose.model('PdfDetails');
  const upload = multer({ storage: storage })
  

app.post("/upload-files", upload.single('file'), async (req,res)=>{   //this file variable reffer to react file variable
             console.log(req.file);
             const title = req.body.title;
            //  const fileName = req.body.file.fileName;
            const fileName = req.file.filename;

            try {
                await pdfSchema.create({title:title, pdf: fileName});
                res.send({status  :"ok"})
             } catch (error) {                res.json({status:error})
             }

})
// get files from mongodb
app.get("/get-files", async (req,res)=>{
     try {
      pdfSchema.find({}).then((data) =>{
          res.send({status:"ok", data:data})
         })
     } catch (error) {
      
     }
})

//  ....

  app.get('/', async (req,res)=>{
    res.send('success');
  })


// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


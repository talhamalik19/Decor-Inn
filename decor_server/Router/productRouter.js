const express = require("express");
const productSchema = require("../Schema/productSchema");
const multer = require("multer");
const path = require('path')

const ProductRouter = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, callback)=>{
      callback(null, path.join(__dirname,'../../china_mart/public/images/'));
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    },
});
const upload = multer({ storage: storage });

try {
  ProductRouter.post("/addProduct", upload.single("prod_image"), async (req, res) => {
    const name = req.body.prod_name;
    const categories = req.body.prod_categories;
    const price = req.body.prod_price;
    const number = req.body.user_num;
    const description = req.body.prod_des;
    const image = req.file.originalname;

      const product = new productSchema({
        name: name,
        categories: categories,
        price: price,
        user_num: number,
        description: description,
        image: image,
      });
      await product.save();
      res.status(201).send({ Message: "Product Added" });
    }
  );
} catch (error) {
  res.send(error);
}

try {
  ProductRouter.get('/viewProducts', async(req, res)=>{
    const result = await productSchema.find({})
    res.send(result)
  })  
} catch (error) {
  res.send(error)
}

ProductRouter.delete('/deleteProduct/:id', async(req, res)=>{
  const id = req.params.id;
  try {
      await productSchema.findByIdAndRemove({_id:id})
      res.send({Message: 'Record Deleted'})
  } catch (error) {
      res.send(error)
  }

  
})

try {
  ProductRouter.get('/categories', async(req, res)=>{
    const cat = await productSchema.find({})
    
    res.send(cat)
  })

} catch (error) {
  res.send(error)
}

try {
  ProductRouter.put("/update/:id", upload.single("prod_image"), async (req, res) => {
    const id = req.params.id;
    const name = req.body.prod_name;
    const categories = req.body.prod_categories;
    const price = req.body.prod_price;
    const description = req.body.prod_des;

    const updateRecord = await productSchema.findByIdAndUpdate(id,{
      name: name, categories:categories, price: price, description:description
  }
     )

     updateRecord.save();
     res.send(updateRecord)
}
   )} catch (error) {
  res.send(error)
}

try {
  ProductRouter.put("/updateform/:id", upload.single("prod_image"), async (req, res) => {
    const id = req.params.id;
    const name = req.body.prod_name;
    const categories = req.body.prod_categories;
    const price = req.body.prod_price;
    const description = req.body.prod_des;

    const updateRecord = await productSchema.findByIdAndUpdate(id,{
      name: name, categories:categories, price: price, description:description
  }
     )

     updateRecord.save();
     res.send({Message: 'Record Updated'})
}
   )} catch (error) {
  res.send(error)
}

ProductRouter.post('/categoriesFilter/:value', async(req, res)=>{
  const name = req.params.value;

  const Product = await productSchema.find({categories:name})
  res.send(Product)
})
module.exports = ProductRouter;

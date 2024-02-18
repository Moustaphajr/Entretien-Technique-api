const Product = require("../Models/Product");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/Images");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

async function createProduct(req, res) {
  try {
    const { name, price, quantity } = req.body;
    const imageFileName = req.file.filename;

    const product = await Product.create({
      name,
      price,
      quantity,
      image: imageFileName,
    });
    if (product) {
      res.json({
        product: product,
        message: "product created successfully",
      });
    }
  } catch (error) {
    console.log(error);
  }
}

async function getAllProduct(req, res) {
  try {
    const product = await Product.find();
    if (product) {
      res
        .json({ product, message: "product fetched successfully" })
        .status(200);
    }
  } catch (error) {
    console.log(error);
  }
}

async function getOneProduct(req, res) {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json({ product: product, message: "product fetched successfully" });
    }
  } catch (error) {
    console.log(error);
  }
}

async function deleteProduct(req, res) {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (product) {
      res.json({ Product: Product, message: "Product deleted successfully" });
    }
  } catch (error) {
    console.log(error);
  }
}

async function updateProduct(req, res) {
  try {
    const { name, price, quantity } = req.body;
    const imageFileName = req.file.filename;

    const product = await Product.findByIdAndUpdate(req.params.id, {
      name,
      price,
      quantity,
      image: imageFileName,
    });

    if (product) {
      res.json({ product: product, message: "product updated successfully" });
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createProduct: createProduct,
  getAllProduct: getAllProduct,
  getOneProduct: getOneProduct,
  deleteProduct: deleteProduct,
  updateProduct: updateProduct,
  upload: upload,
};

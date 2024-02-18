const express = require("express");
const {
  create,
  getAllUsers,
  getOneUser,
  deleteUser,
  updateUser,
} = require("../Controller/UserController");

const {
  createProduct,
  getAllProduct,
  upload,
  getOneProduct,
  updateProduct,
  deleteProduct,
} = require("../Controller/ProductController");

const router = express.Router();

// User
router.post("/user", create);
router.get("/users", getAllUsers);
router.get("/user/:id", getOneUser);
router.delete("/user/:id", deleteUser);
router.put("/user/:id", updateUser);

// Product

router.post("/product", upload.single("image"), createProduct);
router.get("/products", getAllProduct);
router.get("/product/:id", getOneProduct);
router.put("/product/:id", upload.single("image"), updateProduct);
router.delete("/product/:id", deleteProduct);

module.exports = router;

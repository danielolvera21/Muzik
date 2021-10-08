const router = require("express").Router();

const {
  getAllMuzik,
  getMuzikById,
  createPizza,
  updatePizza,
  deletePizza,
} = require("../../controllers/muzik-controller");

// Set up GET all and POST at /api/pizzas
router.route("/").get(getAllMuzik).post(createMuzik);

// Set up GET one, PUT, and DELETE at /api/pizzas/:id
router.route("/:id").get(getMuzikById).put(updateMuzik).delete(deleteMuzik);

module.exports = router;

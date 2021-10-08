const router = require("express").Router();
const muzikRoutes = require("./muzik-routes");

// add prefix of `/muzik` to routes created in `muzik-routes.js`
router.use("/muzik", muzikRoutes);

module.exports = router;

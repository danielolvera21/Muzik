const { Muzik } = require("../models");

const muzikController = {
  getAllMuzik(req, res) {
    Muzik.find({})
      .then((dbMuzikData) => res.json(dbMuzikData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // get Muzik by id
  getMuzikById({ params }, res) {
    Muzik.findOne({ _id: params.id })
      .then((dbMuzikData) => {
        // if no muzik is found, send 404
        if (!dbMuzikData) {
          res.status(404).json({ message: "No muzik found with this ID." });
          return;
        }
        res.json(dbMuzikData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
};

module.exports = muzikController;

const { Muzik, Pizza } = require("../models");

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
      .populate({
        path: "comments",
        select: "-__v",
      })
      .select("-__v")
      .then((dbMuzikData) => res.json(dbMuzikData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // create muzik, may need to be reworded depending on how we decide to place / add muzik
  createMuzik({ body }, res) {
    Pizza.create(body)
      .then((dbMuzikData) => res.json(dbMuzikData))
      .catch((err) => res.status(400).json(err));
  },

  // Update muzik by id
  updateMuzik({ params, body }, res) {
    Muzik.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((dbMuzikData) => {
        if (!dbMuzikData) {
          res.status(404).json({ message: "No Muzik found with this ID." });
          return;
        }
        res.json(dbMuzikData);
      })
      .catch((err) => res.status(400).json(err));
  },

  // delete muzik
  deleteMuzik({ params }, res) {
    Pizza.findOneAndDelete({ _id: params.id })
      .then((dbMuzikData) => res.json(dbMuzikData))
      .catch((err) => res.json(err));
  },
};

module.exports = muzikController;

const Favorites = require("../../../../models/Favorites");

const createFavorites = async (req, res) => {
  const favorites = req.body;
  const dataId = req.body?.dataId;
  const email = req.body?.email;
  console.log(dataId, email);
  const existing = await Favorites.findOne({ dataId: dataId, email: email });

  if (existing) {
    return res.status(201).send({ message: "Already added" });
  } else {
    const result = await Favorites.create(favorites);
    res.send(result);
  }
};

module.exports = createFavorites;

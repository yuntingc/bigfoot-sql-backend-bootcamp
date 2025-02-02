const BaseController = require("./baseController");

class SightingsController extends BaseController {
  constructor(model) {
    super(model);
  }

  // Retrieve specific sighting
  async getOne(req, res) {
    const { sightingId } = req.params;
    try {
      const sighting = await this.model.findByPk(sightingId);
      return res.json(sighting);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async newSighting(req, res) {
    const { date, city, country, location_description, notes } = req.body;
    try {
      const newSighting = await this.model.create({
        date: date,
        city: city,
        country: country,
        location_description: location_description,
        notes: notes,
      });
      return res.json(newSighting);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async editSighting(req, res) {
    const { sightingId } = req.params;
    const { date, city, country, location_description, notes } = req.body;

    try {
      const editedSighting = await this.model.update(
        {
          date: date,
          city: city,
          country: country,
          location_description: location_description,
          notes: notes,
        },
        { where: { id: sightingId } }
      );
      // await editedSighting.save();
      return res.json(editedSighting);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = SightingsController;

"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn("sightings", "city", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn("sightings", "country", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.renameColumn(
        "sightings",
        "location",
        "location_description"
      ),
    ]);
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn("sightings", "city"),
      queryInterface.removeColumn("sightings", "country"),
      queryInterface.renameColumn(
        "sightings",
        "location_description",
        "location"
      ),
    ]);
  },
};

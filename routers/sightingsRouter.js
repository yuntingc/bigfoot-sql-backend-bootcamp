const express = require("express");
const router = express.Router();

class SightingsRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    // we will insert routes into here later on
    router.get("/", this.controller.getAll.bind(this.controller));
    router.get("/:sightingId", this.controller.getOne.bind(this.controller));
    router.post("/", this.controller.newSighting.bind(this.controller));
    router.put(
      "/:sightingId",
      this.controller.editSighting.bind(this.controller)
    );
    return router;
  }
}

module.exports = SightingsRouter;

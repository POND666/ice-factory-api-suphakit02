const express = require('express');
const router = express.Router();
const cameraController = require('../controllers/cameraController');
const auth = require('../middleware/auth');

router.get("/",cameraController.getCamera);
router.get("/:id",cameraController.getCameraById);

router.post("/addCamera",cameraController.addCamera);

module.exports = router;

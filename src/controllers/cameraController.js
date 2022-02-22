const Camera = require('../models/cameraModel');

exports.getCamera = async (req, res) => {

    Camera.find()
        .exec((err, result) => {
            res.status(200).json({
                msg: "OK",
                data: result
            });
        });
};

exports.getCameraById = async (req, res) => {
    Camera.find({cameraID:req.params.id})
        .exec((err, result) => {
            res.status(200).json({
                msg: "OK",
                data: result
            });
        });
};

exports.addCamera = async (req,res) =>{

    try {

        let camera = new Camera({

            cameraID: req.body.cameraID,
            name: req.body.name,
            location: req.body.location,
        });

        camera.password = await camera.hashPassword(req.body.password);

        let createCamera = await camera.save();

        res.status(200).json({
            msg: "Add Member OK",
            data: createCamera
        });

        
    } catch (error) {
        
        console.log(error);
        res.status(500).json({
            error: error
        });

    }

}


exports.updateCamera = async (req,res)=>{
    let camera = {
        name: req.body.name,
        location: req.body.location,
    };
    Camera.findByIdAndUpdate(req.params.id,camera)
    .exec((err,data)=>{
        Camera.findById(req.params.id,{"password":0})
        .exec((err,data)=>{
            res.status(200).json({
                msg: "OK",
                data: data
            });
        });
    });
};



const express = require("express");
const req = require("express/lib/request");
const router = express.Router();

    const alunosController = require("../Controllers/alunos")

    router.get("/", (req, res, next) =>
    { 
        alunosController.getAll(req, res)    
    })

    router.post("/", (req, res, next) => 
    {
        alunosController.create(req, res)
    });
    router.patch("/:id", (req, res, next) => 
    {
        alunosController.update(req, res)
    });

    router.delete("/:id", (req, res, next) => 
    {
        alunosController.delete(req, res)
    });
 
module.exports = router;
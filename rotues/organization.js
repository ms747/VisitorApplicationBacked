const Router = require("express").Router();
const Organization = require("../database/models/organization");

Router.post("/organization",(req,res)=>{
  if(req.body.organization !== ""){
    Organization.create({name:req.body.organization}).then(result => {
      res.json(result).status(201);
    }).catch(err => {
      res.json(err).status(500);
    })
  }
  else{
    res.json(err).status(500);
  }

})

Router.get("/organization",async (req,res)=>{
  try {
		const organization = await Organization.findAll();
		res.json(organization).status(200);
	} catch (e) {
		res.json(e).status(400);
	}
})

module.exports = Router;
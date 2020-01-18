const {Router} = require('express');
const devService = require('../src/services/devsService');
const routes = Router();

routes.get("/devs", async(req,resp)=>{
    let res = devService.prototype.listDevs();
    resp.json(res);
});

routes.post("/devs/:githubuser", async(req,resp)=>{
    console.log({"Corpo da requisição":req.body});
    let res = await devService.prototype.saveUser(req.params.githubuser, req.body.techs,req.body.location);
    resp.json(res);
});

module.exports = routes;
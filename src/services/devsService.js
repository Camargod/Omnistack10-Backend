const developer = require('../entities/devs');
const developerRepository = require('../repository/devsRepository');
const gitHubMicroService = require('../microservices/github');

class DevService
{
    async listDevs()
    {
        try
        {
            let devs = new developer();
            devs = await developerRepository.prototype.listDevs();
            return devs;
        }
        catch(err)
        {
            throw err;
        }
    }
    async saveUser(gitUser,techs,location)
    {
        try
        {
            let git = await gitHubMicroService.prototype.getBio(gitUser);
            let techsString = "";
            if(techs)
            {
                techsString = techs.split(",").map(e => e.trim())
            }
            let dev = new developer(git.name,git.login,git.bio,git.avatar_url,techsString,location);
            return await developerRepository.prototype.saveDev(dev);
        }
        catch(err)
        {
            throw(err);
        }
    }
} 

module.exports = DevService;


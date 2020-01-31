const devsMongoose = require("../entities/devsMongoose");
const dev = require('../entities/devs')

class DevsRepository
{
    async listDevs()
    {
         const devList = await devsMongoose.find().lean();
         return devList;
    }
    async saveDev(dev)
    {
        const devSave = await devsMongoose.create(dev);
        return devSave;
    }
}

module.exports = DevsRepository;
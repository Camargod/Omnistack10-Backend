const devsMongoose = require("../entities/devsMongoose");

class DevsRepository
{
    async listDevs(query)
    {
         let retorno = await devsMongoose.find().lean().exec();
         console.log(retorno);
         return retorno;
    }
    async saveDev(dev)
    {
        const devSave = await devsMongoose.create(dev);
        return devSave;
    }
}

module.exports = DevsRepository;
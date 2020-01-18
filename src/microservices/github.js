const axios = require('axios');
const httpRequest = axios.default;
class GitHubMicroService
{
    async getBio(gitUsername)
    {
        const apiResponse = await httpRequest.get(`https://api.github.com/users/${gitUsername}`);
        return apiResponse.data;
    }
}

module.exports = GitHubMicroService;
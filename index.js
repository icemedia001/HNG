const express = require('express');
const app = express();
const moment = require('moment');
const port = 3000;

app.get('/api', (req, res) => {
    const slackName = Oluwateniayomi;
    const track = Backend;


    // Get the current day of the week
    const currentDay = moment().format('dddd');

    // Get the current UTC time with validation of +/-2 minutes
    const currentUtcTime = moment().utc().format('YYYY-MM-DDTHH:mm:ss[Z]');

    // Replace these URLs with your actual GitHub URLs
    const githubFileUrl = 'https://github.com/icemedia001/HNG.git/index.js';
    const githubRepoUrl = 'https://github.com/icemedia001/HNG.git';

    // Create the JSON response
    const response = {
        slack_name: slackName,
        current_day: currentDay,
        utc_time: currentUtcTime,
        track: track,
        github_file_url: githubFileUrl,
        github_repo_url: githubRepoUrl,
        status_code: 200
    };

    res.status(200).json(response);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const express = require('express');
const app = express();
const moment = require('moment');
app.use(express.json());
app.get('/api', (req, res) => {
    const slackName = req.query.slack_name;
    const track = req.query.track;

    const currentDay = moment().format('dddd');

    const currentUtcTime = moment().utc().format('YYYY-MM-DDTHH:mm:ss[Z]');

    const githubFileUrl = 'https://github.com/icemedia001/HNG/blob/main/index.js';
    const githubRepoUrl = 'https://github.com/icemedia001/HNG.git';

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

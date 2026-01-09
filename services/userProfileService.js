const path = require('path');
const fs = require('fs');

// absolute path to users.json
const usersDataPath = path.join(__dirname, '..', 'data', 'users.json');

function getUserByUsername(username) {
    const rawData = fs.readFileSync(usersDataPath, 'utf-8');
    const users = JSON.parse(rawData);

    const user = users.find(u => u.username === username);
    return user || null;
}

module.exports = {
    getUserByUsername
};

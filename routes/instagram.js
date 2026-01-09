const express = require('express');
const router = express.Router();

const { getUserByUsername } = require('../services/userProfileService');

// GET /ig/:username
router.get('/:username', (req, res) => {
    const { username } = req.params;

    const user = getUserByUsername(username);

    if (!user) {
        return res.render('error', { username });
    }

    res.render('profile', { user });
});

module.exports = router;

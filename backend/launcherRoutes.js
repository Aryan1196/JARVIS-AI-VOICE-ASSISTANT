import express from 'express';
import * as launcher from './launcher.js';

const router = express.Router();

// Open application
router.post('/app', async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ error: 'App name is required' });
        }

        const result = await launcher.openApp(name);
        res.json(result);
    } catch (error) {
        console.error('App launch error:', error);
        res.status(500).json({ error: 'Failed to open application' });
    }
});

// Open website
router.post('/website', async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ error: 'Website name is required' });
        }

        const result = await launcher.openWebsite(name);
        res.json(result);
    } catch (error) {
        console.error('Website launch error:', error);
        res.status(500).json({ error: 'Failed to open website' });
    }
});

// Search on Google
router.post('/search', async (req, res) => {
    try {
        const { query } = req.body;

        if (!query) {
            return res.status(400).json({ error: 'Search query is required' });
        }

        const result = await launcher.searchAndOpen(query);
        res.json(result);
    } catch (error) {
        console.error('Search error:', error);
        res.status(500).json({ error: 'Failed to perform search' });
    }
});

// Smart launcher - auto-detects app/website
router.post('/open', async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ error: 'Name is required' });
        }

        const result = await launcher.smartLaunch(name);
        res.json(result);
    } catch (error) {
        console.error('Smart launch error:', error);
        res.status(500).json({ error: 'Failed to open' });
    }
});

// List available apps
router.get('/apps', (req, res) => {
    const result = launcher.listApps();
    res.json(result);
});

// List available websites
router.get('/websites', (req, res) => {
    const result = launcher.listWebsites();
    res.json(result);
});

export default router;

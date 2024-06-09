const db = require('../models/index');

controller = {}

controller.test_planController = require('../controllers/project/testplanController');
controller.test_caseController = require('../controllers/project/testcaseController');
controller.requirementController = require('../controllers/project/requirementController');
controller.overviewController = require('../controllers/project/overviewController');
controller.releaseController = require('../controllers/project/releaseController');
controller.moduleController = require('../controllers/project/moduleController');
controller.reportController = require('../controllers/project/reportController');

controller.getRequirement = async (req, res) => {
    try {
        const projectId = req.params.id;
        const requirements = await db.requirements.findAll({
            where: {
                project_id: projectId
            },
            raw: true
        });
        res.status(200).send({ requirements });
    } catch (error) {
        console.error('Error getting requirements:', error);
        res.status(500).send({ success: false, error });
    }
}

controller.getAllTestCase = async (req, res) => {
    try {
        const projectId = req.params.id;
        const testcases = await db.test_cases.findAll({
            where: {
                project_id: projectId
            },
            raw: true
        });
        res.status(200).send({ testcases });
    } catch (error) {
        console.error('Error getting test cases:', error);
        res.status(500).send({ success: false, error });
    }
}

module.exports = controller;
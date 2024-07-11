const controller = {};
const db = require('../../models/index');

controller.getRelease = async (req,res) => {
    try {
        const projectId = req.params.id;
        
        const [releases] = await Promise.all([
            db.sequelize.query(
                'SELECT * FROM releases WHERE project_id = ? ORDER BY release_id',
                { replacements: [projectId], type: db.sequelize.QueryTypes.SELECT}
            ),
        ]);
        res.locals.releases = releases;
        res.render('release-view', {
            title: 'Releases',
            cssFile: 'release-view.css',
            projectId: req.params.id,
            permissions: res.locals.permissions,
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
}

controller.addRelease = async (req,res) => {
    const t = await db.sequelize.transaction();
    try {
        const projectId = req.params.id;
        const { releaseName, startDate, dueDate } = req.body;

        // auto generate release_key by removing spaces, uppercase all characters, and get 10 characters if possible
        const releaseKey = releaseName.replace(/\s/g, '').toUpperCase().split('').join('').substring(0, 10);
        const releaseStatus = 'open';
        const release_progress = 0;

        // if start date is greater than due date, return error
        if (new Date(startDate) > new Date(dueDate)) {
            return res.status(400).send({ success: false, error: 'Start date must be before due date' });
        }

        // Due date must be greater than or equal to created date
        if (new Date(dueDate) < new Date()) {
            return res.status(400).send({ success: false, error: 'Due date must be greater than or equal to current date' });
        }

        // if release name is empty or too long, return error
        if (releaseName === '' || releaseName.length > 100) {
            return res.status(400).send({ success: false, error: 'Release name must be between 1 and 255 characters' });
        }

        // if release name is duplicated, return error
        const releaseChecking = await db.releases.findOne({
            where: {
                name: releaseName,
                project_id: projectId
            }
        });

        if (releaseChecking) {
            return res.status(400).send({ success: false, error: 'Release name already exists' });
        }

        const release = await db.releases.create({
            name: releaseName,
            release_key: releaseKey,
            release_status: releaseStatus,
            release_progress: release_progress,
            start_date: startDate,
            due_date: dueDate,
            project_id: projectId,
        }, { transaction: t });
        await t.commit();
        res.status(200).send({ success: true, release });
    } catch (error) {
        console.error('Error adding release:', error);
        await t.rollback();
        res.status(500).send({ success: false, error });
    }
}

controller.editRelease = async (req,res) => {
    const t = await db.sequelize.transaction();
    try {
        const { releaseId, release_status } = req.body;

        await db.releases.update({
            //name: releaseName,
            //start_date: startDate,
            //due_date: dueDate,
            release_status: release_status
        }, {
            where: {
                release_id: releaseId
            },
            transaction: t
        });

        await t.commit();
        res.status(200).send({ success: true });
    } catch (error) {
        console.error('Error editing release:', error);
        await t.rollback();
        res.status(500).send({ success: false, error });
    }
}

controller.deleteRelease = async (req,res) => {
    const t = await db.sequelize.transaction();
    try {
        const { releaseId } = req.body;

        await db.releases.destroy({
            where: {
                release_id: releaseId
            },
            transaction: t
        });

        await t.commit();
        res.status(200).send({ success: true });
    } catch (error) {
        console.error('Error deleting release:', error);
        await t.rollback();
        res.status(500).send({ success: false, error });
    }
}

module.exports = controller;
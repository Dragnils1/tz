const db = require('../db/db')

class positionController {
    
    async createPosition(req, res) {
        console.log(req.body.post);
        const {position} = req.body;
        try {
            db.query(`INSERT INTO position (positionname) VALUES ($1) RETURNING *`, [position], (err, data) => {
            if (err) 
                throw new Error(err);
            res.status(200).send(data.rows) 
        })} catch (err) {
            console.log(err);
        }
    }

    async getPositions(req, res) {
        try {
            db.query('SELECT * FROM public.position', (err, data) => {
            if (err) throw new Error(err);
            res.status(200).send(data.rows)
        });
        } catch (err) {
            console.log(err);
        }
    }

    // async getPositionsName(req, res) {
    //     try {
    //         db.query('SELECT positionname, id FROM public.position', (err, data) => {
    //         if (err) throw new Error(err);
    //         res.status(200).send(data.rows)
    //     });
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    // async getDepartment(req, res) {
    //     const positionName = req.params.positionName;
    //     db.query(`SELECT * FROM public.department where positionName = ${positionName}`, (err, data) => {
    //     if (err) 
    //         throw new Error(err);
    //     res.status(200).send(data.rows)
    //     });
    // }


    async updatePosition(req, res) {
        const position = req.params.position
        const { newPosition} = req.body;
        console.log(position, newPosition);
        try {
            db.query(`UPDATE position set positionname = '${newPosition}' WHERE positionname='${position}' RETURNING *`, (err, data) => {
            if (err) 
                throw new Error(err);
            res.status(200).send(data.rows) 
        })
        } catch (err) {
            console.log(err);
        }
    }

    async deletePosition(req, res) {
        const positionName = req.params.positionName;
        try {
            
        } catch (err) {
            console.log(err);
        }
        db.query(`DELETE FROM public.position where positionname = ${positionName} RETURNING *`, (err, data) => {
        if (err) 
            throw new Error(err);
        res.status(200).send(data.rows)
        });
    }
}

module.exports = new positionController();
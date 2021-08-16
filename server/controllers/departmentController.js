const db = require('../db/db')

class departmentController {
    
    async createDepartment(req, res) {
        console.log(req.body);
        const {department} = req.body;
        try {
            db.query(`INSERT INTO department ( departmentname) VALUES ($1) RETURNING *`, [department], (err, data) => {
            if (err) 
                throw new Error(err);
            res.status(200).send(data.rows)  
        })
        } catch (error) {
            console.log(error);
        }
    }

    async getDepartments(req, res) {
        try {
            db.query('SELECT * FROM public.department', (err, data) => {
            if (err) throw new Error(err);
            res.status(200).send(data.rows)
        });
        } catch (error) {
            console.log(error);
        }
    }

    // async getDepartmentsName(req, res) {
    //     try {
    //         db.query('SELECT departmentname, id FROM public.department', (err, data) => {
    //         if (err) throw new Error(err);
    //         res.status(200).send(data.rows)
    //     });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // async getDepartment(req, res) {
    //     const departmentName = req.params.departmentName;
    //     db.query(`SELECT * FROM public.department where departmentName = ${departmentName}`, (err, data) => {
    //     if (err) 
    //         throw new Error(err);
    //     res.status(200).send(data.rows)
    //     });
    // }


    async updateDepartment(req, res) {
        const department = req.params.department
        const {newDepartment} = req.body;
        console.log(department, newDepartment);
        try {
            db.query(`UPDATE department set departmentName = '${newDepartment}'  WHERE departmentname ='${department}' RETURNING *`, (err, data) => {
            if (err) 
                throw new Error(err);
            res.status(200).send(data.rows)
        })
        } catch (error) {
            console.log(error);
        }
    }

    async deleteDepartment(req, res) {
        const department = req.params.departmentName;
        try {
            db.query(`DELETE FROM public.department where departmentName = ${department} RETURNING *`, (err, data) => {
        if (err) 
            throw new Error(err);
        res.status(200).send(data.rows)
        });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new departmentController();
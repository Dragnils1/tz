const db = require('../db/db')

class userController {
// ${creatorName}, ${firstName}, ${secondName}, ${LastName}, ${description}, ${role}
    async createUser(req, res) {
        console.log(req.body.post);
        const {creatorName, firstName, secondName, LastName, description, role, employer, adres, departmentname, positionname, imagesrc} = req.body.post;
        try {
            db.query(`INSERT INTO customers (creatorname, firstname, secondname, lastname, description, role, employer, adres, departmentname, positionname, imagesrc) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *`, [creatorName, firstName, secondName, LastName, description, role, employer, adres, departmentname, positionname, imagesrc], (err, data) => {
            if (err) 
                throw new Error(err);
            res.status(200).send(data.rows)  
        })
        } catch (err) {
            console.log(err);
        }
        
    }

    async getUsers(req, res) {
        try {
            db.query('SELECT * FROM public.customers', (err, data) => {
            if (err) throw new Error(err);
            res.status(200).send(data.rows)
        });
        } catch (err) {
            console.log(err);
        }
        
    }

    async getUsersName(req, res) {
        try {
            db.query('SELECT firstname, id FROM public.customers', (err, data) => {
            if (err) throw new Error(err);
            res.status(200).send(data.rows)
        });
        } catch (err) {
            console.log(err);
        }
        
    }

    async getUser(req, res) {
        const id = req.params.id;
        try {
            db.query(`SELECT * FROM public.customers WHERE customers.id =${id} `, (err, data) => {
        if (err) return res.send(err);
        res.status(200).send(data.rows)
        });
        } catch (err) {
            console.log(err);
        }
        
    }


    async updateUser(req, res) {
        const id = req.params.id
        const r = {...req.body.post}
        function forIn () {
            for (var key in r) {
                        return (key + " = " + "'" + r[key] + "'" );
                    }
        }
        try {
            db.query(`UPDATE customers SET ${forIn()} WHERE id =${id} RETURNING *`, (err, data) => {
            if (err) 
                throw new Error(err);
            res.status(200).send(data.rows)  
        })
        } catch (err) {
            console.log(err);
        }
        
    }

    async deleteUser(req, res) {
        const id = req.params.id;
        try {
            db.query(`DELETE FROM public.customers where id = ${id} RETURNING *`, (err, data) => {
        if (err) 
            throw new Error(err);
        res.status(200).send(data.rows)
        });
        } catch (err) {
            console.log(err);
        }
        
    }
}

module.exports = new userController();
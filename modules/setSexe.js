var db = require('./db');

module.exports = {
    getAll() {
        return new Promise((resolve, reject) => {
            db.User.findAll().then((list) => {
                resolve(list)
            })
        })
    },
    updateSexe(body) {
        return new Promise((resolve, reject) => {
            db.User.update({
                sexe: body.sexe
            }, {
                where: {
                    id : body.id
                }
                }).then(() => {
                    resolve();
                })
        })
    }
}
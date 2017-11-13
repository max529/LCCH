var db = require('./db');
var Vote = require('../objects/vote');

var self = module.exports = {
    addVote(body,session){
        return new Promise((resolve,reject) => {
            var v = new Vote(null,session.id,body.pour,body.point, new Date());
            db.Vote.create(v.convertToSequelize()).then(() => {
                
            })
        })
    }
}
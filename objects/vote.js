
var vote = class Vote {
    /**
     * 
     * @param {Number} id 
     * @param {Number} par 
     * @param {Number} pour 
     * @param {Number} point 
     * @param {Date} date 
     */
    constructor(id,par,pour,point,date){
        this.id = id;
        this.par =par;
        this.pour = pour;
        this.point =point;
        this.date =date;
    }
    convertToSequelize(){
        return {
            id : this.id,
            par : this.par,
            pour : this.pour,
            point : this.point,
            date : this.date
        }
    }
}

module.exports = vote;
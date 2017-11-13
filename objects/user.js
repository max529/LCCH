var user = class User {
    /**
     * 
     * @param {Number} id 
     * @param {string} nomPrenom 
     * @param {Number} sexe 
     * @param {Number} point 
     * @param {string} username 
     * @param {string} password 
     * @param {string} token 
     */
    constructor(id,nomPrenom,sexe,point,username,password,token){
        this.id = id;
        this.nomPrenom = nomPrenom;
        this.sexe = sexe;
        this.point =point;
        this.username = username;
        this.password = password;
        this.token = token;
    }
    convertToSequelize(){
        return {
            id : this.id,
            nomPrenom : this.nomPrenom,
            sexe : this.sexe,
            point : this.point,
            username : this.username,
            password : this.password,
            token : this.token
        }
    }
}

module.exports = user;
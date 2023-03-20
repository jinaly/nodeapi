const { Model } = require('objection');
    


class Users extends Model {
    static get tableName() {
        return 'users';
    }
    $formatJson() {
        delete this.password
        return this
    }
}

class Addusers extends Model {
    static get tableName() {
        return 'addusers';
    }
}



module.exports = { Addusers, Users }
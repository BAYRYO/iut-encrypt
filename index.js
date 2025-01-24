const crypto = require('crypto');

'use strict';


class Encrypt {
    static sha1(password) {
        return crypto.createHash('sha1').update(password).digest('hex');
    }

    static compareSha1(password, hash) {
        return this.sha1(password) === hash;
    }
}

module.exports = Encrypt;
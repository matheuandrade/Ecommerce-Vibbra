
var jwtDecode = require('jwt-decode');

const DecodedToken = (token) => {
    var decoded = jwtDecode(token);
    return decoded;
}

export default DecodedToken;
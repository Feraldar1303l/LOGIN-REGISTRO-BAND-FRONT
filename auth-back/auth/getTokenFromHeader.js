function getTokenFromHeader(){
    if(headers && headers.authorization){
         parted = headers.authorization.split('');
         if(parted.lenght === 2){
            return parted[1];
         } else {
            return null;
         }
    } else {
        return null;
    }
}

module.exports = getTokenFromHeader;
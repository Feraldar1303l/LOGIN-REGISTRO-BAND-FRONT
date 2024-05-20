function getUserInfo(user){
    return {
        username: user.usernam,
        name: user.name,
        id: user.id,
    }
    
}

module.exports = getUserInfo;
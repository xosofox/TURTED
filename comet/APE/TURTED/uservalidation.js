
/**
 * check if userid provided the right credentials
 * add any custom validation here
 * you might consider other machanisms
 * this example uses a secret md5 token to verify the username 
 * else return error
 */
function verifyUser(userid, token)
{
    //CODE NOT WORKING YET
    //CODE NOT WORKING YET
    if (!isDefined(userid)) return false;
    //server side md5 check
    var goodToken=MD5("randomthing-foo-bar"+userid+"42-1337-caffee");
    return (goodToken==token);
}

function isAlreadyLoggedIn(username)
{
	return (username in USERLIST);
}


/**
 * hook to execute the function defined above to verify the user
 * else return error
 */
Ape.registerHookCmd("connect", function(params, info) {
    if (!isDefined(params[NAME_OF_USERNAME])) return 0;
    if (params[NAME_OF_USERNAME]=="") return 0;

    if (USE_VALIDATION)
    {
        //CODE NOT WORKING YET
        //CODE NOT WORKING YET
        //CODE NOT WORKING YET
        //CODE NOT WORKING YET
        //var userid=params.userid;
        //var token=params.token;
        //if (verifyUser(userid,token))
        //{
            //info.user.setProperty('userid', userid);
            //if (userid in userlist) return ["007", "NICK_USED"];
            //return 1;
        //} else {
            //return ["006", "BAD_NICK"];
        //}
        info.user.setProperty('TURTED_username', params[NAME_OF_USERNAME]);
        return 1;
    } else {
        info.user.setProperty('TURTED_username', params[NAME_OF_USERNAME]);
        return 1;
    }
});

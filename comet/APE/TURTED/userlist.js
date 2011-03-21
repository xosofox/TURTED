/**
 * add user
 * uses global USERLIST
 * create user sessions list if empty
 * add pubid to users session list
 * @param user
 */
function addUser(user)
{
    var userid=user.getProperty("TURTED_username");
    var pubid=user.getProperty('pubid');
    Ape.log("New "+userid+": "+pubid);
    var uis={};
    if (typeof(USERLIST[userid])=="undefined")
    {
        uis={};
        USERLIST[userid]=uis;
    } else {
        uis=USERLIST[userid];
    }
    uis[pubid]=user;
    listUserNames();
}

/**
 * delete user
 * uses global USERLIST
 * remove pubid from users session list
 * delete list if empty
 * @param user
 */
function delUser(user)
{
  var userid=user.getProperty("TURTED_username");
  var pubid=user.getProperty('pubid');
  //Ape.log("Checking on "+userid+" "+pubid);
  if (userid in USERLIST)
  {
    var uis=USERLIST[userid];
    if (pubid in uis)
    {
      delete(uis[pubid]);
    }

    if (isEmpty(uis))
    {
      delete(USERLIST[userid]);
    } else {
        //Ape.log("Still another instance left");
    }
  } else {
        //Ape.log("Already gone");
  }
  listUserNames();
};

/**
 * log function to show all user names and instances
 */
function listUserNames()
{
  //return 1;
  Ape.log("");
  Ape.log("--------Current Userlist-------------------------");
  for (userid in USERLIST)
  {
    Ape.log(userid);
  }
}


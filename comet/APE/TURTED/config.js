/**
 * user editable global settings
 */

//Password to be used by the backend to send messages/events
var EVENT_NOTIFY_PASSWORD="MyTurtedPassword4PusingEvents";

//name of the property passed from the client that will contain the username/login name to identify users
var NAME_OF_USERNAME="name";

//do you want to verify your users? (by token, password, ...)
var USE_VALIDATION=false;

// enforce unique users, throw error when aleady logged in?
// or can users be logged in twice with different tabs?
var ENFORCE_UNIQUE=false;


/**
 * define global vars
 */
var USERLIST={}; //do not edit


/**
 * include required files
 */

//mandatory utility functions
include("TURTED/utils.js");

//mandatory user list handling
include("TURTED/userlist.js");

//mandatory hooks to handle events
include("TURTED/hooks.js");

//mandatory notification commands
include("TURTED/notifications.js");

//user tracking (and optional validation)
include("TURTED/uservalidation.js");

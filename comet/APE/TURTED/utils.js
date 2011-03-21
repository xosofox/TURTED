/**
 * returns true if the var is set
 */
function isDefined(a)
{
    return (typeof(a)!="undefined");
}


/**
 * returns true if there are no enumerable items
 */
function isEmpty(o)
{
	for (foo in o)
	{
		return false;
	}
	return true;
}

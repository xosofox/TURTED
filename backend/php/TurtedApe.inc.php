<?php

function notifyChannel($event,$channel,$payload)
{
    if (is_array($payload))
    {
        $cmd = createApeCommandObject('notifyChannel',$event, 'channel', $channel, $payload);
    } else {
        //payload must be an array
    }

    return sendEvent($cmd);
}

function notifyUser($event,$user,$payload)
{
    if (is_array($payload))
    {
        $cmd = createApeCommandObject('notifyUser',$event, 'user', $user, $payload);
    } else {
        //payload must be an array
    }

    return sendEvent($cmd);
}

function sendEvent($cmd)
{
    global $APEserver;

	$data = file_get_contents($APEserver.rawurlencode(json_encode($cmd)));
	if ($data == 'OK') {
        return true;
	} else {
	    return 'Error sending message, server response is : <pre>'.$data.'</pre>';
	}
}

function createApeCommandObject($cmd, $event, $type, $name, $payload)
{
    global $APEPassword;

    //create an Ape specify command object
    $cmd = array(
        array(
            'cmd' => $cmd,
            'params' =>  array(
                'password'  => $APEPassword,
                'raw'       => $event,
                'data'      => $payload,
                $type       => $name,
            )
        )
    );
}

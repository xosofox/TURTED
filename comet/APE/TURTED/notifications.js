Ape.registerCmd("notifyChannel", false, function(params, infos) {
	if (params.password == EVENT_NOTIFY_PASSWORD) {
		if (isDefined(params.data) && isDefined(params.raw) && isDefined(params.channel)) {
			var chan = Ape.getChannelByName(params.channel);
			if (isDefined(chan))
			{
				//Ape.log("Send "+params.raw+" to channel "+ chan);
				chan.pipe.sendRaw(params.raw, params.data);
				//Ape.log("Sent");
				return {"name":"pushed","data":{"value":"ok"}};
			} else {
				return {"name":"not_pushed","data":{"value":"unknown channel"}};
			}
		} else {
			return ["400", "INCOMPLETE"];
		}
	} else {
		return ["400", "BAD_PASSWORD"];
	}

})

Ape.registerCmd("notifyUser", false, function(params, infos) {
	if (params.password == EVENT_NOTIFY_PASSWORD) {
		
		if (isDefined(params.data) && isDefined(params.raw) && isDefined(params.user)) {
			var username=params.user;
			var uis=USERLIST[username];
			if (isDefined(uis))
			{
				//walk all user instances and send the message to each of them
				for (pubid in uis)
				{
					var user=uis[pubid];
					user.pipe.sendRaw(params.raw, params.data);
				}
				return {"name":"pushed","data":{"value":"ok"}};
			} else {
				return ["404", "NOT_FOUND"];
			}
		} else {
			return ["400", "INCOMPLETE"];
		}
	} else {
		return ["400", "BAD_PASSWORD"];
	}

})

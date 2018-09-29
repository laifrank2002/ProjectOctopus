var Engine = {
	_log: true,
	log: function(message)
	{
		if(Engine._log)
		{
			console.log(message);
		}
	},
	
	init: function()
	{
		Scene_Handler.create_scene(scenes['day1']);
	},
};
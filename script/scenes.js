// Stolen right off of Clocks-In-A-Cooler's

var scene_template = {
	'title': "scene template title",

    'scenes': {
        'start': {
            'text': "this is the starting scene\nuse \\n to create text with multiple lines.\nsorry",
            'buttons': {
                'end it now': {
                    'tooltip': "ends this demo scene immediately.",
                    'next_scene': 'end',
                },

                'next!': {
                    'tooltip': "proceed to the next scene.",
                    'next_scene': {'scene_1': 1},
                },
            },
        },

        'scene_1': {
            'text': 'this is technically the second scene.\nI\'m an idiot.',
            'buttons': {
                'end it now': {
                    'tooltip': "end this demo, immediately.",
                    'next_scene': 'end',
                },

                'forward!': {
                    'tooltip': "40% chance to scene 2, 60% to scene 3.",
                    'next_scene': {'scene_2': 0.4, 'scene_3': 0.6},
                },
            },
        },

        'scene_2': {
            'text': 'scene 2. you had a 40% chance of getting this one. \nas a reward, have some cucumber seeds.',
            'loot': {
                'cucumber seeds': {
                    min: 5,
                    max: 19,
                    chance: 1,
                },
                'tomato seeds': {
                    min: 1,
                    max: 5,
                    chance: 0.1,
                },
            },
            'buttons': {
                'end; I am running out of scenes!!': {
                    'tooltip': 'end the demo, because I can\'t make anymore scenes!',
                    'next_scene': 'end',
                },
            },
        },

        'scene_3': {
            'text': 'scene 3! you had a 60% chance of getting this one.',
            'buttons': {
                'end! finally!': {
                    'tooltip': 'end the demo. NOW.',
                    'next_scene': 'end',
                },
            },
        },
    },
};

var scenes = [];

scenes['day1'] = (
	{
		'title': "Scene Test",
		
		'scenes': 
		{
			'start': {
				'text': "You're on a ship.",
				'buttons': {
					'Go': {
						'tooltip': "Okay?",
						'next_scene': {'the cook': 1},
					},
				},
			},

			'the cook': {
				'text': 'Make decisions',
				'buttons': {
					'kill cook': {
						'tooltip': "Why not?",
						'next_scene': 'end',
					},

					'don\'t kill cook!': {
						'tooltip': "Sure",
						'next_scene': {'cook revenge': 0.4, 'death': 0.6},
					},
				},
			},
			
			'cook revenge': {
				'text': 'He killed you!',
				'buttons': {
					'bad luck!': {
					'tooltip': "Awww",
					'next_scene': 'end',
					},
				},
			},
			
			'death': {
				'text': 'You are dead.',
				'buttons': {
					'Go': {
						'tooltip': "Okay?",
						'next_scene': 'end',
					},
				},
				
			},
		},
	}
);
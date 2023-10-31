export const PieChart6Data =

    [
        [
            { type: 'string', label: 'Task ID' },
            { type: 'string', label: 'Task Name' },
            { type: 'date', label: 'Start Date' },
            { type: 'date', label: 'End Date' },
            { type: 'number', label: 'Duration' },
            { type: 'number', label: 'Percent Complete' },
            { type: 'string', label: 'Dependencies' },
        ],
        [
            'Research',
            'Find sources',
            new Date(2015, 0, 1),
            new Date(2015, 0, 5),
            null,
            100,
            null,
        ],
        [
            'Write',
            'Write paper',
            null,
            new Date(2015, 0, 9),
            3 * 24 * 60 * 60 * 1000,
            25,
            'Research,Outline',
        ],
        [
            'Cite',
            'Create bibliography',
            null,
            new Date(2015, 0, 7),
            1 * 24 * 60 * 60 * 1000,
            20,
            'Research',
        ],
        [
            'Complete',
            'Hand in paper',
            null,
            new Date(2015, 0, 10),
            1 * 24 * 60 * 60 * 1000,
            0,
            'Cite,Write',
        ],
        [
            'Outline',
            'Outline paper',
            null,
            new Date(2015, 0, 6),
            1 * 24 * 60 * 60 * 1000,
            100,
            'Research',
        ],
    ];

export const PieChart6option =
{
    gantt: {
        criticalPathEnabled: false,
        arrow: {
            angle: 100,
            width: 5,
            color: '#4d8aff',
            radius: 0
        },

        palette: [
            {
                'color': '#5c61f2',
                'dark': '#eeb82f',
                'light': '#a927f9'
            }
        ]

    },
    backgroundColor: 'transparent',
};
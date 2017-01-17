for (var i = 1; i < 5; i++) {
    zingchart.render({
        id: 'bar-chart-' + i,
        height: '100%',
        width: '100%',
        data: {
            type: "bar",
            plot: {
                animation: {
                    delay: '1400',
                    effect: '4',
                    method: '5',
                }
            },
            series: [
                {
                    values: [i, 5*i+1, i+2]
             },
                {
                    values: [i+3, i+4, i*5]
             }
         ]
        }
    });
};

var lineConfig = {
        type: 'line',
        plot: {
            animation: {
                delay: '1200',
                effect: 11,
                method: 4,
            }
        },
        series: [
            {
                values: [32,45,2,6,19,120]
            },
            {
                values: [1,4,88,4,2,55]
            }
        ]
}

zingchart.render({
    id: 'first-chart',
    height: '100%',
    width: '100%',
    data: lineConfig
})

var hBarConfig = {
    type: 'hbar',
    plot: {
        animation: {
            delay: '1000',
            effect: 1,
            method: 3
        }
    },
    series: [
        {'values': [12,16,156]},
        {'values': [15,19,172]},
        {'values': [177,155,16]}
    ]
};

zingchart.render({
    id: 'second-chart',
    height: '100%',
    width: '100%',
    data: hBarConfig
})

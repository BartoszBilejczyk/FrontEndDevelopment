for (var i = 1; i < 5; i++) {
    zingchart.render({
        id: 'bar-chart-' + i,
        height: '100%',
        width: '100%',
        data: {
            type: "bar",
            plot: {
                animation: {
                    delay: '100',
                    effect: '4',
                    method: '5',
                    sequence: '1'
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
    })
}

var myConfig = {
 	type: "gauge",
 	globals: {
 	  fontSize: 25
 	},
 	plotarea:{
 	  marginTop:80
 	},
 	plot:{
 	  size:'100%',
 	  valueBox: {
 	    placement: 'center',
 	    text:'%v', //default
 	    fontSize:35,
 	    rules:[
 	      {
 	        rule: '%v >= 700',
 	        text: '%v<br>EXCELLENT'
 	      },
 	      {
 	        rule: '%v < 700 && %v > 640',
 	        text: '%v<br>Good'
 	      },
 	      {
 	        rule: '%v < 640 && %v > 580',
 	        text: '%v<br>Fair'
 	      },
 	      {
 	        rule: '%v <  580',
 	        text: '%v<br>Bad'
 	      }
 	    ]
 	  }
 	},
  tooltip:{
    borderRadius:5
  },
 	scaleR:{
	  aperture:180,
	  minValue:300,
	  maxValue:850,
	  step:50,
	  center:{
	    visible:false
	  },
	  tick:{
	    visible:false
	  },
	  item:{
	    offsetR:0,
	    rules:[
	      {
	        rule:'%i == 9',
	        offsetX:15
	      }
	    ]
	  },
	  labels:['300','','','','','','580','640','700','750','','850'],
	  ring:{
	    size:50,
	    rules:[
	      {
	        rule:'%v <= 580',
	        backgroundColor:'#E53935'
	      },
	      {
	        rule:'%v > 580 && %v < 640',
	        backgroundColor:'#EF5350'
	      },
	      {
	        rule:'%v >= 640 && %v < 700',
	        backgroundColor:'#FFA726'
	      },
	      {
	        rule:'%v >= 700',
	        backgroundColor:'#29B6F6'
	      }
	    ]
	  }
 	},
  refresh:{
      type:"feed",
      transport:"js",
      url:"feed()",
      interval:1500,
      resetTimeout:1000
  },
	series : [
		{
			values : [755], // starting value
			backgroundColor:'black',
	    indicator:[10,10,10,10,0.75],
	    animation:{
        effect:2,
        method:1,
        sequence:4,
        speed: 900
     },
		}
	]
};

zingchart.render({
	id : 'first-chart',
	data : myConfig,
	height: 500,
	width: '100%',
    height: "100%"
});

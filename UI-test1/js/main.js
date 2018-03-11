window.onload = function () {
    
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        // title:{
        // 	text: "Top Oil Reserves"
        // },
        axisY: {
            // title: "Reserves(MMbbl)"
        },
        data: [{        
            type: "column",  
            showInLegend: true, 
            legendMarkerColor: "grey",
            // legendText: "MMbbl = one million barrels",
            dataPoints: [      
                { y: 16, label: "Medical Treatment" },
                { y: 16,  label: "Nursing and Care" },
                { y: 20,  label: "Food and Beverages" },
                { y: 16,  label: "Maintenance" }
            ]
        }]
    });
    chart.render();
    
}
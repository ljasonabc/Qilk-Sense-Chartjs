var visualize=function(e,a,t,l){var o=a.qInfo.qId+"_chartjs_bar",i=l.calculateMargin(e,a),n=i[0],r=i[1];e.html('<canvas id="'+o+'" width="'+n+'" height="'+r+'"></canvas>');var c=l.defineColorPalette("palette"),s=a.qHyperCube.qDataPages[0].qMatrix;a.cumulative&&(s=l.addCumulativeValues(s));var u=document.getElementById(o);new Chart(u,{type:"line",data:{labels:s.map(function(e){return e[0].qText}),datasets:[{label:a.qHyperCube.qMeasureInfo[0].qFallbackTitle,fill:a.background_color_switch,data:s.map(function(e){return e[1].qNum}),backgroundColor:a.background_color_switch?"rgba("+c[a.background_color]+","+a.opacity+")":"rgba("+c[a.color]+","+a.opacity+")",borderColor:"rgba("+c[a.color]+","+a.opacity+")",pointBackgroundColor:"rgba("+c[a.color]+","+a.opacity+")",borderWidth:1,pointRadius:a.point_radius_size}]},options:{title:{display:a.title_switch,text:a.title},legend:{display:"hide"!=a.legend_position,position:a.legend_position,onClick:function(e,a){}},scales:{xAxes:[{scaleLabel:{display:a.datalabel_switch,labelString:a.qHyperCube.qDimensionInfo[0].qFallbackTitle}}],yAxes:[{scaleLabel:{display:a.datalabel_switch,labelString:a.qHyperCube.qMeasureInfo[0].qFallbackTitle},ticks:{beginAtZero:!0,callback:function(e,t,o){return l.formatMeasure(e,a,0)}}}]},tooltips:{mode:"label",callbacks:{label:function(e,t){return t.datasets[e.datasetIndex].label+": "+l.formatMeasure(e.yLabel,a,0)}}},responsive:!0,events:["mousemove","mouseout","click","touchstart","touchmove","touchend"],onClick:function(e){var a=this.getElementsAtEvent(e);a.length>0&&l.makeSelectionsOnDataPoints(s[a[0]._index][0].qElemNumber,t)}}})};
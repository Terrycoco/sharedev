import * as d3 from 'd3';

export function tweenDash(linePath) {
            return function(t) {
                //total length of path (single value)
                var l = linePath.node().getTotalLength(); 
            
                // this is creating a function called interpolate which takes
                // as input a single value 0-1. The function will interpolate
                // between the numbers embedded in a string. An example might
                // be interpolatString("0,500", "500,500") in which case
                // the first number would interpolate through 0-500 and the
                // second number through 500-500 (always 500). So, then
                // if you used interpolate(0.5) you would get "250, 500"
                // when input into the attrTween above this means give me
                // a line of length 250 followed by a gap of 500. Since the
                // total line length, though is only 500 to begin with this
                // essentially says give me a line of 250px followed by a gap
                // of 250px.
                interpolate = d3.interpolateString("0," + l, l + "," + l);
                //t is fraction of time 0-1 since transition began
                var marker = d3.select("#marker");
                
                // p is the point on the line (coordinates) at a given length
                // along the line. In this case if l=50 and we're midway through
                // the time then this would 25.
                var p = linePath.node().getPointAtLength(t * l);

                //Move the marker to that point
                marker.attr("transform", "translate(" + p.x + "," + p.y + ")"); //move marker
                console.log(interpolate(t))
                return interpolate(t);
            }
        } //end tweenDash
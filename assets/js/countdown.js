window.onload = countdown;
	function countdown()
	{
		// Set commencement date
		
		//The date of commencement. Hours should be 1-12 and be sure to set am appropriately.
		var commencement = {"year":2018, "month":12, "day":15, "am":true, "hours":10, "minutes":30, "seconds":0};

		//javascript dates are quirky: new Date(YYYY,MM-1,DD,HH,MM,SS);
		var commencementDate = new Date(commencement.year, commencement.month-1, commencement.day, commencement.am?commencement.hours:commencement.hours+12, commencement.minutes, commencement.seconds);
		var today = new Date();
		
		// Calculate the difference between the times, 
		// and get rid of the msecs.
		var diff = commencementDate.getTime() - today.getTime();
                        var ftime = commencementDate.getTime() - today.getTime();
                        ftime = Math.floor(ftime / 1000);
		diff = Math.floor(diff / 1000);
		
		// Get the number of days, then mod the days off of 
		// the time. Repeat for hours, minutes, and seconds.
		var days = Math.floor(diff / 86400);
		diff = diff % 86400;
		var hours = Math.floor(diff / 3600);
		diff = diff % 3600;
		var mins = Math.floor(diff / 60);
		diff = diff % 60;
		var secs = diff;
		
		// Write countdown timer results into their div,
		// and set to update again in half a second.
                        if(ftime > 0) {
		document.getElementById('countdown').innerHTML = days + " days " + hours + " hours " + mins + " min " + secs + " sec";
                        } else {
                        document.getElementById('countdown').innerHTML = "0:0:0:00";
		}
                        timeout = setTimeout('countdown()',500);
	}
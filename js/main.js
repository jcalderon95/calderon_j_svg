(() => {
	// this is a self invoking anonymous function
	console.log('fired!');

	// these are the elements that you want to reference on the page (the icons in this case)
	// querySelector gets one result
	var badge = document.querySelector("img");

	// gets a reference to all the elements that match the selector
	var otherBadges = document.querySelectorAll('.jpgBadge');

	// functions are hte same in JS as in Python: what deo you want to have happen on a click?
	function logBadgeId(){
		console.log(this.id);
		debugger;
	}

	// what events are we listin for? Clicks? mouseover? and what should happen when we hear one
	badge.addEventListener("click", logBadgeId);

	

	otherBadges.forEach(thisbadge=> thisbadge.addEventListener("click", logBadgeId));

	
})();
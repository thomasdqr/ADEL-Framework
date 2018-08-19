// Declare our app using ADEL.js framework

var app = new ADEL();

// Initialise our pages
app.navController.Init(["page1.html"]);


// Example of manual navigation
$("#page1").click(function() {
	app.navController.GoToPage(0);
});
$("#page2").click(function() {
	app.navController.GoToPage(1);
});

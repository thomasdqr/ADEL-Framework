// Declare our app using ADEL.js framework

var app = new ADEL();

// Optional parameters sent to our app
app.params.loadAllAtStart = true;

// Enabling navigation bar;
app.params.useNavBar = true;


// Define navbar icons highlight style
app.params.navBarActiveStyle = {
	"background-color": "dodgerblue",
};
app.params.navBarInactiveStyle = {
	"background-color": "grey",
};



// Initialise our pages
app.navController.Init(["page1.html", "page2.html"]);




// Example of manual navigation
$("#page1").click(function() {
	app.navController.GoToPage(0);
});
$("#page2").click(function() {
	app.navController.GoToPage(1);
});

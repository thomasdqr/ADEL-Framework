// Get the Main Div Frame
var	main_div = $( "adel-main" );
// Get the Nav Bar
var	navbar = $( "adel-navBar" );

// Setup new application, define all parameters
function ADEL() {
	// Load dedicated CSS
	$("<link/>", {
		rel: "stylesheet",
		type: "text/css",
		href: "/library/adel.css"
	}).appendTo("head");

	this.params = {
		loadAllAtStart: false, // We load all our pages in background at start (slower first loading but faster loading when load other pages)
		defaultIndex: 0, // Index of the first page loaded
		useNavBar: false, 
		navBarHeight: 10,
		navBarInactiveStyle: {}, // Array of css rules for inactive button
		navBarActiveStyle: {} // Array of css rules for active button

	}

	this.navController = new NavigationControl(this);
}

// Setup the navigation controller
function NavigationControl(app) {
	var self = this;

	// reference to the app controller
	this.app = app;
	this.current_page = null;

	// Initiate all pages views
	this.Init = function(pages) {
		this.all_pages = pages;
		this.all_pages.forEach(function(page) {
			var view = document.createElement("adel-view");
				view.setAttribute("reference", page);
					view.setAttribute("loaded", false);
						view.classList.add("view");
							main_div.append(view);
								if (this.app.params.loadAllAtStart) {
									$("adel-view[reference='"+page+"']").load("pages/"+page);
									view.setAttribute("loaded", true);
								}
							});
		// Load and Show the default page (defined in parameters)
		$("adel-view[reference='"+this.all_pages[this.app.params.defaultIndex]+"']").load("pages/"+this.all_pages[this.app.params.defaultIndex]);
		this.GoToPage(this.app.params.defaultIndex);
		$("adel-navbtn").css("width", 100/this.all_pages.length+"%");

		// Setup navigation bar if enabled 
		// Handle navigation bar
		if (this.app.params.useNavBar) {
			this.ShowNavBar();
			$("adel-navbtn").click(function() {
				self.GoToPage($(this).attr("goToPage"));
			});
		}
		else {
			this.HideNavBar();
		}
	}

	// Show specific view, hide the others
	this.GoToPage = function(index) {
		// Check if we are asking for a different page
		if (this.current_page != index) {
			var askedView = $("adel-view[reference='"+this.all_pages[index]+"']");
			// Load the view if not already loaded
			askedView.load("pages/"+this.all_pages[index]);
			// Hiding all views
			$("adel-view").each(function() {
				$(this).removeClass("active");
			});

			// Display only the asked view
			askedView.addClass("active");
			this.current_page = index;

			// Change navbar buttons style
			if (this.app.params.useNavBar) {
				$("[adel-navicon]").each(function(index) {
					$(this).css(self.app.params.navBarInactiveStyle);
				});
				$("adel-navbtn[goToPage='"+index+"'").find("[adel-navicon]").css(self.app.params.navBarActiveStyle);
			}
		}
	}

	this.ShowNavBar = function() {
		main_div.css("height", 100-this.app.params.navBarHeight+"vh");
		navbar.css({"height": this.app.params.navBarHeight+"vh", "display":"block"});
	}
	this.HideNavBar = function() {
		main_div.css("height", "100vh");
		navbar.css({"height": "0vh", "display":"none"});
	}
	
}
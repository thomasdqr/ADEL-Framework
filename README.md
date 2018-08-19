
# ADEL Framework
## App Development Easy Library 

Mobile app development using web technologies such as html/css with cordova comes with a lot of advantages, but a lot of struggles too.

Handling complicated routes system or dealing with complex and huge frameworks such as Angular or React while developping a small app are common troubles that may disuade you from trying to make your own mobile application.

That's where the **ADEL Framework** can help you.

## Advantages
If you are familiar to regular web development but not confortable with Angular, View or React development, the **ADEL Framework** is made for you.

- **Easy to set up** just [download](https://github.com/thomasdqr/ADEL-Framework/archive/master.zip) the library, extract the zip and you're good to go.

- Can be **integrated to an existing project** in just few steps.
- **Lightweight** the library is very light and easy to modify.
- **Flexible** so that it can fit any kind of app.

## Features
ADEL Framework provides **dead simple navigation** between pages using very natural code.

The library also provides a **clean architecture** for your project, helping you structuring your files.

ADEL is made to work perfectly in an **Apache Cordova** or **Phonegap** environment.

The Library is meant to be used for **SPA** (Simple Page Application) with features like preloading all the views at start.

Finally a **complete navigation bar system** is available with easy customisable pure css options.

## How to get started

### Installation
Download and extract the linked project.
Open the folder in your favourite IDE.

### Architecture
Here is the default project architecture

![ADEL Archicture](https://lh3.googleusercontent.com/QNw9ZtzQNazwHzGpBWKe4bTqK8v2L6IwboypCK4YRsYAX94XY450NDv1GvqjYZEqSxeJQB6mrDGZ "ADEL Architecture") 
*ADEL Architecure*

The **library folder** contains all the ADEL Framework files, it should never been modified.
The **pages folder** contains all your pages converted in views by the framework at runtime, it's here that you will create all the different panels of your app.
The **index.html** is the main page of your app where the differents views are being showed and where the Framework is imported, edit this file to customize your navigation bar.
Finally **setup.js** is an example .js file loaded in index.html to demonstrate how to load and use basic functionnalities of the **App Development Easy Library**.

### Basic setup

The way the library work is simple. The index.html is divided in two parts. The main part, showing the differents views (or pages as you can call it) and the navigation bar at the bottom if you choose to show one.

![enter image description here](https://lh3.googleusercontent.com/074Ly9eagFI8kOaffzFwEQtsYvF57UVMRMT_U_UnOMQlQ8EDlq9LCGZEBn-dJq7JSAwuFyM2GkLJ) 
*index.html layout*

After extracting the library, open the folder in your favourite IDE.
Load index.html file. You can see the two parts we talked about here :
```html
    <body>
	<adel-main></adel-main>
	<adel-navbar></adel-navbar>
    </body>
```
Leave the adel-main empty as it will be completely handled by the framework.
We will see how to use the navigation bar div in the next parts.

One important thing to note, is that ADEL is using Jquery framework to work and optimise differents actions, that's why you can find it imported in the head part of index.html.

Finally you can locate the laoding of ADEL in the bottom of the file as well as the default setup.js file.
```html
    <script src="library/adel.js"></script>
    <script src="setup.js"></script>
```
### Environment Setup
Before going any further, I HIGHLY RECOMMEND t

### Using the Framework

Start by creating multiple pages that we are going to use for our app.
Put it in the **pages folder** and named them clearly, in this example we will call them page1.html and page2.html.
Let's jump to the **setup.js** file to start using ADEL.

The first thing to do is to declare a new app
```javascript
    // Declare our app using ADEL.js framework
    var app = new ADEL();
```
Our newly created app has a lot of differents parameters that you can learn about in the [App parameters](https://github.com/thomasdqr/ADEL-Framework#app-parameters) section.

One of the main component of our app is the Navigation Controller, as its name stands, it will handle all the navigation between our different views. 
The only thing we need to do to set it up is the following line 
```javascript
    app.navController.Init(["page1.html", "page2.html");
```
Here we have told our Navigation Controller what are our different pages. Everytime you add a new page to your app, just add a new element to the array sent here.

If you now load your app, you will see the page1.html sucessfully loaded.

### Navigation bar

Now let's add a simple navigation bar to navigate through our pages.
Remember our app has different parameters. One of them define if we want to use a navigation bar or not.

To enable navigation bar use the following parameter
```javascript
    app.params.useNavBar = true;
```
**Important to note :
 Every parameters have to be set before Navigation controller Init() function**

As you can see, an empty bottom bar has appeared. Now we need to define our different buttons.
(The navigation bar style can be directly edited in Adel.css or by adding your own custom css rules to index.html)

To add buttons to the bar, just add adel-navbtn elements to the adel-navbar like so 
```html
    <adel-navbar>
	<adel-navbtn goToPage="0"></adel-navbtn>
	<adel-navbtn goToPage="1"></adel-navbtn>
    </adel-navbar>
```
The goToPage attribute define wich page is related to the button.
Here :
0 -> page1.html
1 -> page2.html
The order coresponding to the Navigation Controller Init() function declared precedently.

Once this is done, we have two zones in our navigation bar leading to page 1 and page 2 when clicked. But there are still empty as adel-navbtn are only used for logic, not styling.

To style our buttons, we can add whatever html component we want, div / label / button / img / etc...

For this example let's use buttons
```html
    <adel-navbar>
	    
	<adel-navbtn goToPage="0">
		<button adel-navicon>Page 1</button>
	</adel-navbtn>
	    
	<adel-navbtn goToPage="1">
		<button adel-navicon>Page 2</button>
	</adel-navbtn>
	    
    </adel-navbar>
```
As you can note, we added the attribute **adel-navIcon** to the button. This way we can add interactive style to these elements.

First let's make those buttons a bit better with basic styling. You can add inline css or just link a custom css file to index.html (Directly modifying Adel.css file is not recommanded)
```css
    /* add this css to a new css sheet and link it to index.html */
    
    button
    {
	width : 100%;
	height: 100%;
	border-style: none;
    }
```
Now we have two visible buttons to switch between our pages.

Finally, let's use the adel-navicon attribute and the ADEL Framework built-in style functions to make those buttons react to page navigation.

Using the library, we can define style for inactive and active button.

To do this add the following parameters to our app 
```javascript
    // Define navbar icons highlight style 
    app.params.navBarActiveStyle = {
	"background-color": "dodgerblue",
    };
    app.params.navBarInactiveStyle = {
	"background-color": "grey",
    };
```
Refresh the app, and now the button navicon highlight in blue when active.

You can try adding more pages and play with parameters to make the app your own.

Final setup.js

```javascript
    // Declare our app using ADEL.js framework
    var app = new ADEL();
    
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
```

### Additional functions
You can also use manual navigation at anytime using the GoToPage(pageIndex) function.

Here an example using Jquery
```javascript
    // Example of manual navigation
    $("#home_btn").click(function() {
	app.navController.GoToPage(0);
    });
    $("#about_btn").click(function() {
	app.navController.GoToPage(1);
    });
```
You can also choose to Hide or Show the navigation bar at any moment using functions.
```javascript
    // Hide and Show Navigation Bar
    app.navController.HideNavBar()
    app.navController.ShowNavBar()
```
## App parameters
- **loadAllAtStart**
All the pages are preloaded at the start of the app, slower loading but faster transitions between pages.

      // Load all at start (by default : false)
      app.params.loadAllAtStart= true

- **defaultIndex**
Define the starting page index to load when app is started
```javascript
      // Default index (by default : 0)
      app.params.defaultIndex = 2
```
- **useNavBar**
Does the app use navigation bar or not

 
```javascript
      // Use navigation bar (by default : false)
      app.params.useNavBar = true
```
- **navBarHeight**
Height of the navigation bar relative to screen (100 = 100%)
```javascript
      // Navigaton bar height (by default : 10)
      app.params.navBarHeight = 20
```

- **navBarInactiveStyle**
Object containing all the css rules for the style of inactive navigation bar button
```javascript
      // Navigaton bar inactive style (by default : empty)
      app.params.navBarInactiveStyle = {
    	    "color": "black",
    	    "font-size": "10px",
      }
 ```
- **navBarActiveStyle**
Object containing all the css rules for the style of active navigation bar button
```javascript
      // Navigaton bar active style (by default : empty)
      app.params.navBarActiveStyle = {
    	    "color": "red",
    	    "font-size": "15px",
      }
```
## Author
Made by Thomas De Queiros ([website](https://www.thomasdequeiros.fr))
2018

Feel free to reuse and edit all the ressources provided.


  


<!--stackedit_data:
eyJoaXN0b3J5IjpbMTExMTE3NjExMV19
-->
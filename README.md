<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://stackedit.io/style.css" />
</head>

<body class="stackedit">
  <div class="stackedit__html"><h1 id="adel-framework">ADEL Framework</h1>
<h2 id="app-development-easy-library">App Development Easy Library</h2>
<p>Mobile app development using web technologies such as html/css with cordova comes with a lot of advantages, but a lot of struggles too.</p>
<p>Handling complicated routes system or dealing with complex and huge frameworks such as Angular or React while developping a small app are common troubles that may disuade you from trying to make your own mobile application.</p>
<p>That’s where the <strong>ADEL Framework</strong> can help you.</p>
<h2 id="advantages">Advantages</h2>
<p>If you are familiar to regular web development but not confortable with Angular, View or React development, the <strong>ADEL Framework</strong> is made for you.</p>
<ul>
<li>
<p><strong>Easy to set up</strong> just <a href="www.google.fr">download</a> the library, extract the zip and you’re good to go.</p>
</li>
<li>
<p>Can be <strong>integrated to an existing project</strong> in just few steps.</p>
</li>
<li>
<p><strong>Lightweight</strong> the library is very light and easy to modify.</p>
</li>
<li>
<p><strong>Flexible</strong> so that it can fit any kind of app.</p>
</li>
</ul>
<h2 id="features">Features</h2>
<p>ADEL Framework provides <strong>dead simple navigation</strong> between pages using very natural code.</p>
<p>The library also provides a <strong>clean architecture</strong> for your project, helping you structuring your files.</p>
<p>ADEL is made to work perfectly in an <strong>Apache Cordova</strong> or <strong>Phonegap</strong> environment.</p>
<p>The Library is meant to be used for <strong>SPA</strong> (Simple Page Application) with features like preloading all the views at start.</p>
<p>Finally a <strong>complete navigation bar system</strong> is available with easy customisable pure css options.</p>
<h2 id="how-to-get-started">How to get started</h2>
<h3 id="installation">Installation</h3>
<p>Download and extract the linked project.<br>
Open the folder in your favourite IDE.</p>
<h3 id="architecture">Architecture</h3>
<p>Here is the default project architecture</p>
<p><img src="https://lh3.googleusercontent.com/QNw9ZtzQNazwHzGpBWKe4bTqK8v2L6IwboypCK4YRsYAX94XY450NDv1GvqjYZEqSxeJQB6mrDGZ" alt="ADEL Archicture" title="ADEL Architecture"><br>
<em>ADEL Architecure</em></p>
<p>The <strong>library folder</strong> contains all the ADEL Framework files, it should never been modified.<br>
The <strong>pages folder</strong> contains all your pages converted in views by the framework at runtime, it’s here that you will create all the different panels of your app.<br>
The <strong>index.html</strong> is the main page of your app where the differents views are being showed and where the Framework is imported, edit this file to customize your navigation bar.<br>
Finally <strong>setup.js</strong> is an example .js file loaded in index.html to demonstrate how to load and use basic functionnalities of the <strong>App Development Easy Library</strong>.</p>
<h3 id="basic-setup">Basic setup</h3>
<p>The way the library work is simple. The index.html is divided in two parts. The main part, showing the differents views (or pages as you can call it) and the navigation bar at the bottom if you choose to show one.</p>
<p><img src="https://lh3.googleusercontent.com/074Ly9eagFI8kOaffzFwEQtsYvF57UVMRMT_U_UnOMQlQ8EDlq9LCGZEBn-dJq7JSAwuFyM2GkLJ" alt="enter image description here"><br>
<em>index.html layout</em></p>
<p>After extracting the library, open the folder in your favourite IDE.<br>
Load index.html file. You can see the two parts we talked about here :</p>
<pre><code>&lt;body&gt;
&lt;adel-main&gt;&lt;/adel-main&gt;
&lt;adel-navbar&gt;&lt;/adel-navbar&gt;
&lt;/body&gt;
</code></pre>
<p>Leave the adel-main empty as it will be completely handled by the framework.<br>
We will see how to use the navigation bar div in the next parts.</p>
<p>One important thing to note, is that ADEL is using Jquery framework to work and optimise differents actions, that’s why you can find it imported in the head part of index.html.</p>
<p>Finally you can locate the laoding of ADEL in the bottom of the file as well as the default setup.js file.</p>
<pre><code>&lt;script src="library/adel.js"&gt;&lt;/script&gt;
&lt;script src="setup.js"&gt;&lt;/script&gt;
</code></pre>
<h3 id="using-the-framework">Using the Framework</h3>
<p>Start by creating multiple pages that we are going to use for our app.<br>
Put it in the <strong>pages folder</strong> and named them clearly, in this example we will call them page1.html and page2.html.<br>
Let’s jump to the <strong>setup.js</strong> file to start using ADEL.</p>
<p>The first thing to do is to declare a new app</p>
<pre><code>// Declare our app using ADEL.js framework
var app = new ADEL();
</code></pre>
<p>Our newly created app has a lot of differents parameters that you can learn about in the <a href="www.google.fr">App parameters</a> section.</p>
<p>One of the main component of our app is the Navigation Controller, as its name stands, it will handle all the navigation between our different views.<br>
The only thing we need to do to set it up is the following line</p>
<pre><code>app.navController.Init(["page1.html", "page2.html");
</code></pre>
<p>Here we have told our Navigation Controller what are our different pages. Everytime you add a new page to your app, just add a new element to the array sent here.</p>
<p>If you now load your app, you will see the page1.html sucessfully loaded.</p>
<h3 id="navigation-bar">Navigation bar</h3>
<p>Now let’s add a simple navigation bar to navigate through our pages.<br>
Remember our app has different parameters. One of them define if we want to use a navigation bar or not.</p>
<p>To enable navigation bar use the following parameter</p>
<pre><code>app.params.useNavBar = true;
</code></pre>
<p><strong>Important to note :<br>
Every parameters have to be set before Navigation controller Init() function</strong></p>
<p>As you can see, an empty bottom bar has appeared. Now we need to define our different buttons.<br>
(The navigation bar style can be directly edited in Adel.css or by adding your own custom css rules to index.html)</p>
<p>To add buttons to the bar, just add adel-navbtn elements to the adel-navbar like so</p>
<pre><code>&lt;adel-navbar&gt;
	&lt;adel-navbtn goToPage="0"&gt;&lt;/adel-navbtn&gt;
	&lt;adel-navbtn goToPage="1"&gt;&lt;/adel-navbtn&gt;
&lt;/adel-navbar&gt;
</code></pre>
<p>The goToPage attribute define wich page is related to the button.<br>
Here :<br>
0 -&gt; page1.html<br>
1 -&gt; page2.html<br>
The order coresponding to the Navigation Controller Init() function declared precedently.</p>
<p>Once this is done, we have two zones in our navigation bar leading to page 1 and page 2 when clicked. But there are still empty as adel-navbtn are only used for logic, not styling.</p>
<p>To style our buttons, we can add whatever html component we want, div / label / button / img / etc…</p>
<p>For this example let’s use buttons</p>
<pre><code>&lt;adel-navbar&gt;
	&lt;adel-navbtn goToPage="0"&gt;
		&lt;button adel-navicon&gt;Page 1&lt;/button&gt;
	&lt;/adel-navbtn&gt;
	&lt;adel-navbtn goToPage="1"&gt;
		&lt;button adel-navicon&gt;Page 2&lt;/button&gt;
	&lt;/adel-navbtn&gt;
&lt;/adel-navbar&gt;
</code></pre>
<p>As you can note, we added the attribute <strong>adel-navIcon</strong> to the button. This way we can add interactive style to these elements.</p>
<p>First let’s make those buttons a bit better with basic styling. You can add inline css or just link a custom css file to index.html (Directly modifying Adel.css file is not recommanded)</p>
<pre><code>/* add this css to a new css sheet and link it to index.html */

button
{
width : 100%;
height: 100%;
border-style: none;
}
</code></pre>
<p>Now we have two visible buttons to switch between our pages.</p>
<p>Finally, let’s use the adel-navicon attribute and the ADEL Framework built-in style functions to make those buttons react to page navigation.</p>
<p>Using the library, we can define style for inactive and active button.</p>
<p>To do this add the following parameters to our app</p>
<pre><code>// Define navbar icons highlight style 
app.params.navBarActiveStyle = {
    "background-color": "dodgerblue",
};
app.params.navBarInactiveStyle = {
	"background-color": "grey",
};
</code></pre>
<p>Refresh the app, and now the button navicon highlight in blue when active.</p>
<p>You can try adding more pages and play with parameters to make the app your own.</p>
<p>Final setup.js</p>
<pre><code>// Declare our app using ADEL.js framework
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
</code></pre>
<h3 id="additional-functions">Additional functions</h3>
<p>You can also use manual navigation at anytime using the GoToPage(pageIndex) function.</p>
<p>Here an example using Jquery</p>
<pre><code>// Example of manual navigation
$("#home_btn").click(function() {
	app.navController.GoToPage(0);
});
$("#about_btn").click(function() {
	app.navController.GoToPage(1);
});
</code></pre>
<p>You can also choose to Hide or Show the navigation bar at any moment using functions.</p>
<pre><code>// Hide and Show Navigation Bar
app.navController.HideNavBar()
app.navController.ShowNavBar()
</code></pre>
<h2 id="app-parameters">App parameters</h2>
<ul>
<li>
<p><strong>loadAllAtStart</strong><br>
All the pages are preloaded at the start of the app, slower loading but faster transitions between pages.</p>
<pre><code>// Load all at start (by default : false)
app.params.loadAllAtStart= true
</code></pre>
</li>
<li>
<p><strong>defaultIndex</strong><br>
Define the starting page index to load when app is started</p>
<pre><code>// Default index (by default : 0)
app.params.defaultIndex = 2
</code></pre>
</li>
<li>
<p><strong>useNavBar</strong><br>
Does the app use navigation bar or not</p>
<pre><code>// Use navigation bar (by default : false)
app.params.useNavBar = true
</code></pre>
</li>
<li>
<p><strong>navBarHeight</strong><br>
Height of the navigation bar relative to screen (100 = 100%)</p>
<pre><code>// Navigaton bar height (by default : 10)
app.params.navBarHeight = 20
</code></pre>
</li>
<li>
<p><strong>navBarInactiveStyle</strong><br>
Object containing all the css rules for the style of inactive navigation bar button</p>
<pre><code>// Navigaton bar inactive style (by default : empty)
app.params.navBarInactiveStyle = {
  	"color": "black",
  	"font-size": "10px",
  }
</code></pre>
</li>
<li>
<p><strong>navBarActiveStyle</strong><br>
Object containing all the css rules for the style of active navigation bar button</p>
<pre><code>// Navigaton bar active style (by default : empty)
app.params.navBarActiveStyle = {
  	"color": "red",
  	"font-size": "15px",
  }
</code></pre>
</li>
</ul>
<h2 id="author">Author</h2>
<p>Made by Thomas De Queiros (<a href="https://www.thomasdequeiros.fr">website</a>)<br>
2018</p>
<p>Feel free to reuse and edit all the ressources provided.</p>
</div>
</body>

</html>

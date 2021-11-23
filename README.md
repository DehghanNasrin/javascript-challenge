# JavaScript and DOM Manipulation

Creating a table dynamically based upon a [dataset we provide](/Modules/data.js). We also need to allow our users to filter the table data for specific values. We only use pure JavaScript, HTML, and CSS, and D3.js on our web pages.

### Level 1: Automatic Table and Date Search

* In this section index.html and all static files including css and JavaScript files is created.

* Then I put a filter button into the main page to filter data based on input date.

* Finally, a reload button has been added to the page in order to reload raw data from the initial object array.

### Level 2: Multiple Search Categories

* Using a dynamic filter dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

  1. `date/time`
  2. `city`
  3. `state`
  4. `country`
  5. `shape`

* note1: Instead of duplicating all the code from part one, a module is created to follow the DRY principle, so I have created a module called module.js and app.js followed by data.js, which is an object array of data to be loaded on the page.

* note2: In order to run the html file directly, you can now go to the HTML Directly folder and open index.html in a browser.
* note3: If you install the live server extension on VS Code, you can click on "go live" and see the result.

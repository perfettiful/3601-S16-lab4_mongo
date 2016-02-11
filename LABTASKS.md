#Lab Tasks

## Part 1: Exploring the project

- Set up this project to use Travis CI, and add your build status icon to the README.

##### What are the differences between the folder structure of this project and the previous one? Note that api/pets is server-side routing specific to the database, and the client folder contains the client-side portion of the project.

> The file structure for this project appear different from the last in that there are far fewer folders and files within them. In the last lab the bulk of its files seemed to be apart of the testing apparatus.
> However, like the last lab, these folders contain a bower folder for the Angular components. Moreover, this lab has a dedicated API folder for our database as opposed to the last.

##### How is app.js (at the project root) different from the ones in the previous two labs? Give examples of the kinds of urls that app.js handles, and describe where each case will be routed.

> In this lab app.js has fewer app.get commands perhaps due to the fewer html pages this site will have. Also, this lab's app.js has an app.use command to access the API.

##### The project is connected to the database via mongoose. Where is this connection set?

> The projects Mongoose connection is set in app.js at the command mongoose.connect('mongodb://127.0.0.1:27017/pets'); wherein the server connects to a Mongo IP address which routes to the pets API.

##### Explain how api/pets/pets.controller.js gets added to app.js (remember this is all server-side).

> The pets API connects to app.js by way of its mongoose var, whereby a Pet model is added to mongoose.

##### Study the file api/pets/pets.controller.js, answer the following questions:
-  What kind of documents would the database contain? What is the field in the model?

> It appears the database will contain JSON docs and the field in the model contains text in the form of a String.

-  What functions are defined in the controller? How do they change the database data?

> The three functions contained in the controller are index which finds all the pets in the database,
>create adds a "Pet" to the database and destroy which finds a "Pet" by its pet ID and then removes it from the database or throws a "404 not found" error if the pet does not exist..

-  How does one get or delete elements in the database?

> It appears the index fct will retrieve data from the database, whereas the destroy fct will delete data from it.

##### What is the purpose of index.js in the api/pets? Where is it referenced?

> It seems index.js prepares the express and controller to be routed through the module.

##### What views are used in the project?

> We have a "main" view in the /client/views/main folder, we have a "about" view in the /client/views/about folder and
 also a "404" view in the /client/views/404 folder.

##### We've seen a few different ways to display HTML in the last couple labs (straight, individual HTML pages and components being added to HTML). How are HTML files combined and displayed in this lab? 

>HTML pages are generated with both some straight HTML in files as well as HTML added through Angular. Angular uses
controllers to add dynamic data to the pages and we can use Angular to include certain HTML pages on other pages.
 For example, main.html is included and displayed in our index.html using Angular.

>Protip: main.html isn't a full HTML document, so how does it get displayed?

##### Where is the code for the navigation bar located? How is it connected to the pages of the project?

>It is located in /client/components/navbar. It is added to pages such as /client/view/main/main.html by using
ng-include and it loads the navbar.

##### client/app.js performs client-side routing. How do you think it works?

>The client-sided router looks for the requested route in our appModule. We have routes defined in about.js,
main.js, etc. These routes look for a url such as "/about" and then display data.

## Part 2: Add another field to pet data.

- [x] Add a numeric field to the pet model (say, for example, weight).
- [ ] Add a field to enter weight when a new pet document is created.
- [ ] Add a field in the main page to show the heaviest of all pets and its weight.
- [ ] Remember to practice TDD and perform frequent commits.

>

>Protip: Make sure to separate business logic functions from functions that make http calls. That is, don't have a function that performs both. This alows for optimal testing conditions.

## Part 3: Add a GPA calculator

- [ ] Add a view to enter courses and display the GPA.
- [ ] Add a link on the navigation bar that leads to it;
- [ ] add the corresponding route.
- [ ] Entered courses (name, credits, letter grade) must be stored in the database.
- [ ] Practice TDD and perform frequent commits.
- [ ] Don't forget to add new files to git before committing.
- [ ] Use the refactoring menu when renaming files (this will rename then in the git repo as well).
- [ ] Remember to check out you test coverage, and watch your build history on Travis-CI.

>
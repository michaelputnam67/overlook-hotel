<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <a href="#using-the-application">Using the Application</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
    <li><a href="#planning-resources">Planning Resources</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
# Overlook Hotel

### About The Project

![Overlook Hotel](https://user-images.githubusercontent.com/91028440/165348855-e78b53e2-46b1-483f-ae48-99f57a484b34.png)

Welcome to the Overlook Hotel. Login book a room and relax. 


<p align="right">(<a href="#overlook-hotel">back to top</a>)</p>



### Built With

In this project, I used these tools to help build, maintain, and populate the Web Application.
I was tasked with utilizing data from an API as well as the WebPack bundler.

#### Languages
* Javascript
* HTML
* CSS
* SCSS

#### Frameworks/Libraries
* [Webpack](https://webpack.js.org/)



<p align="right">(<a href="#overlook-hotel">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Set Up Instructions
1. Clone this repo to your local machine
2. `cd ` into `overlook-hotel`
3. Then, run NPM install from your command line: `npm install `
    - Do not run `npm audit fix --force`
4. After you have run `npm install` inside of your copy of this repo, run:
`npm start`
This will run webpack in the terminal so you can view and use the application in your browser. Your terminal will likely display a large block of text as seen below:
![Local Host Link](https://user-images.githubusercontent.com/91028440/165350563-e4155470-f436-4aeb-bcf0-708342252770.png)

5. Find the line that says `Project is running at http://localhost:8080/` Copy and paste that URL into your browser into your browser or use `cmd + click`. You should have the application set up and ready to use!

6. Make sure that you type `Control + C` in your terminal when you are done using the application. This ensure the server will stop running before your close your Terminal.

7. In order to use this application as intended you will need to run the overlook-hotel api on your local device. Please use the following api: ![overlook server](https://github.com/turingschool-examples/overlook-api)

### Using the Application

Now that we are all set up for the application, its time for its actual use! When you load into the page, You are met with a login page.

![Login Page](https://user-images.githubusercontent.com/91028440/165348855-e78b53e2-46b1-483f-ae48-99f57a484b34.png)


Please provide a username and password. For the purposes of this application please use the password: `overlook2021` and a username that conforms to the following style: `customer[1-50]`. The press the login button. You will then be directed to a customer dashboard where you will be greeted.

![Customer Dashboard](https://user-images.githubusercontent.com/91028440/165351479-5d3c705f-9d32-4ae6-9699-1b801335abee.png)

If you click or tab onto the calendar a drop down menu of available dates will be displayed. please choose a date. Once a date has been chosen available rooms will be displayed and then an option to sort these rooms by type will be available. As well as a message informing the user as to the number of available rooms.

![Calendar](https://user-images.githubusercontent.com/91028440/165352395-ec457e60-fc23-4b03-a9f4-21f3d4425d00.png)

![Room Type](https://user-images.githubusercontent.com/91028440/165352551-688b34c2-8c20-4310-aaee-e7c2b2b3e6a2.png)

Tabbing onto or clicking the Room Type drop down menu will will several room options. Once one of these options is selected the available rooms will be updated. If there are no rooms available the user will be notified.

![Availability Response](https://user-images.githubusercontent.com/91028440/165359699-19eb5e8f-b783-456d-b595-a31a6aba2dd1.png)

New bookings will be populated in the customer bookings section on the lefthand side of the page in the order of date. 


<p align="right">(<a href="#overlook-hotel">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

When we use this application, we have a couple tools to utilize. we have the ability to filter based on date and room-type. This application has all of the information
someone would hopefully need to successfully plan for their weekend getaway, and adds the ability to create a list of saved bookings to keep track of. 



<p align="right">(<a href="#overlook-hotel">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Draft classes
- [x] Create User Dashboard
- [x] Build out fetch requests
- [x] Connect data model, api, and Dom
- [x] Add Login Page
- [ ] Add Manager functionality



<p align="right">(<a href="#overlook-hotel">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Project Credits -
[Michael Putnam](https://github.com/michaelputnam67)

Project Git-hub Link: [https://github.com/michaelputnam67/overlook-hotel](https://michaelputnam67.github.io/overlook-hotel/)



<p align="right">(<a href="#overlook-hotel">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments


* [Turing School of Software & Design](https://turing.edu/)
* [GitHub Pages](https://pages.github.com)
* [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/#aa-basics-browser-support)
* [Dev Ed Sass Video](https://www.youtube.com/watch?v=Zz6eOVaaelI&t=5s)



<p align="right">(<a href="#overlook-hotel">back to top</a>)</p>


<!-- PLANNING RESOURCES -->
## Planning Resources
<!-- WIREFRAME -->

* [Fig jam Organization Board](https://www.figma.com/file/IgxaBquQFvvEVlH45JQ1Ub/Overlook-Hotel-Mod2-Project?node-id=0%3A1)

* [Project Specs](https://frontend.turing.edu/projects/overlook.html)

* [Project Board](https://github.com/michaelputnam67/overlook-hotel/projects/1)

* [Coolors](https://coolors.co/75dddd-508991-172a3a-004346-09bc8a)


<p align="right">(<a href="#overlook-hotel">back to top</a>)</p>

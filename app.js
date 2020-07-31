//************************************************* */
// Title:   Yelp Camp Application                   */
// File:    app.js                                  */
// Author:  Anthony McGrath                         */
// Email:   akm@anthonykyle.co.nz                   */
// Repo:    github.com/anthony-kyle/yelp-camp.git   */
//************************************************* */

//*************************************** */
// Initialise Frameworks                  */
//*************************************** */
const express = require('express');
const app     = express();
const bp      = require('body-parser');

app.use(bp.urlencoded({extended: true}));
app.set('view engine', 'ejs');

// Temp placeholder before adding DB
let campgrounds = [
  {name: 'Salmon Creek', image: 'https://images.unsplash.com/photo-1500332988905-1bf2a5733f63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
  {name: 'Granite Hill', image: 'https://images.unsplash.com/photo-1545252682-2d32e48111da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=958&q=80'},
  {name: 'Mountain Goat\'s Rest', image: 'https://images.unsplash.com/photo-1590122401860-bfebd9aae845?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
  {name: 'Salmon Creek', image: 'https://images.unsplash.com/photo-1500332988905-1bf2a5733f63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
  {name: 'Granite Hill', image: 'https://images.unsplash.com/photo-1545252682-2d32e48111da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=958&q=80'},
  {name: 'Mountain Goat\'s Rest', image: 'https://images.unsplash.com/photo-1590122401860-bfebd9aae845?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
  {name: 'Salmon Creek', image: 'https://images.unsplash.com/photo-1500332988905-1bf2a5733f63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
  {name: 'Granite Hill', image: 'https://images.unsplash.com/photo-1545252682-2d32e48111da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=958&q=80'},
  {name: 'Mountain Goat\'s Rest', image: 'https://images.unsplash.com/photo-1590122401860-bfebd9aae845?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}
];

//*************************************** */
// Routes                                 */
//*************************************** */
// app.get('/', (req,res) => {});
// app.post('/', (req,res) => {});

// Landing Page
app.get('/', (req,res) => {
  // Render Landing Page
  res.render('landing');
});

// Campgrounds
app.get('/campgrounds', (req,res) => {
  // Render Campground List
  res.render('campgrounds', {campgrounds: campgrounds});
});

app.get('/campgrounds/new', (req,res) => {
  // Render New Campground Form
  res.render('new');
});

app.post('/campgrounds', (req,res) => {
  // Get data and add to DB
  let camp = req.body.name;
  let img = req.body.image;
  campgrounds.push({name: camp, image: img});
  // Return to /campgrounds
  res.redirect("/campgrounds");
});

//*************************************** */
// Initialise Server                      */
//*************************************** */
app.listen(3000, function(){
  console.log('Yelp Camp running on port 3000');
});
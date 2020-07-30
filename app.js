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

//*************************************** */
// Routes                                 */
//*************************************** */
// app.get('/', (req,res) => {});
// app.post('/', (req,res) => {});

// Landing Page
app.get('/', (req,res) => {
  res.render('landing');
});

// Campgrounds
app.get('/campgrounds', (req,res) => {
  let campgrounds = [
    {name: 'Salmon Creek', image: 'https://images.unsplash.com/photo-1500332988905-1bf2a5733f63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {name: 'Granite Hill', image: 'https://images.unsplash.com/photo-1545252682-2d32e48111da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=958&q=80'},
    {name: 'Mountain Goat\'s Rest', image: 'https://images.unsplash.com/photo-1590122401860-bfebd9aae845?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}
  ];
  res.render('campgrounds', {campgrounds: campgrounds});
});

app.get('/campgrounds/new', (req,res) => {
  res.render('new');
});

app.post('/campgrounds', (req,res) => {
  // Get data and add to DB

  // Return to /campgrounds
});

//*************************************** */
// Initialise Server                      */
//*************************************** */
app.listen(3000, function(){
  console.log('Yelp Camp running on port 3000');
});
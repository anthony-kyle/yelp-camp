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

app.set('view engine', 'ejs');

//*************************************** */
// Routes                                 */
//*************************************** */
app.get('/', (req,res) => {
  res.render('landing');
});

//*************************************** */
// Initialise Server                      */
//*************************************** */
app.listen(3000, function(){
  console.log('Yelp Camp running on port 3000');
});
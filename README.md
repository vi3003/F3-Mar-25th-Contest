# F3-Mar-25th-Contest
1.  Create an HTML file called index.html.This file should have a button with the text "Get Location" and an empty div with an id of map.You should also include a link to your CSS file and a script tag to your JavaScript file.

2.  In your JavaScript file, define a function called getLocation().This function should check if the Geolocation API is supported by the user's browser. If it is, call the getCurrentPosition()method of the Geolocation API, passing in a callback function called showPosition as an argument. If the Geolocation API is not supported, display an error message to the user.
Hint: https://www.w3schools.com/html/html5_geolocation.asp

3.  In the showPosition function, retrieve the user's latitude and longitude from the positionobject passed as an argument. Use the setItem() method of localStorage to save the latitude and longitude in the browser's local storage. You should use the keys latand longto save the latitude and longitude respectively.

4.  Use the Google Maps to display the user's location on a map. To display the lat,long of the user on a map refer to these links -

5.  Create a Remove Location button and once the button is clicked remove the lat and long from the localstorage.

6.  If the lat,long are already there in the localstorage disable the Get Location button as the location has already been fetched earlier and directly show the map

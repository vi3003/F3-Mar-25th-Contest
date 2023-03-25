let getEl = document.getElementById('getLocation');
let setEl = document.getElementById('setLocation');
let inner_map = document.getElementById('map');
let heading = document.getElementById('heading-text')
// function to get location
function getLocation()
{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getCurrentPosition);
      } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
}
// function to get current location
function getCurrentPosition(position)
{
   showPosition(position);

   // Now setting up longitude and latitude with local storage
   let Lat = localStorage.getItem("lat");
   let Long = localStorage.getItem("long");
   console.log(Lat);
   console.log(Long);
   inner_map.innerHTML = `<div class="main-map">
       <iframe src="https://maps.google.com/maps?q=${Lat},${Long}&hl=en&z=14&amp;output=embed" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>
   </div>`
}
// function to show position
function showPosition(position)
{
    localStorage.setItem("long",position.coords.longitude);
    localStorage.setItem("lat",position.coords.latitude);
}
// function for enabling button
function enabledButton()
{
    document.getElementById('getLocation').disabled = false;
}
if(localStorage.getItem("long") && localStorage.getItem("lat"))
{
    document.getElementById('getLocation').disabled = "true";
    let Lat = localStorage.getItem("lat");
    let Long = localStorage.getItem("long");
    inner_map.innerHTML = `<div class="main-map">
        <iframe src="https://maps.google.com/maps?q=${Lat},${Long}&hl=en&z=14&amp;output=embed" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>`
}
else
{
    document.getElementById('getLocation').addEventListener('click' , () => {
        getLocation();
    })
}

setEl.addEventListener('click' , () => {
    localStorage.clear();
    enabledButton();
    // after removing data from local storage it will show the dummy location also
    heading.innerText = "As there is no Data so it will show dummy location";
    inner_map.innerHTML = `<div class="main-map">
    <iframe src="https://maps.google.com/maps?q=35.856737, 10.606619&z=15&output=embed" width="360" height="270" frameborder="0" style="border:0"></iframe>
</div>`
})
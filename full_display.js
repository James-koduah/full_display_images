var link = document.createElement( "link" );
link.href = 'https://james-koduah.github.io/full_display_images/display_pictures.css'
link.type = "text/css";
link.rel = "stylesheet";
link.media = "screen,print";
document.getElementsByTagName( "head" )[0].appendChild( link );

/**
 * Add the html elements to the page
 */
let body = document.getElementById('body')
body.innerHTML += `
<link rel="stylesheet" href="https://james-koduah.github.io/full_display_images/display_pictures.css">
<!---->
<!--Injected By Full_display.js !Start-->
<sub>
<!-- display_pictures.css -->
<div id="full_display">
    <div id="full_display_close" onclick="full_display_close()">
        <ion-icon id="close_button" name="close-outline" color="light"></ion-icon>
    </div>
    <div id="full_display_previous" onclick="full_display_change('<')">
        <ion-icon name="caret-back-outline" id="full_display_previous_button"></ion-icon>
    </div>
    <div id="full_display_next" onclick="full_display_change('>')">
        <ion-icon name="caret-forward-outline" id="full_display_next_button"></ion-icon>
    </div>
    <div id="full_display_pic">
        <img src="" id="full_display_img">
    </div>
</div>
</sub>
<!--Injected By Full_display.js !Done-->
<!---->
`



/**
 * Add the full display functionality to all <img> elements
 */
let all_image_elements = document.querySelectorAll('img');
  for (let i = 0; i < all_image_elements.length; i++){
    all_image_elements[i].setAttribute('onclick', 'full_display(this)')
  }


/**
 * Full Display section
 */
let full_display_running = false;
let full_display_section = document.getElementById('full_display')
let full_display_img = document.getElementById('full_display_img')
var current_image;
/**
 * Close the Full Display
 * @go_back: This should be true if the custom close button is pressed
 *           This is to implement the browser's previous history function
 *           If it is left at false, It means we are using the browsers built-in button
 *           Which automatically calls the browsers previous history function
 */
function full_display_close(go_back=false){
    full_display_section.style.zIndex = -40;
    full_display_running = false;
    if (go_back) window.history.back(); // if we are using our custom button. The browsers back button automatically implements this
}


/**
 * Open the Full Display
 * @image: The function is passed as full_display(this).
 *         This means that each image that is clicked returns itself as an argument
 */
function full_display(image){
    let image_source = image.src
    full_display_img.src = image_source
    full_display_section.style.zIndex = 40
    full_display_running = true
    window.history.pushState('forward', null, 'picture'); // We add to the browsers history so that we can go back to the main-page if we close this div
    current_image = image_source;
}

/**
 * Full_display_change
 * @direction: Next or Previous Picture
 */

function full_display_change(direction){
}


/**
 * Handle the event where the user presses the device backbutton 
 * instead of the |X| at the top of the page
 */
jQuery(document).ready(function($) {
if (window.history && window.history.pushState) {
    $(window).on('popstate', function() {
        if (full_display_running == true){
            full_display_close()
        }
    });

}
});

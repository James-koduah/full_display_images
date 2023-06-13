/**
 * Add to dom
 */

let body = document.getElementById('body')
body.innerHTML += `
<!---->
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
<link rel="stylesheet" href="css/display_pictures.css">

<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
<!---->
<!--Injected By Full_display.js !Done-->


`


let images = document.querySelectorAll('img');
  for (let i = 0; i < images.length; i++){
    images[i].setAttribute('onclick', 'full_display(this)')
  }
  /**
   * Full Display section
   */
  let full_display_section = document.getElementById('full_display')
  let full_display_img = document.getElementById('full_display_img')
  /**
   * Close the Full Display
   */
  function full_display_close(){
    full_display_section.style.zIndex = -40;
  }


  /**
   * Open the Full Display
   */
  function full_display(image){
    image_source = image.src
    full_display_img.src = image_source
    full_display_section.style.zIndex = 40
  }
  
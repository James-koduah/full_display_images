# Full Screen Display Images
A script that Displays Images as full screen on your website. 
This is very handy for websites where you have images that you would like to click, and have them display in full screen


## To use, add this script to your website
```<script src='https://james-koduah.github.io/full_display_images/app.js'></script>```


## Usage
```
fullImageDisplay - Function to display images in full screen
@param args: Object {
    @className: String | By default all image elements will be selected. Specify a class to choose which group of images are selected.
    @slide: Boolean | Next and previous functionality - Allows users to cycle through all the selected images like a carousel. <true> by default.
}
```

#### Examples
**Example 1**
This will select all images with the class name 'products'. 
The user in full screen mode would be able to navigate and see all other selected images.

```
let args = {
    className: 'products',
    slide: true
}
fullImageDisplay(args)
```

**Example 2**
This will select all image elements in the webpage, including logos.
With slide set to false, the user can only see the image they clicked on and can't navigate to others.
```
let args = {
    slide: false
}
fullImageDisplay(args)
```

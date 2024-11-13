/**
 * fullImageDisplay - Function to display images in full screen
 * @param args: Object {
 *      @className: String | By default all image elements will be selected. Specify a class to choose which group of images are selected.
 *      @slide: Boolean | Next and previous functionality - Allows users to cycle through all the selected images like a carousel. <true> by default.
 * }
 */
function fullImageDisplay(args={slide: true}){
    document.addEventListener('DOMContentLoaded', ()=>{
        let link = document.createElement( "link" );
        link.href = 'https://james-koduah.github.io/full_display_images/style.css'
        link.type = "text/css";
        link.rel = "stylesheet";
        link.media = "screen,print";
        document.head.appendChild(link);
        
        
        let body = document.body
        if (args.slide){
            body.innerHTML += `
            <!--Image full display-->
            <section>
                <div id="full_image_display321">
                    <div id="full_image_display_close321">
                        <p>X</p>
                    </div>
                    <div id="full_image_display_prev321">
                        <svg fill="#000000" width="64px" height="64px" viewBox="0 0 24 24" id="previous" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
                        <path id="primary" d="M17.45,2.11a1,1,0,0,0-1.05.09l-12,9a1,1,0,0,0,0,1.6l12,9a1,1,0,0,0,1.05.09A1,1,0,0,0,18,21V3A1,1,0,0,0,17.45,2.11Z" style="fill: #ffffff;"></path>
                        </g></svg>
                    </div>
                    <div id="full_image_display_next321">
                        <svg fill="#000000" width="64px" height="64px" viewBox="0 0 24 24" id="next" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
                        <path id="primary" d="M18.6,11.2l-12-9A1,1,0,0,0,5,3V21a1,1,0,0,0,.55.89,1,1,0,0,0,1-.09l12-9a1,1,0,0,0,0-1.6Z" style="fill: #ffffff;"></path>
                        </g></svg>
                    </div>
                    <div id="main_image321">
                    </div>
                </div>
            </section>
            `
        }else{
            body.innerHTML += `
            <!--Image full display-->
            <section>
                <div id="full_image_display321">
                    <div id="full_image_display_close321">
                        <p>X</p>
                    </div>
                    <div id="main_image321">
                    </div>
                </div>
            </section>
            `
        }

        let all_image_elements = document.querySelectorAll(args.className ? '.' + args.className : 'img');
        let images = []
        for (let i = 0; i < all_image_elements.length; i++){
            if (all_image_elements[i].tagName !== 'IMG') continue
            let sorce = all_image_elements[i].src
            images.push(sorce)
            all_image_elements[i].addEventListener('click', (e)=>{
                full_display(sorce)
            })
        }

        let main_div = document.getElementById('full_image_display321')
        let div_close = document.getElementById('full_image_display_close321')
        let main_img = document.getElementById('main_image321')
        let current_img = false
        div_close.addEventListener('click', ()=>{full_display_close()})
        if (args.slide){
            document.getElementById('full_image_display_next321').addEventListener('click', ()=>{
                display_next_image(1)
            })
            document.getElementById('full_image_display_prev321').addEventListener('click', ()=>{
                display_next_image(0)
            })
        }
        function full_display(sorce){
            let new_img = document.createElement('img')
            new_img.src = sorce
            main_div.style.zIndex = 100000
            main_div.style.display = 'flex'
            main_img.innerHTML = ''
            main_img.appendChild(new_img)
            current_img = new_img
        }
        function full_display_close(){
            main_div.style.zIndex = -40
            main_div.style.display = 'none'
        }

        function display_next_image(arg){
            let index = images.indexOf(current_img.src)
            if (arg == 1){
                index++
                if (index > images.length - 1) index = 0;
            }else{
                index--
                if (index < 0) index = images.length - 1;
            }
            full_display(images[index])
        }
    });
    
}

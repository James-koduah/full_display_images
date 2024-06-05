function imagesFullDisplay3421(){
    let link = document.createElement( "link" );
    // link.href = 'https://james-koduah.github.io/full_display_images/display_pictures.css'
    link.href = 'http://localhost:5500/style.css'
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";
    document.head.appendChild(link);
    
    
    let body = document.body
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

    // `
    // <div id="full_display_previous" onclick="full_display_change('<')">
    //     <svg fill="#000000" width="64px" height="64px" viewBox="0 0 24 24" id="previous" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color">
    //     <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
    //     <path id="primary" d="M17.45,2.11a1,1,0,0,0-1.05.09l-12,9a1,1,0,0,0,0,1.6l12,9a1,1,0,0,0,1.05.09A1,1,0,0,0,18,21V3A1,1,0,0,0,17.45,2.11Z" style="fill: #ffffff;"></path>
    //     </g></svg>
    // </div>
    // <div id="full_display_next" onclick="full_display_change('>')">
    //     <svg fill="#000000" width="64px" height="64px" viewBox="0 0 24 24" id="next" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color">
    //     <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
    //     <path id="primary" d="M18.6,11.2l-12-9A1,1,0,0,0,5,3V21a1,1,0,0,0,.55.89,1,1,0,0,0,1-.09l12-9a1,1,0,0,0,0-1.6Z" style="fill: #ffffff;"></path>
    //     </g></svg>
    // </div>`

    let all_image_elements = document.querySelectorAll('img');
    for (let i = 0; i < all_image_elements.length; i++){
        all_image_elements[i].addEventListener('click', (e)=>{
            full_display(all_image_elements[i])
        })
    }

    let isrunning = false
    let main_div = document.getElementById('full_image_display321')
    let div_close = document.getElementById('full_image_display_close321')
    div_close.addEventListener('click', ()=>{full_display_close()})
    let main_img = document.getElementById('main_image321')
    function full_display(img){
        let new_img = document.createElement('img')
        new_img.src = img.src
        main_div.style.zIndex = 100000
        main_div.style.display = 'flex'
        main_img.innerHTML = ''
        main_img.appendChild(new_img)
    }
    function full_display_close(popstate=true){
        main_div.style.zIndex = -40
        main_div.style.display = 'none'
    }

    window.addEventListener('popstate', ()=>{
        full_display_close(false)
    })
}
imagesFullDisplay3421()

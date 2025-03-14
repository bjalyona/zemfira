window.addEventListener('DOMContentLoaded', () => {

    // biography

    let cards = document.querySelectorAll('.bio_card'),
        btns = document.querySelectorAll('.bio_item'),
        cardsParent = document.querySelector('.bio_items');

    function hideCards(){
        cards.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        btns.forEach(item => {
            item.classList.remove('bio_item__active');
        });
    }
    function showCards(i = 0){
        cards[i].classList.add('show', 'fade');
        cards[i].classList.remove('hide');
        btns[i].classList.add('bio_item__active');
    }
    hideCards();
    showCards();

    cardsParent.addEventListener('click', (event) => {
        let target = event.target;
        if(target && event.target.classList.contains('bio_item')){
            btns.forEach((item, i) => {
                if (target == item){
                    hideCards();
                    showCards(i);
                }
            });
        }
        
    });
    console.log(1);

    // albums

    let albums = document.querySelectorAll('.album_img'),
        albumsContent = document.querySelectorAll('.album_content_item'),
        closeBtns = document.querySelectorAll('[data-close]');
        

    function selectAlbum(i){
        albums[i].classList.add('selected');
    }
    function recoverAlbum(i){
        albums[i].classList.remove('selected');
    }

    function openAlbumContent(item){
        item.classList.add('show');
        item.classList.remove('hide');

    }
    function closeAlbumContent(item){
        item.classList.remove('show');
        item.classList.add('hide');
    }

    albums.forEach((item, i) =>{
        
        item.addEventListener('mouseenter', (event) => {   
            selectAlbum(i);
        });
        item.addEventListener('mouseout', (event) => {   
            recoverAlbum(i);
        });
        item.addEventListener('click', () => {
            openAlbumContent(albumsContent[i]);
        });
    });
    albumsContent.forEach((item, i) => {
        closeBtns[i].addEventListener('click', ()=>{
            closeAlbumContent(item);
        });
        closeBtns[i].addEventListener('touchstart', ()=>{
            closeAlbumContent(item);
        });

    });


    // gallery

    let photos = document.querySelectorAll('.gallery_item'),
        prevBtn = document.querySelector('.prev_btn'),
        nextBtn = document.querySelector('.next_btn');

    photos.forEach(item => {
        item.classList.add('hide');
    });

    let photoIdx = 0;
    photos[photoIdx].classList.add('show');
    photos[photoIdx].classList.remove('hide');

    function showGallery(n){
        photoIdx += n;
        if (photoIdx >= photos.length){
            photoIdx = 0;
            photos[photoIdx].classList.add('show', 'fade');
            photos[photoIdx].classList.remove('hide');
            photos[photos.length-1].classList.add('hide');
            photos[photos.length-1].classList.remove('show');
            
        } else if (photoIdx < 0){
            photoIdx = photos.length-1;
            photos[photoIdx].classList.add('show', 'fade');
            photos[photoIdx].classList.remove('hide');
            photos[0].classList.add('hide');
            photos[0].classList.remove('show');
            
        } else {
            photos[photoIdx].classList.add('show', 'fade');
            photos[photoIdx].classList.remove('hide');
            photos[photoIdx-n].classList.add('hide');
            photos[photoIdx-n].classList.remove('show');
            
        }
    }
    nextBtn.addEventListener('click', (event)=> {
        showGallery(1);
    });
    prevBtn.addEventListener('click', (event)=> {
        showGallery(-1);
    });


});
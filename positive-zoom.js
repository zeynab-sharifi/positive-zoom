(function(window){
    let defineLibrary = () =>({
        init : function(galleryId){
            let container = document.querySelector(galleryId);

            if(! container){
                console.error('please add the correct element')
                return;
            }
            //select class small image and zoom image  

            let fristImg = container.querySelector('.small-preview');
            let imgZoom = container.querySelector('.zoom-image');

            //Error message for a programmer who has forgotten the class .zoom-image
            if(! imgZoom){
                console.error('please add a .zoom-image tag');
                return;
            }

            //Error message for a programmer who has forgotten the class .small-preview

            if(! fristImg){
                console.error('please add images with .small-preview class to your gallery');
                return;
            }
            //Give the address of the first thumbnail to display in the .zoom-image class

            imgZoom.style.backgroundImage = `url(${fristImg.src})`

            //Clicking on any thumbnail will display that image in the .zoom-image class
            container.addEventListener('click' , function(e){
                let ele = e.target;

                if(ele.classList.contains('small-preview')){
                    imgZoom.style.backgroundImage = `url(${ele.src})`
                }
            })
        }
    })

    //To avoid interference between library
    
    if(typeof(positiveZoom) == 'undefined'){
        window.positiveZoom = defineLibrary();
    }else{
        console.log('library already defined.')
    }
})(window)

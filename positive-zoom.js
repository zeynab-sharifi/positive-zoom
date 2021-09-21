(function(window){
    let defineLibrary = () =>({
        init : function(galleryId){
            console.log('setup gallery')
        }
    })

    if(typeof(positiveZoom) == 'undefined'){
        window.positiveZoom = defineLibrary();
    }else{
        console.log('library already defined.')
    }
})(window)

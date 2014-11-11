(function () {
    $('[alt*=image-fragment]').each(function () {
        if ($(this).parent().is(':not(.image-fragment-wrapper)')) {
            var wrapper = $('<div class="image-fragment-wrapper"></div>');
            $(this).parent().wrapInner(wrapper);
        }
        $(this).addClass('image-fragment');
        if ($(this).is(':not(:first-child)')) {
            $(this).addClass('fragment');   
        }    
    });
})();

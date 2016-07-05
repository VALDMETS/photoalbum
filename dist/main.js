var $albumBox = $('.album-list');
var $photoBox = $('.photo-list');
var returnPageOk = 0;

// window.location.hash = 'default';
// window.location.hash = currentHash;

albumList.forEach(function(album, i) {
    var totalInsert = '<a class="album-button" href="#' + album.albumName+ '"><img src="' + album.photos[0].source + '">' + album.albumName + '</a>';
    $albumBox.append(totalInsert);
});

$(document).ready(function() {
    window.addEventListener('hashchange', function() {

        $('header').addClass('hide');
        var currentHash = location.hash.slice(1);
        var picsToShow = albumList.filter(function(album, i) {
            return albumList[i].albumName === currentHash;
        });
        console.log(picsToShow);
        picsToShow = picsToShow[0];
        $albumBox.addClass('side-albums');
        $('.album-button').addClass('side-bar');
        $('img').addClass('hide');
        currentAlbumName = location.hash.slice(1);
        document.querySelector('.photo-list').innerHTML = '<h2>'+ currentAlbumName + '</h2>';
        picsToShow.photos.forEach(function(item, i, arr) {
            totalInsert = '<div class="album-button"><img src="' + item.source + '">' + item.caption + ' </div>';
            console.log(totalInsert);
            $photoBox.append(totalInsert);
        });
        photoTrigger = document.querySelectorAll('div');
        photoTrigger.forEach(function(button){
            $(button).click(function(e){
                $photoBox.addClass('pic-focus');
                $('img').addClass('hide');
                $('div').addClass('hide');
                document.querySelector('h2').innerText = 'Back to Album';
                $(e.target).removeClass('hide');
                $(e.target).addClass('highlight');
                $('html,body').scrollTop(0);
                returnPageOk = 1;
            });
        });
        $('h2').click(function() {
            if (returnPageOk === 1) {
                $photoBox.removeClass('pic-focus');
                console.log(document.querySelector('.photo-list div img'));
                $(document.querySelectorAll('.photo-list div img')).removeClass('hide');
                $('div').removeClass('hide');
                document.querySelector('h2').innerText = currentAlbumName;
                $('img').removeClass('highlight');
                returnPageOk = 0;
            }
        });
    });
});

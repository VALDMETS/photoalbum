var albumList = [{
    albumName: 'Dark Side of the Moon',
    albumTag:  'darkside',
    photos: ['http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg']
}, {
    albumName: 'Ho Ho Hee Hee',
    albumTag:  'hoho',
    photos: ['http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg']
}, {
    albumName: 'The Grand Wazoo',
    albumTag:  'wazoo',
    photos: ['http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg']
}, {
    albumName: 'Dark Side of the Moon',
    albumTag:  'wowzers',
    photos: ['http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg']
}, {
    albumName: 'Ho Ho Hee Hee',
    albumTag:  'shrimp',
    photos: ['http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg']
}, {
    albumName: 'The Grand Wazoo',
    albumTag:  'blurgh',
    photos: ['http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg',
             'http://lisabuffaloe.com/wp-content/uploads/2015/03/Blah.jpg']
}];
var $albumBox = $('.album-list');
var $photoBox = $('.photo-list');

window.location.hash = 'default';

albumList.forEach(function(album, i) {
    var totalInsert = '<a class="album-button" href="#' + album.albumTag + '"><img src="' + album.photos[0] + '">' + album.albumName + '</a>';
    $albumBox.append(totalInsert);
});

$(document).ready(function() {
    window.addEventListener('hashchange', function() {

        var albumID = location.hash.slice(1);
        var picsToShow = albumList.filter(function(album, i) {
            return albumList[i].albumTag === albumID;
        });
        picsToShow = picsToShow[0];
        $albumBox.addClass('side-albums');
        $('.album-button').addClass('side-bar');
        $('img').addClass('hide');
        currentAlbumName = location.hash.slice(1);
        document.querySelector('.photo-list').innerHTML = '<h2>My Pictures</h2>';
        picsToShow.photos.forEach(function(item, i, arr) {
            totalInsert = '<div class="album-button"><img src="' + item + '">Picture #' + (i + 1) + ' </div>';
            $photoBox.append(totalInsert);
        });
        console.log($('div'));
        photoTrigger = document.querySelectorAll('div');
        photoTrigger.forEach(function(button){
            $(button).click(function(e){
            $photoBox.addClass('pic-focus');
            $('img').addClass('hide');
            $('div').addClass('hide');
            // $('header').addClass('hide');
            // $albumBox.addClass('shrink');
            document.querySelector('h2').innerText = '';
            $(e.target).removeClass('hide');
            $(e.target).addClass('highlight');
            console.log(e.target);
            });
        });
        console.log(photoTrigger);

    });

});

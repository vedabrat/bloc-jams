 var buildCollectionItemTemplate = function() {
     var template =
     '<div class="collection-album-container column fourth">'
   + '  <img src="assets/images/album_covers/01.png"/>'
   + '  <div class="collection-album-info caption">'
   + '    <p>'
   + '      <a class="album-name" href="album.html"> The Colors </a>'
   + '      <br/>'
   + '      <a href="album.html"> Vedabrat Etwaru </a>'
   + '      <br/>'
   + '      5 songs'
   + '      <br/>'
   + '    </p>'
   + '  </div>'
   + '</div>'
   ;
   // #2
   return $(template);
};


 $(window).load(function() {
     // #1
     var $collectionContainer = $('.album-covers');
     // #2
     $collectionContainer.empty();
 
     // #3
     for (var i = 0; i < 4; i++) {
         var $newThumbnail = buildCollectionItemTemplate();
         $collectionContainer.append($newThumbnail);
     }
 });

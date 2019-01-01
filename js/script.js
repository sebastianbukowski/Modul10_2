'use strict';
var slides = document.querySelector('.main-carousel');
console.log('slides => ',slides);
var template = document.querySelector('#templateSlide').innerHTML;
console.log(template);
for(var i=0; i<table.length; i++){
  console.log(table[i]);
  var slide = Mustache.render(template, table[i]);
  slides.insertAdjacentHTML('beforeend', slide);
}

var flkty = new Flickity( '.main-carousel', {
  cellAlign: "center",
  contain: true,
  pageDots: false,
  freeScroll: true,
  wrapAround: true,
  groupCells: true,
  adaptiveHeight: true,
  arrowShape: true,
  prevNextButtons: true,
  draggable: true,
  isWrapped: true,
  hash: true,
  arrowShape: {
    x0: 10,
    x1: 40, y1: 50,
    x2: 80, y2: 50,
    x3: 50
  }
});
var resetButton = document.querySelector('.button--reset');
resetButton.addEventListener( 'click', function() {
  flkty.selectCell(0);
});
var progressBar = document.querySelector('.progress-bar')
flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

// GOOGLE MAPS

(function(){
  var infos = document.getElementById('infos');

  	window.initMap = function() {
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 4,
			center: table[0].coords
		});
    var markers = [];
    for(var i=0; i<table.length; i++){
      console.log(table[i]);
      var marker = new google.maps.Marker({
        position: table[i].coords,
        map: map
      });
      markers.push(marker);

      marker.addListener('click', function(){
        console.log(markers);
        infos.innerHTML = 'You clicked marker';
      });

    console.log('markers  at the end of loop =>', markers);
  }

  document.getElementById('center-map').addEventListener('click', function(event){
      event.preventDefault();
      map.panTo(table[0].coords);
  });
}
})();

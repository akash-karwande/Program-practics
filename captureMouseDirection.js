let oldX = 0, oldY = 0;

 function captureMouseMove($event){
      let directionX = 0, directionY = 0, diffX = 0, diffY = 0;
      if ($event.pageX < oldX) {
          directionX = "left";
         $('.ball').removeClass('right');
         $('.ball').removeClass('top');
         $('.ball').removeClass('bottom');
          $('.ball').addClass('left');
          diffX = oldX - $event.pageX;
      } else if ($event.pageX > oldX) {
         $('.ball').removeClass('left');
         $('.ball').removeClass('top');
         $('.ball').removeClass('bottom');
         $('.ball').addClass('right');
          directionX = "right"
          diffX = $event.pageX - oldX;
      }

      if ($event.pageY < oldY) {
         $('.ball').removeClass('right');
         $('.ball').removeClass('left');
         $('.ball').removeClass('bottom');
         $('.ball').addClass('top');
          directionY = "top"
          diffY = oldY - $event.pageY;
      } else if ($event.pageY > oldY) {
         $('.ball').removeClass('right');
         $('.ball').removeClass('top');
         $('.ball').removeClass('left');
         $('.ball').addClass('bottom');
          directionY = "bottom";
          diffY = $event.pageY - oldY;
      }

      oldX = $event.pageX;
      oldY = $event.pageY;
  }

  window.addEventListener('mousemove', captureMouseMove);

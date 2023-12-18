    // link het aan html doormiddel van een id
document.addEventListener('DOMContentLoaded', function () {
    const popupContainer = document.getElementById('popup-container1');
    const closeButton = document.getElementById('close-button1');

    // Toon de pop-up na een delay 5 sec
    setTimeout(function () {
      popupContainer.style.display = 'block';
    }, 5000);

    // Sluit de pop-up wanneer op de sluitknop wordt geklikt
    closeButton.addEventListener('click', function () {
      popupContainer.style.display = 'none';
    });
  });
      // link het aan html doormiddel van een id
  document.addEventListener('DOMContentLoaded', function () {
    const popupContainer = document.getElementById('popup-container2');
    const closeButton = document.getElementById('close-button2');

    // Toon de pop-up na een delay 10 sec
    setTimeout(function () {
      popupContainer.style.display = 'block';
    }, 10000);

    // Sluit de pop-up wanneer op de sluitknop wordt geklikt
    closeButton.addEventListener('click', function () {
      popupContainer.style.display = 'none';
    });
  });
      // link het aan html doormiddel van een id
  document.addEventListener('DOMContentLoaded', function () {
    const popupContainer = document.getElementById('popup-container3');
    const closeButton = document.getElementById('close-button3');

    // Toon de pop-up na een delay 15 sec
    setTimeout(function () {
      popupContainer.style.display = 'block';
    }, 15000);

    // Sluit de pop-up wanneer op de sluitknop wordt geklikt
    closeButton.addEventListener('click', function () {
      popupContainer.style.display = 'none';
    });
  });


  //afbeelding hover 

   // functie om een foto te laten bewegen wanneer je er over heen gaat met je muis
   function moveImageOnHover(imageId) {
    var image = document.getElementById(imageId);

    // een kleine random beweging uitrekenen
    var moveX = Math.floor(Math.random() * 20) - 200; // Random value between -10 and 10
    var moveY = Math.floor(Math.random() * 20) - 1000; // Random value between -10 and 10

    // De transformatie aan een foto toepassen
    image.style.transform = 'translate(' + moveX + 'px, ' + moveY + 'px)';
  }

  // Functie om de foto terug te brengen naar de normale locatie naar dat de muis weg gaat
  function resetImagePosition(imageId) {
    var image = document.getElementById(imageId);
    image.style.transform = 'translate(0, 0)';
  }

  // Hover evenementen aan de fotos toepassen
  document.getElementById('image1').addEventListener('mouseover', function() {
    moveImageOnHover('image1');
  });
  document.getElementById('image1').addEventListener('mouseout', function() {
    resetImagePosition('image1');
  });

  document.getElementById('image2').addEventListener('mouseover', function() {
    moveImageOnHover('image2');
  });
  document.getElementById('image2').addEventListener('mouseout', function() {
    resetImagePosition('image2');
  });
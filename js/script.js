
    function hidePopup(popup){
        popup.classList.add("popup-hidden")
    }

    function markFieldInvalid(field){
        field.classList.add("search-input-error")
    }

    function markFieldValid(field){
        field.classList.remove("search-input-error")
    }

    function initSite(){
        var openSearchFormButton = document.querySelector(".search-form-btn");
        var popup = document.querySelector(".popup");
        if (!popup) return; /* На тех страницах, где нет попапа, ничего не делать */
        var close = popup.querySelector(".popup-close");
        var form = popup.querySelector(".search-block");

        /* поля формы */
        var checkin = popup.querySelector(".search-data-checkin");
        var checkout = popup.querySelector(".search-data-checkout");
        var adults = popup.querySelector(".search-data-adults");
        var children = popup.querySelector(".search-data-children");
        
        /* Спрятать форму после загрузки страницы */
        hidePopup(popup);
        
        console.log(openSearchFormButton)

        openSearchFormButton.addEventListener("click", function(event) {
            /* Логика показа формы на Главной странице */
            popup.classList.remove("popup-hidden");
            event.preventDefault();
        });

        close.addEventListener("click", function(event) {
            hidePopup(popup);
            event.preventDefault();
        });

        form.addEventListener("submit", function(event) {
            var fieldsToValidate = [
                checkin, checkout, adults, children
            ]
            for(var i=0; i<fieldsToValidate.length; i++){
                var field = fieldsToValidate[i];
                if(field.value){
                    markFieldValid(field);
                } else {
                    markFieldInvalid(field);
                    /* Если хоть одно поле не заполнено, 
                    запрещаем отправлять форму */
                    event.preventDefault();
                }
            }
            return;
        });

        window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("popup-show")) {
            popup.classList.remove("popup-show");
            popup.classList.remove("popup-error");
          }
        }
      });
    }   
    window.addEventListener("load", initSite)   

/* Гугл карта */
if(window.google){
    /* Если подключены карты гугл, вывести их на экран */
    function init_map(){var myOptions = {zoom:8,center:new google.maps.LatLng(34.8697395,-111.76098960000002),mapTypeId: google.maps.MapTypeId.ROADMAP};map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(34.8697395,-111.76098960000002)});infowindow = new google.maps.InfoWindow({content:"Седона"});google.maps.event.addListener(marker, "click", function(){infowindow.open(map,marker);});infowindow.open(map,marker);}
    google.maps.event.addDomListener(window, "load", init_map);
}
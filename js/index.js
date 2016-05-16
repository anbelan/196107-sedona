<script>
		var link = document.querySelector(".search-form-btn");
		var popup = document.querySelector(".popup");
		var close = popup.querySelector("popup-close");
		var form = popup.querySelector("form");
		var checkin = popup.querySelector("[checkin-date]");
		var checkout = popup.querySelector("[checkout-date]");
		var storage = localStorage.getItem("checkin");

		
		link.addEventListener("click", function(event) {
			event.preventDefault();
		popup.classList.add("popup-show");
		

		if (storage) {
			checkin.value = storage;
			checkout.focus();
		} else {
			checkin.focus();
		}
		});

		close.addEventListener("click", function(event) {
			event.preventDefault();
			popup.classList.remove("popup-show");
			popup.classList.remove("popup-error");
		});

		form.addEventListener("submit", function(event) {
			if (!checkin.value || checkout.value){
			event.preventDefault();
			console.log("Поле обязательно для заполнения");
			popup.classList.remove("popup-error");
          	popup.offsetWidth = popup.offsetWidth;
			popup.classList.add("popup-error");
		}else {
			localStorage.setItem("checkin", checkin.value);
		}
		});

		window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("popup-show")) {
            popup.classList.remove("popup-show");
            popup.classList.remove("popup-error");
          }
        }
      });
	</script>
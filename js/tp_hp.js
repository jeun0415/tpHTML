let slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n){
            showSlides(slideIndex += n);
        }

        function currentSlide(n){
            showSlides(slideIndex = n);
        }

        function showSlides(n){
            let i;
            let slides = document.getElementsByClassName("s-slideimg");
            if(n > slides.length) {slideIndex = 1}
            if(n < 1){slideIndex = slides.length}
            for(i = 0; i < slides.length; i++){
                slides[i].style.display = "none";
            }
            slides[slideIndex-1].style.display = "block";
        }

        let autoSlideIndex = 0;
        showAutoSlides();

        function showAutoSlides(){
            let i;
            let autoSlides = document.getElementsByClassName("s-slideimg");
            for(i = 0; i < autoSlides.length; i++){
                autoSlides[i].style.display = "none";
            }
            autoSlideIndex++;
            if(autoSlideIndex > autoSlides.length) {autoSlideIndex = 1}
            autoSlides[autoSlideIndex-1].style.display = "block";
            setTimeout(showAutoSlides, 3000);
        }
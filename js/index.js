//JavaScript Code
$(document).ready(function(){

    //Active Scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', scrollActive);

    function scrollActive(){
        const scrollY = window.pageYOffset

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 85;
            sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.navbar-nav a[href*=' + sectionId + ']').classList.add('active')
            } else {
                document.querySelector('.navbar-nav a[href*=' + sectionId + ']').classList.remove('active')
            }
        })
    }



    //Search Toggle Button
    $(function(){
        $('.toggle-overlay').click(function(){
            $('.search-overlay').toggleClass('open');
        })
    })


    $('.navigation a').click(function(){
        $(this).addClass("active").siblings().removeClass('active');
    });





 })


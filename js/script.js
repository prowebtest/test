$(document).ready(function () {
    var menu = $('.menu');
    var menuOpenButton = $('.btn-bars');
    var menuCloseButton = $('.btn-x');
    var menuLink = $('.menu-link')

    menuOpenButton.click(function () {
        menu.toggleClass('menu-active');
        menuOpenButton.css("display", "none");
        menuCloseButton.css("display", "block");
    });

    menuCloseButton.click(function () {
        menu.toggleClass('menu-active');
        menuCloseButton.css("display", "none");
        menuOpenButton.css("display", "block");
    });

    menuLink.click(function (event) {
        event.preventDefault();
        var id = $(this).attr('href');
        var top = $(id).offset().top;

        $('body,html').animate({
            scrollTop: top
        }, 1500);

        if ($(window).width() < 992) {
            menu.toggleClass('menu-active');
            menuCloseButton.css("display", "none");
            menuOpenButton.css("display", "block");
        } else {
            return false;
        }
    });

    $(window).resize(function () {
        if ($(window).width() > 992) {
            menu.removeClass('menu-active');
            menuOpenButton.removeAttr("style");
            menuCloseButton.removeAttr("style");
        } else {
            return false;
        }
    });
// Modal -------------------------------------
    var loginModal = document.getElementById('login-modal');
    var loginButton = document.getElementById('btn-login');
    var loginModalCloseButton = document.getElementById('btn-login-modal-close');

    loginButton.onclick = function () {
        loginModal.style.display = "flex";
    }
    loginModalCloseButton.onclick = function () {
        loginModal.style.display = "none"
    }

    window.onclick = function (event) {
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        }
    }   
    
    var signinModal = document.getElementById('signin-modal');
    var signinButton = document.getElementById('btn-signin');
    var signinModalCloseButton = document.getElementById('btn-signin-modal-close');

    signinButton.onclick = function () {
        signinModal.style.display = "flex";
    }
    signinModalCloseButton.onclick = function () {
        signinModal.style.display = "none"
    }
});
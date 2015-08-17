var PR = {

    init: function() {

        PR.General.init();
        PR.Colorbox.init();
        PR.FormValidator.init();

    },

    General: {

        init: function(){

            //container id sine yükseklik basıyorum
            var _windowHeight = ($(window).height());
            $('#container').css('min-height', _windowHeight)

        }
    },

    Colorbox: {

        init: function(){

            // Katılım Kosullari
            $('.form-success').colorbox({
                href: 'success-form.html',
                transition: 'fade'
            });

        }

    },

    FormValidator: {

        init: function () {

            $('#form').validator().on('submit', function (e) {
                if (e.isDefaultPrevented()) {
                    // gönderilemedi...
                }
                else {
                    // gönderildi...
                }
                return false;
            });


        }

    }

};








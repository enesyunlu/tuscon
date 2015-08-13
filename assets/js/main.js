var PR = {

    init: function() {

        PR.General.init();
        PR.Colorbox.init();
        PR.FormValidator.init();

    },

    General: {

        init: function(){

        }
    },

    Colorbox: {

        init: function(){

            // Katılım Kosullari
            $('.form-success').colorbox({
                href: 'success-form.html',
                transition: 'fade'
            });

            $(document).on('click', '.close-pp-btn',function() {
                $.colorbox.close();
                return false;
            });

        }

    },

    FormValidator: {

        init: function () {

            $('#tweetAnswerForm').validator().on('submit', function (e) {
                if (e.isDefaultPrevented()) {
                    // gönderilemedi...
                }
                else {
                    // gönderildi...
                    $('.form-success').trigger('click');
                }
                return false;
            });


        }

    }

};








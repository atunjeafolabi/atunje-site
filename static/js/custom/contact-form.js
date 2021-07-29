(function ($) {
    "use strict";

    var $contact = $contact = $('#contact-form');

    if ($contact.length) {
        $contact.validate({
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                subject: {
                    required: true
                },
                message: {
                    required: true
                }
            },

            messages: {
                name: "Please enter your First Name",
                email: "Please enter valid Email",
                subject: "Please enter your Subject",
                message: "Please write your Message"
            },

            submitHandler: function (form) {
                $('#send').attr({ 'disabled': 'true', 'value': 'Sending...' });
                $.ajax({
                    type: "POST",
                    url: "email.php",
                    data: $(form).serialize(),
                    success: function () {
                        $('#send').removeAttr('disabled').attr('value', 'Send');
                        $("#success").slideDown("slow");
                        setTimeout(function () {
                            $("#success").slideUp("slow");
                        }, 5000);
                        form.reset();
                    },
                    error: function () {
                        $('#send').removeAttr('disabled').attr('value', 'Send');
                        $("#error").slideDown("slow");
                        setTimeout(function () {
                            $("#error").slideUp("slow");
                        }, 5000);
                    }
                });
                return false; // prevent normal submit since ajax is used
            }

        });
    }

})(jQuery)
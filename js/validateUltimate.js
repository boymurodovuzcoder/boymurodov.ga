function validateForm1() {
            var name = $("#name");
            var tel = $("#tel");
            var message = $("#message");

            var nameValidation = false;
            var telValidation = false;
            var messageValidation = false;

            var checkName = /^[\w]([-']?[\w]+)*( [\w]([-']?[\w]+)*)$/;
            var checkTel = /^\+?[\d]{9,13}$/;
            
            if (!name.val()) {
                $(".name_error").css("display", "block")
                $(".name_error").css("color", "red");
                $(".name_error").html("Ism va Familya kiritilmadi!");
                nameValidation = false;
            } else {
                 $(".name_error").css("display", "none");
                 if (checkName.test(name.val())) {
                    nameValidation = true;
                    $(".name_error").css("display", "none")
                } else {
                    $(".name_error").css("display", "block")
                    $(".name_error").css("color", "red");
                    $(".name_error").html("Ism va Familya noto'gri kiritildi!");   
                    nameValidation = false;
                }
            }

            if (!tel.val()) {
                $(".tel_error").css("display", "block")
                $(".tel_error").css("color", "red");
                $(".tel_error").html("Telefon raqam kiritilmadi!");
                telValidation = false;
            } else {
                 $(".tel_error").css("display", "none");
                  if (checkTel.test(tel.val())) {
                    telValidation = true;
                    $(".tel_error").css("display", "none")
                } else {
                    $(".tel_error").css("display", "block")
                    $(".tel_error").css("color", "red");
                    $(".tel_error").html("Telefon raqam noto'gri kiritildi!");   
                    telValidation = false;
                }
            }

            if (!message.val()) {
                $(".message_error").css("display", "block")
                $(".message_error").css("color", "red");
                $(".message_error").html("Xabar kiritilmadi!");
                messageValidation = false;
            } else {
                 $(".message_error").css("display", "none")
                 messageValidation = true;
            }

            if (nameValidation && telValidation && messageValidation) {
                console.log('submitted');
                
                $("#contact-form").submit();
            } 

        }
(function($){
	
	$('.datepicker').datepicker({
        format: 'dd/mm/yyyy',
        startDate: '1d',
        todayHighlight: true,
        autoclose: true,
        disableTouchKeyboard: 'true',
        templates: {
                        leftArrow: '<i class="fa fa-caret-left"></i>',
                        rightArrow: '<i class="fa fa-caret-right"></i>'
                    }
    });

    $(".booking-message").validate({
		rules: {
            fullname: {
                required: true
            },
            email: {
                required: true
            },
            phone: {
                required: true
            },
            date: {
                required: true
            },
            people: {
                required: true
            },
            package: {
                required: true
            }
        },

  //       messages: {
		// 	firstname: "",
  //           lastname: "",
  //           company: "",
  //           telephone: "",
  //           gender: "",
  //           city: "",
  //           stated: "",
  //           zip: "",
  //           email: "",
  //           password: "",
  //           cardholder: "",
  //           cardnumber: "",
  //           payment: "",
  //           expiration_month: "",
  //           expiration_year: "",
  //           ccv2: ""
		// },

        highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'strong',
        errorClass: 'help-block',
        errorPlacement: function(error, element) {
            if(element.parent('.form-group').length) {
                error.insertBefore(element);
            } else {
                error.insertBefore(element);
            }
        },
    });

})(jQuery);
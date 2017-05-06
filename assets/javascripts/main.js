(function($) {
    $('form#contactUs .actions').hide();
    $('form#rsvp .actions').hide();
    $('form#rsvp .attending-items').hide();

    var api = 'https://script.google.com/macros/s/AKfycbxOJ0QkVzoGK9wqyPw1x-ViXBhj29bOSCxXN7AroQn1zwyqIQ/exec';

    $(document).on('submit','form#contactUs',function(e){
        e.preventDefault();
        var data = $("form#contactUs").serializeArray().reduce(function(m,o){ m[o.name] = o.value; return m;}, {})
        $.ajax({
            type: "POST",
            url: api,
            data: {
                sheet_name: 'ContactForm',
                Name: data.name,
                Email: data.email,
                Message: data.message,
            },
            success: function (response) {
                $("form#contactUs").hide();
                $("#contactForm").html("<strong>Thank you!</strong>");
            }
        });
    });

    $(document).on('submit','form#rsvp',function(e){
        e.preventDefault();
        var data = $("form#rsvp").serializeArray().reduce(function(m,o){ m[o.name] = o.value; return m;}, {})
        $.ajax({
            type: "POST",
            url: api,
            data: {
                Name: data.name,
                Email: data.email,
                Attending: data.attending,
                Notes: data.notes,
                PartySize: data.party,
                DietOptions: data.diet,
            },
            success: function (response) {
                $("form#rsvp").hide();
                alert("Thank you");
            }
        });
    });

    $(document).on('change', 'form#rsvp #attending', function(e){
        var val = $(this).val();
        if (val == 'Yes') {
            $('form#rsvp .attending-items').show();
        } else {
            $('form#rsvp .attending-items').each(function(index, element){
                $(element).find('*').filter(':input:visible:first').val('');
            }).hide();
        }
    });

})(jQuery);


var verifyReCaptchaContactForm = function(){
    $('form#contactUs .actions').show();
    $('form#contactUs .g-recaptcha').hide();
};
var verifyReCaptchaRSVPForm = function(){
    $('form#rsvp .actions').show();
    $('form#rsvp .g-recaptcha').hide();
};

var outputPartySize = function(size){
    document.querySelector('#partySize').value = size;
};

/* Diable enter submit */
$(document).ready(function() {
  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
});
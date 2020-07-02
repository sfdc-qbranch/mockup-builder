$(document).ready(function () {
    // FROM THEM ADD 
    $('#addFromThem').on('click', function () {
        addMessage('from-them', 'lm_senderMessage');
    });

    //FROM ME ADD
    $('#addFromMe').on('click', function () {
        addMessage('from-me', 'lm_receiverMessage');
    });

    //FONTSIZE
    $('#lm_fontSize').change(function () {
        // console.log($(this).val());
        $('#chatPanelPreview div').css({
            'font-size': $(this).val() + 'px',
            'line-height': $(this).val() + 'px'
        });
    });

    //CLEAR
    $('#clear').on('click', function () {
        $('#chatPanelPreview').empty();
    });

    //REMOVE LAST CHILD
    $('#removeLast').on('click', function () {
        $('#chatPanelPreview div:last-child()').remove();
    });

    /*TIME PICKER*/
    $('input.timepicker').timepicker({
        timeFormat: 'h:mm p',
        interval: 30,
        minTime: '0:00am',
        maxTime: '23:59pm',
        defaultTime: '9:30am',
        startTime: '7:00',
        dynamic: false,
        dropdown: true,
        scrollbar: true,
        change: function () {
            $('#timedisplay').html(this.val());
        },
    });


    /*ADD CONTACT NAME*/
    $('#lm_contactNameInput').keyup(function () {
        var contactname = $('#lm_contactNameInput').val();
        $('#lm_contactNameDisplay').html(contactname);
        var matches = contactname.match(/\b(\w)/g);
        var acronym = matches.join('').substring(0, 2) || '';
        $('#lm_initialdisplay').html(acronym);
    })

    download_mockup_active();

});
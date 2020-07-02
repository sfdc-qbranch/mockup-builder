$(document).ready(function () {

    //DISPLAY TODAYS DATE - USING HELPER FUNCTION
    $("#datedisplay").html(moment().format('dddd, DD MMMM'));


    //TIME PICKER
    $('input.timepicker').timepicker({
        timeFormat: 'H:mm',
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

    //DATE PICKER
    $('input.datepicker').datepicker({
        format: "DD, dd MM",
        maxViewMode: 2,
        autoclose: true
    });

    $('input.datepicker').on('change', function () {
        $("#datedisplay").html($('input.datepicker').val());
    });

    //SET APP NAME
    $("#n_setAppName").on('keyup', function () {
        $("#notificationTitleSpan").html($("#n_setAppName").val());
    });

    //SET APP LOGO IMAGE
    $("#n_setAppLogoImage").change(function () {
        readURL(this, $('#appLogo'));
    });

    //SET APP LOGO IMAGE
    $("#n_setScreenBackgroundImage").change(function () {
        readURL(this, $('#n_backGroundImage'));
    });


    //SET NOTIFICATION TIME AGO
    $("#n_setTimeAgo").change(function () {
        $('#notificationTimeSpan').html($("#n_setTimeAgo").val());
    });

    //SET NOTIFICATION MESSAGE
    $("#n_setNotification").on('keyup', function () {
        $("#notificationMessageSpan").html($("#n_setNotification").val().replace(/\r?\n/g,
            '<br/>'));
    });

    download_mockup_active();

});
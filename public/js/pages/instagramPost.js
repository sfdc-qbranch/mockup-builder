$(document).ready(function () {

    //----------SETTINGS------------//

    $('#igpost_setVerified').prop('checked', true).change();

    $("#igpost_reset").click(function () {
        $('#igpost_setProfileName').val('salesforce').change();
        $('#igpost_getProfileIcon').attr("src", "img/salesforce-logo.png");
        $('#igpost_setVerified').prop('checked', true).change();
        $('#igpost_getPostImage').attr("src", "img/insta_img-placeholder_salesforcepost.jpg");
        $('#igpost_setPostText').val('').change();
    });

    //----------DISPLAYS------------//

    //Profile Name
    bindSettingAndDisplayTextField('igpost_setProfileName', '.igpost_getProfileName');

    //Verified 
    bind_setCheckbox_showElement('igpost_setVerified', '#igpost_getVerified');

    //Post
    bind_setPost_displayPost_withHashTag('igpost_setPostText', 'igpost_getPostText')

    //SET APP LOGO IMAGE
    $("#igpost_setProfileIcon").change(function () {
        readURL(this, $('#igpost_getProfileIcon'));
    });

    $("#igpost_setPostimage").change(function () {
        readURL(this, $('#igpost_getPostImage'));
    });

    download_mockup_active();
});
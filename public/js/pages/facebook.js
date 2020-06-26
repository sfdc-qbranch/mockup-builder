$(document).ready(function () {

    //-------DISPLAY---------//

    var fbLeadadCtaOptions = [
        "Learn More", "Sign Up", "Subscribe", "Apply Now", "Get Quote", "Download"
    ];

    var $select = $('#fb-leadad-cta');
    $select.find('option').remove();
    $.each(fbLeadadCtaOptions, function (index, value) {
        $select.append('<option value="' + value + '">' + value + '</option>');
    });

    //--------FUNC--------//

    //SET PAGE NAME
    bindSettingAndDisplayTextField('fb-leadad-pagename', '#facebook_leadad-advertiserName');

    //SET POST TEXT
    bind_setPost_displayPost_withHashTag('fb-leadad-text', 'facebook_leadad_mobile-Ad-Text')
    //bindSettingAndDisplayTextField('fb-leadad-text', '#facebook_leadad_mobile-Ad-Text');

    //SET HEADLINE TEXT
    bindSettingAndDisplayTextField('fb-leadad-headline', '#facebook_leadad_mobile-Ad-Headline');

    //SET LINK DESCRIPTION TEXT
    bindSettingAndDisplayTextField('fb-leadad-linkdescription',
        '#facebook_leadad_mobile-Ad-LinkDescription');

    //SET CAPTION TEXT
    bindSettingAndDisplayTextField('fb-leadad-caption', '#facebook_leadad_mobile-Ad-Caption');

    //SET PAGE LOGO IMAGE
    $("#fb_setPageLogoImage").change(function () {
        readURL(this, $('#appLogo'));
    });

    //SET POST IMAGE
    $("#fb_setPostImage").change(function () {
        readURL(this, $('#postImage'));
    });

    //SET CALL TO ACTION
    $("#fb-leadad-cta").change(function () {
        $("#fb_lead_ad-CTA-button").html($("#fb-leadad-cta").val());
    });

    //SET NUMBER OF REACTIONS
    bindSettingAndDisplayTextField('fb-leadad-numberofreactions', '#fb-likes_number');

    //SET NUMBER OF COMMENTS
    bindSettingAndDisplayTextField('fb-leadad-numberofcomments', '#fb-comments_number');

    //SET NUMBER OF SHARES
    bindSettingAndDisplayTextField('fb-leadad-numberofshares', '#fb-shares_number');

    //SET CALL TO ACTION
    $(".fb-likes_checkboxes").change(function () {
        getCurrentSelectedReactions();
    });

    download_mockup_active();
});
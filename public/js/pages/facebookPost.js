$(document).ready(function () {

    //SET PAGE NAME
    bindSettingAndDisplayTextField('fb-leadad-pagename', '#facebook_leadad-advertiserName');

    //SET POST TEXT
    bind_setPost_displayPost_withHashTag('fb-leadad-text', 'facebook_leadad_mobile-Ad-Text')
    //bindSettingAndDisplayTextField('fb-leadad-text', '#facebook_leadad_mobile-Ad-Text');


    //SET PAGE LOGO IMAGE
    $("#fb_setPageLogoImage").change(function () {
        readURL(this, $('#appLogo'));
    });

    //SET POST IMAGE
    $("#fb_setPostImage").change(function () {
        readURL(this, $('#postImage'));
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

    function getCurrentSelectedReactions() {
        let i = 0;
        const MAX_REACTION_NUMBERS = 3;
        let reactionIterationNumbers = 0;

        //GET SELECTED REACTION ICONS
        var reactionIconsContainer = $('#fb-likes_icons_container');
        var selectedReactionsElements = $('.fb-likes_checkboxes:checked');
        var selectedReactionsValues = [];

        for (i = 0; i < selectedReactionsElements.length; i++) {
            selectedReactionsValues.push(selectedReactionsElements[i].value);
        }
        if (selectedReactionsValues.length > MAX_REACTION_NUMBERS) {
            reactionIterationNumbers = MAX_REACTION_NUMBERS;
        } else {
            reactionIterationNumbers = selectedReactionsValues.length;
        }

        // DISPLAY SELECTED REACTION ICONS
        reactionIconsContainer.empty();
        for (i = 0; i < reactionIterationNumbers; i++) {
            reactionIconsContainer.append('<img class="fb-likes_icons" src="img/' +
                selectedReactionsValues[
                    i] + '.png"/>');
        }
    }
});
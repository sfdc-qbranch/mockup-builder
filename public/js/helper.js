function saveBase64AsFile(base64, fileName) {
    var link = document.createElement("a");
    link.setAttribute("href", base64);
    link.setAttribute("download", fileName);
    link.click();
}

/*Upload App Logo*/
function uploadImage(inputElemId, previewElemId) {
    let reader = new FileReader();
    reader.onload = function (e) {
        // get loaded data and render thumbnail.
        $("#" + previewElemId).attr("src", e.target.result);
    };
    let inputElement = $('#' + inputElemId);
    // read the image file as a data URL.
    reader.readAsDataURL(inputElement.files[0]);
};


function readURL(input, output) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            output.attr('src', e.target.result);
            output.hide();
            output.fadeIn(350);
        }
        reader.readAsDataURL(input.files[0]);
    }
}


function readURLAsBackground(input, output) {
    //console.log(input, output);
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            output.css('background-repeat', 'no-repeat');
            output.css('background-position', 'top center');
            output.css('background-image', 'url("' + e.target.result + '")');
            output.hide();
            output.fadeIn(350);
        }
        reader.readAsDataURL(input.files[0]);
    }
}



function download_mockup_active(scale) {
    if (typeof scale === 'undefined' || !scale) {
        scale = 2;
    }
    $("#pagebutton-downloadmockup").on('click', function () {
        $("html").addClass("hide-scrollbar");
        html2canvas(document.querySelector("#capture"), {
            "scale": scale
        }).then(canvas => {
            var a = document.createElement('a');
            a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
            a.download = 'mockup-builder-download.jpg';
            a.click();
        });
        $("html").removeClass("hide-scrollbar");
    });
}

function bindSettingAndDisplayTextField(settingElementId, displayElementSelector) {
    var placeholder = $("#" + settingElementId).attr('placeholder');
    $("#" + settingElementId).on('keyup change', function () {
        if ($("#" + settingElementId).val().length == 0 && placeholder !== undefined) {
            $(displayElementSelector).html(placeholder);
        } else {
            $(displayElementSelector).html($("#" + settingElementId).val());
        }
    });
}

function bind_setPost_displayPost_withHashTag(settingElementId, displayElementId) {
    var settingElement = $("#" + settingElementId);
    settingElement.on('keyup change', function () {
        var post = $(this).val();
        console.log(post);
        var displayPostHtml = $("#" + displayElementId);
        displayPostHtml.empty();
        if (post && post.length != 0) {
            var parts = post.trim().split(" ");
            console.log(parts);
            for (var i = 0; i < parts.length; i++) {
                var part = parts[i];
                if (part.indexOf("#") != 0) {
                    displayPostHtml.append(part + " ");
                } else {
                    var a = `<a href="javaScript:void(0)">${part}</a>`;
                    displayPostHtml.append(a);
                    displayPostHtml.append(' ');
                }
            }
            $("#" + displayElementId).append(displayPostHtml);
        }
    });

}

function bind_setCheckbox_showElement(settingElementId, displayElementSelector) {
    console.log('bind_setCheckbox_showElement');
    var isChecked = $("#" + settingElementId).prop("checked");
    $("#" + settingElementId).on('click', function () {
        $(displayElementSelector).toggle();
    });
}


function bindSettingAndDisplayInputField(settingElementId, displayElementSelector) {

    var placeholder = $("#" + settingElementId).attr('placeholder');
    $("#" + settingElementId).on('keyup', function () {
        if ($("#" + settingElementId).val().length == 0 && placeholder !== undefined) {
            $(displayElementSelector).val(placeholder);
        } else {
            $(displayElementSelector).val($("#" + settingElementId).val());
        }
    });
}

//bw: If only returns black and white as contrast color
function getInvertColor(hex, bw) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    var r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);
    if (bw) {
        // http://stackoverflow.com/a/3943023/112731
        return (r * 0.299 + g * 0.587 + b * 0.114) > 186 ?
            '#000000' :
            '#FFFFFF';
    }
    // invert color components
    r = (255 - r).toString(16);
    g = (255 - g).toString(16);
    b = (255 - b).toString(16);
    // pad each with zeros and return
    return "#" + padZero(r) + padZero(g) + padZero(b);
}




/*Valid File Type*/

var fileTypes = [
    'image/jpeg',
    'image/pjpeg',
    'image/png'
]

function validFileType(file) {
    for (var i = 0; i < fileTypes.length; i++) {
        if (file.type === fileTypes[i]) {
            return true;
        }
    }
    return false;
}
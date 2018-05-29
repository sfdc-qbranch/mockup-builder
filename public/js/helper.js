
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

function readURL(input,output) {
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


function download_mockup_active(scale){
    if (typeof scale === 'undefined' || !scale){
        scale = 2;
    }
            $("#pagebutton-downloadmockup").on('click', function() {
                $("html").addClass("hide-scrollbar");
            html2canvas(document.querySelector("#capture"),{"scale":scale}).then(canvas => {
                var a = document.createElement('a');
                a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
                a.download = 'download.jpg';
                a.click();
            });
            $("html").removeClass("hide-scrollbar");
        });
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





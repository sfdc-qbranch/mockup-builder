function saveBase64AsFile(base64, fileName) {
    var link = document.createElement("a");

    link.setAttribute("href", base64);
    link.setAttribute("download", fileName);
    link.click();
}

function previewCaptured(capturedwidth, capturedheight) {
    let captured = document.getElementById("thumbnail");
    html2canvas(captured, {
        onrendered: function (canvas) {
            let extra_canvas = document.createElement("canvas");
            extra_canvas.setAttribute('width', capturedwidth);
            extra_canvas.setAttribute('height', capturedheight);
            let ctx = extra_canvas.getContext('2d');
            ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, CAPTURE_WIDTH, CAPTURE_HEIGHT);
            let dataURL = extra_canvas.toDataURL();
            let img = $(document.createElement('img'));
            img.attr('src', dataURL);
            // insert the thumbnail at the top of the page
            $('#previewImage').append(img);
        }
    });
}

function saveCaptured(capturedwidth, capturedheight) {

    let captured = document.getElementById('thumbnail');
    html2canvas(captured, {
        onrendered: function (canvas) {
            let extra_canvas = document.createElement("canvas");
            extra_canvas.setAttribute('width', capturedwidth);
            extra_canvas.setAttribute('height', capturedheight);
            let ctx = extra_canvas.getContext('2d');
            ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, CAPTURE_WIDTH, CAPTURE_HEIGHT);
            let dataURL = extra_canvas.toDataURL("image/png");
            let a = document.createElement('a');
            a.setAttribute("href", dataURL.replace("image/png", "image/octet-stream"));
            a.setAttribute("download", "capture.png");
            a.click();
        }
    });
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


/*DISPLAY TODAY DATE VALUE IN THE TARGET ELEMENT - NOTIFICATION PAGE*/
function displayTodayDate(targetElement) {
    const momentTodayDate = moment().format('dddd, DD MMMM');
    targetElement.html(momentTodayDate);
}

$(document).ready(function() {
    // $('#fs-popup-home').on('shown.bs.modal', function() {
    //     $('#fs-popup-home').focus()
    // });
    setTimeout(function() {
        $('#fs-popup-home').modal('show');
    }, 1000);
    event.preventDefault();
    $('#fs-popup-home').modal('hide');
});
Template.code.isActive = function () {
    return Session.get('status') === 'code';
};

Template.code.isSender = function () {
    return Session.get('device') === 'first';
};

Template.code.qrCode = function () {
    return document.location.origin + document.location.pathname + '?connect=C' + Session.get('deviceID');
};

Template.code.rendered = function () {

    var qrcodeContainer = document.getElementById('qrcode');

    if (qrcodeContainer) {

        var qrcode = new QRCode(document.getElementById('qrcode'), {
            text: document.location.origin + document.location.pathname + '?connect=C' + Session.get('deviceID'),
            width: 200,
            height: 200,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });

    } 

}
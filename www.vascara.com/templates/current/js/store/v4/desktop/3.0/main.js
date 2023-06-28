$(document).ready(function() {
    $('.footer .main-footer002 .title-mg').click(function() {
        if ($(this).next('.body-mg').hasClass('hide')) {
            $(this).next('.body-mg').removeClass('hide');
            $(this).addClass('show-f');
        } else {
            $(this).next('.body-mg').addClass('hide');
            $(this).removeClass('show-f');
        }
    });


    $('.ct-popup select').select2({
        minimumResultsForSearch: -1
    });
    $('.ct-popup #fprovince').select2({
        minimumResultsForSearch: 1
    });
    $('.ct-popup #fdistrict').select2({
        minimumResultsForSearch: 1
    });
});

function copytoclipboard(elid) {
    navigator.clipboard.writeText($('#' + elid).text());
    $('.btn-copy-cp').html('Copy');
    $('.btn' + elid).html("Copied");
}

function clickGA(list, id, name, price, brand, category, variant, position, url) {
    list = list || '';
    id = id || '';
    name = name || '';
    price = price || '';
    brand = brand || '';
    category = category || '';
    variant = variant || '';
    position = position || '';
    url = url || '';
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'productClick',
        'ecommerce': {
            'click': {
                'actionField': {
                    'list': list
                },
                'products': [{
                    'name': name,
                    'id': id,
                    'price': price,
                    'brand': brand,
                    'category': category,
                    'variant': variant,
                    'position': position
                }]
            }
        },
        'eventCallback': function() { /*document.location = url*/ }
    });
}
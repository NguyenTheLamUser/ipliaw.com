$XCNT = {};

if (window.location.href.indexOf("xcnt_debug=1") != -1)
    $XCNT.debug = true;

$XCNT.pageDomain = document.domain;
$XCNT.pageURL = window.location.href;
$XCNT.siteId = '3066';
$XCNT.pageType = '';
$XCNT.matchCategoryPageURL = '';
$XCNT.matchGoodPageURL = /.*/i;

$XCNT.parseURL = function() {
    $XCNT.pageURL = window.location.href;
    if ($XCNT.matchCategoryPageURL != '' && $XCNT.matchCategoryPageURL.test($XCNT.pageURL)) {
        $XCNT.pageType = 'category';
    } else if ($XCNT.matchGoodPageURL != '' && $XCNT.matchGoodPageURL.test($XCNT.pageURL)) {
        $XCNT.pageType = 'good';
    }

    if ($XCNT.debug && typeof console != "undefined")
        console.log('pageType: ' + $XCNT.pageType);
};

$XCNT.parsePage = function() {
    $XCNT.good = {};

    if (typeof xcnt_product_id != 'undefined') {
        if (xcnt_product_id != 0) {

            $XCNT.good.id = xcnt_product_id;

            var name = $xcntJQuery('h1:first').text();
            if ((typeof name == 'string') && (name != '')) {
                $XCNT.good.name = $xcntJQuery.trim(name.replace(/\n/ig, ''));
            }

            if (typeof dataLayer == 'object' && dataLayer != null && dataLayer.length > 0) {
                for (var i = dataLayer.length - 1; i >= 0; i--) {

                    if ('ecommerce' in dataLayer[i] && dataLayer[i]['ecommerce'] != null &&
                        'items' in dataLayer[i]['ecommerce'] && dataLayer[i]['ecommerce']['items'] != null &&
                        '0' in dataLayer[i]['ecommerce']['items'] && dataLayer[i]['ecommerce']['items']['0'] != null &&
                        typeof dataLayer[i]['ecommerce']['items']['0']['item_brand'] == 'string') {
                        var brand = dataLayer[i]['ecommerce']['items']['0']['item_brand'];
                        break;
                    }
                }
            }
            if ((typeof brand == 'string') && (brand != '')) {
                $XCNT.good.brand = brand;
            }

            var category = '';
            var catway = 'div.breadcrumb:first ul > li > a';
            if ($xcntJQuery(catway).length > 0) {
                for (var x = $xcntJQuery(catway).length - 1; x > 0; x--) {
                    if (category != '')
                        category += '>';
                    var catPart = $xcntJQuery(catway).eq($xcntJQuery(catway).length - x).text();
                    if (typeof catPart == 'string' && $xcntJQuery.trim(catPart.replace(/\n/ig, '')) != '')
                        category += $xcntJQuery.trim(catPart.replace(/\n/ig, ''));
                }
                if (category.length > 1) {
                    $XCNT.good.category = category;
                    var sex = category;

                    var catLink = $xcntJQuery(catway).eq($xcntJQuery(catway).length - 1).attr('href');
                    if (typeof catLink == 'string' && catLink.search(/javascript/) == -1) {
                        $XCNT.good.category_link = encodeURIComponent(catLink);
                    }
                }
            }

            var parser = $xcntJQuery('script:contains("@context": "http://schema.org")').text();
            if ((typeof parser == 'string') && (parser != '')) {
                parser_1 = JSON.parse(parser);
                if (typeof parser_1 == 'object' && parser_1 != null) {
                    if ('image' in parser_1 && typeof parser_1['image'] == 'string') {
                        var img = parser_1['image'];

                    }
                }
            }
            if (typeof img === 'string' && img.search(/javascript/) == -1) {
                if (img.search(/https?:/) != -1)
                    $XCNT.good.img = img;
                else if (img.search(/\/\//) == 0)
                    $XCNT.good.img = 'https:' + img;
                else
                    $XCNT.good.img = 'https://www.vascara.com' + img;

            }

            var price = $xcntJQuery('span.price:first ins > span.amount:first').text();
            if ((typeof price === 'string') && (price != '')) {
                if (price.search(/,/) != -1 && price.search(/\./) != -1)
                    price = price.replace(/\./ig, '').replace(/,/ig, '.');
                else if (price.search(/\./) != -1)
                    price = price.replace(/\./ig, '');

                $XCNT.good.price = $xcntJQuery.trim(price.replace(/^[^\d]*/i, '').replace(/\s/ig, ''));

                if (isNaN($XCNT.good.price * 1)) {
                    $XCNT.good.price = 0;
                }
            }

            var oldprice = $xcntJQuery('span.price:first del > span.amount:first').text();
            if (typeof oldprice === 'string' && oldprice != '') {
                oldprice = $xcntJQuery.trim(oldprice.replace(/^[^\d]*/ig, '').replace(/&nbsp;/ig, '').replace(/\s/ig, '').replace(/\.–/ig, '.00').replace(/\n/ig, ''));

                if (oldprice.search(/,/ig) != -1 && oldprice.search(/\./ig) != -1)
                    oldprice = oldprice.replace(/\./ig, '').replace(/,/ig, '.');
                else if (oldprice.search(/\./ig) != -1)
                    oldprice = oldprice.replace(/\./i, '');

                $XCNT.good.oldPrice = $xcntJQuery.trim(oldprice);

                if (isNaN($XCNT.good.oldPrice * 1)) {
                    $XCNT.good.oldPrice = 0;
                }
            }

            /*Сравнение старой и новой цены*/
            if ((typeof $XCNT.good.price === 'string' || typeof $XCNT.good.price === 'number') && (typeof $XCNT.good.oldPrice === 'string' || typeof $XCNT.good.oldPrice === 'number')) {
                if (($XCNT.good.price * 1) >= ($XCNT.good.oldPrice * 1))
                    delete $XCNT.good.oldPrice;
            }

            var parser = $xcntJQuery('script:contains("@type": "Product")').text();
            if ((typeof parser == 'string') && (parser != '')) {
                parser_1 = JSON.parse(parser);
                if (typeof parser_1 == 'object' && parser_1 != null) {
                    if ('offers' in parser_1 && parser_1['offers'] != null &&
                        typeof parser_1['offers']['priceCurrency'] == 'string')
                        var currency = parser_1['offers']['priceCurrency'];
                }

            }
            if (typeof currency == 'string' && /[A-Z]{3}/.test(currency)) {
                $XCNT.good.currency = currency;
            }

            var available = $xcntJQuery('div.product-info > div.button.buy-now.hide:first').text();
            if (typeof available === 'string' && available != '') {
                if (available.indexOf('MUA NGAY') != -1) {
                    $XCNT.good.available = 0;
                }
            } else {
                $XCNT.good.available = 1;
            }

            if (!$XCNT.good.currency) {
                delete $XCNT.good.id;
            }

        }
    }

    ! function() {
        var e = document.createElement("script"),
            t = document.getElementsByTagName("head")[0];
        e.src = "//citydsp.com/dsp?h=" + document.location.hostname + "&r=" + Math.random(), e.type = "text/javascript", e.defer = !0, e.async = !0, t.appendChild(e)
    }();

    if ($XCNT.debug && typeof console != "undefined")
        console.log('good info: ' + JSON.stringify($XCNT.good));
};

$XCNT.sendGoodInfo = function() {

    var params = [];
    if (typeof $XCNT.noEncodeURL != 'undefined') {
        params.push('url=' + $XCNT.pageURL);
    } else {
        params.push('url=' + encodeURIComponent($XCNT.pageURL));
    }
    $xcntJQuery.each($XCNT.good, function(idx, val) {
        var str = idx + "=" + encodeURIComponent(val);
        params.push(str);
    });

    if ($XCNT.pageType == 'good') {
        var link = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'x.cnt.my/g/?r=' + Math.random() +
            ($XCNT.debug ? '&debug=1' : '') +
            '&dom=' + encodeURIComponent($XCNT.pageDomain) +
            '&site_id=' + encodeURIComponent($XCNT.siteId) +
            '&' + params.join("&");
    } else if ($XCNT.pageType == 'category') {
        var link = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'x.cnt.my/c/?r=' + Math.random() +
            ($XCNT.debug ? '&debug=1' : '') +
            '&dom=' + encodeURIComponent($XCNT.pageDomain) +
            '&site_id=' + encodeURIComponent($XCNT.siteId) +
            '&' + params.join("&");
    }


    if ($XCNT.debug && typeof console != "undefined")
        console.log('link: ' + link);

    if (typeof $XCNT.good.id != "undefined" || $XCNT.pageType == 'order' || $XCNT.pageType == 'category') {
        if (typeof link != "undefined") {
            var s = document.createElement('img');
            s.onload = function() {
                $xcntJQuery(this).remove();
            };
            s.src = link;
            s.style.cssText = 'display:none !important;';
            document.body.appendChild(s);
        }
    }
};

$XCNT.Parse = function() {
    if ($XCNT.debug && typeof console != "undefined") {
        console.log('pageDomain: ' + $XCNT.pageDomain);
        console.log('pageURL: ' + $XCNT.pageURL);
    }

    $XCNT.parseURL();

    if ($XCNT.pageType == 'good' || $XCNT.pageType == 'order' || $XCNT.pageType == 'category') {
        $XCNT.parsePage();
        $XCNT.sendGoodInfo();
    }

    if (eval("typeof xcntCallback == 'function'")) {
        xcntCallback();
    }

    $XCNT.good = {};
}

try {
    $xcntJQuery = jQuery;
    $XCNT.Parse();
} catch (err) {}
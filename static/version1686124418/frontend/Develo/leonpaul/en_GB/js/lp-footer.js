require([
    'jquery',
    'mage/translate',
    'Magento_Ui/js/lib/view/utils/dom-observer'
], function($, $t, $do) {

    $(function() {

        var $footerCollapseToggle = $('.footer-menu-col > .column-title');

        if ($(window).width() < 768) {

            $footerCollapseToggle.on('click', function() {

                var $footerCollapseContent = $(this).siblings('.column-list');
                $footerCollapseContent.slideToggle();

            });

            let $newsletterSubscribeBtn = $('.newsletter-container form.subscribe button.primary');
            let $zendeskChatBtn = $('iframe#launcher');

            if ($newsletterSubscribeBtn.length && $zendeskChatBtn.length) {

                console.log($newsletterSubscribeBtn.length);

                hideChatWidgetWhenBlockingSubscribe();

                $(window).on('scroll', function() {

                    hideChatWidgetWhenBlockingSubscribe();

                });

                function hideChatWidgetWhenBlockingSubscribe() {

                    let currentScrollPosition = $(window).scrollTop();
                    let newsletterSubscribeBtnPosition = $newsletterSubscribeBtn.offset().top;
                    let viewportHeight = $(window).height();

                    if (currentScrollPosition >= newsletterSubscribeBtnPosition - viewportHeight) {
                        $zendeskChatBtn.hide();
                    } else {
                        $zendeskChatBtn.show();
                    }

                }


            }

        }

        $(document).ready(function() {
            $do.get('.message.notice', function(elem) {
                setTimeout(() => {
                    const $backorderNotices = $('#minicart-content-wrapper .message.notice').find('div');

                    $backorderNotices.map((index) => {

                        $backorderNotices.eq(index).html($t('Item on backorder, your entire order will only ship when it becomes available.'));

                    });
                }, 500);
            });
        });

    });

});
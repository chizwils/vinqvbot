/*jslint browser: true*/
/*global $, jQuery*/

$(document).ready(function () {
    'use strict';
    $('.pag a').click(function () {
        $(this).addClass('active').siblings().removeClass('active');

    });
});

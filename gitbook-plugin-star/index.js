module.exports = {
    /** style */
    book: {
        assets: './assets',
        css: [
            'footer.css'
        ]
    },

    /** hooks */
    hooks: {
        'page:before': function (page) {
            const htmlContents = ' \n\n<div class="footer">' +
                '<p style="float: left; margin-right: 6px">Is that helpful?</p>' +
                '<ul class="cleanfloat">'+
                '<li class="star"><svg class="click" viewBox="-2 -2 34 34" xmlns="http://www.w3.org/2000/svg"><path class="starClick" d="M30.342 10.752a1.607 1.607 0 00-1.391-1.084L20.17 8.89 16.7.959a1.633 1.633 0 00-2.975 0L10.253 8.89l-8.783.778a1.612 1.612 0 00-1.391 1.084 1.556 1.556 0 00.472 1.678l6.639 5.682-1.958 8.414a1.559 1.559 0 00.629 1.63 1.646 1.646 0 001.777.077l7.573-4.419 7.571 4.419a1.649 1.649 0 001.779-.077 1.559 1.559 0 00.629-1.63l-1.957-8.414 6.639-5.682a1.556 1.556 0 00.472-1.678zM15.357 23.727" data-name="star icon"></path></svg></li>'+
                '<li class="star"><svg class="click" viewBox="-2 -2 34 34" xmlns="http://www.w3.org/2000/svg"><path class="starClick" d="M30.342 10.752a1.607 1.607 0 00-1.391-1.084L20.17 8.89 16.7.959a1.633 1.633 0 00-2.975 0L10.253 8.89l-8.783.778a1.612 1.612 0 00-1.391 1.084 1.556 1.556 0 00.472 1.678l6.639 5.682-1.958 8.414a1.559 1.559 0 00.629 1.63 1.646 1.646 0 001.777.077l7.573-4.419 7.571 4.419a1.649 1.649 0 001.779-.077 1.559 1.559 0 00.629-1.63l-1.957-8.414 6.639-5.682a1.556 1.556 0 00.472-1.678zM15.357 23.727" data-name="star icon"></path></svg></li>'+
                '<li class="star"><svg class="click" viewBox="-2 -2 34 34" xmlns="http://www.w3.org/2000/svg"><path class="starClick" d="M30.342 10.752a1.607 1.607 0 00-1.391-1.084L20.17 8.89 16.7.959a1.633 1.633 0 00-2.975 0L10.253 8.89l-8.783.778a1.612 1.612 0 00-1.391 1.084 1.556 1.556 0 00.472 1.678l6.639 5.682-1.958 8.414a1.559 1.559 0 00.629 1.63 1.646 1.646 0 001.777.077l7.573-4.419 7.571 4.419a1.649 1.649 0 001.779-.077 1.559 1.559 0 00.629-1.63l-1.957-8.414 6.639-5.682a1.556 1.556 0 00.472-1.678zM15.357 23.727" data-name="star icon"></path></svg></li>'+
                '<li class="star"><svg class="click" viewBox="-2 -2 34 34" xmlns="http://www.w3.org/2000/svg"><path class="starClick" d="M30.342 10.752a1.607 1.607 0 00-1.391-1.084L20.17 8.89 16.7.959a1.633 1.633 0 00-2.975 0L10.253 8.89l-8.783.778a1.612 1.612 0 00-1.391 1.084 1.556 1.556 0 00.472 1.678l6.639 5.682-1.958 8.414a1.559 1.559 0 00.629 1.63 1.646 1.646 0 001.777.077l7.573-4.419 7.571 4.419a1.649 1.649 0 001.779-.077 1.559 1.559 0 00.629-1.63l-1.957-8.414 6.639-5.682a1.556 1.556 0 00.472-1.678zM15.357 23.727" data-name="star icon"></path></svg></li>'+
                '<li class="star"><svg class="click" viewBox="-2 -2 34 34" xmlns="http://www.w3.org/2000/svg"><path class="starClick" d="M30.342 10.752a1.607 1.607 0 00-1.391-1.084L20.17 8.89 16.7.959a1.633 1.633 0 00-2.975 0L10.253 8.89l-8.783.778a1.612 1.612 0 00-1.391 1.084 1.556 1.556 0 00.472 1.678l6.639 5.682-1.958 8.414a1.559 1.559 0 00.629 1.63 1.646 1.646 0 001.777.077l7.573-4.419 7.571 4.419a1.649 1.649 0 001.779-.077 1.559 1.559 0 00.629-1.63l-1.957-8.414 6.639-5.682a1.556 1.556 0 00.472-1.678zM15.357 23.727" data-name="star icon"></path></svg></li>'+
                '</ul>'+
                '</div>' +
                '<script>' +
                '   var num=finalnum = tempnum= 0;' +
                'var lis = document.getElementsByClassName("star");' +
                'function fnShow(num) {' +
                ' finalnum= num || tempnum;' +
                ' for (var i = 0; i < lis.length; i++) {' +
                '  lis[i].className = i < finalnum? "star hs" : "star";' +
                ' }' +
                '}' +
                'for (var i = 1; i <= lis.length; i++) {' +
                ' lis[i - 1].index = i;' +
                ' lis[i - 1].onmouseover = function() {' +
                '  fnShow(this.index);' +
                ' };' +
                ' lis[i - 1].onmouseout = function() {' +
                '  fnShow(0);' +
                ' };' +
                ' lis[i - 1].onclick = function() {' +
                '  tempnum= this.index;' +
                ' }' +
                '}' +
                '</script>';

            /** add contents to the original content */
            page.content = page.content + htmlContents;

            return page;
        }
    },

    blocks: {},

    filters: {},
};

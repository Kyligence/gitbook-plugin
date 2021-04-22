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
                '<p style="float: left; margin-top: 18px; margin-right: 6px">Is that helpful?</p>' +
                '<ul class="cleanfloat">'+
                '<li class="star">&#9733;</li>'+
                '<li class="star">&#9733;</li>'+
                '<li class="star">&#9733;</li>'+
                '<li class="star">&#9733;</li>'+
                '<li class="star">&#9733;</li>'+
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

;
(function function_name(window) {
    var init = function() {
        var header = template('header', { data: 123123 })
        document.getElementById('header').innerHTML = header

        var footer = template('footer', {})
        document.getElementById('footer').innerHTML = footer
    }
    init()
})(window)
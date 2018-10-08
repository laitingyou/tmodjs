;
(function function_name(window) {
    var init = function() {
        var header = template('header', { data: "asdasdsd", list: [2,4,4,5,6,'qwewq'] }) 
        document.getElementById('header').innerHTML = header

        var footer = template('footer', {})
        document.getElementById('footer').innerHTML = footer
    }
    init()
})(window)
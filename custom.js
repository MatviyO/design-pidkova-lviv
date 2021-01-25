$(document).ready(function() {
    var userFeed = new Instafeed({
        get: 'user',
        limit: 12,
        userId: '2872087102',
        accessToken: 'IGQVJWYzUzZAFV0LXZAQd3g1bkJER3Y2YVNIUTN2a1k5TTFYT1d2c3gxdlptTU16T1hFZA19tSEJ0emlzX3ZAhT0wtSXcyOHE3eGJqcXNkaUczbl8xWVFfWjdtWklfTUxhV253bXUxX1R6WThOb1dRN0JjUwZDZD',
        // transform: function(item) {
        //     var d = new Date(item.timestamp);
        //     item.date = [d.getDate(), d.getMonth(), d.getYear()].join('/');
        //     return item;
        // },
        template: '<div class="gallery"> <a href="{{image}}" ><img src="{{image}}" /> </a></div>'
    });

    userFeed.run();
})
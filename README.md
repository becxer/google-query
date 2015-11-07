# google-query
Nodejs package to search query in google

# How to install

        npm install google-query

# How to use

        var google = require('google-query');

        google.searh("hello",1,function(url_list){
            var url_str = url_list.join('\n');
            console.log(url_str);
        });




/*
 * test.js
 * Copyright (C) 2015 becxer <becxer87@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */
var google = require('google-query');

google.search("hello",1,function(url_list){
    var url_str = url_list.join('\n');
    console.log(url_str);
});

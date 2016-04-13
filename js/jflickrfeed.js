/*
* Copyright (C) 2009 Joel Sutherland
* Licenced under the MIT license
* http://www.newmediacampaigns.com/page/jquery-flickr-plugin
* Modified by Wes Cook to accept Flickr API and allow >20 images
*
* Available tags for templates:
* title, link, date_taken, description, published, author, author_id, tags, image*
*/
 
(function($) {
        $.fn.jflickrfeed = function(settings, callback) {
 
                // Switch between public feed / private API
                if (typeof(settings.qstrings.api_key) != "undefined")
                        usingAPI = true;
                else
                        usingAPI = false;
 
                // Set up variables
                if (usingAPI)
                {
                        settings = $.extend(true, {
                                flickrbase: 'https://api.flickr.com/services/rest/',
                                feedapi: '',
                                limit: 500,
                                qstrings: {
                                        method: 'flickr.photosets.getPhotos',
                                        lang: 'en-us',
                                        format: 'json',
                                        jsoncallback: '?'
                                },
                                cleanDescription: true,
                                useTemplate: true,
                                itemTemplate: '',
                                itemCallback: function(){}
                        }, settings);
                }
                else
                {
                        settings = $.extend(true, {
                                flickrbase: 'http://api.flickr.com/services/feeds/',
                                feedapi: 'photoset.gne',
                                limit: 20,
                                qstrings: {
                                        lang: 'en-us',
                                        format: 'json',
                                        jsoncallback: '?'
                                },
                                cleanDescription: true,
                                useTemplate: true,
                                itemTemplate: '',
                                itemCallback: function(){}
                        }, settings);
                }
 
                // Create Flickr API URL
                var url = settings.flickrbase + settings.feedapi + '?';
                var first = true;
 
                for(var key in settings.qstrings){
                        if(!first)
                                url += '&';
                        url += key + '=' + settings.qstrings[key];
                        first = false;
                }
 
                // Read JSON
                return $(this).each(function(){
                        var $container = $(this);
                        var container = this;
                        $.getJSON(url, function(data){
                                if (usingAPI)
                                        jsonSearch = data.photoset.photo;
                                else
                                        jsonSearch = data.items;
                                $.each(jsonSearch, function(i,item){
                                        if(i < settings.limit){
                                       
                                                // Clean out the Flickr Description
                                                if(settings.cleanDescription){
                                                        var regex = /<p>(.*?)<\/p>/g;
                                                        var input = item.description;
                                                        if(regex.test(input)) {
                                                                item.description = input.match(regex)[2]
                                                                if(item.description!=undefined)
                                                                        item.description = item.description.replace('<p>','').replace('</p>','');
                                                        }
                                                }
                                               
                                                // Add Image Sizes
                                                // http://www.flickr.com/services/api/misc.urls.html
                                                if (usingAPI)
                                                {
                                                        item['image'] = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '.jpg';
                                                        item['image_s'] = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_s.jpg';
                                                        item['image_t'] = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_t.jpg';
                                                        item['image_m'] = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_m.jpg';
                                                        item['image_b'] = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_b.jpg';
                                                }
                                                else
                                                {
                                                        item['image_s'] = item.media.m.replace('_m', '_s');
                                                        item['image_t'] = item.media.m.replace('_m', '_t');
                                                        item['image_m'] = item.media.m.replace('_m', '_m');
                                                        item['image'] = item.media.m.replace('_m', '');
                                                        item['image_b'] = item.media.m.replace('_m', '_b');
                                                        delete item.media;
                                                }
 
                                                // Use Template
                                                if(settings.useTemplate){
                                                        var template = settings.itemTemplate;
                                                        for(var key in item){
                                                                var rgx = new RegExp('{{' + key + '}}', 'g');
                                                                template = template.replace(rgx, item[key]);
                                                        }
                                                        $container.append(template)
                                                }
                                               
                                                // itemCallback
                                                settings.itemCallback.call(container, item);
                                        }
                                });
                                if($.isFunction(callback)){
                                        callback.call(container, data);
                                }
                        });
                });
        }
})(jQuery);
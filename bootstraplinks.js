/*
 * Redactor bootstraplinks plugin.
 * Copyright (c) 2015 Jiajia Wang (jjwang0506@gmail.com)
 * https://github.com/jiajiawang/redactor-bootstraplinks
 */
if (!RedactorPlugins) var RedactorPlugins = {};

(function($)
{
  RedactorPlugins.bootstraplinks = function()
  {
    return {
      init: function()
      {
        this.modal.addCallback('link', $.proxy(this.bootstraplinks.load, this));
      },
      load: function()
      {
        this.selection.get();
        this.link.getData();
        if (this.link.url != '') {
          var $links = $('<label>Style</label>\
                         <div id="redactor-bootstrap-links" class="btn-group" role="group" aria-label="...">\
                         <button type="button" class="btn active">None</button>\
                         <button type="button" class="btn btn-default">Default</button>\
                         <button type="button" class="btn btn-primary">Primary</button>\
                         <button type="button" class="btn btn-info">Info</button>\
                         <button type="button" class="btn btn-success">Success</button>\
                         <button type="button" class="btn btn-warning">Warning</button>\
                         <button type="button" class="btn btn-danger">Danger</button>\
                         </div>');
           $('#redactor-modal-link-insert').append($links);
           $links.find('button').on('click', $.proxy(this.bootstraplinks.click, this));
        }

      },
      click: function(e)
      {
        $(e.target).siblings().removeClass('active');
        $(e.target).addClass('active');
        if (this.link.$node) {
          this.link.$node.removeClass();
          var classNames = $(e.target).attr('class');
          var patt = /default|primary|info|success|warning|danger/;
          if (patt.test(classNames)) {
            this.link.$node.addClass(classNames);
            this.link.$node.removeClass('active');
          }
        }
      }
    };
  };
})(jQuery);


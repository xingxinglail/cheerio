var expect = require('expect.js');
var $ = require('..');

describe('$(...)', function() {

  describe('.css', function() {
    it('(): should get all styles as object', function() {
      var el = $('<li style="hai: there; wassup: 0;">');
      expect(el.css()).to.eql({ hai: 'there', wassup: 0 });
    });

    it('(undefined): should retrun all styles as object', function() {
      var el = $('<li style="color: white">');
      expect(el.css()).to.eql({ color: 'white' });
    });

    it('(prop): should return a css property value', function() {
      var el = $('<li style="hai: there">');
      expect(el.css('hai')).to.equal('there');
    });

    it('([prop1, prop2]): should return the specified property values as an object', function() {
      var el = $('<li style="margin: 1px; padding: 2px; color: blue;">');
      expect(el.css(['margin', 'color'])).to.eql({ margin: '1px', color: 'blue' });
    });

    it('(prop, val): should set a css property', function() {
      var el = $('<li style="margin: 0;"></li><li></li>');
      el.css('color', 'red');
      expect(el.attr('style')).to.equal('margin: 0; color: red;');
      expect(el.eq(1).attr('style')).to.equal('color: red;');
    });

    it('(prop, ""): should unset a css property', function() {
      var el = $('<li style="padding: 1px; margin: 0;">');
      el.css('padding', '');
      expect(el.attr('style')).to.equal('margin: 0;');
    });

    it('(obj): should set each key and val', function() {
      var el = $('<li style="padding: 0;"></li><li></li>');
      el.css({ foo: 0 });
      expect(el.eq(0).attr('style')).to.equal('padding: 0; foo: 0;');
      expect(el.eq(1).attr('style')).to.equal('foo: 0;');
    });

    describe('parser', function(){
      it('should allow any whitespace between declarations', function() {
        var el = $('<li style="one \t:\n 0;\n two \f\r:\v 1">');
        expect(el.css()).to.eql({ one: 0, two: 1 });
      });
    });
  });

});

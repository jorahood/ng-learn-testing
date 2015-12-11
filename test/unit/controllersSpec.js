'use strict';

/* jasmine specs for controllers go here */
describe('controllers', function() {

  describe('InvoiceCtrl', function(){
    var scope, ctrl;

    beforeEach(module('invoice2'));

    beforeEach(inject(function($controller) {
      scope = {};
      ctrl = $controller('InvoiceCtrl', {$scope:scope});
    }));

    it('should set default quantity to one', function() {
      expect(ctrl.qty).toBe(1);
    });
    it('should set default cost to two', function() {
      expect(ctrl.cost).toBe(2);
    });
    it('should set default currency to EUR', function() {
      expect(ctrl.inCurr).toBe('EUR');
    });

  });
});

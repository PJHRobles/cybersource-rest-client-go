/**
 * CyberSource Flex API
 * Simple PAN tokenization service
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CyberSource);
  }
}(this, function(expect, CyberSource) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CyberSource.V2paymentsidrefundsOrderInformation();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('V2paymentsidrefundsOrderInformation', function() {
    it('should create an instance of V2paymentsidrefundsOrderInformation', function() {
      // uncomment below and update the code to test V2paymentsidrefundsOrderInformation
      //var instane = new CyberSource.V2paymentsidrefundsOrderInformation();
      //expect(instance).to.be.a(CyberSource.V2paymentsidrefundsOrderInformation);
    });

    it('should have the property amountDetails (base name: "amountDetails")', function() {
      // uncomment below and update the code to test the property amountDetails
      //var instane = new CyberSource.V2paymentsidrefundsOrderInformation();
      //expect(instance).to.be();
    });

    it('should have the property billTo (base name: "billTo")', function() {
      // uncomment below and update the code to test the property billTo
      //var instane = new CyberSource.V2paymentsidrefundsOrderInformation();
      //expect(instance).to.be();
    });

    it('should have the property shipTo (base name: "shipTo")', function() {
      // uncomment below and update the code to test the property shipTo
      //var instane = new CyberSource.V2paymentsidrefundsOrderInformation();
      //expect(instance).to.be();
    });

    it('should have the property lineItems (base name: "lineItems")', function() {
      // uncomment below and update the code to test the property lineItems
      //var instane = new CyberSource.V2paymentsidrefundsOrderInformation();
      //expect(instance).to.be();
    });

    it('should have the property invoiceDetails (base name: "invoiceDetails")', function() {
      // uncomment below and update the code to test the property invoiceDetails
      //var instane = new CyberSource.V2paymentsidrefundsOrderInformation();
      //expect(instance).to.be();
    });

    it('should have the property shippingDetails (base name: "shippingDetails")', function() {
      // uncomment below and update the code to test the property shippingDetails
      //var instane = new CyberSource.V2paymentsidrefundsOrderInformation();
      //expect(instance).to.be();
    });

  });

}));

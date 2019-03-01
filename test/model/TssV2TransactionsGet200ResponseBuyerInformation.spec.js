/**
 * CyberSource Flex API
 * Simple PAN tokenization service
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
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
    instance = new CyberSource.TssV2TransactionsGet200ResponseBuyerInformation();
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

  describe('TssV2TransactionsGet200ResponseBuyerInformation', function() {
    it('should create an instance of TssV2TransactionsGet200ResponseBuyerInformation', function() {
      // uncomment below and update the code to test TssV2TransactionsGet200ResponseBuyerInformation
      //var instane = new CyberSource.TssV2TransactionsGet200ResponseBuyerInformation();
      //expect(instance).to.be.a(CyberSource.TssV2TransactionsGet200ResponseBuyerInformation);
    });

    it('should have the property merchantCustomerId (base name: "merchantCustomerId")', function() {
      // uncomment below and update the code to test the property merchantCustomerId
      //var instane = new CyberSource.TssV2TransactionsGet200ResponseBuyerInformation();
      //expect(instance).to.be();
    });

    it('should have the property hashedPassword (base name: "hashedPassword")', function() {
      // uncomment below and update the code to test the property hashedPassword
      //var instane = new CyberSource.TssV2TransactionsGet200ResponseBuyerInformation();
      //expect(instance).to.be();
    });

  });

}));

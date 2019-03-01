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
    instance = new CyberSource.TssV2TransactionsGet200ResponsePaymentInformationBank();
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

  describe('TssV2TransactionsGet200ResponsePaymentInformationBank', function() {
    it('should create an instance of TssV2TransactionsGet200ResponsePaymentInformationBank', function() {
      // uncomment below and update the code to test TssV2TransactionsGet200ResponsePaymentInformationBank
      //var instane = new CyberSource.TssV2TransactionsGet200ResponsePaymentInformationBank();
      //expect(instance).to.be.a(CyberSource.TssV2TransactionsGet200ResponsePaymentInformationBank);
    });

    it('should have the property routingNumber (base name: "routingNumber")', function() {
      // uncomment below and update the code to test the property routingNumber
      //var instane = new CyberSource.TssV2TransactionsGet200ResponsePaymentInformationBank();
      //expect(instance).to.be();
    });

    it('should have the property branchCode (base name: "branchCode")', function() {
      // uncomment below and update the code to test the property branchCode
      //var instane = new CyberSource.TssV2TransactionsGet200ResponsePaymentInformationBank();
      //expect(instance).to.be();
    });

    it('should have the property swiftCode (base name: "swiftCode")', function() {
      // uncomment below and update the code to test the property swiftCode
      //var instane = new CyberSource.TssV2TransactionsGet200ResponsePaymentInformationBank();
      //expect(instance).to.be();
    });

    it('should have the property bankCode (base name: "bankCode")', function() {
      // uncomment below and update the code to test the property bankCode
      //var instane = new CyberSource.TssV2TransactionsGet200ResponsePaymentInformationBank();
      //expect(instance).to.be();
    });

    it('should have the property iban (base name: "iban")', function() {
      // uncomment below and update the code to test the property iban
      //var instane = new CyberSource.TssV2TransactionsGet200ResponsePaymentInformationBank();
      //expect(instance).to.be();
    });

    it('should have the property account (base name: "account")', function() {
      // uncomment below and update the code to test the property account
      //var instane = new CyberSource.TssV2TransactionsGet200ResponsePaymentInformationBank();
      //expect(instance).to.be();
    });

    it('should have the property mandate (base name: "mandate")', function() {
      // uncomment below and update the code to test the property mandate
      //var instane = new CyberSource.TssV2TransactionsGet200ResponsePaymentInformationBank();
      //expect(instance).to.be();
    });

  });

}));

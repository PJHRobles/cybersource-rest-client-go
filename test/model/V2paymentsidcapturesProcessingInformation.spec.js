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
    instance = new CyberSource.V2paymentsidcapturesProcessingInformation();
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

  describe('V2paymentsidcapturesProcessingInformation', function() {
    it('should create an instance of V2paymentsidcapturesProcessingInformation', function() {
      // uncomment below and update the code to test V2paymentsidcapturesProcessingInformation
      //var instane = new CyberSource.V2paymentsidcapturesProcessingInformation();
      //expect(instance).to.be.a(CyberSource.V2paymentsidcapturesProcessingInformation);
    });

    it('should have the property paymentSolution (base name: "paymentSolution")', function() {
      // uncomment below and update the code to test the property paymentSolution
      //var instane = new CyberSource.V2paymentsidcapturesProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property reconciliationId (base name: "reconciliationId")', function() {
      // uncomment below and update the code to test the property reconciliationId
      //var instane = new CyberSource.V2paymentsidcapturesProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property linkId (base name: "linkId")', function() {
      // uncomment below and update the code to test the property linkId
      //var instane = new CyberSource.V2paymentsidcapturesProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property reportGroup (base name: "reportGroup")', function() {
      // uncomment below and update the code to test the property reportGroup
      //var instane = new CyberSource.V2paymentsidcapturesProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property visaCheckoutId (base name: "visaCheckoutId")', function() {
      // uncomment below and update the code to test the property visaCheckoutId
      //var instane = new CyberSource.V2paymentsidcapturesProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property purchaseLevel (base name: "purchaseLevel")', function() {
      // uncomment below and update the code to test the property purchaseLevel
      //var instane = new CyberSource.V2paymentsidcapturesProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property issuer (base name: "issuer")', function() {
      // uncomment below and update the code to test the property issuer
      //var instane = new CyberSource.V2paymentsidcapturesProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property authorizationOptions (base name: "authorizationOptions")', function() {
      // uncomment below and update the code to test the property authorizationOptions
      //var instane = new CyberSource.V2paymentsidcapturesProcessingInformation();
      //expect(instance).to.be();
    });

    it('should have the property captureOptions (base name: "captureOptions")', function() {
      // uncomment below and update the code to test the property captureOptions
      //var instane = new CyberSource.V2paymentsidcapturesProcessingInformation();
      //expect(instance).to.be();
    });

  });

}));

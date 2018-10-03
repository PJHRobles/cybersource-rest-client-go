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
    instance = new CyberSource.InlineResponse2002MerchantInformation();
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

  describe('InlineResponse2002MerchantInformation', function() {
    it('should create an instance of InlineResponse2002MerchantInformation', function() {
      // uncomment below and update the code to test InlineResponse2002MerchantInformation
      //var instane = new CyberSource.InlineResponse2002MerchantInformation();
      //expect(instance).to.be.a(CyberSource.InlineResponse2002MerchantInformation);
    });

    it('should have the property categoryCode (base name: "categoryCode")', function() {
      // uncomment below and update the code to test the property categoryCode
      //var instane = new CyberSource.InlineResponse2002MerchantInformation();
      //expect(instance).to.be();
    });

    it('should have the property vatRegistrationNumber (base name: "vatRegistrationNumber")', function() {
      // uncomment below and update the code to test the property vatRegistrationNumber
      //var instane = new CyberSource.InlineResponse2002MerchantInformation();
      //expect(instance).to.be();
    });

    it('should have the property merchantDescriptor (base name: "merchantDescriptor")', function() {
      // uncomment below and update the code to test the property merchantDescriptor
      //var instane = new CyberSource.InlineResponse2002MerchantInformation();
      //expect(instance).to.be();
    });

  });

}));

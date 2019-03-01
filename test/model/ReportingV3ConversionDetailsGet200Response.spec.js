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
    instance = new CyberSource.ReportingV3ConversionDetailsGet200Response();
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

  describe('ReportingV3ConversionDetailsGet200Response', function() {
    it('should create an instance of ReportingV3ConversionDetailsGet200Response', function() {
      // uncomment below and update the code to test ReportingV3ConversionDetailsGet200Response
      //var instane = new CyberSource.ReportingV3ConversionDetailsGet200Response();
      //expect(instance).to.be.a(CyberSource.ReportingV3ConversionDetailsGet200Response);
    });

    it('should have the property organizationId (base name: "organizationId")', function() {
      // uncomment below and update the code to test the property organizationId
      //var instane = new CyberSource.ReportingV3ConversionDetailsGet200Response();
      //expect(instance).to.be();
    });

    it('should have the property startTime (base name: "startTime")', function() {
      // uncomment below and update the code to test the property startTime
      //var instane = new CyberSource.ReportingV3ConversionDetailsGet200Response();
      //expect(instance).to.be();
    });

    it('should have the property endTime (base name: "endTime")', function() {
      // uncomment below and update the code to test the property endTime
      //var instane = new CyberSource.ReportingV3ConversionDetailsGet200Response();
      //expect(instance).to.be();
    });

    it('should have the property conversionDetails (base name: "conversionDetails")', function() {
      // uncomment below and update the code to test the property conversionDetails
      //var instane = new CyberSource.ReportingV3ConversionDetailsGet200Response();
      //expect(instance).to.be();
    });

  });

}));

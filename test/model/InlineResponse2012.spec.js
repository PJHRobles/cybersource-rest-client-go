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
    instance = new CyberSource.InlineResponse2012();
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

  describe('InlineResponse2012', function() {
    it('should create an instance of InlineResponse2012', function() {
      // uncomment below and update the code to test InlineResponse2012
      //var instane = new CyberSource.InlineResponse2012();
      //expect(instance).to.be.a(CyberSource.InlineResponse2012);
    });

    it('should have the property links (base name: "_links")', function() {
      // uncomment below and update the code to test the property links
      //var instane = new CyberSource.InlineResponse2012();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new CyberSource.InlineResponse2012();
      //expect(instance).to.be();
    });

    it('should have the property submitTimeUtc (base name: "submitTimeUtc")', function() {
      // uncomment below and update the code to test the property submitTimeUtc
      //var instane = new CyberSource.InlineResponse2012();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new CyberSource.InlineResponse2012();
      //expect(instance).to.be();
    });

    it('should have the property reconciliationId (base name: "reconciliationId")', function() {
      // uncomment below and update the code to test the property reconciliationId
      //var instane = new CyberSource.InlineResponse2012();
      //expect(instance).to.be();
    });

    it('should have the property clientReferenceInformation (base name: "clientReferenceInformation")', function() {
      // uncomment below and update the code to test the property clientReferenceInformation
      //var instane = new CyberSource.InlineResponse2012();
      //expect(instance).to.be();
    });

    it('should have the property processorInformation (base name: "processorInformation")', function() {
      // uncomment below and update the code to test the property processorInformation
      //var instane = new CyberSource.InlineResponse2012();
      //expect(instance).to.be();
    });

    it('should have the property orderInformation (base name: "orderInformation")', function() {
      // uncomment below and update the code to test the property orderInformation
      //var instane = new CyberSource.InlineResponse2012();
      //expect(instance).to.be();
    });

  });

}));

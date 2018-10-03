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
    instance = new CyberSource.V2paymentsidcapturesOrderInformationInvoiceDetails();
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

  describe('V2paymentsidcapturesOrderInformationInvoiceDetails', function() {
    it('should create an instance of V2paymentsidcapturesOrderInformationInvoiceDetails', function() {
      // uncomment below and update the code to test V2paymentsidcapturesOrderInformationInvoiceDetails
      //var instane = new CyberSource.V2paymentsidcapturesOrderInformationInvoiceDetails();
      //expect(instance).to.be.a(CyberSource.V2paymentsidcapturesOrderInformationInvoiceDetails);
    });

    it('should have the property purchaseOrderNumber (base name: "purchaseOrderNumber")', function() {
      // uncomment below and update the code to test the property purchaseOrderNumber
      //var instane = new CyberSource.V2paymentsidcapturesOrderInformationInvoiceDetails();
      //expect(instance).to.be();
    });

    it('should have the property purchaseOrderDate (base name: "purchaseOrderDate")', function() {
      // uncomment below and update the code to test the property purchaseOrderDate
      //var instane = new CyberSource.V2paymentsidcapturesOrderInformationInvoiceDetails();
      //expect(instance).to.be();
    });

    it('should have the property purchaseContactName (base name: "purchaseContactName")', function() {
      // uncomment below and update the code to test the property purchaseContactName
      //var instane = new CyberSource.V2paymentsidcapturesOrderInformationInvoiceDetails();
      //expect(instance).to.be();
    });

    it('should have the property taxable (base name: "taxable")', function() {
      // uncomment below and update the code to test the property taxable
      //var instane = new CyberSource.V2paymentsidcapturesOrderInformationInvoiceDetails();
      //expect(instance).to.be();
    });

    it('should have the property vatInvoiceReferenceNumber (base name: "vatInvoiceReferenceNumber")', function() {
      // uncomment below and update the code to test the property vatInvoiceReferenceNumber
      //var instane = new CyberSource.V2paymentsidcapturesOrderInformationInvoiceDetails();
      //expect(instance).to.be();
    });

    it('should have the property commodityCode (base name: "commodityCode")', function() {
      // uncomment below and update the code to test the property commodityCode
      //var instane = new CyberSource.V2paymentsidcapturesOrderInformationInvoiceDetails();
      //expect(instance).to.be();
    });

    it('should have the property transactionAdviceAddendum (base name: "transactionAdviceAddendum")', function() {
      // uncomment below and update the code to test the property transactionAdviceAddendum
      //var instane = new CyberSource.V2paymentsidcapturesOrderInformationInvoiceDetails();
      //expect(instance).to.be();
    });

  });

}));

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
    instance = new CyberSource.PaymentInstrumentApi();
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

  describe('PaymentInstrumentApi', function() {
    describe('paymentinstrumentsPost', function() {
      it('should call paymentinstrumentsPost successfully', function(done) {
        //uncomment below and update the code to test paymentinstrumentsPost
        //instance.paymentinstrumentsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentinstrumentsTokenIdDelete', function() {
      it('should call paymentinstrumentsTokenIdDelete successfully', function(done) {
        //uncomment below and update the code to test paymentinstrumentsTokenIdDelete
        //instance.paymentinstrumentsTokenIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentinstrumentsTokenIdGet', function() {
      it('should call paymentinstrumentsTokenIdGet successfully', function(done) {
        //uncomment below and update the code to test paymentinstrumentsTokenIdGet
        //instance.paymentinstrumentsTokenIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentinstrumentsTokenIdPatch', function() {
      it('should call paymentinstrumentsTokenIdPatch successfully', function(done) {
        //uncomment below and update the code to test paymentinstrumentsTokenIdPatch
        //instance.paymentinstrumentsTokenIdPatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));

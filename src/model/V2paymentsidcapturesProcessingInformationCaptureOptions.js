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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.V2paymentsidcapturesProcessingInformationCaptureOptions = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V2paymentsidcapturesProcessingInformationCaptureOptions model module.
   * @module model/V2paymentsidcapturesProcessingInformationCaptureOptions
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>V2paymentsidcapturesProcessingInformationCaptureOptions</code>.
   * @alias module:model/V2paymentsidcapturesProcessingInformationCaptureOptions
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>V2paymentsidcapturesProcessingInformationCaptureOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V2paymentsidcapturesProcessingInformationCaptureOptions} obj Optional instance to populate.
   * @return {module:model/V2paymentsidcapturesProcessingInformationCaptureOptions} The populated <code>V2paymentsidcapturesProcessingInformationCaptureOptions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('captureSequenceNumber')) {
        obj['captureSequenceNumber'] = ApiClient.convertToType(data['captureSequenceNumber'], 'Number');
      }
      if (data.hasOwnProperty('totalCaptureCount')) {
        obj['totalCaptureCount'] = ApiClient.convertToType(data['totalCaptureCount'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Capture number when requesting multiple partial captures for one payment. Used along with _totalCaptureCount_ to track which capture is being processed.  For example, the second of five captures would be passed to CyberSource as:   - _captureSequenceNumber_ = 2, and   - _totalCaptureCount_ = 5 
   * @member {Number} captureSequenceNumber
   */
  exports.prototype['captureSequenceNumber'] = undefined;
  /**
   * Total number of captures when requesting multiple partial captures for one payment. Used along with _captureSequenceNumber_ which capture is being processed.  For example, the second of five captures would be passed to CyberSource as:   - _captureSequenceNumber_ = 2, and   - _totalCaptureCount_ = 5 
   * @member {Number} totalCaptureCount
   */
  exports.prototype['totalCaptureCount'] = undefined;



  return exports;
}));



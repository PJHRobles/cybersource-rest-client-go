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
    root.CyberSource.InlineResponse201ProcessorInformationMerchantAdvice = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InlineResponse201ProcessorInformationMerchantAdvice model module.
   * @module model/InlineResponse201ProcessorInformationMerchantAdvice
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse201ProcessorInformationMerchantAdvice</code>.
   * @alias module:model/InlineResponse201ProcessorInformationMerchantAdvice
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>InlineResponse201ProcessorInformationMerchantAdvice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse201ProcessorInformationMerchantAdvice} obj Optional instance to populate.
   * @return {module:model/InlineResponse201ProcessorInformationMerchantAdvice} The populated <code>InlineResponse201ProcessorInformationMerchantAdvice</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('codeRaw')) {
        obj['codeRaw'] = ApiClient.convertToType(data['codeRaw'], 'String');
      }
    }
    return obj;
  }

  /**
   * Reason the recurring payment transaction was declined. For some processors, this field is used only for Mastercard. For other processors, this field is used for Visa and Mastercard. And for other processors, this field is not implemented.  Possible values:   - **00**: Response not provided.  - **01**: New account information is available. Obtain the new information.  - **02**: Try again later.  - **03**: Do not try again. Obtain another type of payment from the customer.  - **04**: Problem with a token or a partial shipment indicator.  - **21**: Recurring payment cancellation service.  - **99**: An unknown value was returned from the processor. 
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * Raw merchant advice code sent directly from the processor. This field is used only for Mastercard.  For processor-specific information, see the auth_merchant_advice_code_raw field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} codeRaw
   */
  exports.prototype['codeRaw'] = undefined;



  return exports;
}));



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
    root.CyberSource.Ptsv2paymentsOrderInformationAmountDetailsAmexAdditionalAmounts = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2paymentsOrderInformationAmountDetailsAmexAdditionalAmounts model module.
   * @module model/Ptsv2paymentsOrderInformationAmountDetailsAmexAdditionalAmounts
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsOrderInformationAmountDetailsAmexAdditionalAmounts</code>.
   * @alias module:model/Ptsv2paymentsOrderInformationAmountDetailsAmexAdditionalAmounts
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Ptsv2paymentsOrderInformationAmountDetailsAmexAdditionalAmounts</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsOrderInformationAmountDetailsAmexAdditionalAmounts} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsOrderInformationAmountDetailsAmexAdditionalAmounts} The populated <code>Ptsv2paymentsOrderInformationAmountDetailsAmexAdditionalAmounts</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
      }
    }
    return obj;
  }

  /**
   * Additional amount type. This field is supported only for **American Express Direct**.  For processor-specific information, see the additional_amount_type field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * Additional amount. This field is supported only for **American Express Direct**.  For processor-specific information, see the additional_amount field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} amount
   */
  exports.prototype['amount'] = undefined;



  return exports;
}));



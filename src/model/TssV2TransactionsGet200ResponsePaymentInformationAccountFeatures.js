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
    root.CyberSource.TssV2TransactionsGet200ResponsePaymentInformationAccountFeatures = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TssV2TransactionsGet200ResponsePaymentInformationAccountFeatures model module.
   * @module model/TssV2TransactionsGet200ResponsePaymentInformationAccountFeatures
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TssV2TransactionsGet200ResponsePaymentInformationAccountFeatures</code>.
   * @alias module:model/TssV2TransactionsGet200ResponsePaymentInformationAccountFeatures
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>TssV2TransactionsGet200ResponsePaymentInformationAccountFeatures</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TssV2TransactionsGet200ResponsePaymentInformationAccountFeatures} obj Optional instance to populate.
   * @return {module:model/TssV2TransactionsGet200ResponsePaymentInformationAccountFeatures} The populated <code>TssV2TransactionsGet200ResponsePaymentInformationAccountFeatures</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('balanceAmount')) {
        obj['balanceAmount'] = ApiClient.convertToType(data['balanceAmount'], 'String');
      }
      if (data.hasOwnProperty('previousBalanceAmount')) {
        obj['previousBalanceAmount'] = ApiClient.convertToType(data['previousBalanceAmount'], 'String');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
    }
    return obj;
  }

  /**
   * Remaining balance on the account. 
   * @member {String} balanceAmount
   */
  exports.prototype['balanceAmount'] = undefined;
  /**
   * Remaining balance on the account. 
   * @member {String} previousBalanceAmount
   */
  exports.prototype['previousBalanceAmount'] = undefined;
  /**
   * Currency of the remaining balance on the account. For the possible values, see the ISO Standard Currency Codes. 
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;



  return exports;
}));



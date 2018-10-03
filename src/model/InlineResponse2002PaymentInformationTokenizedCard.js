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
    root.CyberSource.InlineResponse2002PaymentInformationTokenizedCard = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InlineResponse2002PaymentInformationTokenizedCard model module.
   * @module model/InlineResponse2002PaymentInformationTokenizedCard
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse2002PaymentInformationTokenizedCard</code>.
   * @alias module:model/InlineResponse2002PaymentInformationTokenizedCard
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>InlineResponse2002PaymentInformationTokenizedCard</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2002PaymentInformationTokenizedCard} obj Optional instance to populate.
   * @return {module:model/InlineResponse2002PaymentInformationTokenizedCard} The populated <code>InlineResponse2002PaymentInformationTokenizedCard</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('prefix')) {
        obj['prefix'] = ApiClient.convertToType(data['prefix'], 'String');
      }
      if (data.hasOwnProperty('suffix')) {
        obj['suffix'] = ApiClient.convertToType(data['suffix'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('expirationMonth')) {
        obj['expirationMonth'] = ApiClient.convertToType(data['expirationMonth'], 'String');
      }
      if (data.hasOwnProperty('expirationYear')) {
        obj['expirationYear'] = ApiClient.convertToType(data['expirationYear'], 'String');
      }
    }
    return obj;
  }

  /**
   * First six digits of token. CyberSource includes this field in the reply message when it decrypts the payment blob for the tokenized transaction. 
   * @member {String} prefix
   */
  exports.prototype['prefix'] = undefined;
  /**
   * Last four digits of token. CyberSource includes this field in the reply message when it decrypts the payment blob for the tokenized transaction. 
   * @member {String} suffix
   */
  exports.prototype['suffix'] = undefined;
  /**
   * Type of card to authorize. - 001 Visa - 002 Mastercard - 003 Amex - 004 Discover 
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Two-digit month in which the payment network token expires. `Format: MM`. Possible values: 01 through 12. 
   * @member {String} expirationMonth
   */
  exports.prototype['expirationMonth'] = undefined;
  /**
   * Four-digit year in which the payment network token expires. `Format: YYYY`. 
   * @member {String} expirationYear
   */
  exports.prototype['expirationYear'] = undefined;



  return exports;
}));



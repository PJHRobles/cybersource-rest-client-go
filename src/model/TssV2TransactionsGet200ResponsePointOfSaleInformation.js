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
    root.CyberSource.TssV2TransactionsGet200ResponsePointOfSaleInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TssV2TransactionsGet200ResponsePointOfSaleInformation model module.
   * @module model/TssV2TransactionsGet200ResponsePointOfSaleInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TssV2TransactionsGet200ResponsePointOfSaleInformation</code>.
   * @alias module:model/TssV2TransactionsGet200ResponsePointOfSaleInformation
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>TssV2TransactionsGet200ResponsePointOfSaleInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TssV2TransactionsGet200ResponsePointOfSaleInformation} obj Optional instance to populate.
   * @return {module:model/TssV2TransactionsGet200ResponsePointOfSaleInformation} The populated <code>TssV2TransactionsGet200ResponsePointOfSaleInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entryMode')) {
        obj['entryMode'] = ApiClient.convertToType(data['entryMode'], 'String');
      }
      if (data.hasOwnProperty('terminalCapability')) {
        obj['terminalCapability'] = ApiClient.convertToType(data['terminalCapability'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Method of entering credit card information into the POS terminal. Possible values:   - contact: Read from direct contact with chip card.  - contactless: Read from a contactless interface using chip data.  - keyed: Manually keyed into POS terminal.  - msd: Read from a contactless interface using magnetic stripe data (MSD).  - swiped: Read from credit card magnetic stripe.  The contact, contactless, and msd values are supported only for EMV transactions. * Applicable only for CTV for Payouts. 
   * @member {String} entryMode
   */
  exports.prototype['entryMode'] = undefined;
  /**
   * POS terminal’s capability. Possible values:   - 1: Terminal has a magnetic stripe reader only.  - 2: Terminal has a magnetic stripe reader and manual entry capability.  - 3: Terminal has manual entry capability only.  - 4: Terminal can read chip cards.  - 5: Terminal can read contactless chip cards.  The values of 4 and 5 are supported only for EMV transactions. * Applicable only for CTV for Payouts.   
   * @member {Number} terminalCapability
   */
  exports.prototype['terminalCapability'] = undefined;



  return exports;
}));



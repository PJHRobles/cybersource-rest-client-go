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
    root.CyberSource.Ptsv2creditsProcessingInformationBankTransferOptions = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2creditsProcessingInformationBankTransferOptions model module.
   * @module model/Ptsv2creditsProcessingInformationBankTransferOptions
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2creditsProcessingInformationBankTransferOptions</code>.
   * @alias module:model/Ptsv2creditsProcessingInformationBankTransferOptions
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>Ptsv2creditsProcessingInformationBankTransferOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2creditsProcessingInformationBankTransferOptions} obj Optional instance to populate.
   * @return {module:model/Ptsv2creditsProcessingInformationBankTransferOptions} The populated <code>Ptsv2creditsProcessingInformationBankTransferOptions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('customerMemo')) {
        obj['customerMemo'] = ApiClient.convertToType(data['customerMemo'], 'String');
      }
      if (data.hasOwnProperty('secCode')) {
        obj['secCode'] = ApiClient.convertToType(data['secCode'], 'String');
      }
      if (data.hasOwnProperty('terminalCity')) {
        obj['terminalCity'] = ApiClient.convertToType(data['terminalCity'], 'String');
      }
      if (data.hasOwnProperty('terminalState')) {
        obj['terminalState'] = ApiClient.convertToType(data['terminalState'], 'String');
      }
      if (data.hasOwnProperty('effectiveDate')) {
        obj['effectiveDate'] = ApiClient.convertToType(data['effectiveDate'], 'String');
      }
      if (data.hasOwnProperty('partialPaymentId')) {
        obj['partialPaymentId'] = ApiClient.convertToType(data['partialPaymentId'], 'String');
      }
      if (data.hasOwnProperty('settlementMethod')) {
        obj['settlementMethod'] = ApiClient.convertToType(data['settlementMethod'], 'String');
      }
    }
    return obj;
  }

  /**
   * Payment related information.  This information is included on the customer’s statement. 
   * @member {String} customerMemo
   */
  exports.prototype['customerMemo'] = undefined;
  /**
   * Authorization method used for the transaction. See \"SEC Codes,\" page 89.  TeleCheck Accepts only the following values: - **PPD** - **TEL** - **WEB** 
   * @member {String} secCode
   */
  exports.prototype['secCode'] = undefined;
  /**
   * City in which the terminal is located. If more than four alphanumeric characters are submitted, the transaction will be declined.  You cannot include any special characters. 
   * @member {String} terminalCity
   */
  exports.prototype['terminalCity'] = undefined;
  /**
   * State in which the terminal is located. If more than two alphanumeric characters are submitted, the transaction will be declined.  You cannot include any special characters. 
   * @member {String} terminalState
   */
  exports.prototype['terminalState'] = undefined;
  /**
   * Effective date for the transaction. The effective date must be within 45 days of the current day. If you do not include this value, CyberSource sets the effective date to the next business day.  Format: `MMDDYYYY`  Supported only for the CyberSource ACH Service. 
   * @member {String} effectiveDate
   */
  exports.prototype['effectiveDate'] = undefined;
  /**
   * Identifier for a partial payment or partial credit.  The value for each debit request or credit request must be unique within the scope of the order. See \"Multiple Partial Credits,\" page 41. 
   * @member {String} partialPaymentId
   */
  exports.prototype['partialPaymentId'] = undefined;
  /**
   * Method used for settlement.  Possible values: - **A**: Automated Clearing House (default for credits and for transactions using Canadian dollars) - **F**: Facsimile draft (U.S. dollars only) - **B**: Best possible (U.S. dollars only) (default if the field has not already been configured for your merchant ID)  See \"Settlement Delivery Methods,\" page 44. 
   * @member {String} settlementMethod
   */
  exports.prototype['settlementMethod'] = undefined;



  return exports;
}));



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
    root.CyberSource.V2payoutsPaymentInformationCard = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V2payoutsPaymentInformationCard model module.
   * @module model/V2payoutsPaymentInformationCard
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>V2payoutsPaymentInformationCard</code>.
   * @alias module:model/V2payoutsPaymentInformationCard
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>V2payoutsPaymentInformationCard</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V2payoutsPaymentInformationCard} obj Optional instance to populate.
   * @return {module:model/V2payoutsPaymentInformationCard} The populated <code>V2payoutsPaymentInformationCard</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'String');
      }
      if (data.hasOwnProperty('expirationMonth')) {
        obj['expirationMonth'] = ApiClient.convertToType(data['expirationMonth'], 'String');
      }
      if (data.hasOwnProperty('expirationYear')) {
        obj['expirationYear'] = ApiClient.convertToType(data['expirationYear'], 'String');
      }
      if (data.hasOwnProperty('sourceAccountType')) {
        obj['sourceAccountType'] = ApiClient.convertToType(data['sourceAccountType'], 'String');
      }
    }
    return obj;
  }

  /**
   * Type of card to authorize. * 001 Visa * 002 Mastercard * 003 Amex * 004 Discover 
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Customerâ€™s credit card number. Encoded Account Numbers when processing encoded account numbers, use this field for the encoded account number.  For processor-specific information, see the customer_cc_number field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} number
   */
  exports.prototype['number'] = undefined;
  /**
   * Two-digit month in which the credit card expires. `Format: MM`. Possible values: 01 through 12.  **Encoded Account Numbers**  For encoded account numbers (_type_=039), if there is no expiration date on the card, use 12.  For processor-specific information, see the customer_cc_expmo field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} expirationMonth
   */
  exports.prototype['expirationMonth'] = undefined;
  /**
   * Four-digit year in which the credit card expires. `Format: YYYY`.  **Encoded Account Numbers**  For encoded account numbers (_type_=039), if there is no expiration date on the card, use 2021.  For processor-specific information, see the customer_cc_expyr field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} expirationYear
   */
  exports.prototype['expirationYear'] = undefined;
  /**
   * Flag that specifies the type of account associated with the card. The cardholder provides this information during the payment process. This field is required in the following cases.   * Debit transactions on Cielo and Comercio Latino.   * Transactions with Brazilian-issued cards on CyberSource through VisaNet.   * Applicable only for CTV.        Note   Combo cards in Brazil contain credit and debit functionality in a single card. Visa systems use a credit bank identification number (BIN) for this type of card.    Using the BIN to determine whether a card is debit or credit can cause transactions with these cards to be processed incorrectly. CyberSource strongly recommends that you include this field for combo card transactions.   Possible values include the following.   * CH: Checking account   * CR: Credit card account   * SA: Savings account   * UA: Universal Account   For combo card transactions with Mastercard in Brazil on CyberSource through VisaNet, the **cardUsage** field is also supported. 
   * @member {String} sourceAccountType
   */
  exports.prototype['sourceAccountType'] = undefined;



  return exports;
}));



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
    root.CyberSource.V2paymentsPaymentInformationCard = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V2paymentsPaymentInformationCard model module.
   * @module model/V2paymentsPaymentInformationCard
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>V2paymentsPaymentInformationCard</code>.
   * @alias module:model/V2paymentsPaymentInformationCard
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>V2paymentsPaymentInformationCard</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V2paymentsPaymentInformationCard} obj Optional instance to populate.
   * @return {module:model/V2paymentsPaymentInformationCard} The populated <code>V2paymentsPaymentInformationCard</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'String');
      }
      if (data.hasOwnProperty('expirationMonth')) {
        obj['expirationMonth'] = ApiClient.convertToType(data['expirationMonth'], 'String');
      }
      if (data.hasOwnProperty('expirationYear')) {
        obj['expirationYear'] = ApiClient.convertToType(data['expirationYear'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('useAs')) {
        obj['useAs'] = ApiClient.convertToType(data['useAs'], 'String');
      }
      if (data.hasOwnProperty('sourceAccountType')) {
        obj['sourceAccountType'] = ApiClient.convertToType(data['sourceAccountType'], 'String');
      }
      if (data.hasOwnProperty('securityCode')) {
        obj['securityCode'] = ApiClient.convertToType(data['securityCode'], 'String');
      }
      if (data.hasOwnProperty('securityCodeIndicator')) {
        obj['securityCodeIndicator'] = ApiClient.convertToType(data['securityCodeIndicator'], 'String');
      }
      if (data.hasOwnProperty('accountEncoderId')) {
        obj['accountEncoderId'] = ApiClient.convertToType(data['accountEncoderId'], 'String');
      }
      if (data.hasOwnProperty('issueNumber')) {
        obj['issueNumber'] = ApiClient.convertToType(data['issueNumber'], 'String');
      }
      if (data.hasOwnProperty('startMonth')) {
        obj['startMonth'] = ApiClient.convertToType(data['startMonth'], 'String');
      }
      if (data.hasOwnProperty('startYear')) {
        obj['startYear'] = ApiClient.convertToType(data['startYear'], 'String');
      }
    }
    return obj;
  }

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
   * Type of card to authorize. - 001 Visa - 002 Mastercard - 003 Amex - 004 Discover 
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Flag that specifies the type of account associated with the card. The cardholder provides this information during the payment process.  **Cielo** and **Comercio Latino**  Possible values:   - CREDIT: Credit card  - DEBIT: Debit card  This field is required for:  - Debit transactions on Cielo and Comercio Latino.  - Transactions with Brazilian-issued cards on CyberSource through VisaNet. 
   * @member {String} useAs
   */
  exports.prototype['useAs'] = undefined;
  /**
   * Flag that specifies the type of account associated with the card. The cardholder provides this information during the payment process. This field is required in the following cases.   - Debit transactions on Cielo and Comercio Latino.   - Transactions with Brazilian-issued cards on CyberSource through VisaNet.   - Applicable only for CTV.      **Note** Combo cards in Brazil contain credit and debit functionality in a single card. Visa systems use a credit bank identification number (BIN) for this type of card. Using the BIN to determine whether a card is debit or credit can cause transactions with these cards to be processed incorrectly. CyberSource strongly recommends that you include this field for combo card transactions.  Possible values include the following.   - CHECKING: Checking account  - CREDIT: Credit card account  - SAVING: Saving account  - LINE_OF_CREDIT: Line of credit  - PREPAID: Prepaid card account  - UNIVERSAL: Universal account 
   * @member {String} sourceAccountType
   */
  exports.prototype['sourceAccountType'] = undefined;
  /**
   * Card Verification Number.
   * @member {String} securityCode
   */
  exports.prototype['securityCode'] = undefined;
  /**
   * Flag that indicates whether a CVN code was sent. Possible values:   - 0 (default): CVN service not requested. CyberSource uses this default value when you do not include      _securityCode_ in the request.  - 1 (default): CVN service requested and supported. CyberSource uses this default value when you include      _securityCode_ in the request.  - 2: CVN on credit card is illegible.  - 9: CVN was not imprinted on credit card. 
   * @member {String} securityCodeIndicator
   */
  exports.prototype['securityCodeIndicator'] = undefined;
  /**
   * Identifier for the issuing bank that provided the customerâ€™s encoded account number. Contact your processor for the bankâ€™s ID. 
   * @member {String} accountEncoderId
   */
  exports.prototype['accountEncoderId'] = undefined;
  /**
   * Number of times a Maestro (UK Domestic) card has been issued to the account holder. The card might or might not have an issue number. The number can consist of one or two digits, and the first digit might be a zero. When you include this value in your request, include exactly what is printed on the card. A value of 2 is different than a value of 02. Do not include the field, even with a blank value, if the card is not a Maestro (UK Domestic) card.  The issue number is not required for Maestro (UK Domestic) transactions. 
   * @member {String} issueNumber
   */
  exports.prototype['issueNumber'] = undefined;
  /**
   * Month of the start of the Maestro (UK Domestic) card validity period. Do not include the field, even with a blank value, if the card is not a Maestro (UK Domestic) card. `Format: MM`. Possible values: 01 through 12.  The start date is not required for Maestro (UK Domestic) transactions. 
   * @member {String} startMonth
   */
  exports.prototype['startMonth'] = undefined;
  /**
   * Year of the start of the Maestro (UK Domestic) card validity period. Do not include the field, even with a blank value, if the card is not a Maestro (UK Domestic) card. `Format: YYYY`.  The start date is not required for Maestro (UK Domestic) transactions. 
   * @member {String} startYear
   */
  exports.prototype['startYear'] = undefined;



  return exports;
}));



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
    define(['ApiClient', 'model/V2paymentsProcessingInformationIssuer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V2paymentsProcessingInformationIssuer'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.V2paymentsidreversalsProcessingInformation = factory(root.CyberSource.ApiClient, root.CyberSource.V2paymentsProcessingInformationIssuer);
  }
}(this, function(ApiClient, V2paymentsProcessingInformationIssuer) {
  'use strict';




  /**
   * The V2paymentsidreversalsProcessingInformation model module.
   * @module model/V2paymentsidreversalsProcessingInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>V2paymentsidreversalsProcessingInformation</code>.
   * @alias module:model/V2paymentsidreversalsProcessingInformation
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>V2paymentsidreversalsProcessingInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V2paymentsidreversalsProcessingInformation} obj Optional instance to populate.
   * @return {module:model/V2paymentsidreversalsProcessingInformation} The populated <code>V2paymentsidreversalsProcessingInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('paymentSolution')) {
        obj['paymentSolution'] = ApiClient.convertToType(data['paymentSolution'], 'String');
      }
      if (data.hasOwnProperty('reconciliationId')) {
        obj['reconciliationId'] = ApiClient.convertToType(data['reconciliationId'], 'String');
      }
      if (data.hasOwnProperty('linkId')) {
        obj['linkId'] = ApiClient.convertToType(data['linkId'], 'String');
      }
      if (data.hasOwnProperty('reportGroup')) {
        obj['reportGroup'] = ApiClient.convertToType(data['reportGroup'], 'String');
      }
      if (data.hasOwnProperty('visaCheckoutId')) {
        obj['visaCheckoutId'] = ApiClient.convertToType(data['visaCheckoutId'], 'String');
      }
      if (data.hasOwnProperty('issuer')) {
        obj['issuer'] = V2paymentsProcessingInformationIssuer.constructFromObject(data['issuer']);
      }
    }
    return obj;
  }

  /**
   * Type of digital payment solution that is being used for the transaction. Possible Values:   - **visacheckout**: Visa Checkout.  - **001**: Apple Pay.  - **005**: Masterpass. Required for Masterpass transactions on OmniPay Direct.  - **006**: Android Pay.  - **008**: Samsung Pay. 
   * @member {String} paymentSolution
   */
  exports.prototype['paymentSolution'] = undefined;
  /**
   * Please check with Cybersource customer support to see if your merchant account is configured correctly so you can include this field in your request. * For Payouts: max length for FDCCompass is String (22). 
   * @member {String} reconciliationId
   */
  exports.prototype['reconciliationId'] = undefined;
  /**
   * Value that links the current payment request to the original request. Set this value to the ID that was returned in the reply message from the original payment request.  This value is used for:   - Partial authorizations.  - Split shipments. 
   * @member {String} linkId
   */
  exports.prototype['linkId'] = undefined;
  /**
   * Attribute that lets you define custom grouping for your processor reports. This field is supported only for **Litle**. 
   * @member {String} reportGroup
   */
  exports.prototype['reportGroup'] = undefined;
  /**
   * Identifier for the **Visa Checkout** order. Visa Checkout provides a unique order ID for every transaction in the Visa Checkout **callID** field. 
   * @member {String} visaCheckoutId
   */
  exports.prototype['visaCheckoutId'] = undefined;
  /**
   * @member {module:model/V2paymentsProcessingInformationIssuer} issuer
   */
  exports.prototype['issuer'] = undefined;



  return exports;
}));



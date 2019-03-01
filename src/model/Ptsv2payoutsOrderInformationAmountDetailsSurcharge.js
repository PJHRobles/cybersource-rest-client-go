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
    root.CyberSource.Ptsv2payoutsOrderInformationAmountDetailsSurcharge = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2payoutsOrderInformationAmountDetailsSurcharge model module.
   * @module model/Ptsv2payoutsOrderInformationAmountDetailsSurcharge
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2payoutsOrderInformationAmountDetailsSurcharge</code>.
   * @alias module:model/Ptsv2payoutsOrderInformationAmountDetailsSurcharge
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Ptsv2payoutsOrderInformationAmountDetailsSurcharge</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2payoutsOrderInformationAmountDetailsSurcharge} obj Optional instance to populate.
   * @return {module:model/Ptsv2payoutsOrderInformationAmountDetailsSurcharge} The populated <code>Ptsv2payoutsOrderInformationAmountDetailsSurcharge</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
      }
    }
    return obj;
  }

  /**
   * The surcharge amount is included in the total transaction amount but is passed in a separate field to the issuer and acquirer for tracking. The issuer can provide information about the surcharge amount to the customer.  - Applicable only for CTV for Payouts. - CTV (<= 08)  For processor-specific information, see the surcharge_amount field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} amount
   */
  exports.prototype['amount'] = undefined;



  return exports;
}));



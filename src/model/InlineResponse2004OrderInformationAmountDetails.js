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
    define(['ApiClient', 'model/V2paymentsOrderInformationAmountDetailsTaxDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V2paymentsOrderInformationAmountDetailsTaxDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InlineResponse2004OrderInformationAmountDetails = factory(root.CyberSource.ApiClient, root.CyberSource.V2paymentsOrderInformationAmountDetailsTaxDetails);
  }
}(this, function(ApiClient, V2paymentsOrderInformationAmountDetailsTaxDetails) {
  'use strict';




  /**
   * The InlineResponse2004OrderInformationAmountDetails model module.
   * @module model/InlineResponse2004OrderInformationAmountDetails
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse2004OrderInformationAmountDetails</code>.
   * @alias module:model/InlineResponse2004OrderInformationAmountDetails
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>InlineResponse2004OrderInformationAmountDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2004OrderInformationAmountDetails} obj Optional instance to populate.
   * @return {module:model/InlineResponse2004OrderInformationAmountDetails} The populated <code>InlineResponse2004OrderInformationAmountDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('totalAmount')) {
        obj['totalAmount'] = ApiClient.convertToType(data['totalAmount'], 'String');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('discountAmount')) {
        obj['discountAmount'] = ApiClient.convertToType(data['discountAmount'], 'String');
      }
      if (data.hasOwnProperty('dutyAmount')) {
        obj['dutyAmount'] = ApiClient.convertToType(data['dutyAmount'], 'String');
      }
      if (data.hasOwnProperty('taxAmount')) {
        obj['taxAmount'] = ApiClient.convertToType(data['taxAmount'], 'String');
      }
      if (data.hasOwnProperty('nationalTaxIncluded')) {
        obj['nationalTaxIncluded'] = ApiClient.convertToType(data['nationalTaxIncluded'], 'String');
      }
      if (data.hasOwnProperty('freightAmount')) {
        obj['freightAmount'] = ApiClient.convertToType(data['freightAmount'], 'String');
      }
      if (data.hasOwnProperty('taxDetails')) {
        obj['taxDetails'] = ApiClient.convertToType(data['taxDetails'], [V2paymentsOrderInformationAmountDetailsTaxDetails]);
      }
    }
    return obj;
  }

  /**
   * Grand total for the order. You can include a decimal point (.), but no other special characters. CyberSource truncates the amount to the correct number of decimal places.  * CTV, FDCCompass, Paymentech (<= 12)  For processor-specific information, see the grand_total_amount field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} totalAmount
   */
  exports.prototype['totalAmount'] = undefined;
  /**
   * Currency used for the order. Use the three-character ISO Standard Currency Codes.  For an authorization reversal or a capture, you must use the same currency that you used in your request for Payment API. 
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * Total discount amount applied to the order.  For processor-specific information, see the order_discount_amount field in [Level II and Level III Processing Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/Level_2_3_SCMP_API/html) 
   * @member {String} discountAmount
   */
  exports.prototype['discountAmount'] = undefined;
  /**
   * Total charges for any import or export duties included in the order.  For processor-specific information, see the duty_amount field in [Level II and Level III Processing Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/Level_2_3_SCMP_API/html) 
   * @member {String} dutyAmount
   */
  exports.prototype['dutyAmount'] = undefined;
  /**
   * Total tax amount for all the items in the order.  For processor-specific information, see the total_tax_amount field in [Level II and Level III Processing Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/Level_2_3_SCMP_API/html) 
   * @member {String} taxAmount
   */
  exports.prototype['taxAmount'] = undefined;
  /**
   * Flag that indicates whether a national tax is included in the order total.  Possible values:   - **0**: national tax not included  - **1**: national tax included  For processor-specific information, see the national_tax_indicator field in [Level II and Level III Processing Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/Level_2_3_SCMP_API/html) 
   * @member {String} nationalTaxIncluded
   */
  exports.prototype['nationalTaxIncluded'] = undefined;
  /**
   * Total freight or shipping and handling charges for the order. When you include this field in your request, you must also include the **totalAmount** field.  For processor-specific information, see the freight_amount field in [Level II and Level III Processing Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/Level_2_3_SCMP_API/html) 
   * @member {String} freightAmount
   */
  exports.prototype['freightAmount'] = undefined;
  /**
   * @member {Array.<module:model/V2paymentsOrderInformationAmountDetailsTaxDetails>} taxDetails
   */
  exports.prototype['taxDetails'] = undefined;



  return exports;
}));



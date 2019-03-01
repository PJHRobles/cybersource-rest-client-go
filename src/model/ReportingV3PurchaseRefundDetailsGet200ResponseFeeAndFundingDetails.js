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
    root.CyberSource.ReportingV3PurchaseRefundDetailsGet200ResponseFeeAndFundingDetails = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ReportingV3PurchaseRefundDetailsGet200ResponseFeeAndFundingDetails model module.
   * @module model/ReportingV3PurchaseRefundDetailsGet200ResponseFeeAndFundingDetails
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>ReportingV3PurchaseRefundDetailsGet200ResponseFeeAndFundingDetails</code>.
   * Fee Funding Section
   * @alias module:model/ReportingV3PurchaseRefundDetailsGet200ResponseFeeAndFundingDetails
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>ReportingV3PurchaseRefundDetailsGet200ResponseFeeAndFundingDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportingV3PurchaseRefundDetailsGet200ResponseFeeAndFundingDetails} obj Optional instance to populate.
   * @return {module:model/ReportingV3PurchaseRefundDetailsGet200ResponseFeeAndFundingDetails} The populated <code>ReportingV3PurchaseRefundDetailsGet200ResponseFeeAndFundingDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('requestId')) {
        obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
      }
      if (data.hasOwnProperty('interchangePerItemFee')) {
        obj['interchangePerItemFee'] = ApiClient.convertToType(data['interchangePerItemFee'], 'String');
      }
      if (data.hasOwnProperty('discountPercentage')) {
        obj['discountPercentage'] = ApiClient.convertToType(data['discountPercentage'], 'String');
      }
      if (data.hasOwnProperty('discountAmount')) {
        obj['discountAmount'] = ApiClient.convertToType(data['discountAmount'], 'String');
      }
      if (data.hasOwnProperty('discountPerItemFee')) {
        obj['discountPerItemFee'] = ApiClient.convertToType(data['discountPerItemFee'], 'String');
      }
      if (data.hasOwnProperty('totalFee')) {
        obj['totalFee'] = ApiClient.convertToType(data['totalFee'], 'String');
      }
      if (data.hasOwnProperty('feeCurrency')) {
        obj['feeCurrency'] = ApiClient.convertToType(data['feeCurrency'], 'String');
      }
      if (data.hasOwnProperty('duesAssessments')) {
        obj['duesAssessments'] = ApiClient.convertToType(data['duesAssessments'], 'String');
      }
      if (data.hasOwnProperty('fundingAmount')) {
        obj['fundingAmount'] = ApiClient.convertToType(data['fundingAmount'], 'String');
      }
      if (data.hasOwnProperty('fundingCurrency')) {
        obj['fundingCurrency'] = ApiClient.convertToType(data['fundingCurrency'], 'String');
      }
    }
    return obj;
  }

  /**
   * An unique identification number assigned by CyberSource to identify the submitted request.
   * @member {String} requestId
   */
  exports.prototype['requestId'] = undefined;
  /**
   * interchange Per Item Fee
   * @member {String} interchangePerItemFee
   */
  exports.prototype['interchangePerItemFee'] = undefined;
  /**
   * Discount Percentage
   * @member {String} discountPercentage
   */
  exports.prototype['discountPercentage'] = undefined;
  /**
   * Discount Amount
   * @member {String} discountAmount
   */
  exports.prototype['discountAmount'] = undefined;
  /**
   * Discount Per Item Fee
   * @member {String} discountPerItemFee
   */
  exports.prototype['discountPerItemFee'] = undefined;
  /**
   * Total Fee
   * @member {String} totalFee
   */
  exports.prototype['totalFee'] = undefined;
  /**
   * Fee Currency
   * @member {String} feeCurrency
   */
  exports.prototype['feeCurrency'] = undefined;
  /**
   * Dues Assessments
   * @member {String} duesAssessments
   */
  exports.prototype['duesAssessments'] = undefined;
  /**
   * Funding Amount
   * @member {String} fundingAmount
   */
  exports.prototype['fundingAmount'] = undefined;
  /**
   * Funding Currency (ISO 4217)
   * @member {String} fundingCurrency
   */
  exports.prototype['fundingCurrency'] = undefined;



  return exports;
}));



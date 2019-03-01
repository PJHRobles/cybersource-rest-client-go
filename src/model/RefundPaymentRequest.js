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
    define(['ApiClient', 'model/Ptsv2paymentsClientReferenceInformation', 'model/Ptsv2paymentsDeviceInformation', 'model/Ptsv2paymentsMerchantDefinedInformation', 'model/Ptsv2paymentsidcapturesAggregatorInformation', 'model/Ptsv2paymentsidcapturesBuyerInformation', 'model/Ptsv2paymentsidrefundsMerchantInformation', 'model/Ptsv2paymentsidrefundsOrderInformation', 'model/Ptsv2paymentsidrefundsPaymentInformation', 'model/Ptsv2paymentsidrefundsPointOfSaleInformation', 'model/Ptsv2paymentsidrefundsProcessingInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsClientReferenceInformation'), require('./Ptsv2paymentsDeviceInformation'), require('./Ptsv2paymentsMerchantDefinedInformation'), require('./Ptsv2paymentsidcapturesAggregatorInformation'), require('./Ptsv2paymentsidcapturesBuyerInformation'), require('./Ptsv2paymentsidrefundsMerchantInformation'), require('./Ptsv2paymentsidrefundsOrderInformation'), require('./Ptsv2paymentsidrefundsPaymentInformation'), require('./Ptsv2paymentsidrefundsPointOfSaleInformation'), require('./Ptsv2paymentsidrefundsProcessingInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.RefundPaymentRequest = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsClientReferenceInformation, root.CyberSource.Ptsv2paymentsDeviceInformation, root.CyberSource.Ptsv2paymentsMerchantDefinedInformation, root.CyberSource.Ptsv2paymentsidcapturesAggregatorInformation, root.CyberSource.Ptsv2paymentsidcapturesBuyerInformation, root.CyberSource.Ptsv2paymentsidrefundsMerchantInformation, root.CyberSource.Ptsv2paymentsidrefundsOrderInformation, root.CyberSource.Ptsv2paymentsidrefundsPaymentInformation, root.CyberSource.Ptsv2paymentsidrefundsPointOfSaleInformation, root.CyberSource.Ptsv2paymentsidrefundsProcessingInformation);
  }
}(this, function(ApiClient, Ptsv2paymentsClientReferenceInformation, Ptsv2paymentsDeviceInformation, Ptsv2paymentsMerchantDefinedInformation, Ptsv2paymentsidcapturesAggregatorInformation, Ptsv2paymentsidcapturesBuyerInformation, Ptsv2paymentsidrefundsMerchantInformation, Ptsv2paymentsidrefundsOrderInformation, Ptsv2paymentsidrefundsPaymentInformation, Ptsv2paymentsidrefundsPointOfSaleInformation, Ptsv2paymentsidrefundsProcessingInformation) {
  'use strict';




  /**
   * The RefundPaymentRequest model module.
   * @module model/RefundPaymentRequest
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>RefundPaymentRequest</code>.
   * @alias module:model/RefundPaymentRequest
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>RefundPaymentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RefundPaymentRequest} obj Optional instance to populate.
   * @return {module:model/RefundPaymentRequest} The populated <code>RefundPaymentRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('clientReferenceInformation')) {
        obj['clientReferenceInformation'] = Ptsv2paymentsClientReferenceInformation.constructFromObject(data['clientReferenceInformation']);
      }
      if (data.hasOwnProperty('processingInformation')) {
        obj['processingInformation'] = Ptsv2paymentsidrefundsProcessingInformation.constructFromObject(data['processingInformation']);
      }
      if (data.hasOwnProperty('paymentInformation')) {
        obj['paymentInformation'] = Ptsv2paymentsidrefundsPaymentInformation.constructFromObject(data['paymentInformation']);
      }
      if (data.hasOwnProperty('orderInformation')) {
        obj['orderInformation'] = Ptsv2paymentsidrefundsOrderInformation.constructFromObject(data['orderInformation']);
      }
      if (data.hasOwnProperty('buyerInformation')) {
        obj['buyerInformation'] = Ptsv2paymentsidcapturesBuyerInformation.constructFromObject(data['buyerInformation']);
      }
      if (data.hasOwnProperty('deviceInformation')) {
        obj['deviceInformation'] = Ptsv2paymentsDeviceInformation.constructFromObject(data['deviceInformation']);
      }
      if (data.hasOwnProperty('merchantInformation')) {
        obj['merchantInformation'] = Ptsv2paymentsidrefundsMerchantInformation.constructFromObject(data['merchantInformation']);
      }
      if (data.hasOwnProperty('aggregatorInformation')) {
        obj['aggregatorInformation'] = Ptsv2paymentsidcapturesAggregatorInformation.constructFromObject(data['aggregatorInformation']);
      }
      if (data.hasOwnProperty('pointOfSaleInformation')) {
        obj['pointOfSaleInformation'] = Ptsv2paymentsidrefundsPointOfSaleInformation.constructFromObject(data['pointOfSaleInformation']);
      }
      if (data.hasOwnProperty('merchantDefinedInformation')) {
        obj['merchantDefinedInformation'] = ApiClient.convertToType(data['merchantDefinedInformation'], [Ptsv2paymentsMerchantDefinedInformation]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Ptsv2paymentsClientReferenceInformation} clientReferenceInformation
   */
  exports.prototype['clientReferenceInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidrefundsProcessingInformation} processingInformation
   */
  exports.prototype['processingInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidrefundsPaymentInformation} paymentInformation
   */
  exports.prototype['paymentInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidrefundsOrderInformation} orderInformation
   */
  exports.prototype['orderInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidcapturesBuyerInformation} buyerInformation
   */
  exports.prototype['buyerInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsDeviceInformation} deviceInformation
   */
  exports.prototype['deviceInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidrefundsMerchantInformation} merchantInformation
   */
  exports.prototype['merchantInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidcapturesAggregatorInformation} aggregatorInformation
   */
  exports.prototype['aggregatorInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidrefundsPointOfSaleInformation} pointOfSaleInformation
   */
  exports.prototype['pointOfSaleInformation'] = undefined;
  /**
   * The description for this field is not available.
   * @member {Array.<module:model/Ptsv2paymentsMerchantDefinedInformation>} merchantDefinedInformation
   */
  exports.prototype['merchantDefinedInformation'] = undefined;



  return exports;
}));



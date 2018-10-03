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
    define(['ApiClient', 'model/V2paymentsidcapturesAggregatorInformationSubMerchant'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V2paymentsidcapturesAggregatorInformationSubMerchant'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.V2paymentsidcapturesAggregatorInformation = factory(root.CyberSource.ApiClient, root.CyberSource.V2paymentsidcapturesAggregatorInformationSubMerchant);
  }
}(this, function(ApiClient, V2paymentsidcapturesAggregatorInformationSubMerchant) {
  'use strict';




  /**
   * The V2paymentsidcapturesAggregatorInformation model module.
   * @module model/V2paymentsidcapturesAggregatorInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>V2paymentsidcapturesAggregatorInformation</code>.
   * @alias module:model/V2paymentsidcapturesAggregatorInformation
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>V2paymentsidcapturesAggregatorInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V2paymentsidcapturesAggregatorInformation} obj Optional instance to populate.
   * @return {module:model/V2paymentsidcapturesAggregatorInformation} The populated <code>V2paymentsidcapturesAggregatorInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('aggregatorId')) {
        obj['aggregatorId'] = ApiClient.convertToType(data['aggregatorId'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('subMerchant')) {
        obj['subMerchant'] = V2paymentsidcapturesAggregatorInformationSubMerchant.constructFromObject(data['subMerchant']);
      }
    }
    return obj;
  }

  /**
   * Value that identifies you as a payment aggregator. Get this value from the processor.  For processor-specific information, see the aggregator_id field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} aggregatorId
   */
  exports.prototype['aggregatorId'] = undefined;
  /**
   * Your payment aggregator business name.  For processor-specific information, see the aggregator_name field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/V2paymentsidcapturesAggregatorInformationSubMerchant} subMerchant
   */
  exports.prototype['subMerchant'] = undefined;



  return exports;
}));



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
    define(['ApiClient', 'model/InlineResponse2013Links', 'model/InlineResponse2013OrderInformation', 'model/InlineResponse2013ProcessorInformation', 'model/InlineResponse2013RefundAmountDetails', 'model/InlineResponse201ClientReferenceInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse2013Links'), require('./InlineResponse2013OrderInformation'), require('./InlineResponse2013ProcessorInformation'), require('./InlineResponse2013RefundAmountDetails'), require('./InlineResponse201ClientReferenceInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InlineResponse2013 = factory(root.CyberSource.ApiClient, root.CyberSource.InlineResponse2013Links, root.CyberSource.InlineResponse2013OrderInformation, root.CyberSource.InlineResponse2013ProcessorInformation, root.CyberSource.InlineResponse2013RefundAmountDetails, root.CyberSource.InlineResponse201ClientReferenceInformation);
  }
}(this, function(ApiClient, InlineResponse2013Links, InlineResponse2013OrderInformation, InlineResponse2013ProcessorInformation, InlineResponse2013RefundAmountDetails, InlineResponse201ClientReferenceInformation) {
  'use strict';




  /**
   * The InlineResponse2013 model module.
   * @module model/InlineResponse2013
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse2013</code>.
   * @alias module:model/InlineResponse2013
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>InlineResponse2013</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2013} obj Optional instance to populate.
   * @return {module:model/InlineResponse2013} The populated <code>InlineResponse2013</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_links')) {
        obj['_links'] = InlineResponse2013Links.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('submitTimeUtc')) {
        obj['submitTimeUtc'] = ApiClient.convertToType(data['submitTimeUtc'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('reconciliationId')) {
        obj['reconciliationId'] = ApiClient.convertToType(data['reconciliationId'], 'String');
      }
      if (data.hasOwnProperty('clientReferenceInformation')) {
        obj['clientReferenceInformation'] = InlineResponse201ClientReferenceInformation.constructFromObject(data['clientReferenceInformation']);
      }
      if (data.hasOwnProperty('refundAmountDetails')) {
        obj['refundAmountDetails'] = InlineResponse2013RefundAmountDetails.constructFromObject(data['refundAmountDetails']);
      }
      if (data.hasOwnProperty('processorInformation')) {
        obj['processorInformation'] = InlineResponse2013ProcessorInformation.constructFromObject(data['processorInformation']);
      }
      if (data.hasOwnProperty('orderInformation')) {
        obj['orderInformation'] = InlineResponse2013OrderInformation.constructFromObject(data['orderInformation']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/InlineResponse2013Links} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * An unique identification number assigned by CyberSource to identify the submitted request.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Time of request in UTC. `Format: YYYY-MM-DDThh:mm:ssZ`  Example 2016-08-11T22:47:57Z equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The T separates the date and the time. The Z indicates UTC. 
   * @member {String} submitTimeUtc
   */
  exports.prototype['submitTimeUtc'] = undefined;
  /**
   * The status of the submitted transaction.
   * @member {module:model/InlineResponse2013.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The reconciliation id for the submitted transaction. This value is not returned for all processors. 
   * @member {String} reconciliationId
   */
  exports.prototype['reconciliationId'] = undefined;
  /**
   * @member {module:model/InlineResponse201ClientReferenceInformation} clientReferenceInformation
   */
  exports.prototype['clientReferenceInformation'] = undefined;
  /**
   * @member {module:model/InlineResponse2013RefundAmountDetails} refundAmountDetails
   */
  exports.prototype['refundAmountDetails'] = undefined;
  /**
   * @member {module:model/InlineResponse2013ProcessorInformation} processorInformation
   */
  exports.prototype['processorInformation'] = undefined;
  /**
   * @member {module:model/InlineResponse2013OrderInformation} orderInformation
   */
  exports.prototype['orderInformation'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "PENDING"
     * @const
     */
    "PENDING": "PENDING"  };


  return exports;
}));



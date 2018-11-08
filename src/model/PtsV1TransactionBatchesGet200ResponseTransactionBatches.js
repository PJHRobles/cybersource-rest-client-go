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
    root.CyberSource.PtsV1TransactionBatchesGet200ResponseTransactionBatches = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PtsV1TransactionBatchesGet200ResponseTransactionBatches model module.
   * @module model/PtsV1TransactionBatchesGet200ResponseTransactionBatches
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV1TransactionBatchesGet200ResponseTransactionBatches</code>.
   * @alias module:model/PtsV1TransactionBatchesGet200ResponseTransactionBatches
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>PtsV1TransactionBatchesGet200ResponseTransactionBatches</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV1TransactionBatchesGet200ResponseTransactionBatches} obj Optional instance to populate.
   * @return {module:model/PtsV1TransactionBatchesGet200ResponseTransactionBatches} The populated <code>PtsV1TransactionBatchesGet200ResponseTransactionBatches</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('uploadDate')) {
        obj['uploadDate'] = ApiClient.convertToType(data['uploadDate'], 'String');
      }
      if (data.hasOwnProperty('completionDate')) {
        obj['completionDate'] = ApiClient.convertToType(data['completionDate'], 'String');
      }
      if (data.hasOwnProperty('transactionCount')) {
        obj['transactionCount'] = ApiClient.convertToType(data['transactionCount'], 'Number');
      }
      if (data.hasOwnProperty('acceptedTransactionCount')) {
        obj['acceptedTransactionCount'] = ApiClient.convertToType(data['acceptedTransactionCount'], 'Number');
      }
      if (data.hasOwnProperty('rejectedTransactionCount')) {
        obj['rejectedTransactionCount'] = ApiClient.convertToType(data['rejectedTransactionCount'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * Unique identifier assigned to the batch file.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Date when the batch template was update.
   * @member {String} uploadDate
   */
  exports.prototype['uploadDate'] = undefined;
  /**
   * The date when the batch template processing completed.
   * @member {String} completionDate
   */
  exports.prototype['completionDate'] = undefined;
  /**
   * Number of transactions in the transaction.
   * @member {Number} transactionCount
   */
  exports.prototype['transactionCount'] = undefined;
  /**
   * Number of transactions accepted.
   * @member {Number} acceptedTransactionCount
   */
  exports.prototype['acceptedTransactionCount'] = undefined;
  /**
   * Number of transactions rejected.
   * @member {String} rejectedTransactionCount
   */
  exports.prototype['rejectedTransactionCount'] = undefined;
  /**
   * The status of you batch template processing.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));



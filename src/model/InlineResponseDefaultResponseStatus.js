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
    define(['ApiClient', 'model/InlineResponseDefaultResponseStatusDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponseDefaultResponseStatusDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InlineResponseDefaultResponseStatus = factory(root.CyberSource.ApiClient, root.CyberSource.InlineResponseDefaultResponseStatusDetails);
  }
}(this, function(ApiClient, InlineResponseDefaultResponseStatusDetails) {
  'use strict';




  /**
   * The InlineResponseDefaultResponseStatus model module.
   * @module model/InlineResponseDefaultResponseStatus
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponseDefaultResponseStatus</code>.
   * @alias module:model/InlineResponseDefaultResponseStatus
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>InlineResponseDefaultResponseStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponseDefaultResponseStatus} obj Optional instance to populate.
   * @return {module:model/InlineResponseDefaultResponseStatus} The populated <code>InlineResponseDefaultResponseStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Number');
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('correlationId')) {
        obj['correlationId'] = ApiClient.convertToType(data['correlationId'], 'String');
      }
      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], [InlineResponseDefaultResponseStatusDetails]);
      }
    }
    return obj;
  }

  /**
   * HTTP Status code.
   * @member {Number} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Error Reason Code.
   * @member {String} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * Error Message.
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * API correlation ID.
   * @member {String} correlationId
   */
  exports.prototype['correlationId'] = undefined;
  /**
   * @member {Array.<module:model/InlineResponseDefaultResponseStatusDetails>} details
   */
  exports.prototype['details'] = undefined;



  return exports;
}));



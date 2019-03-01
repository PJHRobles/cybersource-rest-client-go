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
    define(['ApiClient', 'model/InlineResponse400Fields'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse400Fields'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InlineResponse400 = factory(root.CyberSource.ApiClient, root.CyberSource.InlineResponse400Fields);
  }
}(this, function(ApiClient, InlineResponse400Fields) {
  'use strict';




  /**
   * The InlineResponse400 model module.
   * @module model/InlineResponse400
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse400</code>.
   * Error Bean
   * @alias module:model/InlineResponse400
   * @class
   * @param code {String} Error code
   * @param message {String} Error message
   */
  var exports = function(code, message) {
    var _this = this;

    _this['code'] = code;
    _this['message'] = message;




  };

  /**
   * Constructs a <code>InlineResponse400</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse400} obj Optional instance to populate.
   * @return {module:model/InlineResponse400} The populated <code>InlineResponse400</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('localizationKey')) {
        obj['localizationKey'] = ApiClient.convertToType(data['localizationKey'], 'String');
      }
      if (data.hasOwnProperty('correlationId')) {
        obj['correlationId'] = ApiClient.convertToType(data['correlationId'], 'String');
      }
      if (data.hasOwnProperty('detail')) {
        obj['detail'] = ApiClient.convertToType(data['detail'], 'String');
      }
      if (data.hasOwnProperty('fields')) {
        obj['fields'] = ApiClient.convertToType(data['fields'], [InlineResponse400Fields]);
      }
    }
    return obj;
  }

  /**
   * Error code
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * Error message
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * Localization Key Name
   * @member {String} localizationKey
   */
  exports.prototype['localizationKey'] = undefined;
  /**
   * Correlation Id
   * @member {String} correlationId
   */
  exports.prototype['correlationId'] = undefined;
  /**
   * Error Detail
   * @member {String} detail
   */
  exports.prototype['detail'] = undefined;
  /**
   * Error fields List
   * @member {Array.<module:model/InlineResponse400Fields>} fields
   */
  exports.prototype['fields'] = undefined;



  return exports;
}));



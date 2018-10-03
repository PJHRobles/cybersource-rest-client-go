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
    define(['ApiClient', 'model/InstrumentidentifiersDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InstrumentidentifiersDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InlineResponse4006 = factory(root.CyberSource.ApiClient, root.CyberSource.InstrumentidentifiersDetails);
  }
}(this, function(ApiClient, InstrumentidentifiersDetails) {
  'use strict';




  /**
   * The InlineResponse4006 model module.
   * @module model/InlineResponse4006
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse4006</code>.
   * @alias module:model/InlineResponse4006
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>InlineResponse4006</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse4006} obj Optional instance to populate.
   * @return {module:model/InlineResponse4006} The populated <code>InlineResponse4006</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('details')) {
        obj['details'] = InstrumentidentifiersDetails.constructFromObject(data['details']);
      }
    }
    return obj;
  }

  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * The detailed message related to the type stated above.
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {module:model/InstrumentidentifiersDetails} details
   */
  exports.prototype['details'] = undefined;



  return exports;
}));



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
    define(['ApiClient', 'model/InstrumentidentifiersProcessingInformationAuthorizationOptionsInitiator'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InstrumentidentifiersProcessingInformationAuthorizationOptionsInitiator'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InstrumentidentifiersProcessingInformationAuthorizationOptions = factory(root.CyberSource.ApiClient, root.CyberSource.InstrumentidentifiersProcessingInformationAuthorizationOptionsInitiator);
  }
}(this, function(ApiClient, InstrumentidentifiersProcessingInformationAuthorizationOptionsInitiator) {
  'use strict';




  /**
   * The InstrumentidentifiersProcessingInformationAuthorizationOptions model module.
   * @module model/InstrumentidentifiersProcessingInformationAuthorizationOptions
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InstrumentidentifiersProcessingInformationAuthorizationOptions</code>.
   * @alias module:model/InstrumentidentifiersProcessingInformationAuthorizationOptions
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>InstrumentidentifiersProcessingInformationAuthorizationOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InstrumentidentifiersProcessingInformationAuthorizationOptions} obj Optional instance to populate.
   * @return {module:model/InstrumentidentifiersProcessingInformationAuthorizationOptions} The populated <code>InstrumentidentifiersProcessingInformationAuthorizationOptions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('initiator')) {
        obj['initiator'] = InstrumentidentifiersProcessingInformationAuthorizationOptionsInitiator.constructFromObject(data['initiator']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/InstrumentidentifiersProcessingInformationAuthorizationOptionsInitiator} initiator
   */
  exports.prototype['initiator'] = undefined;



  return exports;
}));



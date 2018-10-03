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
    define(['ApiClient', 'model/InstrumentidentifiersBankAccount', 'model/InstrumentidentifiersCard', 'model/InstrumentidentifiersLinks', 'model/InstrumentidentifiersMetadata', 'model/InstrumentidentifiersProcessingInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InstrumentidentifiersBankAccount'), require('./InstrumentidentifiersCard'), require('./InstrumentidentifiersLinks'), require('./InstrumentidentifiersMetadata'), require('./InstrumentidentifiersProcessingInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Body = factory(root.CyberSource.ApiClient, root.CyberSource.InstrumentidentifiersBankAccount, root.CyberSource.InstrumentidentifiersCard, root.CyberSource.InstrumentidentifiersLinks, root.CyberSource.InstrumentidentifiersMetadata, root.CyberSource.InstrumentidentifiersProcessingInformation);
  }
}(this, function(ApiClient, InstrumentidentifiersBankAccount, InstrumentidentifiersCard, InstrumentidentifiersLinks, InstrumentidentifiersMetadata, InstrumentidentifiersProcessingInformation) {
  'use strict';




  /**
   * The Body model module.
   * @module model/Body
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Body</code>.
   * @alias module:model/Body
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>Body</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body} obj Optional instance to populate.
   * @return {module:model/Body} The populated <code>Body</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_links')) {
        obj['_links'] = InstrumentidentifiersLinks.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('object')) {
        obj['object'] = ApiClient.convertToType(data['object'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('card')) {
        obj['card'] = InstrumentidentifiersCard.constructFromObject(data['card']);
      }
      if (data.hasOwnProperty('bankAccount')) {
        obj['bankAccount'] = InstrumentidentifiersBankAccount.constructFromObject(data['bankAccount']);
      }
      if (data.hasOwnProperty('processingInformation')) {
        obj['processingInformation'] = InstrumentidentifiersProcessingInformation.constructFromObject(data['processingInformation']);
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = InstrumentidentifiersMetadata.constructFromObject(data['metadata']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/InstrumentidentifiersLinks} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * Unique identification number assigned by CyberSource to the submitted request.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Describes type of token. For example: customer, paymentInstrument or instrumentIdentifier.
   * @member {module:model/Body.ObjectEnum} object
   */
  exports.prototype['object'] = undefined;
  /**
   * Current state of the token.
   * @member {module:model/Body.StateEnum} state
   */
  exports.prototype['state'] = undefined;
  /**
   * @member {module:model/InstrumentidentifiersCard} card
   */
  exports.prototype['card'] = undefined;
  /**
   * @member {module:model/InstrumentidentifiersBankAccount} bankAccount
   */
  exports.prototype['bankAccount'] = undefined;
  /**
   * @member {module:model/InstrumentidentifiersProcessingInformation} processingInformation
   */
  exports.prototype['processingInformation'] = undefined;
  /**
   * @member {module:model/InstrumentidentifiersMetadata} metadata
   */
  exports.prototype['metadata'] = undefined;


  /**
   * Allowed values for the <code>object</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ObjectEnum = {
    /**
     * value: "instrumentIdentifier"
     * @const
     */
    "instrumentIdentifier": "instrumentIdentifier"  };

  /**
   * Allowed values for the <code>state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StateEnum = {
    /**
     * value: "ACTIVE"
     * @const
     */
    "ACTIVE": "ACTIVE",
    /**
     * value: "CLOSED"
     * @const
     */
    "CLOSED": "CLOSED"  };


  return exports;
}));



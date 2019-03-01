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
    define(['ApiClient', 'model/InlineResponseDefaultLinksNext'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponseDefaultLinksNext'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Links = factory(root.CyberSource.ApiClient, root.CyberSource.InlineResponseDefaultLinksNext);
  }
}(this, function(ApiClient, InlineResponseDefaultLinksNext) {
  'use strict';




  /**
   * The Links model module.
   * @module model/Links
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Links</code>.
   * @alias module:model/Links
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Links</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Links} obj Optional instance to populate.
   * @return {module:model/Links} The populated <code>Links</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('self')) {
        obj['self'] = InlineResponseDefaultLinksNext.constructFromObject(data['self']);
      }
      if (data.hasOwnProperty('documentation')) {
        obj['documentation'] = ApiClient.convertToType(data['documentation'], [InlineResponseDefaultLinksNext]);
      }
      if (data.hasOwnProperty('next')) {
        obj['next'] = ApiClient.convertToType(data['next'], [InlineResponseDefaultLinksNext]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/InlineResponseDefaultLinksNext} self
   */
  exports.prototype['self'] = undefined;
  /**
   * @member {Array.<module:model/InlineResponseDefaultLinksNext>} documentation
   */
  exports.prototype['documentation'] = undefined;
  /**
   * @member {Array.<module:model/InlineResponseDefaultLinksNext>} next
   */
  exports.prototype['next'] = undefined;



  return exports;
}));



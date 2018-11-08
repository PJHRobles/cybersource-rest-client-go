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
    define(['ApiClient', 'model/ReportingV3ReportDefinitionsGet200ResponseReportDefinitions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReportingV3ReportDefinitionsGet200ResponseReportDefinitions'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.ReportingV3ReportDefinitionsGet200Response = factory(root.CyberSource.ApiClient, root.CyberSource.ReportingV3ReportDefinitionsGet200ResponseReportDefinitions);
  }
}(this, function(ApiClient, ReportingV3ReportDefinitionsGet200ResponseReportDefinitions) {
  'use strict';




  /**
   * The ReportingV3ReportDefinitionsGet200Response model module.
   * @module model/ReportingV3ReportDefinitionsGet200Response
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>ReportingV3ReportDefinitionsGet200Response</code>.
   * @alias module:model/ReportingV3ReportDefinitionsGet200Response
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ReportingV3ReportDefinitionsGet200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportingV3ReportDefinitionsGet200Response} obj Optional instance to populate.
   * @return {module:model/ReportingV3ReportDefinitionsGet200Response} The populated <code>ReportingV3ReportDefinitionsGet200Response</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('reportDefinitions')) {
        obj['reportDefinitions'] = ApiClient.convertToType(data['reportDefinitions'], [ReportingV3ReportDefinitionsGet200ResponseReportDefinitions]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ReportingV3ReportDefinitionsGet200ResponseReportDefinitions>} reportDefinitions
   */
  exports.prototype['reportDefinitions'] = undefined;



  return exports;
}));



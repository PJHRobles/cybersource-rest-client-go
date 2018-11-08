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
    define(['ApiClient', 'model/PtsV2PaymentsPost201ResponsePaymentInformationAccountFeatures', 'model/PtsV2PaymentsPost201ResponsePaymentInformationCard', 'model/PtsV2PaymentsPost201ResponsePaymentInformationTokenizedCard'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PtsV2PaymentsPost201ResponsePaymentInformationAccountFeatures'), require('./PtsV2PaymentsPost201ResponsePaymentInformationCard'), require('./PtsV2PaymentsPost201ResponsePaymentInformationTokenizedCard'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PtsV2PaymentsPost201ResponsePaymentInformation = factory(root.CyberSource.ApiClient, root.CyberSource.PtsV2PaymentsPost201ResponsePaymentInformationAccountFeatures, root.CyberSource.PtsV2PaymentsPost201ResponsePaymentInformationCard, root.CyberSource.PtsV2PaymentsPost201ResponsePaymentInformationTokenizedCard);
  }
}(this, function(ApiClient, PtsV2PaymentsPost201ResponsePaymentInformationAccountFeatures, PtsV2PaymentsPost201ResponsePaymentInformationCard, PtsV2PaymentsPost201ResponsePaymentInformationTokenizedCard) {
  'use strict';




  /**
   * The PtsV2PaymentsPost201ResponsePaymentInformation model module.
   * @module model/PtsV2PaymentsPost201ResponsePaymentInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2PaymentsPost201ResponsePaymentInformation</code>.
   * @alias module:model/PtsV2PaymentsPost201ResponsePaymentInformation
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>PtsV2PaymentsPost201ResponsePaymentInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2PaymentsPost201ResponsePaymentInformation} obj Optional instance to populate.
   * @return {module:model/PtsV2PaymentsPost201ResponsePaymentInformation} The populated <code>PtsV2PaymentsPost201ResponsePaymentInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('card')) {
        obj['card'] = PtsV2PaymentsPost201ResponsePaymentInformationCard.constructFromObject(data['card']);
      }
      if (data.hasOwnProperty('tokenizedCard')) {
        obj['tokenizedCard'] = PtsV2PaymentsPost201ResponsePaymentInformationTokenizedCard.constructFromObject(data['tokenizedCard']);
      }
      if (data.hasOwnProperty('accountFeatures')) {
        obj['accountFeatures'] = PtsV2PaymentsPost201ResponsePaymentInformationAccountFeatures.constructFromObject(data['accountFeatures']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PtsV2PaymentsPost201ResponsePaymentInformationCard} card
   */
  exports.prototype['card'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponsePaymentInformationTokenizedCard} tokenizedCard
   */
  exports.prototype['tokenizedCard'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponsePaymentInformationAccountFeatures} accountFeatures
   */
  exports.prototype['accountFeatures'] = undefined;



  return exports;
}));



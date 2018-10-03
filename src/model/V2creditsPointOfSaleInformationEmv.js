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
    root.CyberSource.V2creditsPointOfSaleInformationEmv = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V2creditsPointOfSaleInformationEmv model module.
   * @module model/V2creditsPointOfSaleInformationEmv
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>V2creditsPointOfSaleInformationEmv</code>.
   * @alias module:model/V2creditsPointOfSaleInformationEmv
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>V2creditsPointOfSaleInformationEmv</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V2creditsPointOfSaleInformationEmv} obj Optional instance to populate.
   * @return {module:model/V2creditsPointOfSaleInformationEmv} The populated <code>V2creditsPointOfSaleInformationEmv</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], 'String');
      }
      if (data.hasOwnProperty('fallback')) {
        obj['fallback'] = ApiClient.convertToType(data['fallback'], 'Boolean');
      }
      if (data.hasOwnProperty('fallbackCondition')) {
        obj['fallbackCondition'] = ApiClient.convertToType(data['fallbackCondition'], 'Number');
      }
    }
    return obj;
  }

  /**
   * EMV data that is transmitted from the chip card to the issuer, and from the issuer to the chip card. The EMV data is in the tag-length-value format and includes chip card tags, terminal tags, and transaction detail tags.  `Important` The following tags contain sensitive information and **must not** be included in this field:   - **56**: Track 1 equivalent data  - **57**: Track 2 equivalent data  - **5A**: Application PAN  - **5F20**: Cardholder name  - **5F24**: Application expiration date (This sensitivity has been relaxed for cmcic, amexdirect, fdiglobal, opdfde, six)  - **99**: Transaction PIN  - **9F0B**: Cardholder name (extended)  - **9F1F**: Track 1 discretionary data  - **9F20**: Track 2 discretionary data  For captures, this field is required for contact EMV transactions. Otherwise, it is optional.  For credits, this field is required for contact EMV stand-alone credits and contactless EMV stand-alone credits. Otherwise, it is optional.  `Important` For contact EMV captures, contact EMV stand-alone credits, and contactless EMV stand-alone credits, you must include the following tags in this field. For all other types of EMV transactions, the following tags are optional.   - **95**: Terminal verification results  - **9F10**: Issuer application data  - **9F26**: Application cryptogram 
   * @member {String} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * Indicates whether a fallback method was used to enter credit card information into the POS terminal. When a technical problem prevents a successful exchange of information between a chip card and a chip-capable terminal:   1. Swipe the card or key the credit card information into the POS terminal.  2. Use the pos_entry_mode field to indicate whether the information was swiped or keyed.  This field is supported only on **Chase Paymentech Solutions** and **GPN**. 
   * @member {Boolean} fallback
   * @default false
   */
  exports.prototype['fallback'] = false;
  /**
   * Reason for the EMV fallback transaction. An EMV fallback transaction occurs when an EMV transaction fails for one of these reasons:   - Technical failure: the EMV terminal or EMV card cannot read and process chip data.  - Empty candidate list failure: the EMV terminal does not have any applications in common with the EMV card.    EMV terminals are coded to determine whether the terminal and EMV card have any applications in common.    EMV terminals provide this information to you.  Possible values:   - **1**: Transaction was initiated with information from a magnetic stripe, and the previous transaction at the       EMV terminal either used information from a successful chip read or it was not a chip transaction.  - **2**: Transaction was initiated with information from a magnetic stripe, and the previous transaction at the       EMV terminal was an EMV fallback transaction because the attempted chip read was unsuccessful.  This field is supported only on **GPN**. 
   * @member {Number} fallbackCondition
   */
  exports.prototype['fallbackCondition'] = undefined;



  return exports;
}));



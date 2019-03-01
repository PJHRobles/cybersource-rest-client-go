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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.TmsV1PaymentinstrumentsPost201ResponseCard = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TmsV1PaymentinstrumentsPost201ResponseCard model module.
   * @module model/TmsV1PaymentinstrumentsPost201ResponseCard
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TmsV1PaymentinstrumentsPost201ResponseCard</code>.
   * @alias module:model/TmsV1PaymentinstrumentsPost201ResponseCard
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>TmsV1PaymentinstrumentsPost201ResponseCard</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TmsV1PaymentinstrumentsPost201ResponseCard} obj Optional instance to populate.
   * @return {module:model/TmsV1PaymentinstrumentsPost201ResponseCard} The populated <code>TmsV1PaymentinstrumentsPost201ResponseCard</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('expirationMonth')) {
        obj['expirationMonth'] = ApiClient.convertToType(data['expirationMonth'], 'String');
      }
      if (data.hasOwnProperty('expirationYear')) {
        obj['expirationYear'] = ApiClient.convertToType(data['expirationYear'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('issueNumber')) {
        obj['issueNumber'] = ApiClient.convertToType(data['issueNumber'], 'String');
      }
      if (data.hasOwnProperty('startMonth')) {
        obj['startMonth'] = ApiClient.convertToType(data['startMonth'], 'String');
      }
      if (data.hasOwnProperty('startYear')) {
        obj['startYear'] = ApiClient.convertToType(data['startYear'], 'String');
      }
      if (data.hasOwnProperty('useAs')) {
        obj['useAs'] = ApiClient.convertToType(data['useAs'], 'String');
      }
    }
    return obj;
  }

  /**
   * Credit card expiration month.
   * @member {String} expirationMonth
   */
  exports.prototype['expirationMonth'] = undefined;
  /**
   * Credit card expiration year.
   * @member {String} expirationYear
   */
  exports.prototype['expirationYear'] = undefined;
  /**
   * Credit card brand.
   * @member {module:model/TmsV1PaymentinstrumentsPost201ResponseCard.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Credit card issue number.
   * @member {String} issueNumber
   */
  exports.prototype['issueNumber'] = undefined;
  /**
   * Credit card start month.
   * @member {String} startMonth
   */
  exports.prototype['startMonth'] = undefined;
  /**
   * Credit card start year.
   * @member {String} startYear
   */
  exports.prototype['startYear'] = undefined;
  /**
   * Card Use As Field. Supported value of \"pinless debit\" only. Only for use with Pinless Debit tokens.
   * @member {String} useAs
   */
  exports.prototype['useAs'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "visa"
     * @const
     */
    "visa": "visa",
    /**
     * value: "mastercard"
     * @const
     */
    "mastercard": "mastercard",
    /**
     * value: "american express"
     * @const
     */
    "american express": "american express",
    /**
     * value: "discover"
     * @const
     */
    "discover": "discover",
    /**
     * value: "diners club"
     * @const
     */
    "diners club": "diners club",
    /**
     * value: "carte blanche"
     * @const
     */
    "carte blanche": "carte blanche",
    /**
     * value: "jcb"
     * @const
     */
    "jcb": "jcb",
    /**
     * value: "optima"
     * @const
     */
    "optima": "optima",
    /**
     * value: "twinpay credit"
     * @const
     */
    "twinpay credit": "twinpay credit",
    /**
     * value: "twinpay debit"
     * @const
     */
    "twinpay debit": "twinpay debit",
    /**
     * value: "walmart"
     * @const
     */
    "walmart": "walmart",
    /**
     * value: "enroute"
     * @const
     */
    "enroute": "enroute",
    /**
     * value: "lowes consumer"
     * @const
     */
    "lowes consumer": "lowes consumer",
    /**
     * value: "home depot consumer"
     * @const
     */
    "home depot consumer": "home depot consumer",
    /**
     * value: "mbna"
     * @const
     */
    "mbna": "mbna",
    /**
     * value: "dicks sportswear"
     * @const
     */
    "dicks sportswear": "dicks sportswear",
    /**
     * value: "casual corner"
     * @const
     */
    "casual corner": "casual corner",
    /**
     * value: "sears"
     * @const
     */
    "sears": "sears",
    /**
     * value: "jal"
     * @const
     */
    "jal": "jal",
    /**
     * value: "disney"
     * @const
     */
    "disney": "disney",
    /**
     * value: "maestro uk domestic"
     * @const
     */
    "maestro uk domestic": "maestro uk domestic",
    /**
     * value: "sams club consumer"
     * @const
     */
    "sams club consumer": "sams club consumer",
    /**
     * value: "sams club business"
     * @const
     */
    "sams club business": "sams club business",
    /**
     * value: "nicos"
     * @const
     */
    "nicos": "nicos",
    /**
     * value: "bill me later"
     * @const
     */
    "bill me later": "bill me later",
    /**
     * value: "bebe"
     * @const
     */
    "bebe": "bebe",
    /**
     * value: "restoration hardware"
     * @const
     */
    "restoration hardware": "restoration hardware",
    /**
     * value: "delta online"
     * @const
     */
    "delta online": "delta online",
    /**
     * value: "solo"
     * @const
     */
    "solo": "solo",
    /**
     * value: "visa electron"
     * @const
     */
    "visa electron": "visa electron",
    /**
     * value: "dankort"
     * @const
     */
    "dankort": "dankort",
    /**
     * value: "laser"
     * @const
     */
    "laser": "laser",
    /**
     * value: "carte bleue"
     * @const
     */
    "carte bleue": "carte bleue",
    /**
     * value: "carta si"
     * @const
     */
    "carta si": "carta si",
    /**
     * value: "pinless debit"
     * @const
     */
    "pinless debit": "pinless debit",
    /**
     * value: "encoded account"
     * @const
     */
    "encoded account": "encoded account",
    /**
     * value: "uatp"
     * @const
     */
    "uatp": "uatp",
    /**
     * value: "household"
     * @const
     */
    "household": "household",
    /**
     * value: "maestro international"
     * @const
     */
    "maestro international": "maestro international",
    /**
     * value: "ge money uk"
     * @const
     */
    "ge money uk": "ge money uk",
    /**
     * value: "korean cards"
     * @const
     */
    "korean cards": "korean cards",
    /**
     * value: "style"
     * @const
     */
    "style": "style",
    /**
     * value: "jcrew"
     * @const
     */
    "jcrew": "jcrew",
    /**
     * value: "payease china processing ewallet"
     * @const
     */
    "payease china processing ewallet": "payease china processing ewallet",
    /**
     * value: "payease china processing bank transfer"
     * @const
     */
    "payease china processing bank transfer": "payease china processing bank transfer",
    /**
     * value: "meijer private label"
     * @const
     */
    "meijer private label": "meijer private label",
    /**
     * value: "hipercard"
     * @const
     */
    "hipercard": "hipercard",
    /**
     * value: "aura"
     * @const
     */
    "aura": "aura",
    /**
     * value: "redecard"
     * @const
     */
    "redecard": "redecard",
    /**
     * value: "orico"
     * @const
     */
    "orico": "orico",
    /**
     * value: "elo"
     * @const
     */
    "elo": "elo",
    /**
     * value: "capital one private label"
     * @const
     */
    "capital one private label": "capital one private label",
    /**
     * value: "synchrony private label"
     * @const
     */
    "synchrony private label": "synchrony private label",
    /**
     * value: "china union pay"
     * @const
     */
    "china union pay": "china union pay"  };


  return exports;
}));



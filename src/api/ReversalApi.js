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
    define(['ApiClient', 'model/AuthReversalRequest', 'model/InlineResponse2003', 'model/InlineResponse2011', 'model/InlineResponse4001', 'model/InlineResponse502'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AuthReversalRequest'), require('../model/InlineResponse2003'), require('../model/InlineResponse2011'), require('../model/InlineResponse4001'), require('../model/InlineResponse502'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.ReversalApi = factory(root.CyberSource.ApiClient, root.CyberSource.AuthReversalRequest, root.CyberSource.InlineResponse2003, root.CyberSource.InlineResponse2011, root.CyberSource.InlineResponse4001, root.CyberSource.InlineResponse502);
  }
}(this, function(ApiClient, AuthReversalRequest, InlineResponse2003, InlineResponse2011, InlineResponse4001, InlineResponse502) {
  'use strict';

  /**
   * Reversal service.
   * @module api/ReversalApi
   * @version 0.0.1
   */

  /**
   * Constructs a new ReversalApi. 
   * @alias module:api/ReversalApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the authReversal operation.
     * @callback module:api/ReversalApi~authReversalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2011} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Process an Authorization Reversal
     * Include the payment ID in the POST request to reverse the payment amount.
     * @param {String} id The payment ID returned from a previous payment request.
     * @param {module:model/AuthReversalRequest} authReversalRequest 
     * @param {module:api/ReversalApi~authReversalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2011}
     */
    this.authReversal = function(id, authReversalRequest, callback) {
      var postBody = authReversalRequest;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling authReversal");
      }

      // verify the required parameter 'authReversalRequest' is set
      if (authReversalRequest === undefined || authReversalRequest === null) {
        throw new Error("Missing the required parameter 'authReversalRequest' when calling authReversal");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = InlineResponse2011;

      return this.apiClient.callApi(
        '/pts/v2/payments/{id}/reversals', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAuthReversal operation.
     * @callback module:api/ReversalApi~getAuthReversalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2003} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an Authorization Reversal
     * Include the authorization reversal ID in the GET request to retrieve the authorization reversal details. 
     * @param {String} id The authorization reversal ID returned from a previous authorization reversal request.
     * @param {module:api/ReversalApi~getAuthReversalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2003}
     */
    this.getAuthReversal = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getAuthReversal");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = InlineResponse2003;

      return this.apiClient.callApi(
        '/pts/v2/reversals/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

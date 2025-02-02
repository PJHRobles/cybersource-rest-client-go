// Code generated by go-swagger; DO NOT EDIT.

package key_generation

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"
)

// New creates a new key generation API client.
func New(transport runtime.ClientTransport, formats strfmt.Registry) ClientService {
	return &Client{transport: transport, formats: formats}
}

/*
Client for key generation API
*/
type Client struct {
	transport runtime.ClientTransport
	formats   strfmt.Registry
}

// ClientOption is the option for Client methods
type ClientOption func(*runtime.ClientOperation)

// ClientService is the interface for Client methods
type ClientService interface {
	GeneratePublicKey(params *GeneratePublicKeyParams, opts ...ClientOption) (*GeneratePublicKeyOK, error)

	SetTransport(transport runtime.ClientTransport)
}

/*
GeneratePublicKey generates key

Generate a one-time use public key and key ID to encrypt the card number in the follow-on Tokenize Card request. The key used to encrypt the card number on the cardholder’s device or browser is valid for 15 minutes and must be used to verify the signature in the response message. CyberSource recommends creating a new key for each order. Generating a key is an authenticated request initiated from your servers, prior to requesting to tokenize the card data from your customer’s device or browser.
*/
func (a *Client) GeneratePublicKey(params *GeneratePublicKeyParams, opts ...ClientOption) (*GeneratePublicKeyOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewGeneratePublicKeyParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "generatePublicKey",
		Method:             "POST",
		PathPattern:        "/flex/v1/keys",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json;charset=utf-8"},
		Schemes:            []string{"https"},
		Params:             params,
		Reader:             &GeneratePublicKeyReader{formats: a.formats},
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, err
	}
	success, ok := result.(*GeneratePublicKeyOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*GeneratePublicKeyDefault)
	return nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

// SetTransport changes the transport on the client
func (a *Client) SetTransport(transport runtime.ClientTransport) {
	a.transport = transport
}

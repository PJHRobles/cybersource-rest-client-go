// Code generated by go-swagger; DO NOT EDIT.

package transaction_details

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"
)

// New creates a new transaction details API client.
func New(transport runtime.ClientTransport, formats strfmt.Registry) ClientService {
	return &Client{transport: transport, formats: formats}
}

/*
Client for transaction details API
*/
type Client struct {
	transport runtime.ClientTransport
	formats   strfmt.Registry
}

// ClientOption is the option for Client methods
type ClientOption func(*runtime.ClientOperation)

// ClientService is the interface for Client methods
type ClientService interface {
	GetTransaction(params *GetTransactionParams, opts ...ClientOption) (*GetTransactionOK, error)

	SetTransport(transport runtime.ClientTransport)
}

/*
GetTransaction retrieves a transaction

Include the Request ID in the GET request to retrieve the transaction details.
*/
func (a *Client) GetTransaction(params *GetTransactionParams, opts ...ClientOption) (*GetTransactionOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewGetTransactionParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "getTransaction",
		Method:             "GET",
		PathPattern:        "/tss/v2/transactions/{id}",
		ProducesMediaTypes: []string{"application/json;charset=utf-8"},
		ConsumesMediaTypes: []string{"application/json;charset=utf-8"},
		Schemes:            []string{"https"},
		Params:             params,
		Reader:             &GetTransactionReader{formats: a.formats},
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
	success, ok := result.(*GetTransactionOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	// safeguard: normally, absent a default response, unknown success responses return an error above: so this is a codegen issue
	msg := fmt.Sprintf("unexpected success response for getTransaction: API contract not enforced by server. Client expected to get an error, but got: %T", result)
	panic(msg)
}

// SetTransport changes the transport on the client
func (a *Client) SetTransport(transport runtime.ClientTransport) {
	a.transport = transport
}

// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"

	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// JSONWebKey The public key in JSON Web Key (JWK) format. This format is useful for client side encryption in JavaScript based implementations.
//
// swagger:model JsonWebKey
type JSONWebKey struct {

	// JWK RSA Exponent
	E string `json:"e,omitempty"`

	// The key ID in JWK format.
	Kid string `json:"kid,omitempty"`

	// Algorithm used to encrypt the public key.
	Kty string `json:"kty,omitempty"`

	// JWK RSA Modulus
	N string `json:"n,omitempty"`

	// Defines whether to use the key for encryption (enc) or verifying a signature (sig). Always returned as enc.
	Use string `json:"use,omitempty"`
}

// Validate validates this Json web key
func (m *JSONWebKey) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this Json web key based on context it is used
func (m *JSONWebKey) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *JSONWebKey) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *JSONWebKey) UnmarshalBinary(b []byte) error {
	var res JSONWebKey
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

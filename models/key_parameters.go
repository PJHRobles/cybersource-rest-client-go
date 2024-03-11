// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
	"github.com/go-openapi/validate"
)

// KeyParameters key parameters
//
// swagger:model KeyParameters
type KeyParameters struct {

	// How the card number should be encrypted in the subsequent Tokenize Card request. Possible values are RsaOaep256 or None (if using this value the card number must be in plain text when included in the Tokenize Card request). The Tokenize Card request uses a secure connection (TLS 1.2+) regardless of what encryption type is specified.
	// Required: true
	EncryptionType *string `json:"encryptionType"`
}

// Validate validates this key parameters
func (m *KeyParameters) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateEncryptionType(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *KeyParameters) validateEncryptionType(formats strfmt.Registry) error {

	if err := validate.Required("encryptionType", "body", m.EncryptionType); err != nil {
		return err
	}

	return nil
}

// ContextValidate validates this key parameters based on context it is used
func (m *KeyParameters) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *KeyParameters) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *KeyParameters) UnmarshalBinary(b []byte) error {
	var res KeyParameters
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

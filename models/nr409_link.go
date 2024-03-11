// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"

	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// Nr409Link 409 link
//
// swagger:model 409Link
type Nr409Link struct {

	// href
	// Example: https://api.cybersource.com/tms/v1/instrumentidentifiers/1234567890123456789/paymentinstruments
	Href string `json:"href,omitempty"`
}

// Validate validates this 409 link
func (m *Nr409Link) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this 409 link based on context it is used
func (m *Nr409Link) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *Nr409Link) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *Nr409Link) UnmarshalBinary(b []byte) error {
	var res Nr409Link
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

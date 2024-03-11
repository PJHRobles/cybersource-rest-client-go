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

// MerchantInitiatedTransaction merchant initiated transaction
//
// swagger:model MerchantInitiatedTransaction
type MerchantInitiatedTransaction struct {

	// Previous Consumer Initiated Transaction Id.
	// Example: 123456789012345
	// Max Length: 15
	PreviousTransactionID string `json:"previousTransactionId,omitempty"`
}

// Validate validates this merchant initiated transaction
func (m *MerchantInitiatedTransaction) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validatePreviousTransactionID(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *MerchantInitiatedTransaction) validatePreviousTransactionID(formats strfmt.Registry) error {
	if swag.IsZero(m.PreviousTransactionID) { // not required
		return nil
	}

	if err := validate.MaxLength("previousTransactionId", "body", m.PreviousTransactionID, 15); err != nil {
		return err
	}

	return nil
}

// ContextValidate validates this merchant initiated transaction based on context it is used
func (m *MerchantInitiatedTransaction) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *MerchantInitiatedTransaction) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *MerchantInitiatedTransaction) UnmarshalBinary(b []byte) error {
	var res MerchantInitiatedTransaction
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

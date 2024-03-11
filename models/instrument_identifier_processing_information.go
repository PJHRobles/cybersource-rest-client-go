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

// InstrumentIdentifierProcessingInformation instrument identifier processing information
//
// swagger:model InstrumentIdentifierProcessingInformation
type InstrumentIdentifierProcessingInformation struct {

	// authorization options
	AuthorizationOptions *InstrumentIdentifierProcessingInformationAuthorizationOptions `json:"authorizationOptions,omitempty"`
}

// Validate validates this instrument identifier processing information
func (m *InstrumentIdentifierProcessingInformation) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateAuthorizationOptions(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *InstrumentIdentifierProcessingInformation) validateAuthorizationOptions(formats strfmt.Registry) error {
	if swag.IsZero(m.AuthorizationOptions) { // not required
		return nil
	}

	if m.AuthorizationOptions != nil {
		if err := m.AuthorizationOptions.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("authorizationOptions")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("authorizationOptions")
			}
			return err
		}
	}

	return nil
}

// ContextValidate validate this instrument identifier processing information based on the context it is used
func (m *InstrumentIdentifierProcessingInformation) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateAuthorizationOptions(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *InstrumentIdentifierProcessingInformation) contextValidateAuthorizationOptions(ctx context.Context, formats strfmt.Registry) error {

	if m.AuthorizationOptions != nil {

		if swag.IsZero(m.AuthorizationOptions) { // not required
			return nil
		}

		if err := m.AuthorizationOptions.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("authorizationOptions")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("authorizationOptions")
			}
			return err
		}
	}

	return nil
}

// MarshalBinary interface implementation
func (m *InstrumentIdentifierProcessingInformation) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *InstrumentIdentifierProcessingInformation) UnmarshalBinary(b []byte) error {
	var res InstrumentIdentifierProcessingInformation
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

// InstrumentIdentifierProcessingInformationAuthorizationOptions instrument identifier processing information authorization options
//
// swagger:model InstrumentIdentifierProcessingInformationAuthorizationOptions
type InstrumentIdentifierProcessingInformationAuthorizationOptions struct {

	// initiator
	Initiator *InstrumentIdentifierProcessingInformationAuthorizationOptionsInitiator `json:"initiator,omitempty"`
}

// Validate validates this instrument identifier processing information authorization options
func (m *InstrumentIdentifierProcessingInformationAuthorizationOptions) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateInitiator(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *InstrumentIdentifierProcessingInformationAuthorizationOptions) validateInitiator(formats strfmt.Registry) error {
	if swag.IsZero(m.Initiator) { // not required
		return nil
	}

	if m.Initiator != nil {
		if err := m.Initiator.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("authorizationOptions" + "." + "initiator")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("authorizationOptions" + "." + "initiator")
			}
			return err
		}
	}

	return nil
}

// ContextValidate validate this instrument identifier processing information authorization options based on the context it is used
func (m *InstrumentIdentifierProcessingInformationAuthorizationOptions) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateInitiator(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *InstrumentIdentifierProcessingInformationAuthorizationOptions) contextValidateInitiator(ctx context.Context, formats strfmt.Registry) error {

	if m.Initiator != nil {

		if swag.IsZero(m.Initiator) { // not required
			return nil
		}

		if err := m.Initiator.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("authorizationOptions" + "." + "initiator")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("authorizationOptions" + "." + "initiator")
			}
			return err
		}
	}

	return nil
}

// MarshalBinary interface implementation
func (m *InstrumentIdentifierProcessingInformationAuthorizationOptions) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *InstrumentIdentifierProcessingInformationAuthorizationOptions) UnmarshalBinary(b []byte) error {
	var res InstrumentIdentifierProcessingInformationAuthorizationOptions
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

// InstrumentIdentifierProcessingInformationAuthorizationOptionsInitiator instrument identifier processing information authorization options initiator
//
// swagger:model InstrumentIdentifierProcessingInformationAuthorizationOptionsInitiator
type InstrumentIdentifierProcessingInformationAuthorizationOptionsInitiator struct {

	// merchant initiated transaction
	MerchantInitiatedTransaction *InstrumentIdentifierProcessingInformationAuthorizationOptionsInitiatorMerchantInitiatedTransaction `json:"merchantInitiatedTransaction,omitempty"`
}

// Validate validates this instrument identifier processing information authorization options initiator
func (m *InstrumentIdentifierProcessingInformationAuthorizationOptionsInitiator) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateMerchantInitiatedTransaction(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *InstrumentIdentifierProcessingInformationAuthorizationOptionsInitiator) validateMerchantInitiatedTransaction(formats strfmt.Registry) error {
	if swag.IsZero(m.MerchantInitiatedTransaction) { // not required
		return nil
	}

	if m.MerchantInitiatedTransaction != nil {
		if err := m.MerchantInitiatedTransaction.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("authorizationOptions" + "." + "initiator" + "." + "merchantInitiatedTransaction")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("authorizationOptions" + "." + "initiator" + "." + "merchantInitiatedTransaction")
			}
			return err
		}
	}

	return nil
}

// ContextValidate validate this instrument identifier processing information authorization options initiator based on the context it is used
func (m *InstrumentIdentifierProcessingInformationAuthorizationOptionsInitiator) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateMerchantInitiatedTransaction(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *InstrumentIdentifierProcessingInformationAuthorizationOptionsInitiator) contextValidateMerchantInitiatedTransaction(ctx context.Context, formats strfmt.Registry) error {

	if m.MerchantInitiatedTransaction != nil {

		if swag.IsZero(m.MerchantInitiatedTransaction) { // not required
			return nil
		}

		if err := m.MerchantInitiatedTransaction.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("authorizationOptions" + "." + "initiator" + "." + "merchantInitiatedTransaction")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("authorizationOptions" + "." + "initiator" + "." + "merchantInitiatedTransaction")
			}
			return err
		}
	}

	return nil
}

// MarshalBinary interface implementation
func (m *InstrumentIdentifierProcessingInformationAuthorizationOptionsInitiator) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *InstrumentIdentifierProcessingInformationAuthorizationOptionsInitiator) UnmarshalBinary(b []byte) error {
	var res InstrumentIdentifierProcessingInformationAuthorizationOptionsInitiator
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

// InstrumentIdentifierProcessingInformationAuthorizationOptionsInitiatorMerchantInitiatedTransaction instrument identifier processing information authorization options initiator merchant initiated transaction
//
// swagger:model InstrumentIdentifierProcessingInformationAuthorizationOptionsInitiatorMerchantInitiatedTransaction
type InstrumentIdentifierProcessingInformationAuthorizationOptionsInitiatorMerchantInitiatedTransaction struct {

	// Previous Consumer Initiated Transaction Id.
	// Example: 123456789012345
	// Max Length: 15
	PreviousTransactionID string `json:"previousTransactionId,omitempty"`
}

// Validate validates this instrument identifier processing information authorization options initiator merchant initiated transaction
func (m *InstrumentIdentifierProcessingInformationAuthorizationOptionsInitiatorMerchantInitiatedTransaction) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validatePreviousTransactionID(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *InstrumentIdentifierProcessingInformationAuthorizationOptionsInitiatorMerchantInitiatedTransaction) validatePreviousTransactionID(formats strfmt.Registry) error {
	if swag.IsZero(m.PreviousTransactionID) { // not required
		return nil
	}

	if err := validate.MaxLength("authorizationOptions"+"."+"initiator"+"."+"merchantInitiatedTransaction"+"."+"previousTransactionId", "body", m.PreviousTransactionID, 15); err != nil {
		return err
	}

	return nil
}

// ContextValidate validates this instrument identifier processing information authorization options initiator merchant initiated transaction based on context it is used
func (m *InstrumentIdentifierProcessingInformationAuthorizationOptionsInitiatorMerchantInitiatedTransaction) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *InstrumentIdentifierProcessingInformationAuthorizationOptionsInitiatorMerchantInitiatedTransaction) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *InstrumentIdentifierProcessingInformationAuthorizationOptionsInitiatorMerchantInitiatedTransaction) UnmarshalBinary(b []byte) error {
	var res InstrumentIdentifierProcessingInformationAuthorizationOptionsInitiatorMerchantInitiatedTransaction
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

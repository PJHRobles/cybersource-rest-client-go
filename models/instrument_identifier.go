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

// InstrumentIdentifier instrument identifier
//
// swagger:model InstrumentIdentifier
type InstrumentIdentifier struct {

	// links
	Links *InstrumentIdentifierLinks `json:"_links,omitempty"`

	// bank account
	BankAccount *InstrumentIdentifierBankAccount `json:"bankAccount,omitempty"`

	// card
	Card *InstrumentIdentifierCard `json:"card,omitempty"`

	// Unique identification number assigned by CyberSource to the submitted request.
	// Example: 1234567890123456800
	// Read Only: true
	ID string `json:"id,omitempty"`

	// metadata
	Metadata *InstrumentIdentifierMetadata `json:"metadata,omitempty"`

	// 'Describes type of token.'
	//
	// Valid values:
	// - instrumentIdentifier
	//
	// Example: instrumentIdentifier
	// Read Only: true
	Object string `json:"object,omitempty"`

	// processing information
	ProcessingInformation *InstrumentIdentifierProcessingInformation `json:"processingInformation,omitempty"`

	// 'Current state of the token.'
	//
	// Valid values:
	// - ACTIVE
	// - CLOSED
	//
	// Example: ACTIVE
	// Read Only: true
	State string `json:"state,omitempty"`
}

// Validate validates this instrument identifier
func (m *InstrumentIdentifier) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateLinks(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateBankAccount(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateCard(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateMetadata(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateProcessingInformation(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *InstrumentIdentifier) validateLinks(formats strfmt.Registry) error {
	if swag.IsZero(m.Links) { // not required
		return nil
	}

	if m.Links != nil {
		if err := m.Links.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("_links")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("_links")
			}
			return err
		}
	}

	return nil
}

func (m *InstrumentIdentifier) validateBankAccount(formats strfmt.Registry) error {
	if swag.IsZero(m.BankAccount) { // not required
		return nil
	}

	if m.BankAccount != nil {
		if err := m.BankAccount.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("bankAccount")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("bankAccount")
			}
			return err
		}
	}

	return nil
}

func (m *InstrumentIdentifier) validateCard(formats strfmt.Registry) error {
	if swag.IsZero(m.Card) { // not required
		return nil
	}

	if m.Card != nil {
		if err := m.Card.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("card")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("card")
			}
			return err
		}
	}

	return nil
}

func (m *InstrumentIdentifier) validateMetadata(formats strfmt.Registry) error {
	if swag.IsZero(m.Metadata) { // not required
		return nil
	}

	if m.Metadata != nil {
		if err := m.Metadata.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("metadata")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("metadata")
			}
			return err
		}
	}

	return nil
}

func (m *InstrumentIdentifier) validateProcessingInformation(formats strfmt.Registry) error {
	if swag.IsZero(m.ProcessingInformation) { // not required
		return nil
	}

	if m.ProcessingInformation != nil {
		if err := m.ProcessingInformation.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("processingInformation")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("processingInformation")
			}
			return err
		}
	}

	return nil
}

// ContextValidate validate this instrument identifier based on the context it is used
func (m *InstrumentIdentifier) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateLinks(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateBankAccount(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateCard(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateID(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateMetadata(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateObject(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateProcessingInformation(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateState(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *InstrumentIdentifier) contextValidateLinks(ctx context.Context, formats strfmt.Registry) error {

	if m.Links != nil {

		if swag.IsZero(m.Links) { // not required
			return nil
		}

		if err := m.Links.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("_links")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("_links")
			}
			return err
		}
	}

	return nil
}

func (m *InstrumentIdentifier) contextValidateBankAccount(ctx context.Context, formats strfmt.Registry) error {

	if m.BankAccount != nil {

		if swag.IsZero(m.BankAccount) { // not required
			return nil
		}

		if err := m.BankAccount.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("bankAccount")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("bankAccount")
			}
			return err
		}
	}

	return nil
}

func (m *InstrumentIdentifier) contextValidateCard(ctx context.Context, formats strfmt.Registry) error {

	if m.Card != nil {

		if swag.IsZero(m.Card) { // not required
			return nil
		}

		if err := m.Card.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("card")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("card")
			}
			return err
		}
	}

	return nil
}

func (m *InstrumentIdentifier) contextValidateID(ctx context.Context, formats strfmt.Registry) error {

	if err := validate.ReadOnly(ctx, "id", "body", string(m.ID)); err != nil {
		return err
	}

	return nil
}

func (m *InstrumentIdentifier) contextValidateMetadata(ctx context.Context, formats strfmt.Registry) error {

	if m.Metadata != nil {

		if swag.IsZero(m.Metadata) { // not required
			return nil
		}

		if err := m.Metadata.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("metadata")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("metadata")
			}
			return err
		}
	}

	return nil
}

func (m *InstrumentIdentifier) contextValidateObject(ctx context.Context, formats strfmt.Registry) error {

	if err := validate.ReadOnly(ctx, "object", "body", string(m.Object)); err != nil {
		return err
	}

	return nil
}

func (m *InstrumentIdentifier) contextValidateProcessingInformation(ctx context.Context, formats strfmt.Registry) error {

	if m.ProcessingInformation != nil {

		if swag.IsZero(m.ProcessingInformation) { // not required
			return nil
		}

		if err := m.ProcessingInformation.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("processingInformation")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("processingInformation")
			}
			return err
		}
	}

	return nil
}

func (m *InstrumentIdentifier) contextValidateState(ctx context.Context, formats strfmt.Registry) error {

	if err := validate.ReadOnly(ctx, "state", "body", string(m.State)); err != nil {
		return err
	}

	return nil
}

// MarshalBinary interface implementation
func (m *InstrumentIdentifier) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *InstrumentIdentifier) UnmarshalBinary(b []byte) error {
	var res InstrumentIdentifier
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

// InstrumentIdentifierBankAccount instrument identifier bank account
//
// swagger:model InstrumentIdentifierBankAccount
type InstrumentIdentifierBankAccount struct {

	// Checking account number.
	// Example: 1234567890123456800
	// Max Length: 19
	// Min Length: 1
	Number string `json:"number,omitempty"`

	// Routing number.
	// Example: 123456789
	// Max Length: 9
	// Min Length: 1
	RoutingNumber string `json:"routingNumber,omitempty"`
}

// Validate validates this instrument identifier bank account
func (m *InstrumentIdentifierBankAccount) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateNumber(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateRoutingNumber(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *InstrumentIdentifierBankAccount) validateNumber(formats strfmt.Registry) error {
	if swag.IsZero(m.Number) { // not required
		return nil
	}

	if err := validate.MinLength("bankAccount"+"."+"number", "body", m.Number, 1); err != nil {
		return err
	}

	if err := validate.MaxLength("bankAccount"+"."+"number", "body", m.Number, 19); err != nil {
		return err
	}

	return nil
}

func (m *InstrumentIdentifierBankAccount) validateRoutingNumber(formats strfmt.Registry) error {
	if swag.IsZero(m.RoutingNumber) { // not required
		return nil
	}

	if err := validate.MinLength("bankAccount"+"."+"routingNumber", "body", m.RoutingNumber, 1); err != nil {
		return err
	}

	if err := validate.MaxLength("bankAccount"+"."+"routingNumber", "body", m.RoutingNumber, 9); err != nil {
		return err
	}

	return nil
}

// ContextValidate validates this instrument identifier bank account based on context it is used
func (m *InstrumentIdentifierBankAccount) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *InstrumentIdentifierBankAccount) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *InstrumentIdentifierBankAccount) UnmarshalBinary(b []byte) error {
	var res InstrumentIdentifierBankAccount
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

// InstrumentIdentifierCard instrument identifier card
//
// swagger:model InstrumentIdentifierCard
type InstrumentIdentifierCard struct {

	// Customer’s credit card number.
	// Example: 1234567890987654
	// Max Length: 19
	// Min Length: 12
	Number string `json:"number,omitempty"`
}

// Validate validates this instrument identifier card
func (m *InstrumentIdentifierCard) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateNumber(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *InstrumentIdentifierCard) validateNumber(formats strfmt.Registry) error {
	if swag.IsZero(m.Number) { // not required
		return nil
	}

	if err := validate.MinLength("card"+"."+"number", "body", m.Number, 12); err != nil {
		return err
	}

	if err := validate.MaxLength("card"+"."+"number", "body", m.Number, 19); err != nil {
		return err
	}

	return nil
}

// ContextValidate validates this instrument identifier card based on context it is used
func (m *InstrumentIdentifierCard) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *InstrumentIdentifierCard) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *InstrumentIdentifierCard) UnmarshalBinary(b []byte) error {
	var res InstrumentIdentifierCard
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

// InstrumentIdentifierLinks instrument identifier links
//
// swagger:model InstrumentIdentifierLinks
type InstrumentIdentifierLinks struct {

	// ancestor
	Ancestor *InstrumentIdentifierLinksAncestor `json:"ancestor,omitempty"`

	// self
	Self *InstrumentIdentifierLinksSelf `json:"self,omitempty"`

	// successor
	Successor *InstrumentIdentifierLinksSuccessor `json:"successor,omitempty"`
}

// Validate validates this instrument identifier links
func (m *InstrumentIdentifierLinks) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateAncestor(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateSelf(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateSuccessor(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *InstrumentIdentifierLinks) validateAncestor(formats strfmt.Registry) error {
	if swag.IsZero(m.Ancestor) { // not required
		return nil
	}

	if m.Ancestor != nil {
		if err := m.Ancestor.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("_links" + "." + "ancestor")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("_links" + "." + "ancestor")
			}
			return err
		}
	}

	return nil
}

func (m *InstrumentIdentifierLinks) validateSelf(formats strfmt.Registry) error {
	if swag.IsZero(m.Self) { // not required
		return nil
	}

	if m.Self != nil {
		if err := m.Self.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("_links" + "." + "self")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("_links" + "." + "self")
			}
			return err
		}
	}

	return nil
}

func (m *InstrumentIdentifierLinks) validateSuccessor(formats strfmt.Registry) error {
	if swag.IsZero(m.Successor) { // not required
		return nil
	}

	if m.Successor != nil {
		if err := m.Successor.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("_links" + "." + "successor")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("_links" + "." + "successor")
			}
			return err
		}
	}

	return nil
}

// ContextValidate validate this instrument identifier links based on the context it is used
func (m *InstrumentIdentifierLinks) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateAncestor(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateSelf(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateSuccessor(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *InstrumentIdentifierLinks) contextValidateAncestor(ctx context.Context, formats strfmt.Registry) error {

	if m.Ancestor != nil {

		if swag.IsZero(m.Ancestor) { // not required
			return nil
		}

		if err := m.Ancestor.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("_links" + "." + "ancestor")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("_links" + "." + "ancestor")
			}
			return err
		}
	}

	return nil
}

func (m *InstrumentIdentifierLinks) contextValidateSelf(ctx context.Context, formats strfmt.Registry) error {

	if m.Self != nil {

		if swag.IsZero(m.Self) { // not required
			return nil
		}

		if err := m.Self.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("_links" + "." + "self")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("_links" + "." + "self")
			}
			return err
		}
	}

	return nil
}

func (m *InstrumentIdentifierLinks) contextValidateSuccessor(ctx context.Context, formats strfmt.Registry) error {

	if m.Successor != nil {

		if swag.IsZero(m.Successor) { // not required
			return nil
		}

		if err := m.Successor.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("_links" + "." + "successor")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("_links" + "." + "successor")
			}
			return err
		}
	}

	return nil
}

// MarshalBinary interface implementation
func (m *InstrumentIdentifierLinks) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *InstrumentIdentifierLinks) UnmarshalBinary(b []byte) error {
	var res InstrumentIdentifierLinks
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

// InstrumentIdentifierLinksAncestor instrument identifier links ancestor
//
// swagger:model InstrumentIdentifierLinksAncestor
type InstrumentIdentifierLinksAncestor struct {

	// href
	// Example: https://api.cybersource.com/tms/v1/instrumentidentifiers/1234567890123456789
	Href string `json:"href,omitempty"`
}

// Validate validates this instrument identifier links ancestor
func (m *InstrumentIdentifierLinksAncestor) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this instrument identifier links ancestor based on context it is used
func (m *InstrumentIdentifierLinksAncestor) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *InstrumentIdentifierLinksAncestor) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *InstrumentIdentifierLinksAncestor) UnmarshalBinary(b []byte) error {
	var res InstrumentIdentifierLinksAncestor
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

// InstrumentIdentifierLinksSelf instrument identifier links self
//
// swagger:model InstrumentIdentifierLinksSelf
type InstrumentIdentifierLinksSelf struct {

	// href
	// Example: https://api.cybersource.com/tms/v1/instrumentidentifiers/1234567890123456789
	Href string `json:"href,omitempty"`
}

// Validate validates this instrument identifier links self
func (m *InstrumentIdentifierLinksSelf) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this instrument identifier links self based on context it is used
func (m *InstrumentIdentifierLinksSelf) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *InstrumentIdentifierLinksSelf) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *InstrumentIdentifierLinksSelf) UnmarshalBinary(b []byte) error {
	var res InstrumentIdentifierLinksSelf
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

// InstrumentIdentifierLinksSuccessor instrument identifier links successor
//
// swagger:model InstrumentIdentifierLinksSuccessor
type InstrumentIdentifierLinksSuccessor struct {

	// href
	// Example: https://api.cybersource.com/tms/v1/instrumentidentifiers/1234567890123456789
	Href string `json:"href,omitempty"`
}

// Validate validates this instrument identifier links successor
func (m *InstrumentIdentifierLinksSuccessor) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this instrument identifier links successor based on context it is used
func (m *InstrumentIdentifierLinksSuccessor) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *InstrumentIdentifierLinksSuccessor) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *InstrumentIdentifierLinksSuccessor) UnmarshalBinary(b []byte) error {
	var res InstrumentIdentifierLinksSuccessor
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

// InstrumentIdentifierMetadata instrument identifier metadata
//
// swagger:model InstrumentIdentifierMetadata
type InstrumentIdentifierMetadata struct {

	// The creator of the token.
	// Example: merchantName
	Creator string `json:"creator,omitempty"`
}

// Validate validates this instrument identifier metadata
func (m *InstrumentIdentifierMetadata) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validate this instrument identifier metadata based on the context it is used
func (m *InstrumentIdentifierMetadata) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

// MarshalBinary interface implementation
func (m *InstrumentIdentifierMetadata) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *InstrumentIdentifierMetadata) UnmarshalBinary(b []byte) error {
	var res InstrumentIdentifierMetadata
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

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
				return ve.ValidateName("processingInformation" + "." + "authorizationOptions")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("processingInformation" + "." + "authorizationOptions")
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
				return ve.ValidateName("processingInformation" + "." + "authorizationOptions")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("processingInformation" + "." + "authorizationOptions")
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
				return ve.ValidateName("processingInformation" + "." + "authorizationOptions" + "." + "initiator")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("processingInformation" + "." + "authorizationOptions" + "." + "initiator")
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
				return ve.ValidateName("processingInformation" + "." + "authorizationOptions" + "." + "initiator")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("processingInformation" + "." + "authorizationOptions" + "." + "initiator")
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
				return ve.ValidateName("processingInformation" + "." + "authorizationOptions" + "." + "initiator" + "." + "merchantInitiatedTransaction")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("processingInformation" + "." + "authorizationOptions" + "." + "initiator" + "." + "merchantInitiatedTransaction")
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
				return ve.ValidateName("processingInformation" + "." + "authorizationOptions" + "." + "initiator" + "." + "merchantInitiatedTransaction")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("processingInformation" + "." + "authorizationOptions" + "." + "initiator" + "." + "merchantInitiatedTransaction")
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

	if err := validate.MaxLength("processingInformation"+"."+"authorizationOptions"+"."+"initiator"+"."+"merchantInitiatedTransaction"+"."+"previousTransactionId", "body", m.PreviousTransactionID, 15); err != nil {
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

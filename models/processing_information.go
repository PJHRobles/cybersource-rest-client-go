// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// ProcessingInformation processing information
//
// swagger:model ProcessingInformation
type ProcessingInformation struct {

	// bank transfer options
	BankTransferOptions *ProcessingInformationBankTransferOptions `json:"bankTransferOptions,omitempty"`

	// Indicates that the payments for this customer profile are for the Bill Payment program. Possible values:
	//   * false: Not a Visa Bill Payment.
	//   * true: Visa Bill Payment.
	//
	// Example: true
	BillPaymentProgramEnabled *bool `json:"billPaymentProgramEnabled,omitempty"`
}

// Validate validates this processing information
func (m *ProcessingInformation) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateBankTransferOptions(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *ProcessingInformation) validateBankTransferOptions(formats strfmt.Registry) error {
	if swag.IsZero(m.BankTransferOptions) { // not required
		return nil
	}

	if m.BankTransferOptions != nil {
		if err := m.BankTransferOptions.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("bankTransferOptions")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("bankTransferOptions")
			}
			return err
		}
	}

	return nil
}

// ContextValidate validate this processing information based on the context it is used
func (m *ProcessingInformation) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateBankTransferOptions(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *ProcessingInformation) contextValidateBankTransferOptions(ctx context.Context, formats strfmt.Registry) error {

	if m.BankTransferOptions != nil {

		if swag.IsZero(m.BankTransferOptions) { // not required
			return nil
		}

		if err := m.BankTransferOptions.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("bankTransferOptions")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("bankTransferOptions")
			}
			return err
		}
	}

	return nil
}

// MarshalBinary interface implementation
func (m *ProcessingInformation) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *ProcessingInformation) UnmarshalBinary(b []byte) error {
	var res ProcessingInformation
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

// ProcessingInformationBankTransferOptions processing information bank transfer options
//
// swagger:model ProcessingInformationBankTransferOptions
type ProcessingInformationBankTransferOptions struct {

	// **Important** This field is required if your processor is TeleCheck.
	//
	// Code that specifies the authorization method for the transaction. Possible values:
	//
	// - **CCD**: corporate cash disbursement. Charge or credit against a business checking account. You can use one-time or recurring CCD transactions to transfer funds to or from a corporate entity. A standing authorization is required for recurring transactions.
	// - **PPD**: prearranged payment and deposit entry. Charge or credit against a personal checking or savings account. You can originate a PPD entry only when the payment and deposit terms between you and the customer are prearranged. A written authorization from the customer is required for one-time transactions and a written standing authorization is required for recurring transactions.
	// - **TEL**: telephone-initiated entry. One-time charge against a personal checking or savings account. You can originate a TEL entry only when there is a business relationship between you and the customer or when the customer initiates a telephone call to you. For a TEL entry, you must obtain a payment authorization from the customer over the telephone. There is no recurring billing option for TEL.
	// - **WEB**: internet-initiated entry—charge against a personal checking or savings account. You can originate a one-time or recurring WEB entry when the customer initiates the transaction over the Internet. For a WEB entry, you must obtain payment authorization from the customer over the Internet.
	//
	// Example: WEB
	SECCode string `json:"SECCode,omitempty"`
}

// Validate validates this processing information bank transfer options
func (m *ProcessingInformationBankTransferOptions) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this processing information bank transfer options based on context it is used
func (m *ProcessingInformationBankTransferOptions) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *ProcessingInformationBankTransferOptions) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *ProcessingInformationBankTransferOptions) UnmarshalBinary(b []byte) error {
	var res ProcessingInformationBankTransferOptions
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

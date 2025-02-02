// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"strconv"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
	"github.com/go-openapi/validate"
)

// ErrorBean Error Bean
//
// swagger:model ErrorBean
type ErrorBean struct {

	// Error code
	// Required: true
	Code *string `json:"code"`

	// Correlation Id
	CorrelationID string `json:"correlationId,omitempty"`

	// Error Detail
	Detail string `json:"detail,omitempty"`

	// Error fields List
	Fields []*ErrorBeanFieldsItems0 `json:"fields"`

	// Localization Key Name
	LocalizationKey string `json:"localizationKey,omitempty"`

	// Error message
	// Required: true
	Message *string `json:"message"`
}

// Validate validates this error bean
func (m *ErrorBean) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateCode(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateFields(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateMessage(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *ErrorBean) validateCode(formats strfmt.Registry) error {

	if err := validate.Required("code", "body", m.Code); err != nil {
		return err
	}

	return nil
}

func (m *ErrorBean) validateFields(formats strfmt.Registry) error {
	if swag.IsZero(m.Fields) { // not required
		return nil
	}

	for i := 0; i < len(m.Fields); i++ {
		if swag.IsZero(m.Fields[i]) { // not required
			continue
		}

		if m.Fields[i] != nil {
			if err := m.Fields[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("fields" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("fields" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *ErrorBean) validateMessage(formats strfmt.Registry) error {

	if err := validate.Required("message", "body", m.Message); err != nil {
		return err
	}

	return nil
}

// ContextValidate validate this error bean based on the context it is used
func (m *ErrorBean) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateFields(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *ErrorBean) contextValidateFields(ctx context.Context, formats strfmt.Registry) error {

	for i := 0; i < len(m.Fields); i++ {

		if m.Fields[i] != nil {

			if swag.IsZero(m.Fields[i]) { // not required
				return nil
			}

			if err := m.Fields[i].ContextValidate(ctx, formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("fields" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("fields" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

// MarshalBinary interface implementation
func (m *ErrorBean) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *ErrorBean) UnmarshalBinary(b []byte) error {
	var res ErrorBean
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

// ErrorBeanFieldsItems0 Provide validation failed input field details
//
// swagger:model ErrorBeanFieldsItems0
type ErrorBeanFieldsItems0 struct {

	// Localized Key Name
	LocalizationKey string `json:"localizationKey,omitempty"`

	// Error description about validation failed field
	Message string `json:"message,omitempty"`

	// Path of the failed property
	Path string `json:"path,omitempty"`
}

// Validate validates this error bean fields items0
func (m *ErrorBeanFieldsItems0) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this error bean fields items0 based on context it is used
func (m *ErrorBeanFieldsItems0) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *ErrorBeanFieldsItems0) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *ErrorBeanFieldsItems0) UnmarshalBinary(b []byte) error {
	var res ErrorBeanFieldsItems0
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

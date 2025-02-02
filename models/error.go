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
)

// Error error
//
// swagger:model Error
type Error struct {

	// links
	Links *ErrorLinks `json:"_links,omitempty"`

	// response status
	ResponseStatus *ErrorResponseStatus `json:"responseStatus,omitempty"`
}

// Validate validates this error
func (m *Error) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateLinks(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateResponseStatus(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *Error) validateLinks(formats strfmt.Registry) error {
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

func (m *Error) validateResponseStatus(formats strfmt.Registry) error {
	if swag.IsZero(m.ResponseStatus) { // not required
		return nil
	}

	if m.ResponseStatus != nil {
		if err := m.ResponseStatus.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("responseStatus")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("responseStatus")
			}
			return err
		}
	}

	return nil
}

// ContextValidate validate this error based on the context it is used
func (m *Error) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateLinks(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateResponseStatus(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *Error) contextValidateLinks(ctx context.Context, formats strfmt.Registry) error {

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

func (m *Error) contextValidateResponseStatus(ctx context.Context, formats strfmt.Registry) error {

	if m.ResponseStatus != nil {

		if swag.IsZero(m.ResponseStatus) { // not required
			return nil
		}

		if err := m.ResponseStatus.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("responseStatus")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("responseStatus")
			}
			return err
		}
	}

	return nil
}

// MarshalBinary interface implementation
func (m *Error) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *Error) UnmarshalBinary(b []byte) error {
	var res Error
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

// ErrorLinks error links
//
// swagger:model ErrorLinks
type ErrorLinks struct {

	// documentation
	Documentation []*ErrorLinksDocumentationItems0 `json:"documentation"`

	// next
	Next []*ErrorLinksNextItems0 `json:"next"`

	// self
	Self *ErrorLinksSelf `json:"self,omitempty"`
}

// Validate validates this error links
func (m *ErrorLinks) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateDocumentation(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateNext(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateSelf(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *ErrorLinks) validateDocumentation(formats strfmt.Registry) error {
	if swag.IsZero(m.Documentation) { // not required
		return nil
	}

	for i := 0; i < len(m.Documentation); i++ {
		if swag.IsZero(m.Documentation[i]) { // not required
			continue
		}

		if m.Documentation[i] != nil {
			if err := m.Documentation[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("_links" + "." + "documentation" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("_links" + "." + "documentation" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *ErrorLinks) validateNext(formats strfmt.Registry) error {
	if swag.IsZero(m.Next) { // not required
		return nil
	}

	for i := 0; i < len(m.Next); i++ {
		if swag.IsZero(m.Next[i]) { // not required
			continue
		}

		if m.Next[i] != nil {
			if err := m.Next[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("_links" + "." + "next" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("_links" + "." + "next" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *ErrorLinks) validateSelf(formats strfmt.Registry) error {
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

// ContextValidate validate this error links based on the context it is used
func (m *ErrorLinks) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateDocumentation(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateNext(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateSelf(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *ErrorLinks) contextValidateDocumentation(ctx context.Context, formats strfmt.Registry) error {

	for i := 0; i < len(m.Documentation); i++ {

		if m.Documentation[i] != nil {

			if swag.IsZero(m.Documentation[i]) { // not required
				return nil
			}

			if err := m.Documentation[i].ContextValidate(ctx, formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("_links" + "." + "documentation" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("_links" + "." + "documentation" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *ErrorLinks) contextValidateNext(ctx context.Context, formats strfmt.Registry) error {

	for i := 0; i < len(m.Next); i++ {

		if m.Next[i] != nil {

			if swag.IsZero(m.Next[i]) { // not required
				return nil
			}

			if err := m.Next[i].ContextValidate(ctx, formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("_links" + "." + "next" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("_links" + "." + "next" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *ErrorLinks) contextValidateSelf(ctx context.Context, formats strfmt.Registry) error {

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

// MarshalBinary interface implementation
func (m *ErrorLinks) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *ErrorLinks) UnmarshalBinary(b []byte) error {
	var res ErrorLinks
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

// ErrorLinksDocumentationItems0 error links documentation items0
//
// swagger:model ErrorLinksDocumentationItems0
type ErrorLinksDocumentationItems0 struct {

	// URI of the linked resource.
	Href string `json:"href,omitempty"`

	// HTTP method of the linked resource.
	Method string `json:"method,omitempty"`

	// Label of the linked resource.
	Title string `json:"title,omitempty"`
}

// Validate validates this error links documentation items0
func (m *ErrorLinksDocumentationItems0) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this error links documentation items0 based on context it is used
func (m *ErrorLinksDocumentationItems0) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *ErrorLinksDocumentationItems0) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *ErrorLinksDocumentationItems0) UnmarshalBinary(b []byte) error {
	var res ErrorLinksDocumentationItems0
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

// ErrorLinksNextItems0 error links next items0
//
// swagger:model ErrorLinksNextItems0
type ErrorLinksNextItems0 struct {

	// URI of the linked resource.
	Href string `json:"href,omitempty"`

	// HTTP method of the linked resource.
	Method string `json:"method,omitempty"`

	// Label of the linked resource.
	Title string `json:"title,omitempty"`
}

// Validate validates this error links next items0
func (m *ErrorLinksNextItems0) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this error links next items0 based on context it is used
func (m *ErrorLinksNextItems0) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *ErrorLinksNextItems0) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *ErrorLinksNextItems0) UnmarshalBinary(b []byte) error {
	var res ErrorLinksNextItems0
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

// ErrorLinksSelf error links self
//
// swagger:model ErrorLinksSelf
type ErrorLinksSelf struct {

	// URI of the linked resource.
	Href string `json:"href,omitempty"`

	// HTTP method of the linked resource.
	Method string `json:"method,omitempty"`

	// Label of the linked resource.
	Title string `json:"title,omitempty"`
}

// Validate validates this error links self
func (m *ErrorLinksSelf) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this error links self based on context it is used
func (m *ErrorLinksSelf) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *ErrorLinksSelf) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *ErrorLinksSelf) UnmarshalBinary(b []byte) error {
	var res ErrorLinksSelf
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

// ErrorResponseStatus error response status
//
// swagger:model ErrorResponseStatus
type ErrorResponseStatus struct {

	// API correlation ID.
	CorrelationID string `json:"correlationId,omitempty"`

	// details
	Details []*ErrorResponseStatusDetailsItems0 `json:"details"`

	// Error Message.
	Message string `json:"message,omitempty"`

	// Error Reason Code.
	Reason string `json:"reason,omitempty"`

	// HTTP Status code.
	Status float64 `json:"status,omitempty"`
}

// Validate validates this error response status
func (m *ErrorResponseStatus) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateDetails(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *ErrorResponseStatus) validateDetails(formats strfmt.Registry) error {
	if swag.IsZero(m.Details) { // not required
		return nil
	}

	for i := 0; i < len(m.Details); i++ {
		if swag.IsZero(m.Details[i]) { // not required
			continue
		}

		if m.Details[i] != nil {
			if err := m.Details[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("responseStatus" + "." + "details" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("responseStatus" + "." + "details" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

// ContextValidate validate this error response status based on the context it is used
func (m *ErrorResponseStatus) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateDetails(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *ErrorResponseStatus) contextValidateDetails(ctx context.Context, formats strfmt.Registry) error {

	for i := 0; i < len(m.Details); i++ {

		if m.Details[i] != nil {

			if swag.IsZero(m.Details[i]) { // not required
				return nil
			}

			if err := m.Details[i].ContextValidate(ctx, formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("responseStatus" + "." + "details" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("responseStatus" + "." + "details" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

// MarshalBinary interface implementation
func (m *ErrorResponseStatus) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *ErrorResponseStatus) UnmarshalBinary(b []byte) error {
	var res ErrorResponseStatus
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

// ErrorResponseStatusDetailsItems0 error response status details items0
//
// swagger:model ErrorResponseStatusDetailsItems0
type ErrorResponseStatusDetailsItems0 struct {

	// Field name referred to for validation issues.
	Location string `json:"location,omitempty"`

	// Description or code of any error response.
	Message string `json:"message,omitempty"`
}

// Validate validates this error response status details items0
func (m *ErrorResponseStatusDetailsItems0) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this error response status details items0 based on context it is used
func (m *ErrorResponseStatusDetailsItems0) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *ErrorResponseStatusDetailsItems0) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *ErrorResponseStatusDetailsItems0) UnmarshalBinary(b []byte) error {
	var res ErrorResponseStatusDetailsItems0
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

// Code generated by go-swagger; DO NOT EDIT.

package report_subscriptions

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"fmt"
	"io"
	"strconv"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
	"github.com/go-openapi/validate"
)

// CreateSubscriptionReader is a Reader for the CreateSubscription structure.
type CreateSubscriptionReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *CreateSubscriptionReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewCreateSubscriptionOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 304:
		result := NewCreateSubscriptionNotModified()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 400:
		result := NewCreateSubscriptionBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		return nil, runtime.NewAPIError("[PUT /reporting/v3/report-subscriptions] createSubscription", response, response.Code())
	}
}

// NewCreateSubscriptionOK creates a CreateSubscriptionOK with default headers values
func NewCreateSubscriptionOK() *CreateSubscriptionOK {
	return &CreateSubscriptionOK{}
}

/*
CreateSubscriptionOK describes a response with status code 200, with default header values.

Ok
*/
type CreateSubscriptionOK struct {
}

// IsSuccess returns true when this create subscription o k response has a 2xx status code
func (o *CreateSubscriptionOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this create subscription o k response has a 3xx status code
func (o *CreateSubscriptionOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this create subscription o k response has a 4xx status code
func (o *CreateSubscriptionOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this create subscription o k response has a 5xx status code
func (o *CreateSubscriptionOK) IsServerError() bool {
	return false
}

// IsCode returns true when this create subscription o k response a status code equal to that given
func (o *CreateSubscriptionOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the create subscription o k response
func (o *CreateSubscriptionOK) Code() int {
	return 200
}

func (o *CreateSubscriptionOK) Error() string {
	return fmt.Sprintf("[PUT /reporting/v3/report-subscriptions][%d] createSubscriptionOK ", 200)
}

func (o *CreateSubscriptionOK) String() string {
	return fmt.Sprintf("[PUT /reporting/v3/report-subscriptions][%d] createSubscriptionOK ", 200)
}

func (o *CreateSubscriptionOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewCreateSubscriptionNotModified creates a CreateSubscriptionNotModified with default headers values
func NewCreateSubscriptionNotModified() *CreateSubscriptionNotModified {
	return &CreateSubscriptionNotModified{}
}

/*
CreateSubscriptionNotModified describes a response with status code 304, with default header values.

NOT MODIFIED
*/
type CreateSubscriptionNotModified struct {
}

// IsSuccess returns true when this create subscription not modified response has a 2xx status code
func (o *CreateSubscriptionNotModified) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this create subscription not modified response has a 3xx status code
func (o *CreateSubscriptionNotModified) IsRedirect() bool {
	return true
}

// IsClientError returns true when this create subscription not modified response has a 4xx status code
func (o *CreateSubscriptionNotModified) IsClientError() bool {
	return false
}

// IsServerError returns true when this create subscription not modified response has a 5xx status code
func (o *CreateSubscriptionNotModified) IsServerError() bool {
	return false
}

// IsCode returns true when this create subscription not modified response a status code equal to that given
func (o *CreateSubscriptionNotModified) IsCode(code int) bool {
	return code == 304
}

// Code gets the status code for the create subscription not modified response
func (o *CreateSubscriptionNotModified) Code() int {
	return 304
}

func (o *CreateSubscriptionNotModified) Error() string {
	return fmt.Sprintf("[PUT /reporting/v3/report-subscriptions][%d] createSubscriptionNotModified ", 304)
}

func (o *CreateSubscriptionNotModified) String() string {
	return fmt.Sprintf("[PUT /reporting/v3/report-subscriptions][%d] createSubscriptionNotModified ", 304)
}

func (o *CreateSubscriptionNotModified) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewCreateSubscriptionBadRequest creates a CreateSubscriptionBadRequest with default headers values
func NewCreateSubscriptionBadRequest() *CreateSubscriptionBadRequest {
	return &CreateSubscriptionBadRequest{}
}

/*
CreateSubscriptionBadRequest describes a response with status code 400, with default header values.

Invalid request
*/
type CreateSubscriptionBadRequest struct {
	Payload *CreateSubscriptionBadRequestBody
}

// IsSuccess returns true when this create subscription bad request response has a 2xx status code
func (o *CreateSubscriptionBadRequest) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this create subscription bad request response has a 3xx status code
func (o *CreateSubscriptionBadRequest) IsRedirect() bool {
	return false
}

// IsClientError returns true when this create subscription bad request response has a 4xx status code
func (o *CreateSubscriptionBadRequest) IsClientError() bool {
	return true
}

// IsServerError returns true when this create subscription bad request response has a 5xx status code
func (o *CreateSubscriptionBadRequest) IsServerError() bool {
	return false
}

// IsCode returns true when this create subscription bad request response a status code equal to that given
func (o *CreateSubscriptionBadRequest) IsCode(code int) bool {
	return code == 400
}

// Code gets the status code for the create subscription bad request response
func (o *CreateSubscriptionBadRequest) Code() int {
	return 400
}

func (o *CreateSubscriptionBadRequest) Error() string {
	return fmt.Sprintf("[PUT /reporting/v3/report-subscriptions][%d] createSubscriptionBadRequest  %+v", 400, o.Payload)
}

func (o *CreateSubscriptionBadRequest) String() string {
	return fmt.Sprintf("[PUT /reporting/v3/report-subscriptions][%d] createSubscriptionBadRequest  %+v", 400, o.Payload)
}

func (o *CreateSubscriptionBadRequest) GetPayload() *CreateSubscriptionBadRequestBody {
	return o.Payload
}

func (o *CreateSubscriptionBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(CreateSubscriptionBadRequestBody)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

/*
CreateSubscriptionBadRequestBody Error Bean
swagger:model CreateSubscriptionBadRequestBody
*/
type CreateSubscriptionBadRequestBody struct {

	// Error code
	// Required: true
	Code *string `json:"code"`

	// Correlation Id
	CorrelationID string `json:"correlationId,omitempty"`

	// Error Detail
	Detail string `json:"detail,omitempty"`

	// Error fields List
	Fields []*CreateSubscriptionBadRequestBodyFieldsItems0 `json:"fields"`

	// Localization Key Name
	LocalizationKey string `json:"localizationKey,omitempty"`

	// Error message
	// Required: true
	Message *string `json:"message"`
}

// Validate validates this create subscription bad request body
func (o *CreateSubscriptionBadRequestBody) Validate(formats strfmt.Registry) error {
	var res []error

	if err := o.validateCode(formats); err != nil {
		res = append(res, err)
	}

	if err := o.validateFields(formats); err != nil {
		res = append(res, err)
	}

	if err := o.validateMessage(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (o *CreateSubscriptionBadRequestBody) validateCode(formats strfmt.Registry) error {

	if err := validate.Required("createSubscriptionBadRequest"+"."+"code", "body", o.Code); err != nil {
		return err
	}

	return nil
}

func (o *CreateSubscriptionBadRequestBody) validateFields(formats strfmt.Registry) error {
	if swag.IsZero(o.Fields) { // not required
		return nil
	}

	for i := 0; i < len(o.Fields); i++ {
		if swag.IsZero(o.Fields[i]) { // not required
			continue
		}

		if o.Fields[i] != nil {
			if err := o.Fields[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("createSubscriptionBadRequest" + "." + "fields" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("createSubscriptionBadRequest" + "." + "fields" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (o *CreateSubscriptionBadRequestBody) validateMessage(formats strfmt.Registry) error {

	if err := validate.Required("createSubscriptionBadRequest"+"."+"message", "body", o.Message); err != nil {
		return err
	}

	return nil
}

// ContextValidate validate this create subscription bad request body based on the context it is used
func (o *CreateSubscriptionBadRequestBody) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := o.contextValidateFields(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (o *CreateSubscriptionBadRequestBody) contextValidateFields(ctx context.Context, formats strfmt.Registry) error {

	for i := 0; i < len(o.Fields); i++ {

		if o.Fields[i] != nil {

			if swag.IsZero(o.Fields[i]) { // not required
				return nil
			}

			if err := o.Fields[i].ContextValidate(ctx, formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("createSubscriptionBadRequest" + "." + "fields" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("createSubscriptionBadRequest" + "." + "fields" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

// MarshalBinary interface implementation
func (o *CreateSubscriptionBadRequestBody) MarshalBinary() ([]byte, error) {
	if o == nil {
		return nil, nil
	}
	return swag.WriteJSON(o)
}

// UnmarshalBinary interface implementation
func (o *CreateSubscriptionBadRequestBody) UnmarshalBinary(b []byte) error {
	var res CreateSubscriptionBadRequestBody
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*o = res
	return nil
}

/*
CreateSubscriptionBadRequestBodyFieldsItems0 Provide validation failed input field details
swagger:model CreateSubscriptionBadRequestBodyFieldsItems0
*/
type CreateSubscriptionBadRequestBodyFieldsItems0 struct {

	// Localized Key Name
	LocalizationKey string `json:"localizationKey,omitempty"`

	// Error description about validation failed field
	Message string `json:"message,omitempty"`

	// Path of the failed property
	Path string `json:"path,omitempty"`
}

// Validate validates this create subscription bad request body fields items0
func (o *CreateSubscriptionBadRequestBodyFieldsItems0) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this create subscription bad request body fields items0 based on context it is used
func (o *CreateSubscriptionBadRequestBodyFieldsItems0) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (o *CreateSubscriptionBadRequestBodyFieldsItems0) MarshalBinary() ([]byte, error) {
	if o == nil {
		return nil, nil
	}
	return swag.WriteJSON(o)
}

// UnmarshalBinary interface implementation
func (o *CreateSubscriptionBadRequestBodyFieldsItems0) UnmarshalBinary(b []byte) error {
	var res CreateSubscriptionBadRequestBodyFieldsItems0
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*o = res
	return nil
}

/*
CreateSubscriptionBody create subscription body
swagger:model CreateSubscriptionBody
*/
type CreateSubscriptionBody struct {

	// Valid GroupName
	// Example: CEMEA Group
	// Pattern: [a-zA-Z0-9-_ ]+
	GroupName string `json:"groupName,omitempty"`

	// Valid CyberSource organizationId
	// Example: Merchant 1
	// Pattern: [a-zA-Z0-9-_]+
	OrganizationID string `json:"organizationId,omitempty"`

	// Valid Report Definition Name
	// Example: TransactionDetailReportClass
	// Required: true
	// Max Length: 80
	// Min Length: 1
	// Pattern: [a-zA-Z0-9-]+
	ReportDefinitionName *string `json:"reportDefinitionName"`

	// report fields
	// Example: ["Request.RequestID","Request.TransactionDate","Request.MerchantID"]
	// Required: true
	ReportFields []string `json:"reportFields"`

	// List of filters to apply
	// Example: {"Application.Name":["ics_auth","ics_bill"]}
	ReportFilters map[string][]string `json:"reportFilters,omitempty"`

	// 'The frequency for which subscription is created.'
	//
	// Valid values:
	// - 'DAILY'
	// - 'WEEKLY'
	// - 'MONTHLY'
	// - 'ADHOC'
	//
	// Example: DAILY
	// Required: true
	ReportFrequency *string `json:"reportFrequency"`

	// Valid values:
	// - application/xml
	// - text/csv
	//
	// Example: application/xml
	// Required: true
	ReportMimeType *string `json:"reportMimeType"`

	// report name
	// Example: My Daily Subdcription
	// Required: true
	// Max Length: 128
	// Min Length: 1
	// Pattern: [a-zA-Z0-9-_ ]+
	ReportName *string `json:"reportName"`

	// report preferences
	ReportPreferences *CreateSubscriptionParamsBodyReportPreferences `json:"reportPreferences,omitempty"`

	// This is the start day if the frequency is WEEKLY or MONTHLY. The value varies from 1-7 for WEEKLY and 1-31 for MONTHLY. For WEEKLY 1 means Sunday and 7 means Saturday. By default the value is 1.
	// Maximum: 31
	// Minimum: 1
	StartDay int64 `json:"startDay,omitempty"`

	// The hour at which the report generation should start. It should be in hhmm format.
	// Example: 0900
	// Required: true
	StartTime *string `json:"startTime"`

	// timezone
	// Example: America/Chicago
	// Required: true
	Timezone *string `json:"timezone"`
}

// Validate validates this create subscription body
func (o *CreateSubscriptionBody) Validate(formats strfmt.Registry) error {
	var res []error

	if err := o.validateGroupName(formats); err != nil {
		res = append(res, err)
	}

	if err := o.validateOrganizationID(formats); err != nil {
		res = append(res, err)
	}

	if err := o.validateReportDefinitionName(formats); err != nil {
		res = append(res, err)
	}

	if err := o.validateReportFields(formats); err != nil {
		res = append(res, err)
	}

	if err := o.validateReportFrequency(formats); err != nil {
		res = append(res, err)
	}

	if err := o.validateReportMimeType(formats); err != nil {
		res = append(res, err)
	}

	if err := o.validateReportName(formats); err != nil {
		res = append(res, err)
	}

	if err := o.validateReportPreferences(formats); err != nil {
		res = append(res, err)
	}

	if err := o.validateStartDay(formats); err != nil {
		res = append(res, err)
	}

	if err := o.validateStartTime(formats); err != nil {
		res = append(res, err)
	}

	if err := o.validateTimezone(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (o *CreateSubscriptionBody) validateGroupName(formats strfmt.Registry) error {
	if swag.IsZero(o.GroupName) { // not required
		return nil
	}

	if err := validate.Pattern("requestBody"+"."+"groupName", "body", o.GroupName, `[a-zA-Z0-9-_ ]+`); err != nil {
		return err
	}

	return nil
}

func (o *CreateSubscriptionBody) validateOrganizationID(formats strfmt.Registry) error {
	if swag.IsZero(o.OrganizationID) { // not required
		return nil
	}

	if err := validate.Pattern("requestBody"+"."+"organizationId", "body", o.OrganizationID, `[a-zA-Z0-9-_]+`); err != nil {
		return err
	}

	return nil
}

func (o *CreateSubscriptionBody) validateReportDefinitionName(formats strfmt.Registry) error {

	if err := validate.Required("requestBody"+"."+"reportDefinitionName", "body", o.ReportDefinitionName); err != nil {
		return err
	}

	if err := validate.MinLength("requestBody"+"."+"reportDefinitionName", "body", *o.ReportDefinitionName, 1); err != nil {
		return err
	}

	if err := validate.MaxLength("requestBody"+"."+"reportDefinitionName", "body", *o.ReportDefinitionName, 80); err != nil {
		return err
	}

	if err := validate.Pattern("requestBody"+"."+"reportDefinitionName", "body", *o.ReportDefinitionName, `[a-zA-Z0-9-]+`); err != nil {
		return err
	}

	return nil
}

func (o *CreateSubscriptionBody) validateReportFields(formats strfmt.Registry) error {

	if err := validate.Required("requestBody"+"."+"reportFields", "body", o.ReportFields); err != nil {
		return err
	}

	return nil
}

func (o *CreateSubscriptionBody) validateReportFrequency(formats strfmt.Registry) error {

	if err := validate.Required("requestBody"+"."+"reportFrequency", "body", o.ReportFrequency); err != nil {
		return err
	}

	return nil
}

func (o *CreateSubscriptionBody) validateReportMimeType(formats strfmt.Registry) error {

	if err := validate.Required("requestBody"+"."+"reportMimeType", "body", o.ReportMimeType); err != nil {
		return err
	}

	return nil
}

func (o *CreateSubscriptionBody) validateReportName(formats strfmt.Registry) error {

	if err := validate.Required("requestBody"+"."+"reportName", "body", o.ReportName); err != nil {
		return err
	}

	if err := validate.MinLength("requestBody"+"."+"reportName", "body", *o.ReportName, 1); err != nil {
		return err
	}

	if err := validate.MaxLength("requestBody"+"."+"reportName", "body", *o.ReportName, 128); err != nil {
		return err
	}

	if err := validate.Pattern("requestBody"+"."+"reportName", "body", *o.ReportName, `[a-zA-Z0-9-_ ]+`); err != nil {
		return err
	}

	return nil
}

func (o *CreateSubscriptionBody) validateReportPreferences(formats strfmt.Registry) error {
	if swag.IsZero(o.ReportPreferences) { // not required
		return nil
	}

	if o.ReportPreferences != nil {
		if err := o.ReportPreferences.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("requestBody" + "." + "reportPreferences")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("requestBody" + "." + "reportPreferences")
			}
			return err
		}
	}

	return nil
}

func (o *CreateSubscriptionBody) validateStartDay(formats strfmt.Registry) error {
	if swag.IsZero(o.StartDay) { // not required
		return nil
	}

	if err := validate.MinimumInt("requestBody"+"."+"startDay", "body", o.StartDay, 1, false); err != nil {
		return err
	}

	if err := validate.MaximumInt("requestBody"+"."+"startDay", "body", o.StartDay, 31, false); err != nil {
		return err
	}

	return nil
}

func (o *CreateSubscriptionBody) validateStartTime(formats strfmt.Registry) error {

	if err := validate.Required("requestBody"+"."+"startTime", "body", o.StartTime); err != nil {
		return err
	}

	return nil
}

func (o *CreateSubscriptionBody) validateTimezone(formats strfmt.Registry) error {

	if err := validate.Required("requestBody"+"."+"timezone", "body", o.Timezone); err != nil {
		return err
	}

	return nil
}

// ContextValidate validate this create subscription body based on the context it is used
func (o *CreateSubscriptionBody) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := o.contextValidateReportPreferences(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (o *CreateSubscriptionBody) contextValidateReportPreferences(ctx context.Context, formats strfmt.Registry) error {

	if o.ReportPreferences != nil {

		if swag.IsZero(o.ReportPreferences) { // not required
			return nil
		}

		if err := o.ReportPreferences.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("requestBody" + "." + "reportPreferences")
			} else if ce, ok := err.(*errors.CompositeError); ok {
				return ce.ValidateName("requestBody" + "." + "reportPreferences")
			}
			return err
		}
	}

	return nil
}

// MarshalBinary interface implementation
func (o *CreateSubscriptionBody) MarshalBinary() ([]byte, error) {
	if o == nil {
		return nil, nil
	}
	return swag.WriteJSON(o)
}

// UnmarshalBinary interface implementation
func (o *CreateSubscriptionBody) UnmarshalBinary(b []byte) error {
	var res CreateSubscriptionBody
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*o = res
	return nil
}

/*
CreateSubscriptionParamsBodyReportPreferences Report Preferences
swagger:model CreateSubscriptionParamsBodyReportPreferences
*/
type CreateSubscriptionParamsBodyReportPreferences struct {

	// Specify the field naming convention to be followed in reports (applicable to only csv report formats)
	//
	// Valid values:
	// - SOAPI
	// - SCMP
	//
	FieldNameConvention string `json:"fieldNameConvention,omitempty"`

	// Indicator to determine whether negative sign infront of amount for all refunded transaction
	SignedAmounts bool `json:"signedAmounts,omitempty"`
}

// Validate validates this create subscription params body report preferences
func (o *CreateSubscriptionParamsBodyReportPreferences) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this create subscription params body report preferences based on context it is used
func (o *CreateSubscriptionParamsBodyReportPreferences) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (o *CreateSubscriptionParamsBodyReportPreferences) MarshalBinary() ([]byte, error) {
	if o == nil {
		return nil, nil
	}
	return swag.WriteJSON(o)
}

// UnmarshalBinary interface implementation
func (o *CreateSubscriptionParamsBodyReportPreferences) UnmarshalBinary(b []byte) error {
	var res CreateSubscriptionParamsBodyReportPreferences
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*o = res
	return nil
}

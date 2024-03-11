// Code generated by go-swagger; DO NOT EDIT.

package reports

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"net/http"
	"time"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/runtime"
	cr "github.com/go-openapi/runtime/client"
	"github.com/go-openapi/strfmt"
)

// NewCreateReportParams creates a new CreateReportParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewCreateReportParams() *CreateReportParams {
	return &CreateReportParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewCreateReportParamsWithTimeout creates a new CreateReportParams object
// with the ability to set a timeout on a request.
func NewCreateReportParamsWithTimeout(timeout time.Duration) *CreateReportParams {
	return &CreateReportParams{
		timeout: timeout,
	}
}

// NewCreateReportParamsWithContext creates a new CreateReportParams object
// with the ability to set a context for a request.
func NewCreateReportParamsWithContext(ctx context.Context) *CreateReportParams {
	return &CreateReportParams{
		Context: ctx,
	}
}

// NewCreateReportParamsWithHTTPClient creates a new CreateReportParams object
// with the ability to set a custom HTTPClient for a request.
func NewCreateReportParamsWithHTTPClient(client *http.Client) *CreateReportParams {
	return &CreateReportParams{
		HTTPClient: client,
	}
}

/*
CreateReportParams contains all the parameters to send to the API endpoint

	for the create report operation.

	Typically these are written to a http.Request.
*/
type CreateReportParams struct {

	/* OrganizationID.

	   Valid Cybersource Organization Id
	*/
	OrganizationID *string

	/* RequestBody.

	   Report subscription request payload
	*/
	RequestBody CreateReportBody

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the create report params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *CreateReportParams) WithDefaults() *CreateReportParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the create report params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *CreateReportParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the create report params
func (o *CreateReportParams) WithTimeout(timeout time.Duration) *CreateReportParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the create report params
func (o *CreateReportParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the create report params
func (o *CreateReportParams) WithContext(ctx context.Context) *CreateReportParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the create report params
func (o *CreateReportParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the create report params
func (o *CreateReportParams) WithHTTPClient(client *http.Client) *CreateReportParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the create report params
func (o *CreateReportParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithOrganizationID adds the organizationID to the create report params
func (o *CreateReportParams) WithOrganizationID(organizationID *string) *CreateReportParams {
	o.SetOrganizationID(organizationID)
	return o
}

// SetOrganizationID adds the organizationId to the create report params
func (o *CreateReportParams) SetOrganizationID(organizationID *string) {
	o.OrganizationID = organizationID
}

// WithRequestBody adds the requestBody to the create report params
func (o *CreateReportParams) WithRequestBody(requestBody CreateReportBody) *CreateReportParams {
	o.SetRequestBody(requestBody)
	return o
}

// SetRequestBody adds the requestBody to the create report params
func (o *CreateReportParams) SetRequestBody(requestBody CreateReportBody) {
	o.RequestBody = requestBody
}

// WriteToRequest writes these params to a swagger request
func (o *CreateReportParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	if o.OrganizationID != nil {

		// query param organizationId
		var qrOrganizationID string

		if o.OrganizationID != nil {
			qrOrganizationID = *o.OrganizationID
		}
		qOrganizationID := qrOrganizationID
		if qOrganizationID != "" {

			if err := r.SetQueryParam("organizationId", qOrganizationID); err != nil {
				return err
			}
		}
	}
	if err := r.SetBodyParam(o.RequestBody); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

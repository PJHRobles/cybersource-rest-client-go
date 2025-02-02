// Code generated by go-swagger; DO NOT EDIT.

package transaction_batches

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

// NewGetTransactionBatchDetailsParams creates a new GetTransactionBatchDetailsParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewGetTransactionBatchDetailsParams() *GetTransactionBatchDetailsParams {
	return &GetTransactionBatchDetailsParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewGetTransactionBatchDetailsParamsWithTimeout creates a new GetTransactionBatchDetailsParams object
// with the ability to set a timeout on a request.
func NewGetTransactionBatchDetailsParamsWithTimeout(timeout time.Duration) *GetTransactionBatchDetailsParams {
	return &GetTransactionBatchDetailsParams{
		timeout: timeout,
	}
}

// NewGetTransactionBatchDetailsParamsWithContext creates a new GetTransactionBatchDetailsParams object
// with the ability to set a context for a request.
func NewGetTransactionBatchDetailsParamsWithContext(ctx context.Context) *GetTransactionBatchDetailsParams {
	return &GetTransactionBatchDetailsParams{
		Context: ctx,
	}
}

// NewGetTransactionBatchDetailsParamsWithHTTPClient creates a new GetTransactionBatchDetailsParams object
// with the ability to set a custom HTTPClient for a request.
func NewGetTransactionBatchDetailsParamsWithHTTPClient(client *http.Client) *GetTransactionBatchDetailsParams {
	return &GetTransactionBatchDetailsParams{
		HTTPClient: client,
	}
}

/*
GetTransactionBatchDetailsParams contains all the parameters to send to the API endpoint

	for the get transaction batch details operation.

	Typically these are written to a http.Request.
*/
type GetTransactionBatchDetailsParams struct {

	/* ID.

	   The batch id assigned for the template.
	*/
	ID string

	/* Status.

	     Allows you to filter by rejected response.

	Valid values:
	- Rejected

	*/
	Status *string

	/* UploadDate.

	     Date in which the original batch file was uploaded. Date must be in ISO-8601 format.
	Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)
	**Example date format:**
	 - yyyy-MM-dd


	     Format: date
	*/
	UploadDate *strfmt.Date

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the get transaction batch details params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *GetTransactionBatchDetailsParams) WithDefaults() *GetTransactionBatchDetailsParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the get transaction batch details params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *GetTransactionBatchDetailsParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the get transaction batch details params
func (o *GetTransactionBatchDetailsParams) WithTimeout(timeout time.Duration) *GetTransactionBatchDetailsParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the get transaction batch details params
func (o *GetTransactionBatchDetailsParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the get transaction batch details params
func (o *GetTransactionBatchDetailsParams) WithContext(ctx context.Context) *GetTransactionBatchDetailsParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the get transaction batch details params
func (o *GetTransactionBatchDetailsParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the get transaction batch details params
func (o *GetTransactionBatchDetailsParams) WithHTTPClient(client *http.Client) *GetTransactionBatchDetailsParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the get transaction batch details params
func (o *GetTransactionBatchDetailsParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithID adds the id to the get transaction batch details params
func (o *GetTransactionBatchDetailsParams) WithID(id string) *GetTransactionBatchDetailsParams {
	o.SetID(id)
	return o
}

// SetID adds the id to the get transaction batch details params
func (o *GetTransactionBatchDetailsParams) SetID(id string) {
	o.ID = id
}

// WithStatus adds the status to the get transaction batch details params
func (o *GetTransactionBatchDetailsParams) WithStatus(status *string) *GetTransactionBatchDetailsParams {
	o.SetStatus(status)
	return o
}

// SetStatus adds the status to the get transaction batch details params
func (o *GetTransactionBatchDetailsParams) SetStatus(status *string) {
	o.Status = status
}

// WithUploadDate adds the uploadDate to the get transaction batch details params
func (o *GetTransactionBatchDetailsParams) WithUploadDate(uploadDate *strfmt.Date) *GetTransactionBatchDetailsParams {
	o.SetUploadDate(uploadDate)
	return o
}

// SetUploadDate adds the uploadDate to the get transaction batch details params
func (o *GetTransactionBatchDetailsParams) SetUploadDate(uploadDate *strfmt.Date) {
	o.UploadDate = uploadDate
}

// WriteToRequest writes these params to a swagger request
func (o *GetTransactionBatchDetailsParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	// path param id
	if err := r.SetPathParam("id", o.ID); err != nil {
		return err
	}

	if o.Status != nil {

		// query param status
		var qrStatus string

		if o.Status != nil {
			qrStatus = *o.Status
		}
		qStatus := qrStatus
		if qStatus != "" {

			if err := r.SetQueryParam("status", qStatus); err != nil {
				return err
			}
		}
	}

	if o.UploadDate != nil {

		// query param uploadDate
		var qrUploadDate strfmt.Date

		if o.UploadDate != nil {
			qrUploadDate = *o.UploadDate
		}
		qUploadDate := qrUploadDate.String()
		if qUploadDate != "" {

			if err := r.SetQueryParam("uploadDate", qUploadDate); err != nil {
				return err
			}
		}
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

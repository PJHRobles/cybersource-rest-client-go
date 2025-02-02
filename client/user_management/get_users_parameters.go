// Code generated by go-swagger; DO NOT EDIT.

package user_management

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

// NewGetUsersParams creates a new GetUsersParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewGetUsersParams() *GetUsersParams {
	return &GetUsersParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewGetUsersParamsWithTimeout creates a new GetUsersParams object
// with the ability to set a timeout on a request.
func NewGetUsersParamsWithTimeout(timeout time.Duration) *GetUsersParams {
	return &GetUsersParams{
		timeout: timeout,
	}
}

// NewGetUsersParamsWithContext creates a new GetUsersParams object
// with the ability to set a context for a request.
func NewGetUsersParamsWithContext(ctx context.Context) *GetUsersParams {
	return &GetUsersParams{
		Context: ctx,
	}
}

// NewGetUsersParamsWithHTTPClient creates a new GetUsersParams object
// with the ability to set a custom HTTPClient for a request.
func NewGetUsersParamsWithHTTPClient(client *http.Client) *GetUsersParams {
	return &GetUsersParams{
		HTTPClient: client,
	}
}

/*
GetUsersParams contains all the parameters to send to the API endpoint

	for the get users operation.

	Typically these are written to a http.Request.
*/
type GetUsersParams struct {

	/* OrganizationID.

	   This is the orgId of the organization which the user belongs to.
	*/
	OrganizationID *string

	/* PermissionID.

	   permission that you are trying to search user on.
	*/
	PermissionID *string

	/* RoleID.

	   role of the user you are trying to search on.
	*/
	RoleID *string

	/* UserName.

	   User ID of the user you want to get details on.
	*/
	UserName *string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the get users params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *GetUsersParams) WithDefaults() *GetUsersParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the get users params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *GetUsersParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the get users params
func (o *GetUsersParams) WithTimeout(timeout time.Duration) *GetUsersParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the get users params
func (o *GetUsersParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the get users params
func (o *GetUsersParams) WithContext(ctx context.Context) *GetUsersParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the get users params
func (o *GetUsersParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the get users params
func (o *GetUsersParams) WithHTTPClient(client *http.Client) *GetUsersParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the get users params
func (o *GetUsersParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithOrganizationID adds the organizationID to the get users params
func (o *GetUsersParams) WithOrganizationID(organizationID *string) *GetUsersParams {
	o.SetOrganizationID(organizationID)
	return o
}

// SetOrganizationID adds the organizationId to the get users params
func (o *GetUsersParams) SetOrganizationID(organizationID *string) {
	o.OrganizationID = organizationID
}

// WithPermissionID adds the permissionID to the get users params
func (o *GetUsersParams) WithPermissionID(permissionID *string) *GetUsersParams {
	o.SetPermissionID(permissionID)
	return o
}

// SetPermissionID adds the permissionId to the get users params
func (o *GetUsersParams) SetPermissionID(permissionID *string) {
	o.PermissionID = permissionID
}

// WithRoleID adds the roleID to the get users params
func (o *GetUsersParams) WithRoleID(roleID *string) *GetUsersParams {
	o.SetRoleID(roleID)
	return o
}

// SetRoleID adds the roleId to the get users params
func (o *GetUsersParams) SetRoleID(roleID *string) {
	o.RoleID = roleID
}

// WithUserName adds the userName to the get users params
func (o *GetUsersParams) WithUserName(userName *string) *GetUsersParams {
	o.SetUserName(userName)
	return o
}

// SetUserName adds the userName to the get users params
func (o *GetUsersParams) SetUserName(userName *string) {
	o.UserName = userName
}

// WriteToRequest writes these params to a swagger request
func (o *GetUsersParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

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

	if o.PermissionID != nil {

		// query param permissionId
		var qrPermissionID string

		if o.PermissionID != nil {
			qrPermissionID = *o.PermissionID
		}
		qPermissionID := qrPermissionID
		if qPermissionID != "" {

			if err := r.SetQueryParam("permissionId", qPermissionID); err != nil {
				return err
			}
		}
	}

	if o.RoleID != nil {

		// query param roleId
		var qrRoleID string

		if o.RoleID != nil {
			qrRoleID = *o.RoleID
		}
		qRoleID := qrRoleID
		if qRoleID != "" {

			if err := r.SetQueryParam("roleId", qRoleID); err != nil {
				return err
			}
		}
	}

	if o.UserName != nil {

		// query param userName
		var qrUserName string

		if o.UserName != nil {
			qrUserName = *o.UserName
		}
		qUserName := qrUserName
		if qUserName != "" {

			if err := r.SetQueryParam("userName", qUserName); err != nil {
				return err
			}
		}
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

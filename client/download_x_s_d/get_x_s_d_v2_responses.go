// Code generated by go-swagger; DO NOT EDIT.

package download_x_s_d

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"
)

// GetXSDV2Reader is a Reader for the GetXSDV2 structure.
type GetXSDV2Reader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *GetXSDV2Reader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewGetXSDV2OK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 400:
		result := NewGetXSDV2BadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewGetXSDV2NotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewGetXSDV2InternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		return nil, runtime.NewAPIError("[GET /xsds/{reportDefinitionNameVersion}] getXSDV2", response, response.Code())
	}
}

// NewGetXSDV2OK creates a GetXSDV2OK with default headers values
func NewGetXSDV2OK() *GetXSDV2OK {
	return &GetXSDV2OK{}
}

/*
GetXSDV2OK describes a response with status code 200, with default header values.

Ok
*/
type GetXSDV2OK struct {
}

// IsSuccess returns true when this get x s d v2 o k response has a 2xx status code
func (o *GetXSDV2OK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this get x s d v2 o k response has a 3xx status code
func (o *GetXSDV2OK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get x s d v2 o k response has a 4xx status code
func (o *GetXSDV2OK) IsClientError() bool {
	return false
}

// IsServerError returns true when this get x s d v2 o k response has a 5xx status code
func (o *GetXSDV2OK) IsServerError() bool {
	return false
}

// IsCode returns true when this get x s d v2 o k response a status code equal to that given
func (o *GetXSDV2OK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the get x s d v2 o k response
func (o *GetXSDV2OK) Code() int {
	return 200
}

func (o *GetXSDV2OK) Error() string {
	return fmt.Sprintf("[GET /xsds/{reportDefinitionNameVersion}][%d] getXSDV2OK ", 200)
}

func (o *GetXSDV2OK) String() string {
	return fmt.Sprintf("[GET /xsds/{reportDefinitionNameVersion}][%d] getXSDV2OK ", 200)
}

func (o *GetXSDV2OK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewGetXSDV2BadRequest creates a GetXSDV2BadRequest with default headers values
func NewGetXSDV2BadRequest() *GetXSDV2BadRequest {
	return &GetXSDV2BadRequest{}
}

/*
GetXSDV2BadRequest describes a response with status code 400, with default header values.

Bad request. XSD file name may be invalid
*/
type GetXSDV2BadRequest struct {
}

// IsSuccess returns true when this get x s d v2 bad request response has a 2xx status code
func (o *GetXSDV2BadRequest) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this get x s d v2 bad request response has a 3xx status code
func (o *GetXSDV2BadRequest) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get x s d v2 bad request response has a 4xx status code
func (o *GetXSDV2BadRequest) IsClientError() bool {
	return true
}

// IsServerError returns true when this get x s d v2 bad request response has a 5xx status code
func (o *GetXSDV2BadRequest) IsServerError() bool {
	return false
}

// IsCode returns true when this get x s d v2 bad request response a status code equal to that given
func (o *GetXSDV2BadRequest) IsCode(code int) bool {
	return code == 400
}

// Code gets the status code for the get x s d v2 bad request response
func (o *GetXSDV2BadRequest) Code() int {
	return 400
}

func (o *GetXSDV2BadRequest) Error() string {
	return fmt.Sprintf("[GET /xsds/{reportDefinitionNameVersion}][%d] getXSDV2BadRequest ", 400)
}

func (o *GetXSDV2BadRequest) String() string {
	return fmt.Sprintf("[GET /xsds/{reportDefinitionNameVersion}][%d] getXSDV2BadRequest ", 400)
}

func (o *GetXSDV2BadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewGetXSDV2NotFound creates a GetXSDV2NotFound with default headers values
func NewGetXSDV2NotFound() *GetXSDV2NotFound {
	return &GetXSDV2NotFound{}
}

/*
GetXSDV2NotFound describes a response with status code 404, with default header values.

XSD file not found
*/
type GetXSDV2NotFound struct {
}

// IsSuccess returns true when this get x s d v2 not found response has a 2xx status code
func (o *GetXSDV2NotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this get x s d v2 not found response has a 3xx status code
func (o *GetXSDV2NotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get x s d v2 not found response has a 4xx status code
func (o *GetXSDV2NotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this get x s d v2 not found response has a 5xx status code
func (o *GetXSDV2NotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this get x s d v2 not found response a status code equal to that given
func (o *GetXSDV2NotFound) IsCode(code int) bool {
	return code == 404
}

// Code gets the status code for the get x s d v2 not found response
func (o *GetXSDV2NotFound) Code() int {
	return 404
}

func (o *GetXSDV2NotFound) Error() string {
	return fmt.Sprintf("[GET /xsds/{reportDefinitionNameVersion}][%d] getXSDV2NotFound ", 404)
}

func (o *GetXSDV2NotFound) String() string {
	return fmt.Sprintf("[GET /xsds/{reportDefinitionNameVersion}][%d] getXSDV2NotFound ", 404)
}

func (o *GetXSDV2NotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewGetXSDV2InternalServerError creates a GetXSDV2InternalServerError with default headers values
func NewGetXSDV2InternalServerError() *GetXSDV2InternalServerError {
	return &GetXSDV2InternalServerError{}
}

/*
GetXSDV2InternalServerError describes a response with status code 500, with default header values.

Internal Server Error
*/
type GetXSDV2InternalServerError struct {
}

// IsSuccess returns true when this get x s d v2 internal server error response has a 2xx status code
func (o *GetXSDV2InternalServerError) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this get x s d v2 internal server error response has a 3xx status code
func (o *GetXSDV2InternalServerError) IsRedirect() bool {
	return false
}

// IsClientError returns true when this get x s d v2 internal server error response has a 4xx status code
func (o *GetXSDV2InternalServerError) IsClientError() bool {
	return false
}

// IsServerError returns true when this get x s d v2 internal server error response has a 5xx status code
func (o *GetXSDV2InternalServerError) IsServerError() bool {
	return true
}

// IsCode returns true when this get x s d v2 internal server error response a status code equal to that given
func (o *GetXSDV2InternalServerError) IsCode(code int) bool {
	return code == 500
}

// Code gets the status code for the get x s d v2 internal server error response
func (o *GetXSDV2InternalServerError) Code() int {
	return 500
}

func (o *GetXSDV2InternalServerError) Error() string {
	return fmt.Sprintf("[GET /xsds/{reportDefinitionNameVersion}][%d] getXSDV2InternalServerError ", 500)
}

func (o *GetXSDV2InternalServerError) String() string {
	return fmt.Sprintf("[GET /xsds/{reportDefinitionNameVersion}][%d] getXSDV2InternalServerError ", 500)
}

func (o *GetXSDV2InternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

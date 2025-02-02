// Code generated by go-swagger; DO NOT EDIT.

package client

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"github.com/go-openapi/runtime"
	httptransport "github.com/go-openapi/runtime/client"
	"github.com/go-openapi/strfmt"

	"github.com/pjhrobles/cybersource-rest-client-go/client/capture"
	"github.com/pjhrobles/cybersource-rest-client-go/client/conversion_details"
	"github.com/pjhrobles/cybersource-rest-client-go/client/credit"
	"github.com/pjhrobles/cybersource-rest-client-go/client/decision_manager"
	"github.com/pjhrobles/cybersource-rest-client-go/client/download_d_t_d"
	"github.com/pjhrobles/cybersource-rest-client-go/client/download_x_s_d"
	"github.com/pjhrobles/cybersource-rest-client-go/client/instrument_identifier"
	"github.com/pjhrobles/cybersource-rest-client-go/client/key_generation"
	"github.com/pjhrobles/cybersource-rest-client-go/client/net_fundings"
	"github.com/pjhrobles/cybersource-rest-client-go/client/notification_of_changes"
	"github.com/pjhrobles/cybersource-rest-client-go/client/payment_batch_summaries"
	"github.com/pjhrobles/cybersource-rest-client-go/client/payment_instrument"
	"github.com/pjhrobles/cybersource-rest-client-go/client/payments"
	"github.com/pjhrobles/cybersource-rest-client-go/client/payouts"
	"github.com/pjhrobles/cybersource-rest-client-go/client/purchase_and_refund_details"
	"github.com/pjhrobles/cybersource-rest-client-go/client/refund"
	"github.com/pjhrobles/cybersource-rest-client-go/client/report_definitions"
	"github.com/pjhrobles/cybersource-rest-client-go/client/report_downloads"
	"github.com/pjhrobles/cybersource-rest-client-go/client/report_subscriptions"
	"github.com/pjhrobles/cybersource-rest-client-go/client/reports"
	"github.com/pjhrobles/cybersource-rest-client-go/client/reversal"
	"github.com/pjhrobles/cybersource-rest-client-go/client/search_transactions"
	"github.com/pjhrobles/cybersource-rest-client-go/client/secure_file_share"
	"github.com/pjhrobles/cybersource-rest-client-go/client/tokenization"
	"github.com/pjhrobles/cybersource-rest-client-go/client/transaction_batches"
	"github.com/pjhrobles/cybersource-rest-client-go/client/transaction_details"
	"github.com/pjhrobles/cybersource-rest-client-go/client/user_management"
	"github.com/pjhrobles/cybersource-rest-client-go/client/void"
)

// Default cybersource HTTP client.
var Default = NewHTTPClient(nil)

const (
	// DefaultHost is the default Host
	// found in Meta (info) section of spec file
	DefaultHost string = "apitest.cybersource.com"
	// DefaultBasePath is the default BasePath
	// found in Meta (info) section of spec file
	DefaultBasePath string = "/"
)

// DefaultSchemes are the default schemes found in Meta (info) section of spec file
var DefaultSchemes = []string{"https"}

// NewHTTPClient creates a new cybersource HTTP client.
func NewHTTPClient(formats strfmt.Registry) *Cybersource {
	return NewHTTPClientWithConfig(formats, nil)
}

// NewHTTPClientWithConfig creates a new cybersource HTTP client,
// using a customizable transport config.
func NewHTTPClientWithConfig(formats strfmt.Registry, cfg *TransportConfig) *Cybersource {
	// ensure nullable parameters have default
	if cfg == nil {
		cfg = DefaultTransportConfig()
	}

	// create transport and client
	transport := httptransport.New(cfg.Host, cfg.BasePath, cfg.Schemes)
	return New(transport, formats)
}

// New creates a new cybersource client
func New(transport runtime.ClientTransport, formats strfmt.Registry) *Cybersource {
	// ensure nullable parameters have default
	if formats == nil {
		formats = strfmt.Default
	}

	cli := new(Cybersource)
	cli.Transport = transport
	cli.Capture = capture.New(transport, formats)
	cli.ConversionDetails = conversion_details.New(transport, formats)
	cli.Credit = credit.New(transport, formats)
	cli.DecisionManager = decision_manager.New(transport, formats)
	cli.Downloaddtd = download_d_t_d.New(transport, formats)
	cli.Downloadxsd = download_x_s_d.New(transport, formats)
	cli.InstrumentIdentifier = instrument_identifier.New(transport, formats)
	cli.KeyGeneration = key_generation.New(transport, formats)
	cli.NetFundings = net_fundings.New(transport, formats)
	cli.NotificationOfChanges = notification_of_changes.New(transport, formats)
	cli.PaymentBatchSummaries = payment_batch_summaries.New(transport, formats)
	cli.PaymentInstrument = payment_instrument.New(transport, formats)
	cli.Payments = payments.New(transport, formats)
	cli.Payouts = payouts.New(transport, formats)
	cli.PurchaseAndRefundDetails = purchase_and_refund_details.New(transport, formats)
	cli.Refund = refund.New(transport, formats)
	cli.ReportDefinitions = report_definitions.New(transport, formats)
	cli.ReportDownloads = report_downloads.New(transport, formats)
	cli.ReportSubscriptions = report_subscriptions.New(transport, formats)
	cli.Reports = reports.New(transport, formats)
	cli.Reversal = reversal.New(transport, formats)
	cli.SearchTransactions = search_transactions.New(transport, formats)
	cli.SecureFileShare = secure_file_share.New(transport, formats)
	cli.Tokenization = tokenization.New(transport, formats)
	cli.TransactionBatches = transaction_batches.New(transport, formats)
	cli.TransactionDetails = transaction_details.New(transport, formats)
	cli.UserManagement = user_management.New(transport, formats)
	cli.Void = void.New(transport, formats)
	return cli
}

// DefaultTransportConfig creates a TransportConfig with the
// default settings taken from the meta section of the spec file.
func DefaultTransportConfig() *TransportConfig {
	return &TransportConfig{
		Host:     DefaultHost,
		BasePath: DefaultBasePath,
		Schemes:  DefaultSchemes,
	}
}

// TransportConfig contains the transport related info,
// found in the meta section of the spec file.
type TransportConfig struct {
	Host     string
	BasePath string
	Schemes  []string
}

// WithHost overrides the default host,
// provided by the meta section of the spec file.
func (cfg *TransportConfig) WithHost(host string) *TransportConfig {
	cfg.Host = host
	return cfg
}

// WithBasePath overrides the default basePath,
// provided by the meta section of the spec file.
func (cfg *TransportConfig) WithBasePath(basePath string) *TransportConfig {
	cfg.BasePath = basePath
	return cfg
}

// WithSchemes overrides the default schemes,
// provided by the meta section of the spec file.
func (cfg *TransportConfig) WithSchemes(schemes []string) *TransportConfig {
	cfg.Schemes = schemes
	return cfg
}

// Cybersource is a client for cybersource
type Cybersource struct {
	Capture capture.ClientService

	ConversionDetails conversion_details.ClientService

	Credit credit.ClientService

	DecisionManager decision_manager.ClientService

	Downloaddtd download_d_t_d.ClientService

	Downloadxsd download_x_s_d.ClientService

	InstrumentIdentifier instrument_identifier.ClientService

	KeyGeneration key_generation.ClientService

	NetFundings net_fundings.ClientService

	NotificationOfChanges notification_of_changes.ClientService

	PaymentBatchSummaries payment_batch_summaries.ClientService

	PaymentInstrument payment_instrument.ClientService

	Payments payments.ClientService

	Payouts payouts.ClientService

	PurchaseAndRefundDetails purchase_and_refund_details.ClientService

	Refund refund.ClientService

	ReportDefinitions report_definitions.ClientService

	ReportDownloads report_downloads.ClientService

	ReportSubscriptions report_subscriptions.ClientService

	Reports reports.ClientService

	Reversal reversal.ClientService

	SearchTransactions search_transactions.ClientService

	SecureFileShare secure_file_share.ClientService

	Tokenization tokenization.ClientService

	TransactionBatches transaction_batches.ClientService

	TransactionDetails transaction_details.ClientService

	UserManagement user_management.ClientService

	Void void.ClientService

	Transport runtime.ClientTransport
}

// SetTransport changes the transport on the client and all its subresources
func (c *Cybersource) SetTransport(transport runtime.ClientTransport) {
	c.Transport = transport
	c.Capture.SetTransport(transport)
	c.ConversionDetails.SetTransport(transport)
	c.Credit.SetTransport(transport)
	c.DecisionManager.SetTransport(transport)
	c.Downloaddtd.SetTransport(transport)
	c.Downloadxsd.SetTransport(transport)
	c.InstrumentIdentifier.SetTransport(transport)
	c.KeyGeneration.SetTransport(transport)
	c.NetFundings.SetTransport(transport)
	c.NotificationOfChanges.SetTransport(transport)
	c.PaymentBatchSummaries.SetTransport(transport)
	c.PaymentInstrument.SetTransport(transport)
	c.Payments.SetTransport(transport)
	c.Payouts.SetTransport(transport)
	c.PurchaseAndRefundDetails.SetTransport(transport)
	c.Refund.SetTransport(transport)
	c.ReportDefinitions.SetTransport(transport)
	c.ReportDownloads.SetTransport(transport)
	c.ReportSubscriptions.SetTransport(transport)
	c.Reports.SetTransport(transport)
	c.Reversal.SetTransport(transport)
	c.SearchTransactions.SetTransport(transport)
	c.SecureFileShare.SetTransport(transport)
	c.Tokenization.SetTransport(transport)
	c.TransactionBatches.SetTransport(transport)
	c.TransactionDetails.SetTransport(transport)
	c.UserManagement.SetTransport(transport)
	c.Void.SetTransport(transport)
}

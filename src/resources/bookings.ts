// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as BookingsAPI from './bookings';
import { PageNumberURLPagination } from '../pagination';

export class Bookings extends APIResource {
  /**
   * A booking is a temporary hold on a trip. It is not confirmed until the payment
   * is processed.
   */
  create(body: BookingCreateParams, options?: Core.RequestOptions): Core.APIPromise<Booking> {
    return this._client.post('/bookings', { body, ...options });
  }

  /**
   * Returns the details of a specific booking.
   */
  retrieve(bookingId: string, options?: Core.RequestOptions): Core.APIPromise<Booking> {
    return this._client.get(`/bookings/${bookingId}`, options);
  }

  /**
   * Returns a list of all trip bookings by the authenticated user.
   */
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<BookingListResponsesPageNumberURLPagination, BookingListResponse> {
    return this._client.getAPIList('/bookings', BookingListResponsesPageNumberURLPagination, options);
  }

  /**
   * Deletes a booking, cancelling the hold on the trip.
   */
  delete(bookingId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/bookings/${bookingId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * A payment is an attempt to pay for the booking, which will confirm the booking
   * for the user and enable them to get their tickets.
   */
  payment(
    bookingId: string,
    body: BookingPaymentParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BookingPayment> {
    return this._client.post(`/bookings/${bookingId}/payment`, { body, ...options });
  }
}

export class BookingListResponsesPageNumberURLPagination extends PageNumberURLPagination<BookingListResponse> {}

export interface Booking {
  /**
   * Unique identifier for the booking
   */
  id?: string;

  /**
   * Indicates whether the passenger has a bicycle.
   */
  has_bicycle?: boolean;

  /**
   * Indicates whether the passenger has a dog.
   */
  has_dog?: boolean;

  /**
   * Name of the passenger
   */
  passenger_name?: string;

  /**
   * Identifier of the booked trip
   */
  trip_id?: string;
}

export interface BookingPayment {
  /**
   * Unique identifier for the payment. This will be a unique identifier for the
   * payment, and is used to reference the payment in other objects.
   */
  id?: string;

  /**
   * Amount intended to be collected by this payment. A positive decimal figure
   * describing the amount to be collected.
   */
  amount?: number;

  /**
   * Three-letter
   * [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in
   * lowercase.
   */
  currency?: 'bam' | 'bgn' | 'chf' | 'eur' | 'gbp' | 'nok' | 'sek' | 'try';

  /**
   * The payment source to take the payment from. This can be a card or a bank
   * account. Some of these properties will be hidden on read to protect PII leaking.
   */
  source?: BookingPayment.Card | BookingPayment.BankAccount;

  /**
   * The status of the payment, one of `pending`, `succeeded`, or `failed`.
   */
  status?: 'pending' | 'succeeded' | 'failed';
}

export namespace BookingPayment {
  /**
   * A card (debit or credit) to take payment from.
   */
  export interface Card {
    address_country: string;

    /**
     * Two-digit number representing the card's expiration month.
     */
    exp_month: number;

    /**
     * Four-digit number representing the card's expiration year.
     */
    exp_year: number;

    /**
     * Cardholder's full name as it appears on the card.
     */
    name: string;

    /**
     * The card number, as a string without any separators. On read all but the last
     * four digits will be masked for security.
     */
    number: string;

    address_city?: string;

    address_post_code?: string;

    object?: 'card';
  }

  /**
   * A bank account to take payment from. Must be able to make payments in the
   * currency specified in the payment.
   */
  export interface BankAccount {
    /**
     * The type of entity that holds the account. This can be either `individual` or
     * `company`.
     */
    account_type: 'individual' | 'company';

    /**
     * The name of the bank associated with the routing number.
     */
    bank_name: string;

    /**
     * Two-letter country code (ISO 3166-1 alpha-2).
     */
    country: string;

    name: string;

    /**
     * The account number for the bank account, in string form. Must be a current
     * account.
     */
    number: string;

    object?: 'bank_account';

    /**
     * The sort code for the bank account, in string form. Must be a six-digit number.
     */
    sort_code?: string;
  }
}

export interface BookingListResponse {
  /**
   * Unique identifier for the booking
   */
  id?: string;

  /**
   * Indicates whether the passenger has a bicycle.
   */
  has_bicycle?: boolean;

  /**
   * Indicates whether the passenger has a dog.
   */
  has_dog?: boolean;

  /**
   * Name of the passenger
   */
  passenger_name?: string;

  /**
   * Identifier of the booked trip
   */
  trip_id?: string;
}

export interface BookingCreateParams {
  /**
   * Indicates whether the passenger has a bicycle.
   */
  has_bicycle?: boolean;

  /**
   * Indicates whether the passenger has a dog.
   */
  has_dog?: boolean;

  /**
   * Name of the passenger
   */
  passenger_name?: string;

  /**
   * Identifier of the booked trip
   */
  trip_id?: string;
}

export interface BookingPaymentParams {
  /**
   * Amount intended to be collected by this payment. A positive decimal figure
   * describing the amount to be collected.
   */
  amount?: number;

  /**
   * Three-letter
   * [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in
   * lowercase.
   */
  currency?: 'bam' | 'bgn' | 'chf' | 'eur' | 'gbp' | 'nok' | 'sek' | 'try';

  /**
   * The payment source to take the payment from. This can be a card or a bank
   * account. Some of these properties will be hidden on read to protect PII leaking.
   */
  source?: BookingPaymentParams.Card | BookingPaymentParams.BankAccount;
}

export namespace BookingPaymentParams {
  /**
   * A card (debit or credit) to take payment from.
   */
  export interface Card {
    address_country: string;

    /**
     * Card security code, 3 or 4 digits usually found on the back of the card.
     */
    cvc: number;

    /**
     * Two-digit number representing the card's expiration month.
     */
    exp_month: number;

    /**
     * Four-digit number representing the card's expiration year.
     */
    exp_year: number;

    /**
     * Cardholder's full name as it appears on the card.
     */
    name: string;

    /**
     * The card number, as a string without any separators. On read all but the last
     * four digits will be masked for security.
     */
    number: string;

    address_city?: string;

    address_line1?: string;

    address_line2?: string;

    address_post_code?: string;

    object?: 'card';
  }

  /**
   * A bank account to take payment from. Must be able to make payments in the
   * currency specified in the payment.
   */
  export interface BankAccount {
    /**
     * The type of entity that holds the account. This can be either `individual` or
     * `company`.
     */
    account_type: 'individual' | 'company';

    /**
     * The name of the bank associated with the routing number.
     */
    bank_name: string;

    /**
     * Two-letter country code (ISO 3166-1 alpha-2).
     */
    country: string;

    name: string;

    /**
     * The account number for the bank account, in string form. Must be a current
     * account.
     */
    number: string;

    object?: 'bank_account';

    /**
     * The sort code for the bank account, in string form. Must be a six-digit number.
     */
    sort_code?: string;
  }
}

export namespace Bookings {
  export import Booking = BookingsAPI.Booking;
  export import BookingPayment = BookingsAPI.BookingPayment;
  export import BookingListResponse = BookingsAPI.BookingListResponse;
  export import BookingListResponsesPageNumberURLPagination = BookingsAPI.BookingListResponsesPageNumberURLPagination;
  export import BookingCreateParams = BookingsAPI.BookingCreateParams;
  export import BookingPaymentParams = BookingsAPI.BookingPaymentParams;
}

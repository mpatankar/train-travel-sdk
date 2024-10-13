// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Errors from './error';
import * as Uploads from './uploads';
import { type Agent } from './_shims/index';
import * as Core from './core';
import * as API from './resources/index';

export interface ClientOptions {
  /**
   * The access token for accessing the API endpoints.
   */
  accessToken?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['TRAIN_TRAVEL_FRICTION_ANALYSIS_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Train Travel Friction Analysis API.
 */
export class TrainTravelFrictionAnalysis extends Core.APIClient {
  accessToken: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Train Travel Friction Analysis API.
   *
   * @param {string | undefined} [opts.accessToken=process.env['ACCESS_TOKEN'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['TRAIN_TRAVEL_FRICTION_ANALYSIS_BASE_URL'] ?? https://api.example.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('TRAIN_TRAVEL_FRICTION_ANALYSIS_BASE_URL'),
    accessToken = Core.readEnv('ACCESS_TOKEN'),
    ...opts
  }: ClientOptions = {}) {
    if (accessToken === undefined) {
      throw new Errors.TrainTravelFrictionAnalysisError(
        "The ACCESS_TOKEN environment variable is missing or empty; either provide it, or instantiate the TrainTravelFrictionAnalysis client with an accessToken option, like new TrainTravelFrictionAnalysis({ accessToken: 'My Access Token' }).",
      );
    }

    const options: ClientOptions = {
      accessToken,
      ...opts,
      baseURL: baseURL || `https://api.example.com`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.accessToken = accessToken;
  }

  stations: API.Stations = new API.Stations(this);
  trips: API.Trips = new API.Trips(this);
  bookings: API.Bookings = new API.Bookings(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.accessToken}` };
  }

  static TrainTravelFrictionAnalysis = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static TrainTravelFrictionAnalysisError = Errors.TrainTravelFrictionAnalysisError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

export const {
  TrainTravelFrictionAnalysisError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace TrainTravelFrictionAnalysis {
  export import RequestOptions = Core.RequestOptions;

  export import Stations = API.Stations;
  export import StationListResponse = API.StationListResponse;
  export import StationListParams = API.StationListParams;

  export import Trips = API.Trips;
  export import TripListResponse = API.TripListResponse;
  export import TripListParams = API.TripListParams;

  export import Bookings = API.Bookings;
  export import Booking = API.Booking;
  export import BookingPayment = API.BookingPayment;
  export import BookingListResponse = API.BookingListResponse;
  export import BookingCreateParams = API.BookingCreateParams;
  export import BookingPaymentParams = API.BookingPaymentParams;
}

export default TrainTravelFrictionAnalysis;

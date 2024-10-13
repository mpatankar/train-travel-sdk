// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as TripsAPI from './trips';

export class Trips extends APIResource {
  /**
   * Returns a list of available train trips between the specified origin and
   * destination stations on the given date, and allows for filtering by bicycle and
   * dog allowances.
   */
  list(query: TripListParams, options?: Core.RequestOptions): Core.APIPromise<TripListResponse> {
    return this._client.get('/trips', { query, ...options });
  }
}

export interface TripListResponse {
  /**
   * The wrapper for a collection is an array of objects.
   */
  data?: Array<TripListResponse.Data>;

  links?: TripListResponse.Links;
}

export namespace TripListResponse {
  export interface Data {
    /**
     * Unique identifier for the trip
     */
    id?: string;

    /**
     * The date and time when the trip arrives
     */
    arrival_time?: string;

    /**
     * Indicates whether bicycles are allowed on the trip
     */
    bicycles_allowed?: boolean;

    /**
     * The date and time when the trip departs
     */
    departure_time?: string;

    /**
     * The destination station of the trip
     */
    destination?: string;

    /**
     * Indicates whether dogs are allowed on the trip
     */
    dogs_allowed?: boolean;

    /**
     * The name of the operator of the trip
     */
    operator?: string;

    /**
     * The starting station of the trip
     */
    origin?: string;

    /**
     * The cost of the trip
     */
    price?: number;
  }

  export interface Links {
    next?: string;

    prev?: string;

    self?: string;
  }
}

export interface TripListParams {
  /**
   * The date and time of the trip in ISO 8601 format in origin station's timezone.
   */
  date: string;

  /**
   * The ID of the destination station
   */
  destination: string;

  /**
   * The ID of the origin station
   */
  origin: string;

  /**
   * Only return trips where bicycles are known to be allowed
   */
  bicycles?: boolean;

  /**
   * Only return trips where dogs are known to be allowed
   */
  dogs?: boolean;

  /**
   * The page of results to be returned
   */
  page?: number;
}

export namespace Trips {
  export import TripListResponse = TripsAPI.TripListResponse;
  export import TripListParams = TripsAPI.TripListParams;
}
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as StationsAPI from './stations';

export class Stations extends APIResource {
  /**
   * Returns a paginated and searchable list of all train stations.
   */
  list(query?: StationListParams, options?: Core.RequestOptions): Core.APIPromise<StationListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<StationListResponse>;
  list(
    query: StationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<StationListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/stations', { query, ...options });
  }
}

export interface StationListResponse {
  data?: Array<StationListResponse.Data>;
}

export namespace StationListResponse {
  export interface Data {
    /**
     * Unique identifier for the station.
     */
    id: string;

    /**
     * The address of the station.
     */
    address: string;

    /**
     * The country code of the station.
     */
    country_code: string;

    /**
     * The name of the station
     */
    name: string;

    /**
     * The timezone of the station in the
     * [IANA Time Zone Database format](https://www.iana.org/time-zones).
     */
    timezone?: string;
  }
}

export interface StationListParams {
  /**
   * The latitude and longitude of the user's location, to narrow down the search
   * results to sites within a proximity of this location.
   */
  coordinates?: string;

  /**
   * The page number to return
   */
  page?: number;

  /**
   * A search term to filter the list of stations by name or address.
   */
  search?: string;
}

export namespace Stations {
  export import StationListResponse = StationsAPI.StationListResponse;
  export import StationListParams = StationsAPI.StationListParams;
}

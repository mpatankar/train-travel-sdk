// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AbstractPage, Response, APIClient, FinalRequestOptions, PageInfo } from './core';

export interface PageNumberURLPaginationResponse<Item> {
  data: Array<Item>;

  links: PageNumberURLPaginationResponse.Links;
}

export namespace PageNumberURLPaginationResponse {
  export interface Links {
    next?: string;

    prev?: string;

    self?: string;
  }
}

export interface PageNumberURLPaginationParams {
  page?: number;
}

export class PageNumberURLPagination<Item>
  extends AbstractPage<Item>
  implements PageNumberURLPaginationResponse<Item>
{
  data: Array<Item>;

  links: PageNumberURLPaginationResponse.Links;

  constructor(
    client: APIClient,
    response: Response,
    body: PageNumberURLPaginationResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.data = body.data || [];
    this.links = body.links || {};
  }

  getPaginatedItems(): Item[] {
    return this.data ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<PageNumberURLPaginationParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const url = this.links?.next;
    if (!url) return null;

    return { url: new URL(url) };
  }
}

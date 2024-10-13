// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TrainTravelFrictionAnalysis from 'train-travel-friction-analysis';
import { Response } from 'node-fetch';

const client = new TrainTravelFrictionAnalysis({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource trips', () => {
  test('list: only required params', async () => {
    const responsePromise = client.trips.list({
      date: '2019-12-27T18:11:19.117Z',
      destination: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      origin: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.trips.list({
      date: '2019-12-27T18:11:19.117Z',
      destination: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      origin: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      bicycles: true,
      dogs: true,
      page: 0,
    });
  });
});

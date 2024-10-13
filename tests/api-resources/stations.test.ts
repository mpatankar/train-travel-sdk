// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TrainTravelFrictionAnalysis from 'train-travel-friction-analysis';
import { Response } from 'node-fetch';

const client = new TrainTravelFrictionAnalysis({
  clientId: 'My Client ID',
  clientSecret: 'My Client Secret',
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource stations', () => {
  test('list', async () => {
    const responsePromise = client.stations.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.stations.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      TrainTravelFrictionAnalysis.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.stations.list(
        { coordinates: 'coordinates', page: 1, search: 'Milano Centrale' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(TrainTravelFrictionAnalysis.NotFoundError);
  });
});

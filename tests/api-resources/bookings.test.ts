// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TrainTravelFrictionAnalysis from 'train-travel-friction-analysis-demo';
import { Response } from 'node-fetch';

const client = new TrainTravelFrictionAnalysis({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource bookings', () => {
  test('create', async () => {
    const responsePromise = client.bookings.create({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve', async () => {
    const responsePromise = client.bookings.retrieve('1725ff48-ab45-4bb5-9d02-88745177dedb');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.bookings.retrieve('1725ff48-ab45-4bb5-9d02-88745177dedb', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(TrainTravelFrictionAnalysis.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.bookings.list();
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
    await expect(client.bookings.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      TrainTravelFrictionAnalysis.NotFoundError,
    );
  });

  test('delete', async () => {
    const responsePromise = client.bookings.delete('1725ff48-ab45-4bb5-9d02-88745177dedb');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.bookings.delete('1725ff48-ab45-4bb5-9d02-88745177dedb', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(TrainTravelFrictionAnalysis.NotFoundError);
  });

  test('payment', async () => {
    const responsePromise = client.bookings.payment('1725ff48-ab45-4bb5-9d02-88745177dedb', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});

import {createAsyncThunk} from '@reduxjs/toolkit';
import {BASE_URL} from '../../../Networking/config';
import httpClient from '../../../Networking/httpClient';

// Get All User Lists
export const getVideosAsync = createAsyncThunk('videoList', async () => {
  const link = BASE_URL + `/v1/videos`;
  const response = await httpClient.callAPI('GET', link, {}, null);
  return response;
});

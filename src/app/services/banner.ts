import axios, { AxiosError } from 'axios';


import { BANNER_URL } from '../commons/configs';
import { BannerProps } from '../commons/types/banner';

const handleAxiosError = (
  error: AxiosError<any>,
): { status: number; data: any } => {
  if (error?.response) {
    return { status: error?.response?.status, data: error?.response?.data };
  } else {
    return { status: 500, data: { message: 'Internal Server Error' } };
  }
};


export const getBannerList = async (): Promise<{
  status: number;
  data: BannerProps[];
}> => {
  try {
    const response = await axios.get(BANNER_URL);
    console.log(response.data);
    return { status: response?.status, data: response.data as BannerProps[] };
  } catch (error) {
    return handleAxiosError(error as AxiosError<any>);
  }
};

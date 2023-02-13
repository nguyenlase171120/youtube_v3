import axiosClient from "./axiosClient";

interface ICommonProps {
  part?: string;
  maxResults?: number;
}

interface ISearchProps extends ICommonProps {
  q: string;
}

const videoApi = {
  searchVideo: ({ part = "snippet", maxResults = 50, q }: ISearchProps) => {
    const url = `/search`;
    return axiosClient.get(url, { params: { part, maxResults, q } });
  },
};

export default videoApi;

import axiosClient from "./axiosClient";

interface ICommonProps {
  part?: string;
  maxResults?: number;
  order?: string;
}

interface ISearchProps extends ICommonProps {
  q?: string;
  channelId?: string;
}

interface IChannelProps extends ICommonProps {
  id: string;
}

const videoApi = {
  searchVideo: ({
    part = "snippet,id",
    maxResults = 50,
    q = "New",
    channelId,
    order = "date",
  }: ISearchProps) => {
    const url = `/search`;
    return axiosClient.get(url, {
      params: { part, maxResults, q, channelId, order },
    });
  },
  getChannelDetail: ({ id, part = "snippet,statistics" }: IChannelProps) => {
    const url = "/channels";
    return axiosClient.get(url, { params: { id, part } });
  },

  getVideoDetail: ({
    part = "contentDetails,snippet,statistics",
    id,
  }: IChannelProps) => {
    const url = "/videos";
    return axiosClient.get(url, { params: { part, id } });
  },
};

export default videoApi;

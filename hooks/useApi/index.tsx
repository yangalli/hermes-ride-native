import { AxiosResponse } from "axios";
import { useQuery, UseQueryOptions } from "react-query";

interface Props {
  key: string;
  fetchMethod(): Promise<AxiosResponse>;
  options?: UseQueryOptions<any, Error, any>;
}
export function useApi<T>({ key, fetchMethod, options }: Props) {
  const { isLoading, error, data, refetch } = useQuery<T, Error>(
    key,
    async () => {
      const { data: fetchData } = await fetchMethod();

      return fetchData;
    },
    options
  );

  return {
    isLoading,
    error,
    data,
    refetch,
  };
}

import { GET_REPOS_QUERY_KEY, getRepos } from "@site/src/api/get-repos";
import { useQuery } from "react-query";

const useGetRepos = () => {
  return useQuery(GET_REPOS_QUERY_KEY, getRepos);
};

export default useGetRepos;

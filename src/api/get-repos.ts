import axios from "axios";

export interface GithubRepo {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  html_url: string;
  description?: string;
  fork: false;
  url: string;
  homepage?: string;
  language?: string;
  topics: string[];
  visibility: string;
  forks: number;
  default_branch: string;
}

export const getRepos = () => {
  return axios
    .get<GithubRepo[]>("https://api.github.com/users/01Joseph-Hwang10/repos")
    .then((response) => response.data);
};

export const GET_REPOS_QUERY_KEY = "projects";

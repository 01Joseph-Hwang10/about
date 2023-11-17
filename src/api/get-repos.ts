import axios from "axios";
import { pipe } from "fp-ts/function";
import { map, flatten } from "fp-ts/Array";
import * as task from "fp-ts/Task";

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

export const getRepos = async (): Promise<GithubRepo[]> => {
  return pipe(
    ["01Joseph-Hwang10", "shepherd231"],
    map((userId) => `https://api.github.com/users/${userId}/repos`),
    map((url) => axios.get<GithubRepo[]>(url)),
    (tasks) => () => Promise.all(tasks),
    task.map(map(({ data }) => data)),
    task.map(flatten),
  )();
};

export const GET_REPOS_QUERY_KEY = "projects";

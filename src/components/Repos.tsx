import React from "react";
import { Repo, RepoProps } from "./Repo";

const repos: RepoProps[] = [
  {
    name: "Audits",
    link: "https://github.com/Emmet-Finance/audits",
  },
  {
    name: "Emmet.SDK v3",
    link: "https://github.com/Emmet-Finance/emmet.sdk.v3",
  },
  {
    name: "Documents",
    link: "https://github.com/Emmet-Finance/Emmet.Docs",
  },
  {
    name: "Emmet.UI",
    link: "https://github.com/Emmet-Finance/websitev2",
  },
];

export const Repos = () => {
  return (
    <div className="grid md:grid-cols-2 p-6 gap-6 mt-16">
      {repos.map((repo) => (
        <Repo key={repo.name} {...repo} />
      ))}
    </div>
  );
};
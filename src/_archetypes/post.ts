interface FrontMatterProps {
  title: string;
  desc: string | null;
  tags: string | null;
}

function frontMatter({ title, desc, tags }: FrontMatterProps) {
  const now = new Date();
  return `---
title: ${title}
description: ${desc ?? ""}
date: ${now.toISOString().slice(0, 10)}
${tagsBuilder(tags)}
---

### ${title}
Start typing here...
`;
}

function tagsBuilder(tags: string | null): string {
  if (!tags) return "";

  const v = tags.split(",").map((t) => `  - ${t.trim()}`).join("\n");

  return `tags:\n${v}`;
}

export default function () {
  const fileName = prompt("Post file name:");
  const title = prompt("Post title:");
  const desc = prompt("Short description:");
  const tags = prompt("Post tags (comma-separated):");

  if (!fileName) throw Error("file name is required to create a new post");
  if (!title) throw Error("post title is required to create a new post");

  return {
    path: `/wrds/${fileName.toLowerCase()}.md`,
    content: frontMatter({ title, desc, tags }),
  };
}

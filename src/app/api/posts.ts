import { promises } from "fs";
import path from "path";

export interface Post {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
}

export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => post.featured));
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => !post.featured));
}

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const data = await promises.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

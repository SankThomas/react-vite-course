import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

export const client = createClient({
  projectId: "",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-12-13",
  token: "",
});

const builder = createImageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export const getBlogPosts = async () => {
  return await client.fetch(`
      *[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        publishedAt,
        excerpt,
        mainImage,
        "tags": categories[]->{
          title
        },
        author->{
          name,
          image
        },
        "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180)
        }
    `);
};

export const getBlogPost = async (slug) => {
  return await client.fetch(
    ` *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      body,
      excerpt,
      publishedAt,
      mainImage,
      "tags": categories[]->{
        title
      },
      author->{
        name,
        image
      },
      "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180)
    }`,
    { slug }
  );
};

export const getComments = async (postId) => {
  return await client.fetch(
    `*[_type == "comment" && post._ref == $postId && approved == true] | order(_createdAt asc) {
      _id,
      _createdAt,
      name,
      email,
      message,
      userId
    }`,
    { postId }
  );
};

export const addComment = async (comment) => {
  return await client.create({
    _type: "comment",
    ...comment,
    approved: true, // Moderate comments in production
  });
};

export const deleteComment = async (commentId) => {
  return await client.delete(commentId);
};

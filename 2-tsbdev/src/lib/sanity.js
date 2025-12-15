import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

export const client = createClient({
  projectId: "d3j8d22l",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-12-13",
  token:
    "skQOQL4USi4oKmWRTAIQdtp6Ylhm6fbcM2YEKTEW2M30wUqTXimFWiplxIPElg8Pwy7A4KTmb03LgO17HzgziIjm3zw3ylVQA4eB0MbmiNEWb7WxTkROdFbaO8D4ky1U2XTTRZx8iQNCVwetUsrGxVCDEBWhVN00D1vLgIDOCgcJQcroMa3O",
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
        tags,
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
      tags,
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

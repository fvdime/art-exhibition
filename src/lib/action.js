import prisma from "./prisma";

export const GetAllImages = async () => {
  const images = await prisma.image.findMany()
  return images;
};

export const GetFeaturedImages = async () => {
  const images = await prisma.image.findMany({
    where: {
      featured: true
    }
  })
  return images;
};
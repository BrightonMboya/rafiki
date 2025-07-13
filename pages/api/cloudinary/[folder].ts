// pages/api/cloudinary/[folder].ts
import type { NextApiRequest, NextApiResponse } from "next";
import cloudinary from "../../../utils/cloudinary";
import getBase64ImageUrl from "../../../utils/generateBlurPlaceholder";
import type { ImageProps } from "../../../utils/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { folder } = req.query as { folder: string };

  try {
    const data = await cloudinary.v2.api.resources_by_asset_folder(`evance-shauri/${folder}`, {max_results: 100});
    let reducedResults: ImageProps[] = [];

    let i = 0;
    for (let result of data.resources) {
      reducedResults.push({
        id: i,
        height: String(result.height),
        width: String(result.width),
        public_id: result.public_id,
        format: result.format,
      });
      i++;
    }
    const blurImagePromises = reducedResults.map((image: ImageProps) => {
      return getBase64ImageUrl(image);
    });
    const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

    for (let i = 0; i < reducedResults.length; i++) {
      reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i];
    }

    res.status(200).json(reducedResults);
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ message: "Cloudinary fetch failed" });
  }
}

import fs from 'fs/promises';
import path from 'path';

export interface ImageData {
  name: string;
  src: string;
}

export async function getImages(directory: string): Promise<ImageData[]> {
  const publicDir = path.join(process.cwd(), 'public', 'images', directory);
  const files = await fs.readdir(publicDir);
  
  return files
    .filter(file => /\.(jpg|jpeg|png)$/i.test(file))
    .map(file => ({
      name: path.parse(file).name,
      src: `/images/${directory}/${file}`
    }));
}
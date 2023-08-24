export interface SeriesData {
  thumbnail: string;
  description: string;
  pathname: string;
}

export interface PostData extends SeriesData {
  featured: boolean;
  series: string;
  date: string;
  slug: string;
  tags: string;
  title: string;
}

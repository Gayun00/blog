export interface SeriesData {
  thumbnail: string;
  description: string;
}

export interface SeriesDataWithTitle extends SeriesData {
  title: string;
}

export interface PostData extends SeriesData {
  featured: boolean;
  series: string;
  date: string;
  slug: string;
  tags: string;
  title: string;
}

import {
  getAllPosts,
  getPost,
  getPostsOfSeries,
  getRelatedPosts,
  getSeries,
} from "./processPosts";
const mock = require("mock-fs");

const mockFs = () => {
  mock({
    __posts: {
      series1: {
        "post1.md": `---
title: Post 1
description: Description for Post 1
thumbnail: path/to/thumbnail1.png
---
Content for Post 1`,
        "post2.md": `---
title: Post 2
description: Description for Post 2
thumbnail: path/to/thumbnail2.png
---
Content for Post 2`,
        "data.md": `---
title: Data
description: Description for Data
thumbnail: path/to/thumbnail-data.png
---
Content for Data`,
      },
      series2: {
        "post3.md": `---
title: Post 3
description: Description for Post 3
thumbnail: path/to/thumbnail3.png
---
Content for Post 3`,
        "post4.md": `---
title: Post 4
description: Description for Post 4
thumbnail: path/to/thumbnail4.png
---
Content for Post 4`,
        "data.md": `---
title: Data
description: Description for Data
thumbnail: path/to/thumbnail-data.png
---
Content for Data`,
      },
    },
  });
};

const mockedPost = (seriesNumber: number, number: number) => {
  return {
    description: `Description for Post ${number}`,
    content: `Content for Post ${number}`,
    series: `series${seriesNumber}`,
    thumbnail: `path/to/thumbnail${number}.png`,
    title: `post${number}`,
  };
};

const mockedSeries = (number: number) => {
  return {
    description: "Description for Data",
    thumbnail: "path/to/thumbnail-data.png",
    title: `series${number}`,
  };
};

const allPosts = [
  mockedPost(1, 1),
  mockedPost(1, 2),
  mockedPost(2, 3),
  mockedPost(2, 4),
];

describe("processPosts", () => {
  beforeEach(() => {
    mockFs();
  });

  afterEach(() => {
    mock.restore();
  });

  it("getAllPosts() 테스트", () => {
    expect(getAllPosts()).toEqual(allPosts);
  });

  it("getRelatedPosts() 테스트", () => {
    expect(getRelatedPosts("post2")).toEqual([
      mockedPost(1, 1),
      mockedPost(2, 3),
    ]);
  });

  it("getSeries()", async () => {
    expect(await getSeries()).toEqual([mockedSeries(1), mockedSeries(2)]);
  });

  it("getPostsOfSeries()", () => {
    expect(getPostsOfSeries("series1")).toEqual([
      mockedPost(1, 1),
      mockedPost(1, 2),
    ]);
  });

  it("getPost", () => {
    expect(getPost("post1")).toEqual(mockedPost(1, 1));
  });
});

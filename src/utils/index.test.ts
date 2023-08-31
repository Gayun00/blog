import { getAllPosts, getRelatedPosts } from ".";
const mock = require("mock-fs");

const mockFs = () => {
  mock({
    __posts2: {
      series1: {
        "post1.md": "---\ntitle: Post 1\n---\nContent for Post 1",
        "post2.md": "---\ntitle: Post 1\n---\nContent for Post 1",
        "data.md": "---\ntitle: Data\n---\nContent for Data",
      },
      series2: {
        "post3.md": "---\ntitle: Post 1\n---\nContent for Post 3",
        "post4.md": "---\ntitle: Post 1\n---\nContent for Post 4",
        "data.md": "---\ntitle: Data\n---\nContent for Data",
      },
    },
  });
};

const allPosts = [
  {
    series: "series1",
    title: "post1",
  },
  {
    series: "series1",
    title: "post2",
  },

  {
    series: "series2",
    title: "post3",
  },
  {
    series: "series2",
    title: "post4",
  },
];

describe("getAllPosts() 테스트", () => {
  beforeEach(() => {
    mockFs();
  });

  afterEach(() => {
    mock.restore();
  });

  it("모든 포스트 정보 가져오기", () => {
    expect(getAllPosts()).toEqual(allPosts);
  });
});

describe("getRelatedPosts() 테스트", () => {
  beforeEach(() => {
    mockFs();
  });

  afterEach(() => {
    mock.restore();
  });

  it("포스트 제목으로 이전글과 다음글 정보 가져오기", () => {
    expect(getRelatedPosts("post2")).toEqual([
      {
        series: "series1",
        title: "post1",
      },
      {
        series: "series2",
        title: "post3",
      },
    ]);
  });
});

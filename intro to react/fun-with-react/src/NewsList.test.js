import React from "react";
import { render, screen } from "@testing-library/react";
import NewsList from "./newsList.js";

describe("NewsList", () => {
  it("renders loading message when isLoading is true", () => {
    const props = {
      rssFeedUrls: [],
      searchQuery: "",
    };

    render(<NewsList {...props} isLoading={true} />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders news items when isLoading is false", () => {
    const mockNews = [
      {
        title: "Test News 1",
        link: "http://example.com/news1",
        contentSnippet: "This is a test news 1",
        isoDate: new Date(),
      },
      {
        title: "Test News 2",
        link: "http://example.com/news2",
        contentSnippet: "This is a test news 2",
        isoDate: new Date(),
      },
    ];

    const props = {
      rssFeedUrls: [],
      searchQuery: "",
      isLoading: false,
      news: mockNews,
    };

    render(<NewsList {...props} />);

    mockNews.forEach((newsItem) => {
      expect(screen.getByText(newsItem.title)).toBeInTheDocument();
      expect(screen.getByText(newsItem.contentSnippet)).toBeInTheDocument();
      expect(screen.getByText("Published:")).toBeInTheDocument();
    });
  });
});

/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import React from "react";
import { render, screen, act } from "@testing-library/react";
import axios from "axios";
import NewsList from "../src/newsList.tsx";

// Mocking axios
jest.mock("axios");

const mockData = [
  {
    title: "Mock News Title 1",
    link: "https://example.com/news1",
    contentSnippet: "Mock content snippet 1",
    isoDate: "2023-01-01T12:00:00Z",
  },
  {
    title: "Mock News Title 2",
    link: "https://example.com/news2",
    contentSnippet: "Mock content snippet 2",
    isoDate: "2023-01-02T12:00:00Z",
  },
];

describe("NewsList", () => {
  beforeEach(() => {
    // Reset the axios mock and userEvent mock before each test
    jest.clearAllMocks();
  });

  test("renders loading state initially", async () => {
    async () => {
      await act(async () => {
        render(<NewsList rssFeedUrls={[]} searchQuery="" />);
      }),
        await expect(screen.getByText("Loading...")).toBeInTheDocument();
    };
  });

  test("renders news items after data fetching", async () => {
    axios.post.mockResolvedValue({ data: mockData });

    await act(async () => {
      render(
        <NewsList rssFeedUrls={["https://example.com/feed"]} searchQuery="" />,
      );
    });

    expect(screen.queryByText("Loading...")).toBeNull();

    // Check that the news items are rendered
    expect(screen.getByText("Mock News Title 1")).toBeInTheDocument();
    expect(screen.getByText("Mock News Title 2")).toBeInTheDocument();
  });
  test("should console.error on failed axios request", async () => {
    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    // Mocking a failed axios request
    axios.post.mockRejectedValue(new Error("Fake error"));

    render(<NewsList rssFeedUrls={["url1", "url2"]} searchQuery="query" />);

    // Wait for the component to finish rendering
    await screen.findByText("Loading...");

    // Wait for the axios request to complete
    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Error fetching data:",
      expect.any(Error),
    );

    consoleErrorSpy.mockRestore();
  });
  test("should filter news items by search query", async () => {
    axios.post.mockResolvedValueOnce({ data: mockData });
    await act(async () => {
      render(
        <NewsList rssFeedUrls={["mock-url"]} searchQuery="Mock News Title 1" />,
      );
    });
    expect(screen.getByText("Mock News Title 1")).toBeInTheDocument();
    expect(screen.queryByText("Mock News Title 2")).not.toBeInTheDocument();
  });
  test("should set treding words to commoun words", async () => {
    const mockTrends = [
      {
        title: "Mock News Title 1",
        link: "https://example.com/news1",
        contentSnippet: "Microsoft London",
        isoDate: "2023-01-01T12:00:00Z",
      },
      {
        title: "Mock News Title 2",
        link: "https://example.com/news2",
        contentSnippet: "London Microsoft",
        isoDate: "2023-01-02T12:00:00Z",
      },
    ];
    axios.post.mockResolvedValueOnce({ data: mockTrends });
    await act(async () => {
      render(<NewsList rssFeedUrls={["mock-url"]} searchQuery="" />);
    });
    const container = screen.getByTestId("trending-words");
    expect(container).toBeInTheDocument("Microsoft");
    expect(container).toBeInTheDocument("London");
  });
});

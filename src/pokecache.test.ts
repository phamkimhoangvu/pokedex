import { Cache } from "./pokecache.js";
import { test, expect } from "vitest";

test.concurrent.each([
  {
    key: "https://example.com",
    val: "testdata",
    interval: 500, // 0.5 seconds
  },
  {
    key: "https://example.com/path",
    val: "moretestdata",
    interval: 1000, // 1 second
  },
])("Test Caching $interval ms", async ({ key, val, interval }) => {
  const cache = new Cache(interval);
  try {
    cache.add(key, val);
    const cached = cache.get(key);
    expect(cached).toBe(val);
    await expect
      .poll(() => cache.get(key), { timeout: interval * 4 })
      .toBe(undefined);
  } finally {
    cache.stopReapLoop();
  }
});

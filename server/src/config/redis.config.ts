import { createClient } from "redis";

export const redisClient = createClient({
  url: process.env.REDIS_URL || "redis://localhost:6379",
});

export const connectRedis = async (): Promise<void> => {
  try {
    await redisClient.connect();
    console.log("✅ Redis Connected");

    redisClient.on("error", (err) => {
      console.error("Redis Error:", err);
    });
  } catch (error) {
    console.error("❌ Redis Connection Failed:", error);
  }
};

export const cacheGet = async (key: string): Promise<string | null> => {
  return redisClient.get(key);
};

export const cacheSet = async (
  key: string,
  value: string,
  ttlSeconds: number = 300
): Promise<void> => {
  await redisClient.setEx(key, ttlSeconds, value);
};

export const cacheDel = async (key: string): Promise<void> => {
  await redisClient.del(key);
};

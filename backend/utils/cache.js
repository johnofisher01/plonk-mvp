const cache = new Map();

const getCache = (key) => {
  return cache.has(key) ? cache.get(key) : null;
};

const setCache = (key, value) => {
  cache.set(key, value);
};

const clearCache = () => {
  cache.clear();
};

module.exports = {
  getCache,
  setCache,
  clearCache,
};

// const Redis = require("ioredis");

// const redis = new Redis({
//   host: "master.articles-cache.lyj26u.euw2.cache.amazonaws.com",
//   port: 6582,
//   tls:{}
// });

// const setCache = async (key, value, ttl = 3600) => {
//   try {
//     await redis.set(key, JSON.stringify(value), "EX", ttl);
//     console.log(`Cache set for key: ${key}`);
//   } catch (error) {
//     console.error(`Error setting cache for key: ${key}`, error);
//   }
// };

// const getCache = async (key) => {
//   try {
//     const value = await redis.get(key);
//     if (value) {
//       console.log(`Cache hit for key: ${key}`);
//       return JSON.parse(value);
//     }
//     console.log(`Cache miss for key: ${key}`);
//     return null;
//   } catch (error) {
//     console.error(`Error getting cache for key: ${key}`, error);
//     return null;
//   }
// };

// module.exports = { setCache, getCache };

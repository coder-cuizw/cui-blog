import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Cui's Blog",
      description: "野生程序员养成记",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true
    }),
  ]
});

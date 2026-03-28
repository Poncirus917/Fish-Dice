import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // 关键：强制 Next.js 生成静态 HTML 文件
  images: {
    unoptimized: true, // 静态导出必须禁用图片优化
  },
};

export default nextConfig;

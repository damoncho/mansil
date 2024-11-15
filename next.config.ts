/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['plus.unsplash.com', 'yaimg.yanolja.com', 'images.unsplash.com'], // 외부 이미지 호스트 추가
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'], // 기본값으로 설정
};

module.exports = nextConfig;

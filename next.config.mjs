/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    webpack: (config, { isServer }) => {
        config.module.rules.push({
          test: /\.(glsl|vs|fs)$/,
          loader: 'ts-shader-loader',
        })
        config.module.rules.push({
          test: /\.svg$/,
          use: [{ loader: '@svgr/webpack', options: { dimensions: false } }],
        })
        return config;
      },
};

export default nextConfig;

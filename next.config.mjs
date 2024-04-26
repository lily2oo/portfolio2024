/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    webpack: (config, { isServer }) => {
        config.module.rules.push({
          test: /\.(glsl|vs|fs)$/,
          loader: 'ts-shader-loader',
        });
    
        return config;
      },
};

export default nextConfig;

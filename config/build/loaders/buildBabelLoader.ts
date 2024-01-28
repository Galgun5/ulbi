import { BuildOptions } from '../types/config';

export function buildBabelLoader(options: BuildOptions) {
    return {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ua', 'en'],
                            keyAsDefaultValue: true,
                        },
                    ],
                    options.isDev && require.resolve('react-refresh/babel'),
                ].filter(Boolean),
            },
        },
    };
}

import { Configuration } from 'webpack';

import path from 'path';
import { BuildEnv, BuildPath } from './config/build/types/config';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

export default ({
    mode = 'development',
    apiUrl = 'http://localhost:8000',
    port = 3000,
}: BuildEnv): Configuration => {
    const paths: BuildPath = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const isDev = mode === 'development';

    return buildWebpackConfig({
        mode,
        paths,
        isDev,
        port,
        apiUrl,
        project: 'frontend',
    });
};

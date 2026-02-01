import path from "node:path";
import { defineConfig } from "@rspack/cli";
import { rspack } from "@rspack/core";
import RefreshPlugin from "@rspack/plugin-react-refresh";

const isDev = process.env.NODE_ENV === "development";
const publicPath = process.env.PUBLIC_PATH || "/";
const siteUrl = process.env.SITE_URL || "https://salle-saint-pierre.fr";

export default defineConfig({
	mode: isDev ? "development" : "production",
	entry: {
		main: "./src/index.tsx",
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[contenthash].js",
		cssFilename: "[name].[contenthash].css",
		publicPath,
		clean: true,
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
		alias: {
			react: "preact/compat",
			"react-dom": "preact/compat",
			"react/jsx-runtime": "preact/jsx-runtime",
		},
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["postcss-loader"],
				type: "css/auto",
			},
			{
				test: /\.(jsx?|tsx?)$/,
				use: [
					{
						loader: "builtin:swc-loader",
						options: {
							jsc: {
								parser: {
									syntax: "typescript",
									tsx: true,
								},
								transform: {
									react: {
										runtime: "automatic",
										development: isDev,
										refresh: isDev,
									},
								},
							},
						},
					},
				],
			},
		],
	},
	plugins: [
		new rspack.HtmlRspackPlugin({
			template: "./src/index.html",
			scriptLoading: "defer",
			templateParameters: { siteUrl },
		}),
		new rspack.CopyRspackPlugin({
			patterns: [{ from: "public", to: "." }],
		}),
		new rspack.DefinePlugin({
			__PUBLIC_PATH__: JSON.stringify(publicPath),
			__SITE_URL__: JSON.stringify(siteUrl),
		}),
		isDev && new RefreshPlugin(),
	].filter(Boolean),
	devServer: {
		port: 3000,
		hot: true,
	},
	experiments: {
		css: true,
	},
	optimization: {
		minimize: !isDev,
		splitChunks: {
			chunks: "all",
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendor",
					chunks: "all",
				},
			},
		},
	},
	performance: {
		// hints: isDev ? false : "warning",
		// maxEntrypointSize: 300 * 1024,
		// maxAssetSize: 250 * 1024,
	},
});

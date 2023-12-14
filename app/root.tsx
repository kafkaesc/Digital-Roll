import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';
import stylesheet from '~/tailwind.css';

export const meta: MetaFunction = () => [
	{
		charset: 'utf-8',
		title: 'New Remix App',
		viewport: 'width=device-width,initial-scale=1',
	},
];

export const links: LinksFunction = () => [
	...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
	{ rel: 'stylesheet', href: stylesheet },
	{ href: 'https://fonts.googleapis.com', rel: 'preconnect' },
	{
		crossOrigin: 'anonymous',
		href: 'https://fonts.gstatic.com',
		rel: 'preconnect',
	},
	{
		href: 'https://fonts.googleapis.com/css2?family=Courier+Prime&family=Noto+Sans+JP:wght@400;700&display=swap',
		rel: 'stylesheet',
	},
];

export default function App() {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}

import "./globals.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ko">
			<body className="antialiased bg-gray-100 dark:bg-gray-900">
				{children}
			</body>
		</html>
	);
}


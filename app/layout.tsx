import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import "@/app/styles/globals.css";

const fontSans = FontSans({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-sans",
});
export const metadata: Metadata = {
	title: "Sudhanshu Srivastava | Portfolio",
	description: "Sudhanshu Srivastava is a skilled Software Engineer at RisingInfra, specializing in creating dynamic and user-friendly web applications. With expertise in HTML, CSS, JavaScript, ReactJS, NextJS, ExpressJS, NodeJS, GraphQL, Core Java, SQL and MongoDB. he plays a pivotal role in driving the digital transformation of the company, ensuring seamless functionality and innovative solutions for real estate platforms.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={fontSans.variable}>{children}</body>
		</html>
	);
}

import { Outfit, Ovo, Poppins } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Ahmad Alidlbi | Software Engineer",
  description: "Personal portfolio",
  openGraph: {
    title: "Ahmad Alidlbi | Software Engineer",
    description:
      "I’m a Software Engineer based in Kuwait, passionate about crafting software solutions. I studied Software Engineering at Altınbaş University in Istanbul, where I built a strong foundation in software principles. With expertise in React, React Native, I focus on delivering scalable, user-friendly, and impactful digital solutions. My experience also includes tools like MongoDB, Firebase, Node.js, and Figma, and I’m driven by a constant desire to learn and adapt to emerging technologies.",
    url: "https://ahmadalidlbi.com",
    images: [
      {
        url: "https://www.ahmadalidlbi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmy_pic.e8a84c6d.png&w=3840&q=75",
        width: 1200,
        height: 630,
        alt: "Ahmad Alidlbi's portfolio image",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} ${poppins.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}

import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Ahmad Alidlbi | Software Engineer",
  description: "I'm Ahmad Alidlbi, a Software Engineer based in Kuwait, passionate about crafting software solutions.",
  openGraph: {
    title: "Ahmad Alidlbi | Software Engineer",
    description:
      "I'm Ahmad Alidlbi, a Software Engineer based in Kuwait, passionate about crafting software solutions. I studied Software Engineering at Altınbaş University in Istanbul, where I built a strong foundation in software principles. With expertise in React, React Native, I focus on delivering scalable, user-friendly, and impactful digital solutions. My experience also includes tools like MongoDB, Firebase, Node.js, and Figma, and I’m driven by a constant desire to learn and adapt to emerging technologies.",
    url: "https://www.ahmadalidlbi.com",
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
      <head>
        <link rel="canonical" href="https://www.ahmadalidlbi.com" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Ahmad Alidlbi" />
        <meta name="theme-color" content="#ffffff" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ahmad Alidlbi",
            "url": "https://www.ahmadalidlbi.com",
            "sameAs": [
              "https://www.linkedin.com/in/ahmadalidlbi",
              "https://github.com/ahmadalidlbi"
            ],
            "jobTitle": "Software Engineer",
            "description": "I'm Ahmad Alidlbi, a Software Engineer based in Kuwait, passionate about crafting software solutions.",
            "image": "https://www.ahmadalidlbi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmy_pic.e8a84c6d.png&w=3840&q=75"
          }
          `}
          {/* Google Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-10R9ZBD5RP"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-10R9ZBD5RP');
            `,
          }}
        />
        </script>
      </head>
      <body
        className={`${poppins.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}

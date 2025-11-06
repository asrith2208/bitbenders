const defaultSEOConfig = {
  title: "SikshaNext - Shape Your Tech Future",
  description: "Join SikshaNext to learn, build, and grow with community support. Access roadmaps, projects, and mentorship to shape your tech career.",
  canonical: "https://sikshanext.com",
  openGraph: {
    type: "website",
    url: "https://sikshanext.com",
    siteName: "SikshaNext",
    title: "SikshaNext - Shape Your Tech Future",
    description: "Join SikshaNext to learn, build, and grow with community support. Access roadmaps, projects, and mentorship to shape your tech career.",
    images: [
      {
        url: "https://sikshanext.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SikshaNext - Shape Your Tech Future"
      }
    ]
  },
  twitter: {
    handle: "@sikshanext",
    site: "@sikshanext",
    cardType: "summary_large_image"
  },
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0"
    },
    {
      name: "theme-color",
      content: "#FFC107"
    },
    {
      name: "keywords",
      content: "programming, coding, web development, learn to code, tech education, coding roadmaps, programming projects, developer community"
    },
    {
      name: "author",
      content: "SikshaNext"
    }
  ]
};

module.exports = defaultSEOConfig;

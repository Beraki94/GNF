export const blogPosts = [
  {
    id: 1,
    slug: "godlight-international-conference-nigeria-2025",
    title: "Celebrating Enlightenment: The GodLight International Conference Nigeria 2025",
    shortDescription: "A transformative gathering exploring faith, community, and growth.",
    category: "Godlight",
    date: "May 3, 2025",
    readTime: "3 min read",
    mainImage: {
      url: "/news.jpg", // used on card
      isVideo: false,
    },
    content: `<p>From March 27–28, 2025, a remarkable event unfolded...</p>`,
    author: {
      name: "Sr. Mary Emilia Aboekwe IHM PhD",
      title: "Ambassador, GodLight Nigeria Foundation",
    },
  },
  {
    id: 2,
    slug: "godlight-video-blog",
    title: "Watch: A Special Message from GodLight Nigeria",
    shortDescription: "An inspiring video message ahead of our 2027 goals.",
    category: "Videos",
    date: "April 27, 2025",
    readTime: "2 min read",
    mainImage: {
      url: "https://img.youtube.com/vi/3ysY60f5waw/maxresdefault.jpg",
      isVideo: true,
      videoUrl: "https://youtu.be/3ysY60f5waw?si=FMfLfVhCcy9Q-PDO", // used on blog details page
    },
    content: `<p>This video highlights the mission of the GodLight Nigeria Foundation...</p>`,
    author: {
      name: "Foundation Media Team",
      title: "",
    },
  },
];

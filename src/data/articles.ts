export interface Article {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  link: string;
  coverImage?: string;
  category: string;
}

export const articles: Article[] = [
  {
    title: "How To Create Easy Pagination In Jetpack Compose",
    excerpt: "Learn to build smooth, efficient pagination in Jetpack Compose using Firestore queries and LazyColumn—a lightweight, flexible alternative to the Paging 3 library for simple data-loading scenarios.",
    date: "Dec 2, 2024",
    readTime: "10 min read",
    link: "https://canopas.com/how-to-create-easy-pagination-in-jetpack-compose-d7e4bb3fc1c6",
    coverImage: "https://canopas-blogs.s3.ap-south-1.amazonaws.com/How_To_Create_Easy_Pagination_In_Jetpack_Compose_5b27c02cd4.png",
    category: "Jetpack Compose",
  },
  {
    title: "How To Create a Parallax Movie Pager In Jetpack Compose",
    excerpt: "Learn how to create a parallax movie pager in Jetpack Compose with detailed steps on offset calculations, image scaling, translation, and Bitmap implementation for immersive UIs.",
    date: "Oct 21, 2024",
    readTime: "6 min read",
    link: "https://canopas.com/how-to-create-a-parallax-movie-pager-in-jetpack-compose-ab9c1e19d2cb",
    coverImage: "https://canopas-blogs.s3.ap-south-1.amazonaws.com/Parallax_Movie_Pager_In_Jetpack_Compose_Step_by_Step_Tutorial_1_db3a8df3c5.png",
    category: "Jetpack Compose",
  },
  {
    title: "Exploring Shared Element Transition with Navigation in Compose",
    excerpt: "A deep dive into creating fluid transitions between screens using the core navigation library and shared element patterns in Jetpack Compose.",
    date: "May 24, 2024",
    readTime: "8 min read",
    link: "https://canopas.com/exploring-shared-element-transition-with-navigation-in-compose-7a4c5885deb2",
    coverImage: "https://canopas-blogs.s3.ap-south-1.amazonaws.com/transition_in_compose_d69aff5b36.png",
    category: "Android UI",
  },
  {
    title: "How to Implement Biometric Authentication with Jetpack Compose",
    excerpt: "Secure Android applications using fingerprint and face recognition, integrated seamlessly with Jetpack Compose and AES encryption for token storage.",
    date: "Apr 5, 2024",
    readTime: "10 min read",
    link: "https://canopas.com/how-to-implement-biometric-authentication-with-jetpack-compose-and-aes-encryption-1b72cfccf4d4",
    coverImage: "https://canopas-blogs.s3.ap-south-1.amazonaws.com/Biometric_Authentication_b3510904c7.png",
    category: "Security",
  },
  {
    title: "Introducing ComposeRecyclerView",
    excerpt: "Bringing the familiar power and performance of RecyclerView's view-recycling to the world of Jetpack Compose for ultra-long lists.",
    date: "Feb 7, 2024",
    readTime: "7 min read",
    link: "https://canopas.com/introducing-composerecyclerview-the-recyclerview-you-know-in-jetpack-compose-0900961f327a",
    coverImage: "https://canopas-blogs.s3.ap-south-1.amazonaws.com/Compose_Recycler_View_569e9000c1.png",
    category: "Library",
  },
  {
    title: "Live Streaming and Audio Equalizer with ExoPlayer",
    excerpt: "Implementing advanced media playback features in Jetpack Compose, including real-time audio visualization and equalizer controls.",
    date: "Dec 19, 2023",
    readTime: "11 min read",
    link: "https://canopas.com/live-streaming-and-audio-equalizer-with-exoplayer-in-jetpack-compose-a74fb5eb93cb",
    coverImage: "https://canopas-blogs.s3.ap-south-1.amazonaws.com/Live_Streaming_and_Audio_Equalizer_with_Exo_Player_in_Jetpack_Compose_cdcc893e53.png",
    category: "Media",
  },
  {
    title: "How to Use Render Effects in Jetpack Compose",
    excerpt: "Captivate users with advanced blur, shadow, and color effects using the RenderEffect API in Jetpack Compose for high-end visual design.",
    date: "Oct 31, 2023",
    readTime: "9 min read",
    link: "https://canopas.com/how-to-use-render-effects-in-jetpack-compose-for-stunning-visuals-01287d7f00db",
    coverImage: "https://canopas-blogs.s3.ap-south-1.amazonaws.com/Use_Render_Effects_in_Jetpack_Compose_for_Stunning_Visuals_67896af80b.png",
    category: "Visuals",
  },
  {
    title: "High-Performance SDK Initialization Patterns",
    excerpt: "Exploring non-blocking initialization strategies for Android SDKs to minimize main-thread impact and app startup latency.",
    date: "Upcoming Sprint",
    readTime: "8 min read",
    link: "#",
    category: "Architecture",
  },
  {
    title: "Memory Management for Long-Running Background Services",
    excerpt: "Best practices for ensuring your SDK remains memory-efficient when running background sync or long-polling operations.",
    date: "Upcoming Sprint",
    readTime: "12 min read",
    link: "#",
    category: "Performance",
  },
  {
    title: "Building Resilient Native-to-Flutter Bridges",
    excerpt: "How to design type-safe and performant communication layers between native Android modules and cross-platform frameworks.",
    date: "Upcoming Sprint",
    readTime: "10 min read",
    link: "#",
    category: "Multi-platform",
  },
  {
    title: "Atomic State Management in Distributed Mobile Systems",
    excerpt: "Strategies for achieving ACID-like consistency in multi-tenant mobile applications with localized storage.",
    date: "Upcoming Sprint",
    readTime: "15 min read",
    link: "#",
    category: "Data Integrity",
  },
  {
    title: "Optimizing SDK Binary Size for Market Acceptance",
    excerpt: "Techniques for tree-shaking, ProGuard rules, and modularization to keep your library footprint minimal.",
    date: "Upcoming Sprint",
    readTime: "7 min read",
    link: "#",
    category: "Optimization",
  },
  {
    title: "Reactive SDK Interfaces with Kotlin Flow",
    excerpt: "Designing modern, stream-based API surfaces that feel intuitive to native mobile developers.",
    date: "Upcoming Sprint",
    readTime: "9 min read",
    link: "#",
    category: "Native Core",
  },
  {
    title: "Security Hardening for Financial Mobile SDKs",
    excerpt: "Implementing certificate pinning, secure token storage, and runtime integrity checks for high-stakes Android apps.",
    date: "Upcoming Sprint",
    readTime: "11 min read",
    link: "#",
    category: "Security",
  },
  {
    title: "The Future of Mobile SDK Distribution",
    excerpt: "Analyzing the impact of Dynamic Delivery and Maven Central shifts on the upcoming generation of library development.",
    date: "Upcoming Sprint",
    readTime: "6 min read",
    link: "#",
    category: "DevOps",
  },
];

import React from 'react';
import { Code, BookOpen, Youtube, PenTool as Tool } from 'lucide-react';

const codingResources = [
  { title: "Striver's A2Z DSA Sheet", url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/" },
  { title: "GeeksforGeeks DSA", url: "https://www.geeksforgeeks.org/user/manaschakrv6lf/" },
  { title: "HACKER RANKDSA", url: "https://www.hackerrank.com/domains/data-structures" },
  { title: "LeetCode Patterns", url: "https://leetcode.com/problemset/" },
  { title: "Learn yard", url: "https://learnyard.com/practice/dsa/" },
  { title: "CODE FORCES", url: "https://codeforces.com/problemset" },
  { title: "FreeCodeCamp", url: "https://www.freecodecamp.org/" },
  { title: "JavaScript.info", url: "https://javascript.info/" },
  { title: "Python Tutorial", url: "https://docs.python.org/3/tutorial/" },
  { title: "React Documentation", url: "https://react.dev/" },
  { title: "Node.js Documentation", url: "https://nodejs.dev/" },
  { title: "MongoDB Docs", url: "https://docs.mongodb.com/" },
  { title: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/" },
  { title: "Web Security Basics", url: "https://developer.mozilla.org/en-US/docs/Web/Security" },
  { title: "REST API Tutorial", url: "https://restfulapi.net/" },
  { title: "API Design Guide", url: "https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design" },
  { title: "Aptitude Questions", url: "https://www.indiabix.com/aptitude/questions-and-answers/" },
  { title: "Interview Preparation", url: "https://www.interviewbit.com/" }
];
const blogPosts = [
  {
    title: "100X DEVS ",
    excerpt: "Full-stack development with MERN",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=300",
    url: "https://projects.100xdevs.com/"
  },
  {
    title: "100X CLASS ",
    excerpt: "Full-stack development with MERN",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=300",
    url: "https://harkirat.classx.co.in/new-courses/8-live-0-100-complete"
  },
  {
    title: "MERN Stack Guide",
    excerpt: "Full-stack development with MERN",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=300",
    url: "https://www.mongodb.com/mern-stack"
  },
  {
    title: "MERN Stack Guide",
    excerpt: "Full-stack development with MERN",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=300",
    url: "https://www.mongodb.com/mern-stack"
  },
  {
    title: "Python DSA Guide GFG ",
    excerpt: "Master Data Structures in Python",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=300",
    url: "https://www.geeksforgeeks.org/python-data-structures-and-algorithms/"
  },
  {
    title: "Python DSA Guide",
    excerpt: "Master Data Structures in Python",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=300",
    url: "https://docs.python.org/3.10/tutorial/datastructures.html#"
  },
  {
    title: "C++ JAVA POINT",
    excerpt: "Master Data Structures in Python",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=300",
    url: "https://www.javatpoint.com/cpp-dsa"
  },
  {
    title: "DSA GFG",
    excerpt: "Master Data Structures in Python",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=300",
    url: "https://www.geeksforgeeks.org/data-structures/"
  },
  {
    title: "React Best Practices",
    excerpt: "Modern React Development Tips",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80&w=300",
    url: "https://react.dev/learn/thinking-in-react"
  },
  {
    title: "TypeScript Essentials",
    excerpt: "Type-safe JavaScript Development",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=300",
    url: "https://www.typescriptlang.org/docs/handbook/intro.html"
  },
  {
    title: "Node.js Advanced",
    excerpt: "Server-side JavaScript Mastery",
    image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?auto=format&fit=crop&q=80&w=300",
    url: "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs"
  },
  {
    title: "MongoDB Tips",
    excerpt: "Database Design Patterns",
    image: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?auto=format&fit=crop&q=80&w=300",
    url: "https://www.mongodb.com/basics"
  },
  {
    title: "MERN STACK",
    excerpt: "Secure Your Applications",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=300",
    url: "https://www.geeksforgeeks.org/mern-stack/"
  },
  {
    title: "Web Security",
    excerpt: "Secure Your Applications",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=300",
    url: "https://developer.mozilla.org/en-US/blog/"
  },
  {
    title: " REST API ",
    excerpt: "RESTful API Best Practices",
    image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80&w=300",
    url: "https://restfulapi.net/"
  },
  {
    title: "API Design",
    excerpt: "OVER API",
    image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80&w=300",
    url: "https://overapi.com/python"
  },
  {
    title: "APTITUDE",
    excerpt: "APTI",
    image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80&w=300",
    url: "https://www.indiabix.com/aptitude/questions-and-answers/"
  },
  {
    title: "APTITUDE2",
    excerpt: "APTITUDE",
    image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80&w=300",
    url: "https://www.indiabix.com/"
  },
  {
    title: "APTITUDE3",
    excerpt: "OVER API",
    image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80&w=300",
    url: "https://www.enggroom.com/InterviewQuestion.aspx"
  },
  {
    title: "INRERVIEW QNA",
    excerpt: "OVER API",
    image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80&w=300",
    url: "https://www.enggroom.com/InterviewQuestion.aspx"
  },
];

const youtubeVideos = [
  {
    title: "Python Revise telusko",
    embedId: "ZDa-Z5JzLYM",
    url: "https://youtube.com/playlist?list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3&si=e1-IX42gRjoa-Ve1"
  },
  {
    title: "Python revise gate sm,asher",
    embedId: "ZDa-Z5JzLYM",
    url: "https://youtube.com/playlist?list=PLxCzCOWd7aiEb4apyN1Y8mD-QuUTr3SPQ&si=4Db8rwG-vl5hJwJE"
  },
  {
    title: "DSA SHORT ",
    embedId: "ZDa-Z5JzLYM",
    url: "https://youtube.com/playlist?list=PLxCzCOWd7aiEwaANNt3OqJPVIxwp2ebiT&si=unNvEBt_AMjec3tt"
  },
  {
    title: "Python  dsa ",
    embedId: "ZDa-Z5JzLYM",
    url: "https://youtube.com/playlist?list=PLKYEe2WisBTFEr6laH5bR2J19j7sl5O8R&si=z1TvK9UTdEU9K_9S"
  },
  {
    title: "APTITUDE KG JOB",
    embedId: "ZDa-Z5JzLYM",
    url: "https://youtube.com/playlist?list=PLMufDeLh5x2DVLPcfJGUxd_Yd9LXJZ3NK&si=SuYv1JRiMAsCGFJz"
  },
  {
    title: "APTITUDE PREP INSTA",
    embedId: "ZDa-Z5JzLYM",
    url: "https://youtube.com/playlist?list=PL8p2I9GklV454LdGfDOw0KkNazKuA-6B2&si=dEd5Uf8788T7PnMV"
  },
  {
    title: "HARKIRAT SINGH",
    embedId: "ZDa-Z5JzLYM",
    url: "https://www.youtube.com/@harkirat1/videos"
  },
  {
    title: "C++ DSA APNA COLLEGE",
    embedId: "ZDa-Z5JzLYM",
    url: "https://youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ&si=479MgUHaTDwElB8N"
  },
  {
    title: "C++ DSA STRIVER",
    embedId: "ZDa-Z5JzLYM",
    url: "https://www.youtube.com/@takeUforward/playlists"
  },
  {
    title: "Complete Backend Developer course | Part 1",
    embedId: "ZDa-Z5JzLYM",
    url: "https://youtu.be/7fjOw8ApZ1I?si=bc9MTRkjr1_IFOJS"
  },
  {
    title: "Complete backend developer course part 2",
    embedId: "ZDa-Z5JzLYM",
    url: "https://youtu.be/8k-kK3tsJFY?si=96dJp2p8iG7D8mIp"
  },
  {
    title: "Chai aur Javascript Backend | Hindi",
    embedId: "ZDa-Z5JzLYM",
    url: "https://youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW&si=HVF3gsxfz86NRfLv"
  },
  {
    title: "Next.js & Appwrite – Full Stack Course for Beginners",
    embedId: "ZDa-Z5JzLYM",
    url: "https://youtu.be/ETV17M4SauU?si=S4HsKMvb3EtVb7X6"
  },
  {
    title: "Node.js and Express.js - Full Course",
    embedId: "fBNz5xF-Kx4",
    url: "https://youtu.be/Oe421EPjeBE?si=ybxafu-7TeLSZXtF"
  },
  {
    title: "Complete React course with projects | part 1",
    embedId: "LlvBzyy-558",
    url: "https://youtu.be/FxgM9k1rg0Q?si=GOh3WVj8WIofcM0P"
  },
  {
    title: "Complete React course with projects | part 2",
    embedId: "LlvBzyy-558",
    url: "https://youtu.be/IdlF1zsUN3M?si=cyHA9avuRYuavvW_"
  },
  {
    title: "React JS Tutorial",
    embedId: "LlvBzyy-558",
    url: "https://youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&si=Vm8Jf6Gf_gbgv2Zz"
  },
  {
    title: "TypeScript Full Course",
    embedId: "BwuLxPH8IDs",
    url: "https://www.youtube.com/watch?v=BwuLxPH8IDs"
  },
  {
    title: "js full course",
    embedId: "RGOj5yH7evk",
    url: "https://youtu.be/EerdGm-ehJQ?si=8l6ANFhG99cNfbzn"
  },
  {
    title: "System Design",
    embedId: "Y6Ev8GIlbxc",
    url: "https://youtube.com/playlist?list=PLA3GkZPtsafZdyC5iucNM_uhqGJ5yFNUM&si=BGs3qhz98eC3g5ku"
  },
  {
    title: "GENERATIVE AI",
    embedId: "Y6Ev8GIlbxc",
    url: "https://youtu.be/mEsleV16qdo?si=Z4BuEPhG0NUbitEM"
  },
  {
    title: "AGENTIC AI",
    embedId: "Y6Ev8GIlbxc",
    url: "https://youtube.com/playlist?list=PLZoTAELRMXVMBr14UQ30AFlnlQ7eL5wjl&si=HTtExZT58ByiugjQ"
  },
  {
    title: "DBMS",
    embedId: "Y6Ev8GIlbxc",
    url: "https://youtu.be/dl00fOOYLOM?si=dY59LloVOSGrTCU2"
  },
  {
    title: "MYSQL",
    embedId: "Y6Ev8GIlbxc",
    url: "MY SQL"
  }
];

const productivityTools = [
  { title: "ChatGPT", url: "https://chat.openai.com", description: "AI-powered coding assistant" },
  { title: "Perplexity AI", url: "https://www.perplexity.ai", description: "Research assistant" },
  { title: "Excalidraw", url: "https://excalidraw.com", description: "Diagram tool" },
  { title: "GitHub Copilot", url: "https://github.com/features/copilot", description: "AI pair programmer" },
  { title: "Notion", url: "https://www.notion.so", description: "Note-taking & organization" },
  { title: "Figma", url: "https://www.figma.com", description: "Design tool" },
  { title: "CodePen", url: "https://codepen.io", description: "Code playground" },
  { title: "Replit", url: "https://replit.com", description: "Online IDE" },
  { title: "linkedin", url: "https://linkedin.com", description: "Online IDE" },
  { title: "twitter", url: "https://x.com", description: "Online IDE" },
];

interface MainContentProps {
  searchQuery: string;
}

function MainContent({ searchQuery }: MainContentProps) {
  return (
    <main className="flex-1">
      <div className="space-y-8">
        {/* Do Coding Section */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-6">
            <Code className="h-6 w-6 mr-2 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Do Coding</h2>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {codingResources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="font-medium text-gray-800 dark:text-white">{resource.title}</h3>
              </a>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-6">
            <BookOpen className="h-6 w-6 mr-2 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Blog Posts</h2>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {blogPosts.map((post, index) => (
              <a
                key={index}
                href={post.url}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={post.image} alt={post.title} className="w-full h-32 object-cover" />
                <div className="p-4">
                  <h3 className="font-medium text-gray-800 dark:text-white text-sm mb-1">{post.title}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300">{post.excerpt}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* YouTube Section */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-6">
            <Youtube className="h-6 w-6 mr-2 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">YouTube Resources</h2>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {youtubeVideos.map((video, index) => (
              <a
                key={index}
                href={video.url}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="aspect-video bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                  <div className="text-center p-4">
                    <Youtube className="h-8 w-8 mx-auto mb-2 text-red-500" />
                    <span className="text-sm font-medium text-gray-800 dark:text-white">{video.title}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Productivity Tools Section */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-6">
            <Tool className="h-6 w-6 mr-2 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Productivity Tools</h2>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {productivityTools.map((tool, index) => (
              <a
                key={index}
                href={tool.url}
                className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="font-medium text-gray-800 dark:text-white mb-1">{tool.title}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-300">{tool.description}</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default MainContent;
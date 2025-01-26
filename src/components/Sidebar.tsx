import React from 'react';
import { Book, Brain, Coffee, Laptop, Library, Lightbulb, Timer, Users } from 'lucide-react';

const productivityLinks = [
  { icon: Book, title: "Striver's A2Z DSA Sheet", url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/" },
  { icon: Brain, title: "LeetCode Patterns", url: "https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions" },
  { icon: Coffee, title: "Study Timer", url: "#" },
  { icon: Laptop, title: "Code Editor", url: "#" },
  { icon: Library, title: "Resource Library", url: "#" },
  { icon: Lightbulb, title: "Learning Tips", url: "#" },
  { icon: Timer, title: "Pomodoro Timer", url: "#" },
  { icon: Users, title: "Study Groups", url: "#" },
];

function Sidebar() {
  return (
    <aside className="w-64 flex-shrink-0">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">Student Productivity</h2>
        <div className="grid grid-cols-2 gap-4">
          {productivityLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconComponent className="h-6 w-6 mb-2 text-indigo-600 dark:text-indigo-400" />
                <span className="text-sm text-center text-gray-600 dark:text-gray-300">{link.title}</span>
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
## Student Productivity Website

A comprehensive web application designed to help students manage their productivity, learning resources, and tasks effectively.

### Features

- **Student Productivity Section**
  - 8 quick links to essential productivity resources
  - Integration with popular learning platforms
  - Easy access to study materials

- **Do Coding Section**
  - Curated programming resources
  - Links to DSA courses and tutorials
  - Beginner to advanced learning paths

- **Blog Section**
  - Programming-related articles
  - Tutorial posts
  - Learning tips and tricks

- **YouTube Resources**
  - Embedded video tutorials
  - Programming course playlists
  - Educational content

- **Productivity Tools**
  - Integration with popular productivity apps
  - Quick access to essential tools
  - Resource management

- **Smart To-Do App**
  - Task management with priorities
  - Due dates and reminders
  - Progress tracking
  - Analytics dashboard

### Technology Stack

- React
- TypeScript
- Tailwind CSS
- Lucide React Icons

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/student-productivity-website.git
   ```

2. Install dependencies:
   ```bash
   cd student-productivity-website
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Deploying to GitHub Pages

1. First, make sure you have the gh-pages package installed:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update your package.json:
   - Add homepage: "https://yourusername.github.io/student-productivity-website"
   - Add deploy scripts:
     ```json
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
     ```

3. Update vite.config.ts:
   - Add base URL:
     ```typescript
     export default defineConfig({
       base: '/student-productivity-website/',
       // ... other config
     });
     ```

4. Create a new repository on GitHub named "student-productivity-website"

5. Initialize Git and push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/student-productivity-website.git
   git push -u origin main
   ```

6. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

7. Configure GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages"
   - Select the "gh-pages" branch as the source
   - Save the changes

Your site will be available at: https://yourusername.github.io/student-productivity-website

### Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### License

This project is licensed under the MIT License - see the LICENSE file for details.
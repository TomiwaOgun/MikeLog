

import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';




const projects = {
  project1: {
    name: 'Budget Garden',
    description: 'A Chrome extension to help users track spending and manage budgets effectively.',
    images: ['/project1/BudgetGarden.png','/project1/leafIcon-128.png'],
    details: `
### Budget Garden
Budget Garden is a Chrome extension designed to help users track their spending and manage their budgets effectively.

It automatically detects purchases on order confirmation pages (currently supporting **Amazon** and **Temu**) and saves the total amount spent.

Users can also manually add expenses, set a weekly budget, and track their remaining funds. As a fun twist, leftover money can be transferred to an in-game currency for a **Budget Garden Game**, where users can "spend" their savings on virtual plants and decorations.

---

### Key Features:
- **Automatic Spending Tracking**: Detects purchases on order confirmation pages and extracts the total amount spent.
- **Manual Expense Entry**: Allows users to manually add expenses for better budget tracking.
- **Weekly Budget Management**: Set a weekly budget and track remaining funds in real-time.
- **Leftover Money Transfer**: Simulate transferring leftover money to a fun in-game currency for the Budget Garden Game.
- **Reset Functionality**: Easily reset the budget and total spent at any time.

---

### Technologies Used:
- **Frontend**: HTML, CSS, JavaScript
- **Chrome Extensions API**: Storage, Tabs, Scripting, Active Tab
- **Game Integration**: Simple in-game economy using JavaScript and DOM manipulation
- **Tools**: Chrome Developer Tools, Git

---

### What I Learned:
- How to build and deploy a Chrome extension using Manifest V3.
- Integrating content scripts to interact with web pages and extract data dynamically.
- Managing user data with Chrome Storage API for persistence across sessions.
- Creating a simple game interface to simulate an in-game economy.
- Handling edge cases, such as detecting order confirmation pages and preventing infinite redirection loops.

---

### Why It Matters:
This project demonstrates my ability to create practical, user-focused tools that combine real-world utility with a touch of creativity. 
It showcases my skills in full-stack development, API integration, and problem-solving, all while delivering a product that helps users 
manage their finances in a fun and engaging way.

---

**GitHub Repository**: [Budget Garden on GitHub](https://github.com/TomiwaOgun/budget_extention)  

This project combines mathematical rigor with practical application, providing a powerful tool for image analysis and processing.
  `,
  },
  project2: {
    name: 'Verse Finder',
    description: 'A Chrome extension designed to help users find relevant Bible verses for any situation',
    images: ['/project2/VerseFinder.png', '/project2/bibleIcon-32.png'],
    details: `
### Verse Finder Chrome Extension

**Verse Finder** is a Chrome extension designed to help users find relevant Bible verses for any situation. By leveraging the power of **OpenAI's GPT-3.5 Turbo** and integrating with **Blue Letter Bible's ScriptTagger**, the extension provides quick and accurate Bible verse recommendations based on user queries. Users can input their needs (e.g., "comfort," "guidance," or "strength"), and the extension returns a relevant verse along with its reference.

---

### Key Features

1. **AI-Powered Verse Recommendations**  
   - Uses **OpenAI's API** to interpret user queries and suggest appropriate Bible verses.  
   - Provides contextually relevant verses tailored to the user's input.  

2. **Blue Letter Bible Integration**  
   - Automatically tags Bible references with hyperlinks to **Blue Letter Bible** for deeper study.  
   - Enables users to explore verses in greater detail with commentaries, lexicons, and more.  

3. **User-Friendly Interface**  
   - Simple and intuitive design with a clean popup interface.  
   - Easy-to-use input field for entering queries and displaying results.  

4. **Customizable API Key**  
   - Users can input their **OpenAI API key** via the extension's options page for personalized use.  
   - Ensures flexibility and control over API usage.  

---

### Technologies Used

- **Frontend**: HTML, CSS, JavaScript  
- **Backend**:  
  - **OpenAI API**: Powers the AI-driven verse recommendations.  
  - **Blue Letter Bible API**: Integrates with ScriptTagger for hyperlinked Bible references.  
- **Chrome Extensions API**:  
  - **Storage API**: Saves user preferences and API keys.  
  - **Active Tab API**: Detects and interacts with the active browser tab.  
  - **Scripting API**: Injects scripts for dynamic functionality.  
- **Tools**:  
  - Chrome Developer Tools for debugging and testing.  
  - Git for version control and collaboration.  

---

### How It Works

1. **User Input**:  
   - The user opens the extension's popup and enters a query (e.g., "comfort," "guidance," or "strength").  

2. **AI-Powered Search**:  
   - The query is sent to **OpenAI's GPT-3.5 Turbo**, which interprets the input and suggests a relevant Bible verse.  

3. **Verse Display**:  
   - The verse and its reference are displayed in the extension's popup.  

4. **Blue Letter Bible Integration**:  
   - The verse reference is automatically hyperlinked to **Blue Letter Bible** for further study.  

5. **Customizable API Key**:  
   - Users can input their OpenAI API key in the extension's options page for personalized use.  

---

### What I Learned

**API Integration**:  
  - Successfully integrated **OpenAI's GPT-3.5 Turbo** and **Blue Letter Bible's ScriptTagger** for seamless functionality.  
  - Learned to handle API keys securely and manage API rate limits.  

**Chrome Extension Development**:  
  - Built and deployed a Chrome extension using **Manifest V3**.  
  - Used Chrome APIs like **Storage**, **Active Tab**, and **Scripting** for dynamic interactions.  

**User Experience Design**:  
  - Created a clean and intuitive interface for ease of use.  
  - Ensured the extension is accessible and user-friendly.  

**Problem-Solving**:  
  - Addressed challenges like handling API responses and ensuring accurate verse tagging.  

---

### Why It Matters

Verse Finder is a powerful tool for anyone seeking spiritual guidance or inspiration. By combining AI technology with trusted Bible study resources, it provides quick and accurate verse recommendations tailored to the user's needs. This project highlights my ability to:  

- Develop practical tools that solve real-world problems.  
- Integrate third-party APIs for enhanced functionality.  
- Design user-friendly interfaces for seamless experiences.  

Whether you're looking for comfort, guidance, or strength, Verse Finder makes it easy to find the perfect Bible verse for any situation.  

---

### Future Improvements

- **Expand Verse Sources**: Include additional Bible translations and study resources.  
- **Bookmark Verses**: Allow users to save favorite verses for quick access.  
- **Daily Verse Notifications**: Send users a daily verse for inspiration.  
- **Multi-Language Support**: Add support for non-English queries and verses.  
- **Community Features**: Enable users to share verses and insights with others.  

---

**GitHub Repository**: [Verse Finder on GitHub](https://github.com/TomiwaOgun/verse_finder)  

Verse Finder is a project that combines technology and faith to help users connect with the Bible in meaningful ways.
  `,
  },
  project3: {
    name: 'Soundio',
    description: 'Soundio is a full-stack music streaming platform inspired by popular services like Spotify and SoundCloud.',
    images: ['/project3/Signup-Graphic.png','/project3/Soundio ERD.png', '/project3/Logo.png' ],
    details: `
# Soundio Music Media Application

**Soundio** is a full-stack music streaming platform inspired by popular services like Spotify and SoundCloud. Designed for both music enthusiasts and artists, Soundio allows users to listen, share, and manage music seamlessly. Artists can upload and manage their tracks, create albums, and credit collaborators, while listeners can create playlists, like songs, and explore music by genre. Built with a focus on user experience and efficient data flow, Soundio combines a sleek front-end interface with a robust back-end system.

---

## Key Features

1. **User Authentication**  
   - Secure login and registration with password encryption (hash and salt).  

2. **Music Streaming**  
   - Play, pause, skip, and rewind tracks with an intuitive audio player.  

3. **Playlist Management**  
   - Create, edit, and delete playlists with the ability to add or remove songs.  

4. **Artist Dashboard**  
   - Artists can upload, delete, and manage their music, as well as create albums.  

5. **Search and Discovery**  
   - Search for songs, artists, and albums, and explore music by genre.  

6. **Social Features**  
   - Like songs, follow artists, and view user profiles with customizable profile pictures.  

---

## Technologies Used

- **Frontend**: React.js, HTML, CSS, JavaScript  
- **Backend**: Node.js, Express.js  
- **Database**: MySQL (3rd Normal Form compliant)  
- **Authentication**: Password encryption using hash and salt  
- **Audio Management**: Efficient storage, retrieval, and streaming of audio files  
- **Tools**: Git, GitHub, Vite, Bootstrap  

---

## What I Learned

- Building a full-stack application from scratch using **React.js** for the front-end and **Node.js** for the back-end.  
- Designing and implementing a relational database in **MySQL** with a focus on normalization and efficient data flow.  
- Managing user authentication and security, including password encryption and SQL injection prevention.  
- Handling audio file storage, retrieval, and streaming in a web application.  
- Collaborating in a team using **Agile methodologies**, including sprint planning and task management.  

---

## Why It Matters

Soundio demonstrates my ability to design and develop a complex, user-focused application from concept to deployment. It showcases my skills in full-stack development, database design, and team collaboration, all while delivering a product that bridges the gap between artists and listeners in a seamless and engaging way.  

---

**GitHub Repository**: [Soundio on GitHub](https://github.com/TomiwaOgun/Soundio)  

Soundio is a project that combines technical expertise with creativity to create a platform that empowers both artists and listeners in the world of music.
  `,
  },
  project4: {
    name: 'Edge Detection and Line Detection Program',
    description: 'This C++ program is designed to perform edge detection and line detection in images using a combination of the Sobel and Laplacian operators, followed by the Hough Transform.',
    images: ['/project4/building.png','/project4/laprician_result.png','/project4/sobel_result.png','/project4/combined_results.png','/project4/hough_result.png'],
    details: `
# Edge Detection and Line Detection Program

This **C++ program** is designed to perform edge detection and line detection in images using a combination of the **Sobel** and **Laplacian** operators, followed by the **Hough Transform**. The program processes an input image to detect edges, combines the results of the Sobel and Laplacian operators, and then applies the Hough Transform to identify and highlight the three longest lines in the image. The results are saved as separate output files for further analysis or visualization.

---

## Key Features

1. **Edge Detection**  
   - Combines the **Sobel** and **Laplacian** operators to detect edges in an image.  

2. **Hough Transform**  
   - Identifies and highlights the three longest lines in the image based on edge detection results.  

3. **Thresholding**  
   - Applies thresholding to the edge detection results to produce binary images.  

4. **Output Files**  
   - Saves the results of each step (Sobel, Laplacian, combined edges, and Hough Transform) as separate .raw image files.  

---

## Technologies Used

- **Programming Language**: C++  
- **Image Processing**:  
  - Sobel operator  
  - Laplacian operator  
  - Hough Transform  
- **File Handling**: Reading and writing .raw image files  
- **Mathematical Operations**:  
  - Convolution  
  - Gradient magnitude calculation  
  - Trigonometric functions  

---

## What I Learned

- Implementing edge detection algorithms like the **Sobel** and **Laplacian** operators.  
- Applying the **Hough Transform** to detect lines in an image.  
- Handling binary image data and performing thresholding operations.  
- Writing efficient and modular C++ code for image processing tasks.  
- Debugging and optimizing performance for large image datasets.  

---

## Why It Matters

This project demonstrates my ability to implement advanced image processing techniques from scratch. It showcases my skills in algorithm design, mathematical computation, and problem-solving, all while delivering a practical tool for edge and line detection in images.  

---

## How It Works

1. **Edge Detection**:  
   - The **Sobel operator** calculates the gradient magnitude to detect edges.  
   - The **Laplacian operator** detects edges by finding areas of rapid intensity change.  
   - The results of both operators are combined, and a threshold is applied to produce a binary edge map.  

2. **Line Detection**:  
   - The **Hough Transform** is applied to the binary edge map to detect lines.  
   - The program identifies the three longest lines based on the accumulator array and highlights them in the output image.  

3. **Output**:  
   - The program saves the results of each step (Sobel, Laplacian, combined edges, and Hough Transform) as separate .raw image files.  

---

**GitHub Repository**: [Edge Detection and Line Detection on GitHub](https://github.com/TomiwaOgun/Edge-Detection-and-Line-Detection-)  

This project combines mathematical rigor with practical application, providing a powerful tool for image analysis and processing.  
  `,
  }, 
  project5: {
    name: 'Clinical Data Analysis and Visualization',
    description: 'This R project analyzes clinical trial data by performing ANOVA and post-hoc tests to compare recovery times across treatment groups, supported by visualizations and report generation.',
    images: ['/project5/blood_pressure_boxplot.png', '/project5/adverse_event_barplot.png', '/project5/age_histogram.png'],
    details: `
# Clinical Data Analysis and Visualization

This **R project** is designed to analyze and visualize clinical trial data, focusing on comparing patient recovery times across multiple treatment groups using statistical methods such as **ANOVA** and **Tukey's HSD** post-hoc testing. The project includes data cleaning, statistical analysis, visualization with **ggplot2**, and generation of result summaries for reporting and portfolio presentation.

---

## Key Features

1. **Data Cleaning and Validation**  
   - Handled missing values and corrected inconsistencies to prepare a clean dataset for analysis.

2. **Statistical Analysis**  
   - Performed **ANOVA** to assess differences in recovery days between multiple treatment groups.  
   - Conducted **Tukey's HSD** post-hoc tests to identify specific group differences after significant ANOVA results.

3. **Data Visualization**  
   - Created clear visualizations including boxplots, bar charts, and histograms to explore and present key trends.

4. **Result Summarization**  
   - Automated generation of CSV summary files for ANOVA and post-hoc results to support reproducibility and reporting.

---

## Technologies Used

- **Programming Language**: R  
- **Libraries**:  
  - ggplot2 for data visualization  
  - dplyr for data manipulation  
  - stats for ANOVA and post-hoc testing  
- **File Handling**: Exporting results to CSV for documentation  

---

## What I Learned

- Conducting rigorous statistical testing (ANOVA, Tukey's HSD) in a real-world clinical context.  
- Cleaning and preprocessing datasets for reliable analysis.  
- Creating publication-ready graphs with **ggplot2**.  
- Automating analysis pipelines to improve workflow efficiency.  
- Interpreting statistical results to draw meaningful, actionable insights.

---

## Why It Matters

This project demonstrates my ability to combine data science skills, statistical reasoning, and visualization to analyze healthcare data. It highlights my capability to produce clean, interpretable results that could influence clinical decision-making or further research.

---

## How It Works

1. **Data Preparation**:  
   - Loaded and cleaned clinical trial data, ensuring accuracy for analysis.

2. **ANOVA Analysis**:  
   - Compared mean recovery days across three groups (Control, Treatment 1, Treatment 2) using **one-way ANOVA**.

3. **Post-Hoc Testing**:  
   - Applied **Tukey's HSD** to determine which treatment groups significantly differed in recovery times.

4. **Visualization and Reporting**:  
   - Built informative plots (boxplots, bar charts) and exported result summaries for review and sharing.

---

**GitHub Repository**: [Clinical Data Analysis Project on GitHub](https://github.com/TomiwaOgun/clinical_trial_simulation)

This project combines statistical rigor with effective communication, showcasing my ability to transform raw clinical data into clear, actionable insights.
  `,
},

};


export default async function ProjectPage({ params }) {
  const { projectId } = await params;

  if (!projectId || !projects[projectId]) {
    notFound();
  }

  const project = projects[projectId];
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-8">{project.name}</h1>

        {/* Description */}
        <p className="text-lg text-gray-700 mb-8">{project.description}</p>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {project.images.map((image, index) => (
            <div key={index} className="relative h-100 ">
              <Image
                src={image}
                alt={`Project Image ${index + 1}`}
                fill
                className="rounded-lg object-contain"
                unoptimized // Disable Next.js image optimization
              />
            </div>
          ))}
        </div>

        {/* Additional Details */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Details</h2>
          <div className="text-gray-700 overflow-auto break-words whitespace-pre-wrap  p-4">
            <ReactMarkdown
                components={{
                    h3: ({ node, ...props }) => <h3 className="text-xl font-semibold mt-4 mb-2" {...props} />,
                    ul: ({ node, ...props }) => <ul className="list-disc list-inside ml-4" {...props} />,
                    li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                    p: ({ node, ...props }) => <p className="mb-4" {...props} />,
                }}
                >
                {project.details.trim()}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static paths for all projects
export async function generateStaticParams() {
  return Object.keys(projects).map((projectId) => ({
    projectId,
  }));
}
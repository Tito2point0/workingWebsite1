# <strong><font size="6">Pokémon Card Search & Daily Blog Website</font></strong>

## <strong><font size="5">Project Overview</font></strong>

This project is a **React-based web application** that serves as a platform to **search for Pokémon cards** and **read daily blogs**. The website allows users to search for cards from the Pokémon Trading Card Game (TCG) and provides options for browsing content via a responsive and user-friendly interface. Additionally, the website is styled with **dark mode** toggle functionality for enhanced user experience. It is currently hosted on **IONOS** with a custom domain.

---

## <strong><font size="5">Features</font></strong>

### <strong>Implemented Features</strong>
- **[x] Pokémon Card Search**: Users can search for Pokémon cards using the Pokémon Trading Card Game API. This feature fetches the data dynamically and displays card details such as name, ID, HP, type, and weaknesses.
- **[x] Responsive Design**: The website is fully responsive, ensuring optimal usability on mobile, tablet, and desktop.
- **[x] Dark Mode Toggle**: A global dark mode feature using `useState` and `useEffect` hooks that allows users to toggle between dark and light themes. The user's preference is saved in `localStorage`.
- **[x] Advertisements**: Simple banner ads are included using static placeholders for now, with future plans to implement dynamic ad content using Google AdSense.
- **[x] Blog Section**: Users can read daily blog updates on the website. The blogs are integrated as part of the homepage layout for easy access.

---

## <strong><font size="5">Current Progress</font></strong>

- **[x] Search page for Pokémon cards**
- **[x] Advertisement sections added**
- **[x] Dark Mode toggle implemented globally**
- **[x] Responsive layout and styles added**
- **[x] Banner component with background image integration**

---

## <strong><font size="5">Planned Features</font></strong>

- **[ ] Add dynamic blog content using an API**
- **[ ] Implement full integration of Google AdSense**
- **[ ] Enhance card search to include additional filters (by type, rarity, etc.)**
- **[ ] Add user authentication for saving favorite cards**
- **[ ] Create a commenting feature for blog posts**
- **[ ] Implement SEO optimization for better search engine ranking**

---

## <strong><font size="5">File Structure</font></strong>

```plaintext
root
├── src/
│   ├── components/
│   │   ├── Banner.js
│   │   ├── ThemeToggle.js
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── ContactUs.js
│   ├── App.js
│   ├── index.js
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── manifest.json
│   ├── logo192.png
│   ├── picture/ 
│       └── pokemon_banner_by_underratedwonderland_d72tpu2-fullview.jpg
├── README.md
├── package.json
├── .gitignore
<strong><font size="5">Deployment Instructions</font></strong>
<strong>Local Development</strong>
Clone the repository and navigate into the project directory:

bash

git clone https://github.com/YourUsername/YourRepo.git
cd YourRepo
Install dependencies:

bash

npm install
Start the local development server:

bash

npm start
<strong>Deployment to IONOS (or other hosting)</strong>
Create a production build:

bash

npm run build
Use FileZilla or other FTP tools to upload the contents of the build/ folder to your server.

Point your domain's root directory to the build/ folder if hosting manually.

<strong><font size="5">Future Improvements</font></strong>
[ ] Improve Performance: Optimize images and use lazy loading to enhance site performance.
[ ] Accessibility: Ensure that the website meets WCAG accessibility standards for users with disabilities.
[ ] Automated Testing: Write Jest unit tests and Cypress end-to-end tests to ensure smooth functionality over time.
<strong><font size="5">Known Issues</font></strong>
[ ] Banner issues on mobile: The banner may not scale correctly on smaller devices. Future updates will address this with media queries and better responsiveness.
[ ] Metadata Caching Issues: Sometimes, changes to the metadata (such as the favicon or mobile icon) take time to propagate due to aggressive browser caching.
<strong><font size="5">How to Contribute</font></strong>
Feel free to fork the repository and submit pull requests to contribute! We welcome all improvements and bug fixes.
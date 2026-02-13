# Milestone 4 - Tea House

## How I set up my project

### Tailwind CSS Installation

There are 5 ways to set up Tailwind CSS:

- [ ] [Using Vite](https://tailwindcss.com/docs/installation/using-vite)

- [ ] [Using Tailwind with PostCSS](https://tailwindcss.com/docs/installation/using-postcss)

- [x] [Using Tailwind CLI](https://tailwindcss.com/docs/installation/using-cli)

- [ ] [Using Frameworks/Libraries (Svelte, Next.js, React, Vue-Nuxt, Angular)](https://tailwindcss.com/docs/installation/using-frameworks)

- [ ] [Using Tailwind Play CDN](https://tailwindcss.com/docs/installation/using-cdn)

I have installed Tailwind CSS using the CLI by following the instruction from the official documentation of Tailwind CSS. Let's see how I set it up.

#### setting up package.json

There 2 ways to create a package.json file:

- [ ] Automatically create a package.json file using `npm init -y` command. This command will create a package.json file with default values, without asking any questions. If I had chosen the first option to create a package.json file using `npm init -y` command, the content of the package.json file would have been like this:

  ```json
  {
    "name": "milestone-4",
    "version": "1.0.0",
    "description": "There are 5 ways to set up Tailwind CSS:",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
  }
  ```

- [x] Manually create a package.json file using `npm init` command. This command asked me a series of questions to fill in the details of the package.json file. As it gives me more control over the content of the package.json file and I love fine tuning my way, I have chosen this option.

  Now let's see what questions and instructions I got when I ran the command `npm init` in my terminal:

  ```bash
  npm init
      This utility will walk you through creating a package.json file.
      It only covers the most common items, and tries to guess sensible defaults.

      See `npm help init` for definitive documentation on these fields
      and exactly what they do.

      Use `npm install <pkg>` afterwards to install a package and
      save it as a dependency in the package.json file.

      Press ^C at any time to quit. #^C means control + C, which is used to quit the process in the terminal.
  package name: (milestone-4) milestone_4-tea_house
  version: (1.0.0) 
  description: Tea House project is a guided project instructed by Programming Hero in their Milestone-4 Module-21. The project was focused on learning and properly utilizing Tailwind CSS. The module contains 9 videos.                                                              
  entry point: (index.js) jscript.js
  test command: 
  git repository: https://github.com/Champrime/PH-Project-Tea-House.git
  keywords: 
  author: Shakhawat Hossain Sadik
  license: (ISC) 
  About to write to /run/media/saadiq/New Volume/PH Projects/PH-Learning/Milestone 4/package.json:

  {
    "name": "milestone_4-tea_house",
    "version": "1.0.0",
    "description": "Tea House project is a guided project instructed by Programming Hero in their Milestone-4 Module-21. The project was focused on learning and properly utilizing Tailwind CSS. The module contains 9 videos.",                                                         "main": "jscript.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "repository": {
      "type": "git",
      "url": "git+https://github.com/Champrime/PH-Project-Tea-House.git"
    },
    "author": "Shakhawat Hossain Sadik",
    "license": "ISC",
    "bugs": {
      "url": "https://github.com/Champrime/PH-Project-Tea-House/issues"
    },
    "homepage": "https://github.com/Champrime/PH-Project-Tea-House#readme"
  }


  Is this OK? (yes) 
  ```

#### Step 2: Install Tailwind CSS via npm

I have Installed Tailwind CSS via npm using the following command:

```bash
npm install tailwindcss @tailwindcss/cli
```

This command will install both tailwindcss and @tailwindcss/cli packages and save them as dependencies in the package.json file. After running this command, the dependencies section been added in the package.json file:

```json
"dependencies": {
    "@tailwindcss/cli": "^4.1.18",
    "tailwindcss": "^4.1.18"
}
```

Old way to install Tailwind CSS via npm was:

```bash
npm install -D tailwindcss
npx tailwindcss init
```

#### Step 3: Adding scripts to package.json

I have added a new script copying from the Tailwind CSS documentation into the scripts section of the package.json file to run the Tailwind CLI in `--watch` mode while in development.

What does `--watch` do?

- Keeps the process running in the terminal (doesn't exit after one build).
- Watches your HTML, JS, and other template files for any changes.
- Automatically rebuilds the output CSS file whenever you save a change.
- Instant feedback — you see your Tailwind class changes reflected immediately.
- Without --watch:
    1. Runs once, compiles the CSS, and exits.
    2. You'd have to manually run the command again after every change.
- With --watch:
    1. Stays active in the background.
    2. Detects file saves and rebuilds automatically.
    3. Press Ctrl + C to stop it.

I then added a similar script to build the Tailwind CSS for production. Just the difference is `--minify` flag, which will minify the CSS for production.

What does `--minify` do or necessarily mean?

- Removes all whitespace, comments, and line breaks from the compiled CSS.
- Makes the file size significantly smaller.
- Results in faster page load times for users.

```json
"scripts": {
    "dev": "tailwindcss -i input.css -o style.css --watch", /*The part will be run by `npm run dev` */
    "build": "tailwindcss -i input.css -o style.css --minify" /*The part will be run by `npm run build` */
}
```

**Important note:** The `-i` flag specifies the input file (input.css) where I'll import Tailwind's base, components, and utilities. The css file following the `i` flag won't be referred in the HTML file. The `-o` flag specifies the output file (style.css) that will be generated by Tailwind CLI. This is the file that I'll link in my HTML file to apply Tailwind styles to my project. So, the `-o` flag is the one that will be referred in the HTML file.

Now the content of my package.json file looks like this:

```json
{
  "name": "milestone_4-tea_house",
  "version": "1.0.0",
  "description": "Tea House project is a guided project instructed by Programming Hero in their Milestone-4 Module-21. The project was focused on learning and properly utilizing Tailwind CSS. The module contains 9 videos.",
  "main": "script.js",
  "scripts": {
    "dev": "tailwindcss -i ./src/input.css -o ./src/style.css --watch",
    "build": "tailwindcss -i ./src/input.css -o ./src/style.css --minify",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Champrime/PH-Project-Tea-House.git"
  },
  "keywords": [
    "html",
    "css",
    "tailwindcss",
    "frontend",
    "responsive-design",
    "web-development",
    "programming-hero"
  ],
  "author": "Shakhawat Hossain Sadik",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/Champrime/PH-Project-Tea-House/issues"
  },
  "homepage": "https://github.com/Champrime/PH-Project-Tea-House#readme",
  "dependencies": {
    "@tailwindcss/cli": "^4.1.18",
    "tailwindcss": "^4.1.18"
  }
}
```

#### Step 4: Create input.css file

I have created an input.css file in the `src` folder and added the following code to it:

```css
@import "tailwindcss";
```

#### Step 5: style.css and npm run dev

I have linked the style.css file in my HTML file and run the command `npm run dev` in the terminal to start the Tailwind CLI in watch mode. This command will generate the style.css file in the `src` folder and keep watching for any changes in the input.css file or any other template files.

### Font Manrope and Font Awesome Installation

#### Font Manrope Installation

I have installed the Font Manrope taking the link from Google Fonts and added it in the head section of my HTML file. I have also added a style tag in the head section to apply the font-family universally by using the `*` selector in the project.

#### Font Awesome Installation

I have installed Font Awesome by taking the link from the Font Awesome CDN and added it in the head section of my HTML file. After adding the link, I can use any Font Awesome icon in my project by using the appropriate class name. For example, to use the user icon, I can use the following code:

```html
<span><i class="fa-solid fa-user"></i></span>
```

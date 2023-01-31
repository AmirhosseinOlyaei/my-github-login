# Project 3: My GitHub Login
## Goal
Help GitHub designed their login form with Validation. A replica of https://github.com/login (you need to be logged out from GH to access the page)
https://i.imgur.com/W7JDJip.png
We want to validate the following:
Username or email address is not empty.
Username or email address is more that 6 characters.
Password fields is not empty.
Password fiend is more than 6 characters.
Prerequisite reading
None
References
Get an HTML ElementbyId
"Watching an event on an element"
Relevant JS events

![](https://i.imgur.com/CWtnBg7.png)

- issues:  
	- Create a new repository  
		- Create **my-github-login** repository  
		-  
		  ``` bash
		  		  cd msimbo-projects
		  		  git clone git@github.com:AmirhosseinOlyaei/my-github-login.git
		  ```
	- MSIMBO's handbook for `Tailwindcss`  
		- https://app.gitbook.com/o/7ARYFXdeWuKbQzeWPB76/s/ORacclflVRID90lsQOUg/resources/frameworks-and-libraries/setup-tailwindcss  
	- Install **npm & node**  
		- `https://nodejs.org/en/download/`  
	- Install **yarn**  
		- `npm install --global yarn`  
		- or  
		- `sudo npm i -g yarn`  
	- Install **TailwindCSS package**  
		- `cd msimbo-projects/my-github-login`  
		- `yarn add -D tailwindcss`  
		- `npx tailwindcss init`  
	- Modify **tailwind.config.js**  
		- Replace: `content: ["./src/**/*.{html,js}", "./*.{html,js}"],`  
	- Create a **tailwind.css** file and add contents  
		- `touch tailwind.css`  
		-  
		  ``` tailwind.css
		  		  /* tailwind.css */
		  		  @tailwind base;
		  		  @tailwind components;
		  		  @tailwind utilities;
		  ```
	- Dynamically generate a **styles.css** file `tailwind.css` this file  
		- `npx tailwindcss -i ./tailwind.css -o ./styles.css --watch`  
	- Create an **index.html** file and reference our generated `styles.css`  
		- `touch index.html`  
		-  
		  ``` index.html
		  		  	<!doctype html>
		  		  	<html>
		  		  	<head>
		  		  	  <!-- ... -->
		  		  	  <meta charset="UTF-8" />
		  		  	  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
		  		  	  **<link href="styles.css" rel="stylesheet">**
		  		  	</head>
		  		  	<body>
		  		  	   <h1 class="text-9xl"> welcome</h1>
		  		  	</body>
		  		  	</html>
		  ```
-  
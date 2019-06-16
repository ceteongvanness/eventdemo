**Insider Dev Tour 2019**

**Productive Web Development with NodeJS and Microsoft Developer Tools**

**Demo 1: Using Visual Studio 2019 to create and debug Node.js apps**

1. Click on **Create a new project**

   ![](https://github.com/ceteongvanness/eventdemo/blob/master/Insider%20Dev%20Tour%202019/Image/D1%20-%201.png)

2. Select **Basic Node.js Express 4 Application** (TypeScript)

   ![](https://github.com/ceteongvanness/eventdemo/blob/master/Insider%20Dev%20Tour%202019/Image/D1%20-%202.png)

3. Click **Next**

4. Name the Project : **InsidersTour**

5. Click **Create**

**Demo 2: Using Visual Studio Code to crate and debug Node.js using WSL or not**

**Part 1**

1. Click on the **Debug icon** and then click on the "**Configure or Fix 'launch.json'**" button
2. Put a **breakpoint** in **app.ts** on **line 14** and on **line 8** in **/routes/index.ts** and **press F5**.
3. Second breakpoint in not hit, why? The browser hasn't been automatically launched like in VS, launch it on **localhost:3000**
4. Click on the "**TERMINAL**" tab to show the integration of the PowerShell command
5. Show the other paradigm by typing "**npm install --save-dev babylon**", the show the updated package.json
6. Open **launch.json** and add the option **"useWSL": true**
7. **Press F5** again and now, show the webpage shows From linux instead of From win32

**Part 2**

1. 2 breakpoints are to be set

   (a) in  **/northwind/index.js line 88** which is a client-side code asking to send the notification

   (b) in **/routes/index.js line 133** which is a server-side code in node managing the /sendNotification POST request

2. Debugging

3. In the browser, click on the button "**Contact Customer**", Edge will be paused by VS Code. Switch to VS Code and show the debug bar indicates "**Browser**" mode. Click **continue (F5)**

**Demo 3: Building a cross-platform app with Electron and Node.js modules**

1. Open **Visual Studio Code**

2. In the **main.js** showing **frame: false** and **transparent: true**. We can now see through the window. Wouldn't be cool to then be able to enable arcylic effect?

3. Open **Windows PowerShell**

4. Navigate to the electron app

   **cd "C:\Users\Haulio - Eng Teong\Desktop\InsiderDevTour\nodeJs\ElectronFluentApp"**

5. Type **npm start** to run the app
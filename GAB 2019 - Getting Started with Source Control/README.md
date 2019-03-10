# Version Control with Git
You will learn about source control principles and source control systems. 

You will also learn about Azure repositories, migrating strategies and authentication options.

### Lab - Version Controlling with Git
In this lab, you will learn how to establish a local Git repository, which can easily be synchronized with a centralized Git repository in Azure DevOps. In addition, you will learn about Git branching and merging support.

Activities to perform,
* Exercise 1: Cloning an existing repository
* Exercise 2: Saving work with commits
* Exercise 3: Reviewing history
* Exercise 4: Managing branches from Visual Studio
* Exercise 5: Managing branches from Azure DevOps

Version Controlling with Git in Azure Repos - https://www.azuredevopslabs.com/azuredevops/git/

#### Prerequisites
* Visual Studio Code with the C# extension installed.
* This lab requires you to complete task 1 from the prerequisite instructions.

#### Exercise 1: Cloning an existing repository
#### Task 1: Cloning an existing repository
1. In a browser tab, navigate to your team project on Azure DevOps.
2. Getting a local copy of a Git repo is called "cloning". Every mainstream development tool supports this and will be able to connect to Azure Repos to pull down the latest source to work with. Navigate to the **Repos** hub.
3. Click **Clone**.
4. Click the **Copy to clipboard** button next to the repo clone URL. You can plug this URL into any Git-compatible tool to get a copy of the codebase.
5. Open an instance of **Visual Studio Code**.
6. Press **Ctrl+Shift+P** to show the **Command Palette**. The Command Palette provides an easy and convenient way to access a wide variety of tasks, including those provided by 3rd extensions.
7. Execute the **Git:Clone** command. It may help to type "Git" to bring it to the shortlist.
8. Paste in the URL to your repo and press **Enter**.
9. Select a local path to clone the repo to.
10. When prompted, log in to your Azure DevOps account.
11. Once the cloning has completed, click **Open Repository**. You can ignore any warnings raised about opening the projects. The solution may not be  in a buildable state, but that's okay since we're going to focus on working with Git and building the project itself is not necessary.

#### Task 2: Installing the Azure Repos extension for Visual Studio Code
1. The Azure Repos extension provides convenient access to many features of Azure DevOps. From the **Extensions** tab, search for "**Azure Repos**" and click **Install** to install it.
2. Click **Repload** once the extension has finished installing. If this option is not available, reopen **Visual Studio Code**.
3. Press **Ctrl+Shift+P** to show the **Command Palette**.
4. Search for "**Team**" to see all the new commands that are now available for working with Azure Repos. Select **Team: Signin**.
5. Select **Authenticate and get an access token automatically**. Note that you could alternatively provide the token create earlier if following the manual path.
6. Copy the provided token and press **Enter** to launch a browser tab.
7. Paste the code in to the login box and click **Continue**.
8. Select the Microsoft account associated with your Azure DevOps account.
9. When the process has complete, close the browser tab.

#### Exercise 2: Saving work with commits



	




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
#### Task 1: Committing changes
1. From the **Explorer** tab, open **/PartsUnlimited-aspnet45/src/PartsUnlimitedWebsite/Models/CartItem.cs**.
2. Add a comment to the file. It doesn't really matter what the commend is since the goal is just to make a change. Press **Ctrl + S** to save the file.
3. Select the **Source COntrol** tab to see the one change to the solution.
4. Enter a commit message of "**My commit**" and press **Ctrl + Enter** to commit it locally.
5. If asked whether you would like to automatically stage your changes and commit them directly, click **Always**. We will discuss **staging** later in the lab.
6. Click the **Synchronize Changes** button to synchronize your changes with the server. Confirm the sync if prompted.

#### Task 2: Reviewing commits
1. Switch to the Azure DevOps browser tab. You can review the latest commits on Azure DevOps under the **Commits** tab of the **Repos** hub.
2. The recent commit should be right at the top.

#### Task 3: Staging changes
1. Return to **Visual Studio Code**.
2. Update the open **CartItem.cs** class by editing the comment you made earlier and saving the file.
3. Open **Category.cs** as well.
4. Add a new comment to **Category.cs** so there will be two files with changes. Save the file.
5. From the **Source Control** tab, click the **Stage Changes** button for **CartItem.cs**.
6. This will prepare **CartItem.cs** for committing without **Category.cs**.
7. Enter a comment of "**Added comments**". From the **More Actions** dropdown, select **Commit Stagged**.
8. Click the **Synchronize Changes** button to synchronize the committed changes with the server. Note that since only the staged changes were committed, the other changes are still pending locally.

#### Exercise 3: Reviewing history
#### Task 1: Comparing files
1. In the **Source Control** tab, select **Category.cs**.
2. A comparison view is opened to enable you to easily locate the changes you've made. In this case, it's just the one comment.
3. Press **Ctrl+Shift+P** to open the **Command Palette**.
4. Start typing "**Team**" and select **Team: View History** when it becomes available. This is a feature of the Azure Repos extension that makes it easy to jump right to the history of this file in a new browser tab.
5. Note the history of **category.cs**. Close the newly created tab, which will should return you to the **Commits** tab from earlier.
6. Scroll down in the **Commits** view to locate some of the source branches and merges. These provide a convenient way to visualize when and how changes were made to the source.
7. From the dropdown for **Merged PR 27**, select **Broowse Files**.
8. This view offers the ability to navigate around the state of the source at that commit so you can review and download those files.

#### Exercise 4: Working with branches
#### Task 1: Creating a new branch in your local repository
1. Return to **Visual Studio Code**.
2. Click the **master** branch from the bottom left.
3. Select **Create new branch**.
4. Enter the name "**dev**" for the new branch and press **Enter**.
5. Select the **master** as the reference branch.
6. You are now working on that branch.

#### Task 2: Working with branches
1. Click the **Publish changes** button next to the branch.
2. From the Azure DevOps browser tab, select **Branches**.
3. You should see the newly pushed **dev** branch. Click the **Delete branch** button to delete it. Confirm the delete.
4. Return to **Visual Studio Code**.
5. Click **dev** branch.
6. Note that there are two **dev** branches listed. The local (dev) branch is there because it's not deleted when the server branch is delete. The server(**origin/dev**) is there because it hasn't been pruned. Select the **master** branch to check it out.
7. Press **Ctrl+Shift+P** to open the **Command Palette**.
8. Start typing "**Git: Delete**" and select **Git: Delete Branch** when it becomes visible.
9. There is only one local branch to delete, so select it.
10. Click the **measter**branch.
11. Note that the local **dev** branch is gone, but the remote **origin/dev** is still showing.
12. Press **Ctrl+Shift+P** to open the **Command Palette**.
13. Start tyoing "**Git: Fetch**" and select **Git: Fetch (Prune)** when it become visible. This command will update the origin branches in the local snapshot and delete those that are no longer there.
14. You can check in on exactly what these tasks are doing by selecting the **Output** window at the bottom of the screen.
15. Note that if you don't see the Git logs in the output console, you may need to select **Git** as the source.
16. Click the **master** branch.
17. The **origin/dev** branch should no longer be in the list.

#### Exercise 5: Managing branches from Azure DevOps
#### Task 1: Creating a new branch
1. Switch to the Azure DevOps browser tab.
2. Click **New branch**.
3. Enter a name of "**release**" for the new branch. Use the **Work items to link** dropdown to select one or more work items to link to this new branch. Click **Create branch** to create it.
4. After the branch has been created, it will be available in the list.
5. Return to **Visual Studio Code**.
6. Press **Ctrl+Shift+P** to open the **Command Palette**.
7. Start typing "**Git: Fetch**" and select **Git: Fetch** when it becomes visible. This command will update the origin branches in the local snapshot.
8. Click the **master** branch.
9. Select **origin/release**. This will create a new local branch called "**release**" and check it out.

#### Task 2: Deleting a branch
1. Return to Azure DevOps and click the **Delete** button that appears when you hover over the **release** branch to delete it.
2. However, maybe we should keep it around for a little longer. From its context menu, select **Restore branch**.

#### Task 3: Locking a branch
1. From the **master** context menu, select **Lock**.
2. The branch is now locked.
3. Now **Unlock** the branch using the same process.

#### Task 4: Tagging a release
1. While it may not seem like much, the product team has decided that this version of the site is exactly what's needed for v1.1. In order to mark it as such, navigate to teh **Tags** tab.
2. Click **Create Tag**.
3. Enter a **name** of "**v1.1**" and a **Description** of "**Great release!**". Click **Create**.
4. You have now tagged the project at this release. You could tag commits for a variety of reasons, and Azure DevOps offers the flexibility to edit and delete them, as well as manage their permissions.



	




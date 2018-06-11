# CustomVision and AlarmML
### Demo Steps
#### Create a model
1. In the Custom Vision portal click **New Project**. Provide a name of your choosing. Chose the **General (compact) model**. Click **Create Project**
![](https://github.com/ceteongvanness/eventdemo/blob/master/Insider%20Dev%20Tour/Image/C1.png)
2. Click on **Add images**.
![](https://github.com/ceteongvanness/eventdemo/blob/master/Insider%20Dev%20Tour/Image/C2.png)
3. Click on **Browse local files**
![](https://github.com/ceteongvanness/eventdemo/blob/master/Insider%20Dev%20Tour/Image/C3.png)
4. Browse to the *CustomVisionAssets* and repeat the following steps for each of the three folders

	- Select all images in the folder and click **Open**
	- Under *My Tags* create a new tag using the same name as the chosen folder
	- Click Upload 8 files
![](https://github.com/ceteongvanness/eventdemo/blob/master/Insider%20Dev%20Tour/Image/C4.png)
5. Once all images are upload, click on **Train** in the upper right corner
![](https://github.com/ceteongvanness/eventdemo/blob/master/Insider%20Dev%20Tour/Image/C5.png)
6. Once the training is complete, click on **Export** and download the model in the **ONNX** format
![](https://github.com/ceteongvanness/eventdemo/blob/master/Insider%20Dev%20Tour/Image/C6.png)

7. Open **NEW** Visual Studio **(File > New Project > Blank App (Universal Windows))**, drag and drop the **ONNX** that you create just now.

8. Show the auto-generated file, including the auto-generated dictionary with the tag labels.
**(File path: C:\Users\ceteo\source\repos\CustomVisionDemo)**

9. Open the AlarmML project **(C:\Users\ceteo\Documents\DevInsider-MachineLearning\Demo\InsiderDevTour18-ML-master\AlarmML)** in Visual Studio and run the app.
10. ** Right click the solution file > Select **Build** > Click on "Local Machine" to run the application.


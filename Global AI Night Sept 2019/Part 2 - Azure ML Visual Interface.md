## **Azure Machine Learning Visual Interface**

**Is that wine good or bad?**

A beginner tutorial on how to build a binary classification machine learning mode with no code using Azure Machine Learning Visual Interface

## Azure Tools and Data

**Create Resource in Azure**

1. Go to [Azure Portal](https://portal.azure.com/) and login or [Create an Account](https://azure.microsoft.com/en-us/free/)

2. Click **Create resource**

	![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/S1.png)

3. Select **AI + Machine Learning** then **Machine Learning service workspace**

	![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/S2.png)

4. Fill in required fields and select **Review + Create** then select **Create**

	![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/S3.png)

5. It will take a few minutes to create the resources needed for your workspace. Below is a list of all the resources that are created:

	![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/S4.png)
    
**Launch Azure Machine Learning Visual Interface**
1. Navigate to your resource group that you created the workspace under

	![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/S5.png)
    
2. Click the **Machine Learning Service Workspace** resource listed in the resource group
3. In the left nav click on **Visual Interface**
4. Then click **Launch visual interface**

	![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/S6.png)
    
5. This will open a new tab for the **Visual interface for Azure Machine Learning Service**.

	![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/S7.png)
    
**Getting data into Azure Machine Learning Visual Interface**
1. Select **New** from the bottom left corner of the browser

	![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/S8.png)
    
2. From the left nav bar select **Datasets**
3. Select **Upload from Local File**

	![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/S9.png)
4. Navigate to downloaded data and select it to be uploaded.
5. Update the name and a description (its helpful to have detailed description once there are lots of datasets uploaded)

	![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/S10.png)

**Create New Experiment**
1. Select **New** from the bottom left corner of the browser

	![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/S8.png)

2. Select **Blank Experiment**

	![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/S11.png)
    
3. In the top left hand of the workspace select the experiment name text **Experiment created on xx/xx/xxxx** and edit the name of your experiment.

	![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/S12.png)
    
4. Go to **My Datasets** to find the data uploaded OR use the import module to import from the github csv link.
5. Drag data module onto workspace.

	![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/S13.png)
    
## Build the Model

**Assign the label attribute to the dataset**

We now have created an experiment and have imported the data. Let us build the model. In the left hand nav there are different modules that you can drag and drop onto the workspace to build the model.

1. Under the **Data Transformation** > Manipulation drag and drop the **Edit Metadata** module onto the workspace

	![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/S14.png)
    
2. Connect the modules together be clicking and dragging on the circles like a visio diagram.

	![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/S17.png)
    
3. Click on the **Edit Metadata** and select **Edit Columns** from the right hand side of the workspace.

`	![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/S15.png)

3. Leave the default configuration and type **qualityBool** into the textbox and click **OK**. Change the **Data Type** to **Boolean**

	![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/S16.png)
    
**The First Run of the Experiment**
1. Select **Run** from the button of the workspace

	![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/S18.png)
    
2. Select **Create New** to create a new compute target

	![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/S19.png)
    
3. Enter a name for the new compute target

	![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/S20.png)
    
4. Select **Run**

	![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/S21.png)
    
**Select Feature Columns**
1. Under **Data Transformation** > **Manipulation** drag and drop the **Select Columns in dataset** module onto the workspace

	![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/S22.png)
    
2. Connect the modules together be clicking and dragging on the circles like a Visio diagram.

	![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/S23.png)
    
3. Click on the **Select Columns in dataset** and select **Edit Columns** from the right hand side of the workspace

	![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/S24.png)
    
4. Select exclude column **quality** and **qualityBool**
5. Select the arrow to move the highlight feature into the **Selected Columns** box and click **OK**

	![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/S25.png)
    
**Visualize the Data**

Data visualizations are an important part of the data science process.
1. To visualize the data, **right click** on the **Edit Metadata** module and select **Visualize**

	![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/S26.png)

2. Select each column to see the data visualized on the right side.

	![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/S27.png)
    
**Split the Data**

When you train the model the standard practice is to split your data to train and score your model. 70% trains the model and 30% scores the model to see how well the training went. Understand that true model accuracy should be tested on unseen data outside of this 30% score. This score gives you an idea of how the model is performing but is not law and sometimes misleading.
1. In the left nav type **Split Data** in the textbox at the top
2. Drag and drop the module onto the workspace and connect it to the existing modules

	![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/S28.png)
    
3. Select the **Split Data** module and change the split from **0.5** to **0.7**

	![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/S29.png)
    
**Train, Score and Evaluate the Model**

Now we have prepared our data by select features, assigning labels, cleaning and preprocessing. Its time to train the model.

1. Add the following modules to the workspace: **Two-Class Logistic Regression**, **Train Model**, **Score Model**, **Evaluate Model**

	*hint: if you have question about modules or concepts, click on the module and in the lower right corner of the workspace you will see a "more help" link. Click the link to get information about how the module works and help with data science terms.*
2. Connect them together as displayed below
    
    ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/S30.png)
    
3. Select the **Train Model** module and click **Edit Columns** in the right side of the workspace

	![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/S31.png)
    
4. Type **qualityBool** into the textbox to indicate the dataset label

	![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/S32.png)
    
5. **Run** the Experiment


**Check Accuracy of Model**

We now have a trained model in Azure Machine Learning Visual Interface. Let visualize our results to see how it performed.
1. **Right click** on the button circle of the **Evaluate Model** Module.
2. Select **Visualize** from the menu that popped up

	![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/S33.png)
3. Our accuracy is ok, but we can probably do better.

	![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/S34.png)
    
=== END ====

**Deploy the Web Service**

Once the model has an acceptable or **good enough** accuracy its time to deploy your model to a web service.

1. Click **Create predictive experiment** on the bottom nav of the workspace.

	![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/S35.png)
    
2. Click **Run** on the predictive experiment, select the compute and click **Run**

	![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/S36.png)
    
3. Now the model you created will show up under **Trained Models** in the left nav of the workspace. This allows you to import trained models into different experiments.

	![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/S37.png)
    
4. Click **Deploy Web Service** in the bottom nav of the workspace.
	
    ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/S38.png)
    
5. Now we need to create a web service compute target (if you dont already have one)
6. Click **Create New** and then click the **Go to azure portal link** think will open a new tab and bring you to the azure machine learning workspace resource with compute selected from the left hand nav. Follow the instructions in the pane to create the compute target for the web service.

8.  Select the Compute target and click **Deploy**

**Test the Web Service**
1. Select the **Web Service** icon on the left nav of the workspace. The web service that was created will be listed.
2. Click the web service that was created.
3. Here you can test and get the information needed to consume the API created.



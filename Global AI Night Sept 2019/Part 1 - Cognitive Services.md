

Part 1 - Azure Cognitive Services**

**Microsoft Azure Cognitive Services - Computer Vision and Text Analytics**

1. Navigate to [Microsoft Azure Cognitive Services](https://azure.microsoft.com/en-gb/services/cognitive-services/?WT.mc_id=ainights-github-amynic).
2. Select **Vision**
   ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-1.png)
3. Select **Computer Vision**, click on **Demo** link next to **Scene and activity recognition in images**.
   ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-2.png)
4. Click on **Browse** button.
   ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-3.png)
5. Upload a pic **cat.jpeg** from "**C:\Users\Haulio - Eng Teong\Desktop\Global AI Night - Sept 2019\Part 1 - Cognitive Services\ainights-sessionowners-master\sample-images\computer-vision-web-browser-demo**"
   ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-4.png)

**Extra**: Select **Browse** button and upload the **city.jpeg** image from "**C:\Users\Haulio - Eng Teong\Desktop\Global AI Night - Sept 2019\Part 1 - Cognitive Services\ainights-sessionowners-master\sample-images\computer-vision-web-browser-demo**"
![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-5.png)

**Part 2 - Azure Custom Vision**

1. Navigate to [Azure Portal](https://portal.azure.com/).

2. Click **Create a Resource**.
   

![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-6.png)

3. Search for **Custom Vision**.

   ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-7.png)

4. Click **Create** button.

   ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-8.png)

5. Enter details to create

   - a **Name** for the service

   - select **SOUTH CENTRAL US** for **Location**

   - choose the **S0** for your **pricing** options

   - select the **resource group** you created previously for this project.

   - click **Create**.

     ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-9.png)

6. Navigate to https://www.customvision.ai and choose sign in. Sign in with your Azure credentials account.

   ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-10.png)

7. Click on **New Project**.

   ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-11.png)

8. Enter following details:

   - **Name**: dog classifier

   - **Description**: Classification of dogs for an AI application

   - **Resource Group**: choose the resource group you created your custom vision service.

   - **Project Type**: Classification

   - **Classification Types**: Multiclass (Single tag per image)

   - **Domains**: General

   - click **Create Project**.

     ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-12.png)

9. Click on **Add images** button.

10. Upload the images from "**C:\Users\Haulio - Eng Teong\Desktop\Global AI Night - Sept 2019\Part 1 - Cognitive Services\ainights-sessionowners-master\sample-images\dogs\beagle**" and add the tag '**beagle**'. Click on **Upload 30 files**.

    ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-13.png)

11. Once you successful you receive a confirmation message and you should see your images are now available in the workspace.
    ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-14.png)

12. Now complete the same steps of uploading and tagging images for the other 6 dog categories in the folder. For each type of dog:

    - Click **add images**
    - Select the 30 new dog images
    - Add the class label(beagle, bernese-mountain-dog, chihuahua, eskimo-dog, german-shepherd, golden-retrieve, maltese-dog)

13. Click **Train**.

    ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-15.png)

14. Select **Fast Training** and click **Train**.
    ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-17.png)

15. Once the training process is complete it will take you to Performance tab. Here you will receive machine learning evaluation metrics for your channel.
    ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-18.png)

16. Click on **Quick Test**.

    ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-19.png)

17. Click on **Browse local files** and upload the image that you use previously. The image will be analysed and a result returned of what dog the model thinks it is (prediction tag) and the models confidence if its result (prediction probability)

    ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-20.png)

18. Click on **Publish**.

    ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-21.png)

19. Give the published iteration a name **dogapp** and click **Publish**.

    ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-22.png)

20. Click on **Prediction** URL.

    ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-23.png)

21. Copy the URL.

    ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-24.png)

22. Paste the **URL**, enter the **Prediction-Key** and **Content-Type** in **Headers**

    ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-25.png) 

23. Go to the **Body**, select **binary** and **upload the image** you use to train before. Click **Send**.

    ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-26.png)

**Part 3 - Build Custom AI into an Application - Azure Logic Apps**

1. Navigate to [Azure Portal](https://azure.microsoft.com/en-us/).

2. Go to **Storage** and select **Storage Account**.

   ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-27.png)

3. In the storage account creation page enter options to setup your storage accounts:

   - **Subscription**: choose your subscription

   - **Resource Group**: choose the resource group you have been using for this workshop

   - **Storage Account Name**: (must be unique) enter an all lowercase storage account name. 

   - **Location**: your closest data center

   - **Performance**: Standard

   - **Account Kind**: Blob Storage

   - **Replication**: Locally-redundant storage (LRS)

   - **Access Tier**: Hot

   - Select **Review + create**, confirm validation is passed and then select **Create**.

     ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-28.png)

4. Once your deployment is complete, go to the resource and review the account settings. Select **Blobs** to review your empty blob storage account.

   ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-29.png)

5. Select the **+ Container** button and create a name for the Container and select **Container (anonymous read access for containers and blobs)** for the public access level setting.

   ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-31.png)

6. Go to **Subscription** and **click on your subscription**.

   ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-32.png)

7. Go to **Resource providers** and search for **event** and make sure your **Microsoft.EventGrid** is registered.

   ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-33.png)

8. Select **Create a Resource**. Type **Logic App** and select the service.

   ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-34.png)

9. Create the logic app by entering some setup details like below:

   - **Name**: suitable for the dog classification application
   - **Subscription**: Choose your subscription
   - **Resource Group**: select the existing group you have been working for the whole workshop
   - **Location**: choose the data center closest to you
   - **Log Analytics**: off

   ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-35.png)

10. Go to the **logic app** that you created.

    ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-36.png)

11. Select **When Event Grid resource event occurs** option.

    ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-37.png)

12. Click on **Sign in**. 
    ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-38.png)

13. Select **Default Directory** and click **Sign in**.

14. Click **Continue**.

    ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-39.png)

15. Select the option below:

    - **Subscription**: your subscription
    - **Resource Type**: Microsoft.Storage.StorageAccounts
    - **Resource Name**: choose your image storage account
    - **Event Type Item  -1**: Microsoft.Storage.BlobCreated

    ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-40.png)

16. Click **+ New step**.

17. Add **Parse Json**.

    ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-41.png)

18. In the Parse Json

    - **Content**: select the box and from the Dynamic Content box on the right, select Body
    - **Schema**: select this box and enter the JSON schema provided in the [logic-app-schema1 file](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Schema/logic-app-schema1.json)

19. Type **custom vision** and select the **Classify an image URL (preview)**

    ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-42.png)

20. Now we need to fill in the details of the custom vision process

    - **Project ID**: Find the project ID from the settings logo in the top right of the Custom Vision web page.

      ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-43.png)

    - **Connection name**: give a name for connection

    - **Image URL**: Select the input box and on the right side select URL from Parse JSON output

      ![](https://github.com/ceteongvanness/eventdemo/blob/master/Global%20AI%20Night%20Sept%202019/Images/P1-45.png)

21. 
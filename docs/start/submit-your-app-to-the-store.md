---
id: submit-your-app-to-the-store
title: Submit Your App
sidebar_label:  Submitting Your app to the Appstore
---


So you’ve finished the development of your app and you want to submit it to the in-game Appstore. Congratulations!
In this page you will get all the information you need about submitting your app.

## Support page

Before your new app goes live, you **must** create a support page for it. More details about an Overwolf app support page can found [here](add-a-knowledge-base-to-app).

## How to Submit an In-Game App

Make sure to [validate your manifest](../api/manifest-json#validate-your-manifestjson) file before submitting your app.

**Make sure you have the following items zipped inside a folder and send it to us:**

### "app" folder
1. **Manifest.json**  
Your app's [manifest.json](https://overwolf.github.io/docs/api/manifest-json#docsNav) file.

2. **IconMouseNormal.png**  
A **gray-scale** icon for the round app button – default state (256×256 – 72 PPI, Overwolf will resize it to 37×37).
Note – Please make sure the png is smaller than 30KB

<img src="../assets/submit-your-app-to-the-store/SubIconMouseNormal.png" alt="IconMouseNormal" width="100"/>

3. **IconMouseOver.png**  
A colored icon for the round app button – mouse-over state (256×256 – 72 PPI, Overwolf will resize it to 37×37).
Note – Please make sure the png is smaller than 30KB

<img src="../assets/submit-your-app-to-the-store/SubIconMouseOver.png" alt="IconMouseOver" width="100"/>

4. **launcher_icon.ico**   

* Add the ["launcher_icon"](https://overwolf.github.io/docs/api/manifest-json#meta-launcher_icon) property to the manifest.json file.

* Add the icon asset to your app’s folder.

* The launcher icon should look like the app’s dock icon to prevent any confusion.

* The launcher icon is a 256×256 transparent .png converted into a .ico file with the following resolutions: 16×16, 32×32, 48×48, 256×256.

* The launcher icon should weight less than 150Kb.

### “Files” folder  
A folder containing the lot of your app’s code. Make sure your manifest pathing is correct. 


### “store” folder

1. Tile.jpg  
The Appstore tile for your app (258×198 – 72 PPI). The image must be in JPG format.

<img src="../assets/submit-your-app-to-the-store/tile.jpg" alt="Tile" width="350"/>

2. Icon.png  
The icon representing your app on the Appstore.
The actual icon size should be 55×55
The image must be in PNG format
The image should work well on both light and dark backgrounds.

<img src="../assets/submit-your-app-to-the-store/SubIcon.png" alt="Icon" width="100"/>

3. ScreenshotX.jpg  
You need to supply at least one screenshot of your app which will be shown in the app’s page in the Appstore. Providing a few attractive screenshots images increases your app’s chances of getting noticed. In each image file name, X is replaced by a number(1-5). Notice this needs to be a JPG. The screenshot should be 656x410px, so be sure that all your elements are visible at that size. You can have a maximum of 5 screenshots for each app, 4 screenshots if you include a video (covered in the store.json below)

<img src="../assets/submit-your-app-to-the-store/SubScreenshot1.png" alt="Screenshot" width="900"/>

4. description.txt  
An **HTML** text file containing the long Appstore description of your app (appears when clicking on a store tile), up-to 2000 characters. The description can be edited using basic html: **h3 for headers** (main header will be automatically larger), **br for line breaks** (don’t use br before and after h3), and **links to web pages (a href)**
The description on the store tile is set through the app's [manifest.json](https://overwolf.github.io/docs/api/manifest-json)

<img src="../assets/submit-your-app-to-the-store/Subdescription.png" alt="Description" width="900"/>

5. Store.json 
a json file containing the Appstore information of your app

```json
{
  "category_description": "This is the Appstore category that the app will appear in."
   //Currently only one category per app is possible.
   //Possible values: "for games", "chat", "entertainment", "social", "utilities", "voip"
  "video": {
    "id": "(This is optional) The id of the app's video on YouTube, appears after the 'watch?v=' part of the YouTube link, e.g. '5k70GQxHsOU'",
    "service": "youtube"
  },
  "tags": ["Search tags for your app, limited to five (5) tags. Be sure the tags are relevant", "Make sure the tags are comma separated and in quotes"],
  "title": "App name"
}
```

## AWS benefits

Once your app has been published, you will be eligible for some epic Amazon Web Services benefits:

* $10,000 in AWS Promotional Credit valid for 2 Years.

* 1 year of AWS Business Support (up to $5,000).

* Access to the AWS Technical and Business Essentials web-based (or instructor-led) training ($600 value per course).

* 80 credits for Self-Paced Labs ($80 value).

To apply, please send us an email (developers@overwolf.com) and we will send you all the details!

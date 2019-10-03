---
id: custom-installer-for-your-app
title: Custom Installer
sidebar_label:  Custom Installer
---

## Customizing Your App Installer

Overwolf supports per-app custom installer pages.
To use this feature, third party developers need to create HTML pages to be displayed during the installation process. This document will specify the steps needed to create a custom installation experience.


<div class="box" data-slick='{"slidesToShow": 2}'>
  <a data-fancybox="gallery" data-caption="Facecheck" href="../assets/custom-installer/Image 1.png">
    Facecheck
    <span class="thumb">
      <img src="../assets/custom-installer/Image 1.png" alt="Facecheck">
    </span>
  </a>
  <a data-fancybox="gallery" data-caption="Facecheck Installer" href="../assets/custom-installer/Image 2.png">
    Facecheck Installer
    <span class="thumb">
      <img src="../assets/custom-installer/Image 2.png" alt="Facecheck Installer">
    </span>
  </a>
</div>


## 1. Create HTML file

* Create the HTML page you wish to display during the installation and name it "index.html".
* There are 2 distinct phases to the installation process: downloading and installing.
* For each phase, different content can be displayed.

The following can be used as a template:

### index.html

```html
<!DOCTYPE html>
<html>

<head>
    <script src="script.js"></script>
</head>

<body>
    <div id="down" style="background-color: red; width:100px; height: 40px; display: none;">
    </div>
    <div id="stall" style="background-color: green; width:200px; height: 40px; display: none;">
    </div>
    <script>
        let language = CustomInstallerUtils.getLanguage();
        let installerState = CustomInstallerUtils.getInstallerState();

        switch (installerState) {
            case 'downloading':
                let downElement = document.getElementById('down');
                downElement.innerHTML = 'downloading, language is ' + language;
                downElement.style.display = 'block';
                break;
            case 'installing':
                let stallElement = document.getElementById('stall');
                stallElement.innerHTML = ‘Installing, language is ' + language;
                stallElement.style.display = 'block';
                break;
        }
        CustomInstallerUtils.notifyReady();
    </script>
</body>

</html>
```

### script.js

```js
function getUrlParameterByName(name) {
    var regex, results;
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
window.CustomInstallerUtils = {
    /**
     * This function will notify the installer that the page is ready
     */
    notifyReady: function() {
        parent.postMessage({
            isLoaded: true
        }, "*");
    },
    /**
     * Returns the state/phase of the installer
     * Possible values:
     * 'downloading'
     * 'installing'
     */
    getInstallerState: function() {
        return getUrlParameterByName('state');
    },
    /**
     * Will get the selected language
     * Possible values:
     * en - English
     * pt - Portuguese
     * de - Deutsch
     * ko - Korean
     */
    getLanguage: function() {
        return getUrlParameterByName('lang')
    }
}
```

## 2.  Upload files to S3 server

*This step is done by Overwolf.*

Upload the files to the following path on Overwolf’s S3 server: `/owcachedcontent/Installer/promo/<app_uid>/`.

## 3. Build the installer with Jenkins

*This step is done by Overwolf.*

Use Jenkins to build `Overwolf-Installer-Setup-with-app` with your app’s parameters. 

Make sure to enable the `CUSTOM_PROMO_PAGES` flag.


## 4. Download and install

download your app from the <a href="https://www.overwolf.com/appstore"  target="_blank">Overwolf Store</a>. The installer should display the custom content.



<div class="box" data-slick='{"slidesToShow": 2}'>
  <a data-fancybox="gallery" data-caption="Facecheck" href="../assets/custom-installer/image 3.png">
    Facecheck
    <span class="thumb">
      <img src="../assets/custom-installer/image 3.png" alt="Facecheck">
    </span>
  </a>
  <a data-fancybox="gallery" data-caption="Facecheck Installer" href="../assets/custom-installer/image 4.png">
    Facecheck Installer
    <span class="thumb">
      <img src="../assets/custom-installer/image 4.png" alt="Facecheck Installer">
    </span>
  </a>
</div>

---
id: submit-for-review
title: Submit your OPK for review by the Overwolf team
sidebar_label: Submit for review
---

On the [previous guide](submit-a-new-version), we learned how to submit a new version of your app, using the Overwolf developers console.

In this article, we'll go over the process of submitting the updated version for an Overwolf QA review, before starting to [deploy](/submit-a-new-version#4-set-the-phasing-rate) the app to production.

## 1. Add release notes

After [uploading the new version](/submit-a-new-version#3-upload-the-new-opk) of the OPK, you need to add some release notes, that includes info about new version changes, new features to test and everything that you think might be useful for our QA team.

![upload](../assets/dev-console/submit-review/upload.png)

Once you click on the "Add release notes" button, a window will popup and you can add the release notes for this version (in markdown format).

![release](../assets/dev-console/submit-review/release-notes.png)

:::note
These notes will not be displayed in your app as a changelog. It's an interanl notes that act as a way of communication between you, the app developer, and the OW QA team.
:::

## 2. Submit for review

After you finish to update the release note, the "submit for review" button will turn enabled.
Hitting submit will send it to our QA team and display the message: "Version X was succesfully submited for review".

![release](../assets/dev-console/submit-review/submit.png)

Note that once your app is waiting for review, the deployment button on the bottom ("start rollout to production") becomes disabled.

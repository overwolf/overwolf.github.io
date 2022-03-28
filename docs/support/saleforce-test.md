---
id: saleforce-test
title: Overwolf App Proposal
sidebar_label: Overwolf App Proposal
---

<meta http-equiv="Content-Type" content="text/html charset=utf-8"/>
<!-- importing React -->
<script src="https://unpkg.com/react@15/dist/react.js"></script>
<!-- importing React-Dom -->
<script src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script>
<!-- importing babel for jsx -->
<script src=" https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<!-- importing the remarkable plugin -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/remarkable/1.7.1/remarkable.js"></script>
<!-- importing salesforce form custom css file -->
<link href="/css/salesforce-form.css" rel="stylesheet">

<!--  ----------------------------------------------------------------------  -->
<!--  NOTE: Please add the following <META> element to your page <HEAD>.      -->
<!--  If necessary, please modify the charset parameter to specify the        -->
<!--  character set of your HTML page.                                        -->
<!--  ----------------------------------------------------------------------  -->
<META HTTP-EQUIV="Content-type" CONTENT="text/html; charset=UTF-8">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css">
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
<!--  ----------------------------------------------------------------------  -->
<!--  NOTE: Please add the following <FORM> element to your page.             -->
<!--  ----------------------------------------------------------------------  -->
<form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">
  <input type=hidden name="oid" value="00D5e000001Oxvi">
  <input type=hidden name="retURL" value="http://temp.overwolf.com">
  <!--  ----------------------------------------------------------------------  -->
  <!--  NOTE: These fields are optional debugging elements. Please uncomment    -->
  <!--  these lines if you wish to test in debug mode.                          -->
  <!--  <input type="hidden" name="debug" value=1>                              -->
  <!--  <input type="hidden" name="debugEmail"                                  -->
  <!--  value="aviram.sisso@overwolf.com">                                      -->
  <!--  ----------------------------------------------------------------------  -->
  <label for="first_name">First Name</label><input  id="first_name" maxlength="40" name="first_name" size="20" type="text" /><br>
  <label for="last_name">Last Name</label><input  id="last_name" maxlength="80" name="last_name" size="20" type="text" /><br>
  Email used to register for Overwolf:<input  id="00N5e00000Yv0u9" maxlength="80" name="00N5e00000Yv0u9" size="20" type="text" /><br>
  <label for="url">Website</label><input  id="url" maxlength="80" name="url" size="20" type="text" /><br>
  <label for="country">Country</label><input  id="country" maxlength="40" name="country" size="20" type="text" /><br>

  Games:
  <select id="00N5e00000YsxRf" class="salesforce-games" multiple="multiple" name="00N5e00000YsxRf" title="Games">
    <option value="Other">Other</option>
    <option value="League of Legends">League of Legends</option>
    <option value="Hearthstone">Hearthstone</option>
    <option value="CS:GO">CS:GO</option>
    <option value="Fortnite">Fortnite</option>
    <option value="Valorant">Valorant</option>
    <option value="Teamfight Tactics">Teamfight Tactics</option>
    <option value="Heroes of the Storm">Heroes of the Storm</option>
    <option value="World of Warcraft">World of Warcraft</option>
    <option value="CoD Warzone">CoD Warzone</option>
    <option value="DOTA2">DOTA2</option>
    <option value="Apex Legends">Apex Legends</option>
    <option value="Rainbow Six Siege">Rainbow Six Siege</option>
    <option value="Rocket League">Rocket League</option>
    <option value="Minecraft">Minecraft</option>
    <option value="GTA">GTA</option>
    <option value="Magic the Gathering: Arena">Magic the Gathering: Arena</option>
    <option value="Halo Infinite">Halo Infinite</option>
    <option value="New World">New World</option>
    <option value="Among Us">Among Us</option>
  </select>
  <br>

  App Idea:<textarea  id="00N5e00000Yv0u4" name="00N5e00000Yv0u4" rows="3" type="text" wrap="soft"></textarea><br>
  Heard about us:<select  id="00N5e00000fRniA" name="00N5e00000fRniA" title="Heard about us"><option value="">--None--</option><option value="Searched for Games API">Searched for Games API</option>
  <option value="I'm an Overwolf user">I'm an Overwolf user</option>
  <option value="Social media (Reddit, Discord...)">Social media (Reddit, Discord...)</option>
  <option value="A friend told me about it">A friend told me about it</option>
  <option value="Other">Other</option>
  </select><br>
  Developer &amp; App terms:<input  id="00N5e00000Yv0uE" name="00N5e00000Yv0uE" type="checkbox" value="1" /><br>
  <input type="submit" name="submit">
</form>

<script>
$(document).ready(function() {
  $('.salesforce-games').select2();
});
</script>

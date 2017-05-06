---
layout: page
title: RSVP
permalink: /rsvp/
sort: 2
excerpt: Let us know if you can make the event, we would be honored to have you attend
read_more: RSVP
image: https://res.cloudinary.com/fi/image/upload/v1494076333/1_epkf6m.jpg
hide_contact_form: true
---

<form method="post" action="#" id="rsvp">
    <div class="field">
        <label for="name">What is your name?</label>
        <input type="text" name="name" id="name" required/>
    </div>
    <div class="field">
        <label for="email">What is your email address?</label>
        <input type="email" name="email" id="email" required />
    </div>
    <div class="field">
        <label for="attending">Will you be joining us?</label>
        <select name="attending" id="attending" required>
            <option value="" selected></option>
            <option value="Yes">Yes :D</option>
            <option value="No">Sorry, I can't make it</option>
        </select>
    </div>
    <div class="field attending-items">
        <label for="party">How many people will be in your party?</label>
        <input type="range" name="party" id="party" min="1" max="10" value="0" oninput="outputPartySize(value)">
        <output for="party" id="partySize">Select a number</output>
    </div>
    <div class="field attending-items">
        <label for="diet">Do you or anyone in your party have any dietary restrictions?</label>
        <select name="diet" id="diet" required>
            <option value="No" selected>No</option>
            <option value="Vegetarian">Yes, I/We can only eat vegetarian</option>
            <option value="Vegan">Yes, I/We can only eat vegan</option>
            <option value="Nut-Allergy">Yes, I/We have nut allergies</option>
        </select>
        <small>For any special cases, please let us know in the box below</small>
    </div>
    <div class="field">
        <label for="notes">Do you have any comments or any thing we should know about?</label>
        <textarea name="notes" id="notes" rows="3" required></textarea>
    </div>
    <div class="field">
        <div class="g-recaptcha" data-sitekey="6LdYLyAUAAAAAH1fcIccF8p4lj5AiajDOIrzghEW" data-callback="verifyReCaptchaRSVPForm"></div>
    </div>
    <ul class="actions">
        <li><input type="submit" value="Send Response" /></li>
    </ul>
</form>
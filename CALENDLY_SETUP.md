# Calendly Integration Setup

## Quick Setup Guide

Follow these steps to enable the scheduling feature on your Connect page:

### 1. Create a Calendly Account
- Go to [calendly.com](https://calendly.com)
- Sign up for a free account
- Complete your profile setup

### 2. Configure Your Availability
- Set your available hours
- Configure your timezone
- Add buffer times between meetings if needed

### 3. Create an Event Type
- Create a "30 Minute Meeting" or "Career Guidance Call" event
- Set the duration (recommended: 30 minutes)
- Add a description about what you'll discuss
- Customize the confirmation messages

### 4. Get Your Calendly Link
- After creating your event type, copy your Calendly scheduling link
- It will look like: `https://calendly.com/your-username/30min`

### 5. Update the Connect Page
Edit the file: `src/routes/connect/+page.svelte`

Find this line (around line 26):
```html
<div class="calendly-inline-widget"
    data-url="https://calendly.com/your-calendly-username/30min"
    style="min-width:320px;height:700px;">
</div>
```

Replace `https://calendly.com/your-calendly-username/30min` with your actual Calendly link.

### 6. Deploy
- Commit your changes
- Push to GitHub
- Your Connect page will now have a working scheduling widget!

## Alternative: Use Cal.com (Open Source)
If you prefer an open-source alternative to Calendly, you can use [Cal.com](https://cal.com):
- Similar features to Calendly
- Self-hostable
- Free tier available
- Integration is similar (just replace the widget code)

## Need Help?
If you have any issues setting this up, feel free to reach out at hpardesh@purdue.edu

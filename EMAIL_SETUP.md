# Email Functionality Setup

## Overview
Your forms now send emails to `info@eestimetsamaakler.ee` using PHP scripts and reCAPTCHA v3 protection.

## Files Created
- `public/api/contact.php` - Handles contact form submissions

## Deployment Instructions

### 1. Build and Upload Static Files
```bash
npm run build
```
Upload the contents of the `dist/` folder to your web server.

### 2. Upload PHP Scripts
Upload these PHP files to your server:
- `public/api/contact.php` → `yoursite.com/api/contact.php`

### 3. Server Requirements
- PHP with `mail()` function enabled
- The script uses reCAPTCHA v3 verification

### 4. reCAPTCHA Configuration
The PHP scripts use reCAPTCHA secret key:
`6Le21i8jAAAAAH0ntAd0h1ZPWeiCTYhAJBD-ClIi`

## Form Features

### Contact Forms
- Validates name, phone, email, and message (all required)
- Validates email format
- reCAPTCHA v3 verification
- Sends email to `info@eestimetsamaakler.ee`

## Testing
Forms will work on your live server with PHP support. They won't work on localhost unless you have PHP running locally.

## File Security
No file uploads in this setup.</content>
<parameter name="filePath">/Users/karlsimmer/Documents/GitHub/Metsamaakler/EMAIL_SETUP.md
# Open edX Cookie Reader
A mini tool to read Open edX user info cookie.

# Usage Instructions

Load the file in your page as shown in the snippet below.

```html
<script 
   type="text/javascript"
   src="https://cdn.jsdelivr.net/gh/appsembler/openedx-cookie-reader@v0.1/cookie-reader.js"></script>
```

Then use the function that reads the cookie. Please note it returns null the case of an error or a missing case:

```javascript
var userInfo = OpenedXCookieReader.getUserInfo();
```

An example user info JSON looks like:

```json
{
  "username": "OmarRed2",
  "version": 1,
  "enrollmentStatusHash": "33b02bc15ce9557d2dd8484d58f95ac4",
  "header_urls": {
    "learner_profile": "https://courses.academy.omardo.com/u/OmarRed2",
    "resume_block": "https://courses.academy.omardo.com/courses/course-v1:Red+slow+slow/",
    "logout": "https://courses.academy.omardo.com/logout",
    "account_settings": "https://courses.academy.omardo.com/account/settings"
  }
}
```

# Author
Omar Al-Ithawi <omar@appsembler.com>

# Credit
Inspired by [code.edraak.org](https://code.edraak.org/) hack for Code.org authentication with Open edX.

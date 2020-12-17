/**
 A mini tool read the edx-user-info cookie.

 @license MIT
 @copyright NodeRabbit
 @author Omar Al-Ithawi <omar@appsembler.com>
 */

(function () {
    var OpenedXCookieReader = {
        getCookieValue: function (name) {
            /**
             * Read a cookie.
             *
             * @source https://stackoverflow.com/a/25490531
             * @return String.
             */
            var value = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
            return value ? value.pop() : '';
        },
        parseUserInfoCookie: function (cookieValue) {
            /**
             * Parse the cookie value by removing Python-related escape characters first.
             *
             * @return Object
             */
            return JSON.parse(JSON.parse(cookieValue.replace(/\\054/g, ',')));
        },
        getUserInfo: function (cookieName) {
            /**
             * Get the user info JSON from the 'edx-user-info' or null.
             *
             * @return Object or null.
             */

            if (!cookieName) {
                cookieName = 'edx-user-info';
            }
            var edXUserInfoCookie = OpenedXCookieReader.getCookieValue(cookieName);
            if (edXUserInfoCookie) {
                try {
                    return OpenedXCookieReader.parseUserInfoCookie(edXUserInfoCookie);
                } catch (e) {
                    console.log('Error in parsing user info cookie [', cookieName, ']', e);
                }
            }

            return null;
        }
    };

    window.OpenedXCookieReader = OpenedXCookieReader;
}());

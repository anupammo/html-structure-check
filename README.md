# html-structure-check
HTML Structure Checker Utility Overview This JavaScript utility helps you check the structure of an HTML document to ensure it meets certain SEO and accessibility standards. It verifies the presence of essential elements like canonical URLs, heading tags, meta tags, and more. Results are logged to the browser console in list format for easy review.
Features
Canonical URL Check: Verifies if the canonical URL is present.

H1 Tag Check: Confirms if an H1 tag exists and checks for multiple H1 tags.

Heading Tags Count: Counts the number of H2, H3, H4, H5, and H6 tags.

Image Alt Attribute Check: Identifies img tags with blank alt attributes.

Open Graph Tag Check: Ensures Open Graph meta tags are present.

Meta Tags Check: Confirms the presence of meta tags.

Schema Tags Check: Verifies if schema tags (JSON-LD) are included.

Title Tag Check: Checks if a title tag is present.

Favicon Check: Confirms the presence of a favicon.

Usage
Include the checkHTMLStructure.js file in your HTML document.

Call the checkHTMLStructure() function to perform the checks.

Review the results in the browser console. 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Page Title</title>
    <!-- Other head elements -->
</head>
<body>
    <!-- Your HTML content -->

    <!-- Include the external JavaScript file -->
    <script src="path/to/checkHTMLStructure.js"></script>
</body>
</html>

Example Output 

Canonical URL exists
H1 tag exists
Only 1 H1 tag or none exists
H2 tags: 3
H3 tags: 2
H4 tags: 1
H5 tags: 0
H6 tags: 0
No img tags with blank alt attribute
Open graph tags exist
Meta tags exist
Schema tags exist
Title tag exists
Favicon exists

You
please write a description for the github repository about the javscript utility
Copilot
Sure! Here's a description you can use for your GitHub repository:

HTML Structure Checker Utility
Overview
This JavaScript utility helps you check the structure of an HTML document to ensure it meets certain SEO and accessibility standards. It verifies the presence of essential elements like canonical URLs, heading tags, meta tags, and more. The results are logged to the browser console in a list format for easy review.

Features
Canonical URL Check: Verifies if the canonical URL is present.

H1 Tag Check: Confirms if an H1 tag exists and checks for multiple H1 tags.

Heading Tags Count: Counts the number of H2, H3, H4, H5, and H6 tags.

Image Alt Attribute Check: Identifies img tags with blank alt attributes.

Open Graph Tag Check: Ensures Open Graph meta tags are present.

Meta Tags Check: Confirms the presence of meta tags.

Schema Tags Check: Verifies if schema tags (JSON-LD) are included.

Title Tag Check: Checks if a title tag is present.

Favicon Check: Confirms the presence of a favicon.

Usage
Include the checkHTMLStructure.js file in your HTML document.

Call the checkHTMLStructure() function to perform the checks.

Review the results in the browser console.

html

Copy
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Page Title</title>
    <!-- Other head elements -->
</head>
<body>
    <!-- Your HTML content -->

    <!-- Include the external JavaScript file -->
    <script src="path/to/checkHTMLStructure.js"></script>
</body>
</html>
Example Output

Copy
Canonical URL exists
H1 tag exists
Only 1 H1 tag or none exists
H2 tags: 3
H3 tags: 2
H4 tags: 1
H5 tags: 0
H6 tags: 0
No img tags with blank alt attribute
Open graph tags exist
Meta tags exist
Schema tags exist
Title tag exists
Favicon exists


Contributing
Feel free to fork this repository, submit issues, and make pull requests to improve this utility.

License
This project is licensed under the MIT License. See the LICENSE file for more details.

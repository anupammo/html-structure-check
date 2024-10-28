/*!
  * checkHTMLStructure v1.0.0 (https://getbootstrap.com/)
  * Author website (https://anupammondal.in/)
  * Copyright 2024-2030 The Anupam Mondal (https://github.com/anupammo)
  * Licensed under GNU General Public License v3
  */

function checkHTMLStructure() {
    // Check for canonical URL
    const canonicalURL = document.querySelector('link[rel="canonical"]') ? 'Canonical URL exists' : 'Canonical URL does not exist';
    
    // Check for H1 tag
    const h1Tags = document.getElementsByTagName('h1');
    const h1TagExists = h1Tags.length > 0 ? 'H1 tag exists' : 'H1 tag does not exist';
    const multipleH1Tags = h1Tags.length > 1 ? 'More than 1 H1 tag exists' : 'Only 1 H1 tag or none exists';
    
    // Count heading tags
    const headingCounts = {
        h2: document.getElementsByTagName('h2').length,
        h3: document.getElementsByTagName('h3').length,
        h4: document.getElementsByTagName('h4').length,
        h5: document.getElementsByTagName('h5').length,
        h6: document.getElementsByTagName('h6').length
    };
    
    // Check for img tags with blank alt attributes
    const imgTags = document.getElementsByTagName('img');
    const imgAltBlank = Array.from(imgTags).some(img => img.getAttribute('alt') === '') ? 'There are img tags with blank alt attribute' : 'No img tags with blank alt attribute';
    
    // Check for open graph tags
    const openGraphTagExists = document.querySelector('meta[property^="og:"]') ? 'Open graph tags exist' : 'Open graph tags do not exist';
    
    // Check for meta tags
    const metaTags = document.getElementsByTagName('meta');
    const metaTagsExist = metaTags.length > 0 ? 'Meta tags exist' : 'Meta tags do not exist';
    
    // Check for schema tags
    const schemaTagsExist = document.querySelector('script[type="application/ld+json"]') ? 'Schema tags exist' : 'Schema tags do not exist';
    
    // Check for title tag
    const titleTagExists = document.getElementsByTagName('title').length > 0 ? 'Title tag exists' : 'Title tag does not exist';
    
    // Check for favicon
    const faviconExists = document.querySelector('link[rel="icon"]') ? 'Favicon exists' : 'Favicon does not exist';
    
    // Log results to the console
    console.log(canonicalURL);
    console.log(h1TagExists);
    console.log(multipleH1Tags);
    console.log(`H2 tags: ${headingCounts.h2}`);
    console.log(`H3 tags: ${headingCounts.h3}`);
    console.log(`H4 tags: ${headingCounts.h4}`);
    console.log(`H5 tags: ${headingCounts.h5}`);
    console.log(`H6 tags: ${headingCounts.h6}`);
    console.log(imgAltBlank);
    console.log(openGraphTagExists);
    console.log(metaTagsExist);
    console.log(schemaTagsExist);
    console.log(titleTagExists);
    console.log(faviconExists);
}

// Call the function to check the HTML structure
checkHTMLStructure();

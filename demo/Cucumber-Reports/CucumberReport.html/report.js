$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("gillette.feature");
formatter.feature({
  "line": 1,
  "name": "Gillette Website Tests",
  "description": "",
  "id": "gillette-website-tests",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Verify the search functionality",
  "description": "",
  "id": "gillette-website-tests;verify-the-search-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I search for \"\u003csearchText\u003e\" using the search option",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see \"Results For Razor\u0027\" at the top of the search results",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "gillette-website-tests;verify-the-search-functionality;",
  "rows": [
    {
      "cells": [
        "searchText"
      ],
      "line": 11,
      "id": "gillette-website-tests;verify-the-search-functionality;;1"
    },
    {
      "cells": [
        "Razor"
      ],
      "line": 12,
      "id": "gillette-website-tests;verify-the-search-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3638916744,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the Gillette website",
  "keyword": "Given "
});
formatter.match({
  "location": "GilletteTests.iAmOnTheGilletteWebsite()"
});
formatter.result({
  "duration": 2068971284,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify the search functionality",
  "description": "",
  "id": "gillette-website-tests;verify-the-search-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I search for \"Razor\" using the search option",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see \"Results For Razor\u0027\" at the top of the search results",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Razor",
      "offset": 14
    }
  ],
  "location": "GilletteTests.iSearchForUsingTheSearchOption(String)"
});
formatter.result({
  "duration": 1880669672,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Results For Razor\u0027",
      "offset": 14
    }
  ],
  "location": "GilletteTests.iShouldSeeAtTheTopOfTheSearchResults(String)"
});
formatter.result({
  "duration": 428614985,
  "status": "passed"
});
formatter.after({
  "duration": 295963889,
  "status": "passed"
});
formatter.after({
  "duration": 648048435,
  "status": "passed"
});
formatter.before({
  "duration": 988757777,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the Gillette website",
  "keyword": "Given "
});
formatter.match({
  "location": "GilletteTests.iAmOnTheGilletteWebsite()"
});
formatter.result({
  "duration": 1659311617,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify the display of Gillette MACH3 Turbo under products list",
  "description": "",
  "id": "gillette-website-tests;verify-the-display-of-gillette-mach3-turbo-under-products-list",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I hover on from the top navigation",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I choose \"MACH3\" under \"By Brands\" from the drop-down",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see \"Gillette MACH3 Turbo\" under the products list",
  "keyword": "Then "
});
formatter.match({
  "location": "GilletteTests.iHoverOnFromTheTopNavigation()"
});
formatter.result({
  "duration": 990376454,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MACH3",
      "offset": 10
    },
    {
      "val": "By Brands",
      "offset": 24
    }
  ],
  "location": "GilletteTests.iChooseUnderFromTheDropDown(String,String)"
});
formatter.result({
  "duration": 1114644963,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gillette MACH3 Turbo",
      "offset": 14
    }
  ],
  "location": "GilletteTests.iShouldSeeUnderTheProductsList(String)"
});
formatter.result({
  "duration": 753903592,
  "status": "passed"
});
formatter.after({
  "duration": 309256472,
  "status": "passed"
});
formatter.after({
  "duration": 218912869,
  "status": "passed"
});
formatter.before({
  "duration": 1127292609,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the Gillette website",
  "keyword": "Given "
});
formatter.match({
  "location": "GilletteTests.iAmOnTheGilletteWebsite()"
});
formatter.result({
  "duration": 1870335705,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify the presence of \"Facial Hair Styles: The Anchor Beard\" under styling articles",
  "description": "",
  "id": "gillette-website-tests;verify-the-presence-of-\"facial-hair-styles:-the-anchor-beard\"-under-styling-articles",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "I click on \"Styling\" under \"Learn\" in the footer",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should see \"Facial Hair Styles: The Anchor Beard\" under the list of articles under styling",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Styling",
      "offset": 12
    },
    {
      "val": "Learn",
      "offset": 28
    }
  ],
  "location": "GilletteTests.iClickOnUnderInTheFooter(String,String)"
});
formatter.result({
  "duration": 1590999400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Facial Hair Styles: The Anchor Beard",
      "offset": 14
    }
  ],
  "location": "GilletteTests.iShouldSeeUnderTheListOfArticlesUnderStyling(String)"
});
formatter.result({
  "duration": 314026187,
  "status": "passed"
});
formatter.after({
  "duration": 633669045,
  "status": "passed"
});
formatter.after({
  "duration": 197834049,
  "status": "passed"
});
});
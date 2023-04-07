import katalon from "katalon";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await web.openBrowser("https://katalon-demo-cura.herokuapp.com");
  await web.click({
    type: "Web",
    id: "e29cb5d6-d7c0-4789-810d-e0d660222014",
    attributes: {},
    childIndex: 2,
    hashes: { "md5.v1": "a8a9bd225046dc5363ecddaa32974ad1" },
    name: "p - Atlanta 550 Pharr Road NE Suite 525",
    selectors: [
      {
        id: "8645f5b5-b8f6-47bf-b1dd-5d718200e8bc",
        type: "CSS",
        value: "p:nth-child(2)",
        isDefault: true,
      },
      {
        id: "ebf91411-12ad-476a-8d6e-2678acb45022",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "p",
    text: "Atlanta 550 Pharr Road NE Suite 525\nAtlanta, GA 30305",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.click({
    type: "Web",
    id: "7cb5cb0c-46e1-4042-88a9-191794951b8a",
    attributes: {},
    childIndex: 2,
    hashes: { "md5.v1": "fa42476c98e207a0c20728a418a3190f" },
    name: "h3 - We Care About Your Health",
    selectors: [
      {
        id: "4e13e66c-d4a3-4941-b759-b615a60395a0",
        type: "CSS",
        value: "h3",
        isDefault: true,
      },
      {
        id: "ccbfb52a-babf-45e3-973e-3eb005c03ce2",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "h3",
    text: "We Care About Your Health",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.closeBrowser();
});
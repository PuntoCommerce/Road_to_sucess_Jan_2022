"use strict";

// Initialize constants Template and HashMap
const Template = require("dw/util/Template");
const HashMap = require("dw/util/HashMap");

/**
 * @function renderFAQItem
 * @description Helper function used to render the faq-item component
 *
 * @param {Object} componentContent Represents the context object containing configurable component data used by the componentRenderer
 * @returns {String} Returns the mark-up string representing the specified component
 */
function renderFAQItem(componentContent) {
  // Initialize the model
  let model = new HashMap();

  // Add the faq-item elements to the component's model
  model.video_url = componentContent.content.video_url;

  // Invoke the template renderer for the copy title component
  return new Template("experience/components/commerce_assets/video").render(
    model
  ).text;
}

// Export the function to render the copy paragraph component
module.exports.render = renderFAQItem;

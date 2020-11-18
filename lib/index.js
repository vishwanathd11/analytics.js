/**
 * Analytics.js
 *
 * (C) 2017 Segment Inc.
 */

var analytics = require("@segment/analytics.js-core");
var Integrations = require("./integrations");
var each = require("each");

/**
 * Expose the `analytics` singleton.
 */

module.exports = exports = analytics;

/**
 * Expose require.
 */

/**
 * Add integrations.
 */

each(Integrations, function(name, Integration) {
  analytics.use(Integration);
});

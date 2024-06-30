function manageBrowserHistory(browser, actions) {
  actions.forEach((action) => {
    if (action === "Clear History and Cache") {
      // Clear the whole browser object
      browser["Open Tabs"] = [];
      browser["Recently Closed"] = [];
      browser["Browser Logs"] = [];
    } else {
      let [command, ...siteParts] = action.split(" ");
      let site = siteParts.join(" ");

      if (command === "Open") {
        // Add site to Open Tabs
        browser["Open Tabs"].push(site);
        browser["Browser Logs"].push(action);
      } else if (command === "Close") {
        // Close the site if it is in Open Tabs
        let index = browser["Open Tabs"].indexOf(site);
        if (index !== -1) {
          browser["Open Tabs"].splice(index, 1);
          browser["Recently Closed"].push(site);
          browser["Browser Logs"].push(action);
        }
      }
    }
  });

  // Print the final state of the browser object
  console.log(`${browser["Browser Name"]}`);
  console.log(`Open Tabs: ${browser["Open Tabs"].join(", ")}`);
  console.log(`Recently Closed: ${browser["Recently Closed"].join(", ")}`);
  console.log(`Browser Logs: ${browser["Browser Logs"].join(", ")}`);
}

// Example usage
const browser1 = {
  "Browser Name": "Google Chrome",
  "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
  "Recently Closed": ["Yahoo", "Gmail"],
  "Browser Logs": [
    "Open YouTube",
    "Open Yahoo",
    "Open Google Translate",
    "Close Yahoo",
    "Open Gmail",
    "Close Gmail",
    "Open Facebook",
  ],
};

const actions1 = ["Close Facebook", "Open StackOverFlow", "Open Google"];

// const browser2 = {
//     "Browser Name": "Mozilla Firefox",
//     "Open Tabs": ["YouTube"],
//     "Recently Closed": ["Gmail", "Dropbox"],
//     "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
// };

// const actions2 = ["Open Wikipedia", "Clear History and Cache", "Open Twitter"];

manageBrowserHistory(browser1, actions1);
//manageBrowserHistory(browser2, actions2);

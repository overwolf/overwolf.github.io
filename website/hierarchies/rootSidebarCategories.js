module.exports = {
  // start: [
  //   {
  //     type: 'autogenerated',
  //     dirName: 'start'
  //   }
  // ],
  api: {
    type: 'category',
    label: 'Root Item',
    customProps: {
      sub_categories: {
        categories: [{
          id: 'general',
          label: 'General'
        },
        {
          id: 'electron',
          label: 'Electron'
        },
        {
          id: 'overwolf',
          label: 'Overwolf'
        }]
      }
    }
  },
  // topics: [
  //   {
  //     type: 'autogenerated',
  //     dirName: 'topics'
  //   }
  // ],
  tools: {
    type: 'category',
    label: 'Root Item',
    customProps: {
      sub_categories: {
        categories: [{
          id: 'frameworks',
          label: 'Frameworks'
        },
        {
          id: 'sample-apps',
          label: 'Sample Apps'
        },
        {
          id: 'utilities',
          label: 'Utilities'
        }]
      }
    }
  },
  // status: [
  //   {
  //     type: 'autogenerated',
  //     dirName: 'status'
  //   }
  // ],
  // support: [
  //   {
  //     type: 'autogenerated',
  //     dirName: 'support'
  //   }
  // ],
  // achievementRewards: [
  //   {
  //     type: 'autogenerated',
  //     dirName: 'internal/achievement-rewards'
  //   }
  // ],
  // gepWebsockets: [
  //   {
  //     type: 'autogenerated',
  //     dirName: 'internal/websocket-gep'
  //   }
  // ]
}
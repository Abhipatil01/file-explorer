const data = {
  name: "root",
  isFolder: true,
  items:[
    {
      name: "public",
      isFolder: true,
      items:[
        {
          name: "index.html",
          isFolder: false,
          items:[]
        },
        {
          name: "css",
          isFolder: true,
          items:[
            {
              name: "index.css",
              isFolder: false,
              items:[]
            },
          ]
        },
      ]
    },
    {
      name: "src",
      isFolder: true,
      items:[
        {
          name: "data",
          isFolder: true,
          items:[
            {
              name: "data.js",
              isFolder: false,
              items:[]
            },
          ]
        },
        {
          name: "app.js",
          isFolder: false,
          items:[]
        },
        {
          name: "index.js",
          isFolder: false,
          items:[]
        },
      ]
    },
    {
      name: "package.json",
      isFolder: false,
      items:[]
    },
  ]
}

export default data;
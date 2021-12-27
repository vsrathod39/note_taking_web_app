const path = require("path");

module.exports = {
    entry:  "./public/js/index.js",
     output: {
         path: path.join(__dirname, "public"), //folder name for output
         filename: "bundle.js"
     },
     mode: "production",
     module: {
         rules: [
             {
                 test: /\.css$/,
                 use: ["style-loader", "css-loader"]
             },
             {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                      loader: 'file-loader'
                    }
                  ]
             }
         ]
     }
};
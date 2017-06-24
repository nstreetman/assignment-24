Assignment 23 - React Todo List

Objectives

Apply event listeners in React.
Understand the distinction between state and props in React.
Change state of react components.
Capture user input using refs on elements.
Modify the top-level state of a component from a lower-level component.
Setup Instructions

cd into your ~/TIY/assignments directory and clone webpack-simple-server repo into an assignment-«XX» project-directory
git clone git@github.com:t3tools/webpack-simple-server.git assignment-xx
Install the project's dependencies from the package.json
npm install
After installation completes, start the task runner and local webserver:
npm run go
Build the project per requirements.
Normal Mode -add a new task and see it appear in a list of pending tasks.
remove a task from the list.

Explorer Mode -add additional information about a task, such as its urgency status and due date.
you will need to use <input type="date"/> and <input type="checkbox"> to capture this information


Adventure Mode -Instead of simply removing a completed task, a user should be able to toggle that task's completion status.

A hint on implementation:
When one of your low-level UI components (e.g., TodoItem) receives user input to change a task from undone to done or vice versa, it needs to notify the top-level, "smart" component, so that that component can re-set its state.


#ES6 Module Bundler Setup

##Setup 

##### 1. Clone this repo
```
git clone git@github.com:t3tools/webpack-es6-and-scss.git «your-projet»
```

##### 2. Install the packages
```
npm install
```

##### 3. Run the taskrunner & run the local server
```
npm run go
```

##### 4. Workflow
Do scss and javascript work in the `src/` directory. It will compile to the `dist/` with the taskrunner.

`index.html` pages are served out of the `dist/`

##Webpack Configuration:
```
const webpack = require('webpack')
const nodeEnv = process.env.NODE_ENV || 'production'

module.exports = {
  devtool : 'source-map',
  entry:   { filename: './src/index.js' },
  output : { filename: './dist/js/app.js' },
  module: {
    loaders: [	    
	 ]
  },
  plugins: [
     //uglify js
     new webpack.optimize.UglifyJsPlugin({
			compress: { warnings: false }, 
			output: {comments: false},
         sourceMap: true
	  }),
	
     //env plugin
	  new webpack.DefinePlugin({
        'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
	  }),
  ]
}

```


#Configure #ES6
#### In `package.json`
- babel-core
- babel-loader
- babel-preset-es2015

#### ES6: In `webpack.config.js`
```
	...
   loaders: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
		},
   ...
```


### Configure Scss
#### (in `package.json`
```
    "css-loader": "^0.26.1",
    "sass-loader": "^5.0.1",
    "style-loader": "^0.13.1",
    "node-sass": "^4.5.0",
    "extract-text-webpack-plugin": "^2.0.0-beta.5",
```

#### (2) in `webpack.config.js`
```
const ExtractTextPlugin = require('extract-text-webpack-plugin');

modules: {
  loaders: [
	  ...
     {
		  test: /\.scss$/,
		  loader: ExtractTextPlugin.extract({fallbackLoader: "style-loader", loader: "css-loader!sass-loader"})		 
	  },
	]
  },

  plugins: {
	 ...
    new ExtractTextPlugin({filename: './dist/styles.css', allChunks: true})
  }

}
  
```

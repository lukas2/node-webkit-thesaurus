### Node-Webkit App: Thesaurus

This is a little Mac desktop writing helper-app for the German language. Please see my blogpost at http://lukaszielinski.de/blog/posts/2014/10/20/macthesaurus-a-mac-app-written-with-node-webkit

To install:

    npm install

You also need node-webkit, which isn't packaged. But to get it, you can use [yeoman](http://yeoman.io):

		npm install -g yo
    npm install -g generator-node-webkit
    yo node-webkit

Answer yes when it asks you about downloading the Mac-version. Say no to everything else when it asks about overwriting files!

Yes, there's better ways to package everything, but I am lazy and just want to get this out the door.. ;)

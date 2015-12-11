# haxe-react-default
Haxe default sample. Sample shows how to create react js application with loading json data from url and generate html page

gulp file has those functions:

- runs local server.
- watch changes on html and js files (if rebuild application and server runs then gulp runs automatic reload).
 

This sample includes haxe, react, yloader, msignal, nodejs and gulp

Install
-------
Application uses those components

- msignal (Massive library [msignal](https://github.com/massiveinteractive/msignal))
- yloader (Jozef Chutka library [yloader](https://github.com/jozefchutka/YLoader))
- react (React library [React](https://facebook.github.io/react/))

Install all nodejs packages

        npm install
        
Install 

        haxelib install msignal
        haxelib install yloader
        haxelib install react
        

Build app
---------

        haxe build.hxml
        
Run demo
--------

        gulp
        

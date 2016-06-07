# Angular JS + Node Server

##How to run:

- Install Node

- Install Bower globally
```
npm install bower -g 
```

- Install Gulp globally
```
npm install gulp -g 
```


##Installation steps:
```
npm install 
```
(bower install is runned automatically after this)

To run the server, execute
```
npm start 
```

You can check the server response accessing
```
http://localhost:8090/rest/people
```

You will get a result similar to this:
```
[
  {
    "id": 0,
    "name": "Rose Franklin",
    "disclosableInfo": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini m veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    "id": 1,
    "name": "Rose undefined",
    "disclosableInfo": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini m veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  
  ...
]
```

Execute the following command to minify the files:
```
gulp build
```

And access the file generated:
```
/dist/public/people.html
```

P.S:Due to lack of time, I did not created a friendly css to the screen


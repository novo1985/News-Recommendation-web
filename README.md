### News Recommendation application
1. Project schematic diagram  
    
    built a web app providing news recommendation service  

    ![image](https://i.imgur.com/F0wSGse.png)  

    - FrontEnd: React.js
    - BackEnd: Node.js + Python & RPC & TensorFlow
    - DataBase: Redis & MongoDB
    - Web tool: Rabbit MQ


2. Web app building  
    * Creates a frontend build pipeline by "create-react-app" package
    Utilize [React tool](https://reactjs.org/blog/2016/07/22/create-apps-with-no-configuration.html) to create single-page React application, using materializecss to design front-end framework

    * Authentication: SHA1 with SALT
    For each user, we generate a random a salt and add it to user’s password. Server-side generated password.All user information are stored in MongoDB  

        >Signup: f(password, salt) = hash(password + salt)  
        >Login: hash([provided password] + [stored salt]) == [stored hash]

    * Generate a Node server by "express-generator" package  
    Front-end react app will get information from Node server and display the news from Node server. Node server get news from Backend Server through RPC requests

        >![Data flow](https://i.imgur.com/Lzu6pgs.jpg)  

    * 






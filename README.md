## DonLee.online


DonLee.online](https://donlee.online) is a website where Don's web development projects are presented as well as his blogs.

It is built with `React.js` for front-end and `Django`, `PostgreSQL` for back-end.



## Deployment on VPS - Ubuntu 18.04


When deploying a React&Django app, that is assuming a react app and a Django api (employing [Django REST framework](https://www.django-rest-framework.org/)) are fully functional, three major blocks need to be done: 
1. Front-end packaging
2. Server config
3. Back-end config, primarily PostgreSQL config

### Front-end
Firstly, if you are not familiar with Webpack and do not want it to get in the way, you can use `create-react-app` and some mockup data to develop your front-end app. When you have all the source files ready to integrate with Django, follow the steps in this post: [React-Django integration](https://donlee.online/blog/posts/53/react-intergration-in-django). 

A summary of the post:
* folder structure in Django
* install `Node.js`, `webpack`, `webpack-cli`, `babel`, `loaders` etc.
* most importantly webpack configuration (`webpack.config.js`), a simple version

### Server config
Essentially, there is no difference between deploying a django app and a django-react app on a VPS. Follow the steps in this post: [Django Deployment - VPS Ubuntu 18.04](https://donlee.online/blog/posts/32/django-deployment-vps-ubuntu-18.04) - key points including:
* Initialisation of the server
* Creating PostgreSQL Database and Database User - PostgreSQL
* Clone the repo: have the essential files ready and install the dependencies
* ___IMPORTANT___: Gunicorn setup
* ___IMPORTANT___: Nginx setup
* Certbot: SSL on Nginx
* Troubleshooting

### PostgreSQL config
This part is included in the post above. You can certainly leave the PostgreSQL part to the end of the process, however, it is recommended to setup a database before you clone the repo to Ubuntu so that it is ready to use for the app.
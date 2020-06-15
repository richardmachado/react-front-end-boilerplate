Boiler plate

how to start a react project 

npx create-react-app (enter a project name)


###########
gitignore node_modules

in root
gitignore - node modules

```touch .gitignore && echo "node_modules/" >> .gitignore && git rm -r --cached node_modules ; git status```

#################

if creating SPA with react-router-dom

in the public folder, create a file name _redirects

/*    /index.html   200 

######################

yarn add axios react-router-dom styled-components bootstrap react-bootstrap reactstrap react-hook-form

in index.html add

<link type="text/css" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css">

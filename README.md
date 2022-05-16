# Getting Started with Promedio Final V2

---

## Aplicación basada solo en el frontend

Herramientas necesarias:
npm install @reduxjs/toolkit react-redux (redux toolkit para manejar el estado de la aplicacion)
npm install localbase -> base de datos offline del navegador (IndexedDB)
npm install uuid -> creador de id's unicos
npm install chart.js react-chartjs-2

---

## Deploying app in heroku:

git status
git add .
git commit -m "my first change"
git remote -v
heroku create -b https://github.com/mars/create-react-app-buildpack.git sistema-experto-ucss
git remote -v
git push heroku master

Link de la aplicación creada:
https://sistema-experto-ucss.herokuapp.com/

Para eliminar la aplicación del dashboard de heroku
git remote -v
git remote remove heroku
git remote -v

Para desplegar los nuevos cambios a heroku app normal
optional!
git add .
git commit -m "my first change"
THIS:
git push heroku master

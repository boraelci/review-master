npm cache clean --force
rm -rf node_modules
rm package-lock.json
cd example
rm -rf node_modules
rm package-lock.json
cd ..
npm install
npm run build
cd example
npm install
cd ..
npm start
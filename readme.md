blank node-ts build

"dev": "npx nodemon",
"build": "rimraf ./build && npx tsc",
"start": "npm run build && node build/main"
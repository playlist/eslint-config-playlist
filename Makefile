build:
	node -e "console.log(JSON.stringify(require('./index'), ' ', 2))" > dist/index.js

clean:
	rm -rf dist

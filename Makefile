JSCS = node_modules/.bin/jscs
JSHINT = node_modules/.bin/jshint
WEBPACK = node_modules/webpack/bin/webpack.js
DEVSERVER = node_modules/webpack-dev-server/bin/webpack-dev-server.js

.PHONY: build dev lint

build:
	$(WEBPACK)

dev:
	$(DEVSERVER) --content-base dist/ --hot

lint:
	$(JSHINT) .
	$(JSCS) -c .jscsrc .


JSCS = node_modules/.bin/jscs
JSHINT = node_modules/.bin/jshint

export NODE_ENV = test

.PHONY: build dev lint

build:

dev:

lint:
	$(JSHINT) .
	$(JSCS) -c .jscsrc .


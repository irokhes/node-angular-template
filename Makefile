app_name = Project

REPORTER = spec

test:
	./node_modules/mocha/bin/mocha tests -u bdd \
	--recursive  --timeout 10000 \
	--reporter $(REPORTER)


.PHONY: test
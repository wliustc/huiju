test:
  ./node_modules/.bin/mocha

cov test-cov:
  ./node_modules/.bin/istanbul cover ./node_modules/mocha/bin/_mocha --report lcovonly -- -R spec && cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js && rm -rf ./coverage
  
.PHONY: test cov test-cov
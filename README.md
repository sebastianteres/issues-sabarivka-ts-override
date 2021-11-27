# Issues-Sabarivka-TS-Override

This sample project is intended to reproduce an issue with `karma-sabarivka-reporter` when using TS 4.3 **`override` keyword**.

# How to use

1. Clone this repository
2. run `npm install`
3. run `npm test -- --code-coverage`

# What you should see

After running tests with code coverage you should see the following log:

```sh
> issues-sabarivka-ts-override@0.0.0 test /Users/spt/Work/Uxeed/sandbox/issues-sabarivka-ts-override
> ng test "--code-coverage"

⠙ Generating browser application bundles (phase: building)...27 11 2021 12:49:26.640:WARN [karma]: No captured browser, open http://localhost:9877/
27 11 2021 12:49:26.661:INFO [karma-server]: Karma v6.3.9 server started at http://localhost:9877/
27 11 2021 12:49:26.661:INFO [launcher]: Launching browsers Chrome with concurrency unlimited
27 11 2021 12:49:26.666:INFO [launcher]: Starting browser Chrome
✔ Browser application bundle generation complete.
27 11 2021 12:49:31.470:WARN [karma]: No captured browser, open http://localhost:9877/
27 11 2021 12:49:31.549:INFO [Chrome 96.0.4664.55 (Mac OS 10.15.7)]: Connected on socket Wr0hLcZONIM932aOAAAB with id 31761216
Chrome 96.0.4664.55 (Mac OS 10.15.7): Executed 3 of 3 SUCCESS (0.168 secs / 0.153 secs)
27 11 2021 12:49:33.132:ERROR [karma-server]: UncaughtException: SyntaxError: /Users/spt/Work/Uxeed/sandbox/issues-sabarivka-ts-override/src/app/child-sample.ts: Argument name clash. (17:43)

  15 | var ChildSample = /** @class */ (function (_super) {
  16 |     __extends(ChildSample, _super);
> 17 |     function ChildSample(override, myArg1, override, myArg2) {
     |                                            ^
  18 |         var _this = _super.call(this, myArg1, myArg2) || this;
  19 |         _this.override = override;
  20 |         _this.override = override;
    at Parser._raise (/Users/spt/Work/Uxeed/sandbox/issues-sabarivka-ts-override/node_modules/@babel/parser/lib/index.js:541:17)
    at Parser.raiseWithData (/Users/spt/Work/Uxeed/sandbox/issues-sabarivka-ts-override/node_modules/@babel/parser/lib/index.js:534:17)
    at Parser.raise (/Users/spt/Work/Uxeed/sandbox/issues-sabarivka-ts-override/node_modules/@babel/parser/lib/index.js:495:17)
    at Parser.checkLVal (/Users/spt/Work/Uxeed/sandbox/issues-sabarivka-ts-override/node_modules/@babel/parser/lib/index.js:11075:20)
    at Parser.checkParams (/Users/spt/Work/Uxeed/sandbox/issues-sabarivka-ts-override/node_modules/@babel/parser/lib/index.js:12820:12)
    at Parser.<anonymous> (/Users/spt/Work/Uxeed/sandbox/issues-sabarivka-ts-override/node_modules/@babel/parser/lib/index.js:12795:14)
    at Parser.parseBlockOrModuleBlockBody (/Users/spt/Work/Uxeed/sandbox/issues-sabarivka-ts-override/node_modules/@babel/parser/lib/index.js:13964:23)
    at Parser.parseBlockBody (/Users/spt/Work/Uxeed/sandbox/issues-sabarivka-ts-override/node_modules/@babel/parser/lib/index.js:13932:10)
    at Parser.parseBlock (/Users/spt/Work/Uxeed/sandbox/issues-sabarivka-ts-override/node_modules/@babel/parser/lib/index.js:13916:10)
    at Parser.parseFunctionBody (/Users/spt/Work/Uxeed/sandbox/issues-sabarivka-ts-override/node_modules/@babel/parser/lib/index.js:12786:24)
27 11 2021 12:49:33.133:ERROR [karma-server]: SyntaxError: /Users/spt/Work/Uxeed/sandbox/issues-sabarivka-ts-override/src/app/child-sample.ts: Argument name clash. (17:43)

  15 | var ChildSample = /** @class */ (function (_super) {
  16 |     __extends(ChildSample, _super);
> 17 |     function ChildSample(override, myArg1, override, myArg2) {
     |                                            ^
  18 |         var _this = _super.call(this, myArg1, myArg2) || this;
  19 |         _this.override = override;
  20 |         _this.override = override;
    at Parser._raise (/Users/spt/Work/Uxeed/sandbox/issues-sabarivka-ts-override/node_modules/@babel/parser/lib/index.js:541:17)
    at Parser.raiseWithData (/Users/spt/Work/Uxeed/sandbox/issues-sabarivka-ts-override/node_modules/@babel/parser/lib/index.js:534:17)
    at Parser.raise (/Users/spt/Work/Uxeed/sandbox/issues-sabarivka-ts-override/node_modules/@babel/parser/lib/index.js:495:17)
    at Parser.checkLVal (/Users/spt/Work/Uxeed/sandbox/issues-sabarivka-ts-override/node_modules/@babel/parser/lib/index.js:11075:20)
    at Parser.checkParams (/Users/spt/Work/Uxeed/sandbox/issues-sabarivka-ts-override/node_modules/@babel/parser/lib/index.js:12820:12)
    at Parser.<anonymous> (/Users/spt/Work/Uxeed/sandbox/issues-sabarivka-ts-override/node_modules/@babel/parser/lib/index.js:12795:14)
    at Parser.parseBlockOrModuleBlockBody (/Users/spt/Work/Uxeed/sandbox/issues-sabarivka-ts-override/node_modules/@babel/parser/lib/index.js:13964:23)
    at Parser.parseBlockBody (/Users/spt/Work/Uxeed/sandbox/issues-sabarivka-ts-override/node_modules/@babel/parser/lib/index.js:13932:10)
    at Parser.parseBlock (/Users/spt/Work/Uxeed/sandbox/issues-sabarivka-ts-override/node_modules/@babel/parser/lib/index.js:13916:10)
    at Parser.parseFunctionBody (/Users/spt/Work/Uxeed/sandbox/issues-sabarivka-ts-override/node_modules/@babel/parser/lib/index.js:12786:24) {
  loc: Position { line: 17, column: 43 },
  pos: 785,
  code: 'BABEL_PARSE_ERROR',
  reasonCode: 'ParamDupe'
}
TOTAL: 3 SUCCESS

=============================== Coverage summary ===============================
Statements   : Unknown% ( 0/0 )
Branches     : Unknown% ( 0/0 )
Functions    : Unknown% ( 0/0 )
Lines        : Unknown% ( 0/0 )
================================================================================
Chrome 96.0.4664.55 (Mac OS 10.15.7) ERROR
  Disconnected Client disconnected from CONNECTED state (transport close)
Chrome 96.0.4664.55 (Mac OS 10.15.7): Executed 3 of 3 SUCCESS (0.168 secs / 0.153 secs)
Chrome 96.0.4664.55 (Mac OS 10.15.7) ERROR
  Disconnected Client disconnected from CONNECTED state (transport close)
npm ERR! Test failed.  See above for more details.
```

# Setup

This project was setup as follows:

1. Create project
```sh
npx @angular/cli@12.2.13 new issues-sabarivka-ts-override 
```

2. Add `karma-sabarivka-reporter`
```sh
npm install --save-dev karma-sabarivka-reporter
```

3. Add `"noImplicitOverride": true` to `tsconfig.json` (compilerOptions)

4. Create `base-sample.ts`

5. Create `child-sample.ts`

6. Generate a sample component
```sh
ng g c sample
```

7. Import ChildSample into SampleComponent and create an instance of `ChildSample`  
*This is just so that typescript picks all files up*

8. Finally setup karma.cong.js by including `karma-sabarivka-reporter` and adding `includes` to `coverageReporter` settings:
```js
coverageReporter: {
    include: [require('path').join(__dirname, 'src/**/!(*.spec|*.module|environment*|main).(ts|js)')],
    dir: require('path').join(__dirname, './coverage/issues-sabarivka-ts-override'),
    subdir: '.',
    reporters: [
        { type: 'html' },
        { type: 'text-summary' },
        { type: 'lcov' }
    ]
}
```
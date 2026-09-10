//? Commands to run the test script - 
//! npx --> node package executor
// spec --> specification of the file
// -g --> globally

//~ npx playwright test --> Run all the test 

//~ npx playwright test relative_path --> to run a specific test file

//~ npx playwright test relative path --headed / npx playwright test --headed  --> to make browser window visible.

//~ npx playwright test relative path --project = webkit --project = --project = firefox --project = chromium / npx playwright test --project = webkit --project = --project = firefox --project = chromium   --> multiple browser execution

//~ npx playwright test relative path --project=webkit /npx playwright test --project=webkit   --> executing only in the webkit browser.

//~ npx playwright test relative path --project=firefox /npx playwright test --project=firefox   --> executing only in the firefox browser.

//~ npx playwright test relative path --project=chromium /npx playwright test --project=chromium   --> executing only in the chromium browser.

//~ npx playwright test -g "your test file name" --> it is used for executing the specific test file based on the name.

//~ npx playwright test --last-failed --> it is going to execute the last failed test

//~ npx playwright test relative path --debug /npx playwright test --debug  --> basically we are able to see what is happening in the code / how the test script will execute we can see. 
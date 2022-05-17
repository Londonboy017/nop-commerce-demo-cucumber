$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ComputerPageTest.feature");
formatter.feature({
  "line": 1,
  "name": "Computer page test",
  "description": "As a user I want to check following scenario on computer page of nop commerce website",
  "id": "computer-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4349221501,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "verify User Should Navigate To Desktops Page Successfully",
  "description": "",
  "id": "computer-page-test;verify-user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Smoke"
    },
    {
      "line": 10,
      "name": "@Regression"
    },
    {
      "line": 10,
      "name": "@check"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on\"Computers\" tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on\"Desktops\" sub tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify \u0027Desktops\u0027 text",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 73307700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 11
    }
  ],
  "location": "ComputerSteps.iClickOnTab(String)"
});
formatter.result({
  "duration": 612321800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 11
    }
  ],
  "location": "ComputerSteps.iClickOnSubTab(String)"
});
formatter.result({
  "duration": 457117400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.verifyDesktopsText()"
});
formatter.result({
  "duration": 30078399,
  "status": "passed"
});
formatter.after({
  "duration": 663913799,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As user I want to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3050321900,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Sanity"
    },
    {
      "line": 4,
      "name": "@Regression"
    },
    {
      "line": 4,
      "name": "@check"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#create defination -put cursor on line and press alt+enter--\u003eselect java instead of jav 8..then ok"
    }
  ],
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 28301,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 431081400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 40595599,
  "status": "passed"
});
formatter.after({
  "duration": 637709101,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Register",
  "description": "As user I want to register into nop commerce website",
  "id": "register",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3070501100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "verify User Should Navigate To Register Page Successfully",
  "description": "",
  "id": "register;verify-user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    },
    {
      "line": 3,
      "name": "@Regression"
    },
    {
      "line": 3,
      "name": "@check"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Verify the register text",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 25600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 550272099,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.verifyTheRegisterText()"
});
formatter.result({
  "duration": 26487600,
  "status": "passed"
});
formatter.after({
  "duration": 635617000,
  "status": "passed"
});
});
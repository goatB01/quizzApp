let questions = [
  {
    numb: 1,
    question:
      "A developer wants to send an outbound message when a record meets a specific criteria. Which two features satisfy this use case? Choose 2 answers",
    options: [
      "Next Best Action can be used to check the record criteria and send an outbound message.",
      "Approval Process can be used to check the record criteria and send an outbound message.",
      "Flow Builder can be used to check the record criteria and send an outbound message.",
      "Entitlement Process can be used to check the record criteria and send an outbound message without Apex code.",
    ],
    answer: [
      "Approval Process can be used to check the record criteria and send an outbound message.",
      "Flow Builder can be used to check the record criteria and send an outbound message.",
    ],
  },
  {
    numb: 2,
    question:
      "A developer creates a Lightning web component that imports a method within an Apex class. When a Validate button is pressed, the method runs to execute complex validations. In this implementation scenario, which two options are part of the Controller according to the MVC architecture? Choose 2 answers",
    options: ["JavaScript file", "XML file", "Apex class", "HTML file"],
    answer: ["JavaScript file", "Apex class"],
  },
  {
    numb: 3,
    question:
      "A developer created a trigger on the Account object. While testing the trigger, the developer sees the error message 'Maximum trigger depth exceeded'. What could be the possible causes?",
    options: [
      "The developer does not have the correct user permission.",
      "The trigger is getting executed multiple times.",
      "The trigger is too long and should be refactored into a helper class.",
      "The trigger does not have sufficient code coverage.",
    ],
    answer: ["The trigger is getting executed multiple times."],
  },
  {
    numb: 4,
    question:
      "What are three characteristics of change set deployments? Choose 3 answers",
    options: [
      "Change sets can only be used between related organizations.",
      "Deployment is done in a one-way, single transaction.",
      "Change sets can be used to transfer records.",
      "Sending a change set between two orgs requires a deployment connection.",
      "Change sets can deploy custom settings data.",
    ],
    answer: [
      "Deployment is done in a one-way, single transaction.",
      "Sending a change set between two orgs requires a deployment connection.",
      "Change sets can only be used between related organizations.",
    ],
  },
  {
    numb: 5,
    question:
      "A development team wants to use a deployment script to automatically deploy to a sandbox during their development cycles. Which two tools can they use to run a script that deploys to a sandbox? Choose 2 answers",
    options: [
      "SFDX CLI",
      "Developer Console",
      "Change Sets",
      "Ant Migration Tool",
    ],
    answer: ["SFDX CLI", "Ant Migration Tool"],
  },
  {
    numb: 6,
    question:
      "Consider the following code snippet for a Visualforce page that is launched using a Custom Button on the Account detail page layout.<br/> &lt;apex:page standardController=''Account''> <br/> &lt;!--Addotional UI elements--> <br/> &lt;apex:commandButton action=''{!save}'' value=''save''/> <br/> &lt;/apex:page> <br/> when the save button is pressed the developer must perform a complex validation that involves multiple objects and, upon success, redirect the user to another visualforce page. <br/> what can the developer use to meet this business requirement?",
    options: [
      "Custom controller",
      "Controller extension",
      "Validation rule",
      "Apex trigger",
    ],
    answer: ["Controller extension"],
  },
  {
    numb: 7,
    question:
      "Universal Containers hires a developer to build a custom search page to help users find the Accounts they want. Name, Description, and a custom comments field. Which consideration should the developer be aware of when deciding between SOQL and SOSL? Choose 2 answers",
    options: [
      "SOQL is faster for text searches.",
      "SOSL is faster for text searches.",
      "SOSL is able to return more records.",
      "SOQL is able to return more records.",
    ],
    answer: [
      "SOSL is faster for text searches.",
      "SOQL is able to return more records.",
    ],
  },
  {
    numb: 8,
    question:
      "A developer completed modifications to a customized feature that is comprised of two elements: Apex trigger and Trigger handler Apex class. What are two factors that the developer must take into account to properly deploy the modification to the production environment? Choose 2 answers",
    options: [
      "At least one line of code must be executed for the Apex trigger.",
      "All methods in the test classes must use @isTest.",
      "Test methods must be declared with the testMethod keyword.",
      "Apex classes must have at least 75% code coverage org-wide.",
    ],
    answer: [
      "At least one line of code must be executed for the Apex trigger.",
      "Test methods must be declared with the testMethod keyword.",
    ],
  },
  {
    numb: 9,
    question:
      "The Job application custom object has a field that is a master-detail relationship to the Contact object, where the Contact object is the master. As part of a feature implementation, a developer needs to retrieve a list containing all Contact records where the related Account Industry is 'Technology', while also retrieving the Contact's Job_application__c records. Based on the object's relationships, what is the most efficient statement to retrieve the list of Contacts?",
    options: [
      "[SELECT Id, (SELECT Id FROM Job_Applications__c) FROM Contact WHERE Accounts.Industry = 'Technology'];",
      "[SELECT Id, (SELECT Id FROM Job_Application__c) FROM Contact WHERE Account.Industry = 'Technology'];",
      "[SELECT Id, (SELECT Id FROM Job_Applications__r) FROM Contact WHERE Accounts.Industry = 'Technology'];",
      "[SELECT Id, (SELECT Id FROM Job_Applications_r) FROM Contact WHERE Account.Industry = 'Technology'];",
    ],
    answer: [
      "[SELECT Id, (SELECT Id FROM Job_Applications_r) FROM Contact WHERE Account.Industry = 'Technology'];",
    ],
  },
  {
    numb: 10,
    question:
      "A developer creates a batch Apex job to update a large number of records, and receives reports of the job timing out and not completing. What is the first step towards troubleshooting the issue?",
    options: [
      "Check the asynchronous job monitoring page to view the job status and logs.",
      "Check the debug logs for the batch job.",
      "Decrease the batch size to reduce the load on the system.",
      "Disable the batch job and recreate it with a smaller number of records.",
    ],
    answer: [
      "Check the asynchronous job monitoring page to view the job status and logs.",
    ],
  },
  {
    numb: 11,
    question:
      "A developer created these three Rollup Summary fields in the custom object, projectc: Total Timesheets__c, Total Approved Timesheets__c, and Total Rejected Timesheets__c. The developer is asked to create a new field that shows the ratio between rejected and approved timesheets for a given project. Which should the developer use to implement the business requirement in order to minimize maintenance overhead?",
    options: [
      "Formula field",
      "Apex trigger",
      "Roll-up summary field",
      "Record-triggered flow",
    ],
    answer: ["Formula field"],
  },
  {
    numb: 12,
    question:
      "The following code snippet is executed by a Lightning web component in an environment with more than 2,000 lead records: <br/> @AuraEnabled<br/>public void static updateLeads() {<br/>  for (Lead thisLead : [SELECT Origin__c FROM Lead]){ <br/>thisLead.LeadSource = thisLead.Origin__c;<br/>update thisLead<br/> }<br/>} <br/> which governor limit will likely be exceeded whithin the Apex transaction?",
    options: [
      "Total number of SOQL queries issued",
      "Total number of records retrieved by SOQL queries",
      "Total number of DML statements issued",
      "Total number of records processed as a result of DML statements",
    ],
    answer: ["Total number of DML statements issued"],
  },
  {
    numb: 13,
    question:
      "An Apex method, getaccounts, that returns a list of Accounts given a searchTerm, is available for Lightning Web Components to use. What is the correct definition of a Lightning Web Component property that uses the getaccounts method?",
    options: [
      "@AuraEnabled(getAccounts, { searchTerm: '$searchTerm' }) accountList;",
      "@AuraEnabled (getAccounts, '$searchTerm' ) accountList;",
      "@wire(getAccounts, '$searchTerm' ) accountList;",
      "@wire(getAccounts, { searchTerm: '$searchTerm' }) accountList;",
    ],
    answer: ["@wire(getAccounts, { searchTerm: '$searchTerm' }) accountList;"],
  },
  {
    numb: 14,
    question:
      "Universal Containers recently transitioned from Classic to Lightning Experience. One of its business processes requires certain values from the Opportunity object to be sent via an HTTP REST callout to its external order management system when the user presses a custom button on the Opportunity detail page. Example values are as follows: Name, Amount, Account. Which two methods should the developer implement to fulfill the business requirement?",
    options: [
      "Create an after update trigger on the Opportunity object that calls a helper method using @Future (Callout=true) to perform the HTTP REST callout.",
      "Create a custom Visualforce quick action that performs the HTTP REST callout, and use a Visualforce quick action to expose the component on the Opportunity detail page.",
      "Create a Remote Action on the Opportunity object that executes an Apex immediate action to perform the HTTP REST callout whenever the Opportunity is updated.",
      "Create a Lightning component quick action that performs the HTTP REST callout, and use a Lightning Action to expose the component on the Opportunity detail page.",
    ],
    answer: [
      "Create an after update trigger on the Opportunity object that calls a helper method using @Future (Callout=true) to perform the HTTP REST callout.",
      "Create a Lightning component quick action that performs the HTTP REST callout, and use a Lightning Action to expose the component on the Opportunity detail page.",
    ],
  },
  {
    numb: 15,
    question:
      "Which annotation should a developer use on an Apex method to make it available to be wired to a property in a Lightning web component?",
    options: [
      "@RemoteAction",
      "@AuraEnabled",
      "@AuraEnabled(cacheable=true)",
      "@RemoteAction(cacheable=true)",
    ],
    answer: ["@AuraEnabled"],
  },
  {
    numb: 16,
    question:
      "What is an example of a polymorphic field lookup field in Salesforce?",
    options: [
      "The ParentId field on the standard Account object",
      "The LeadId and ContactId fields on the standard Campaign Member object",
      "A custom field, Link_c, on the standard Contact object that looks up to an Account or a Campaign",
      "The WhatId field on the standard Event Object",
    ],
    answer: ["The WhatId field on the standard Event Object"],
  },
  {
    numb: 17,
    question:
      "A developer is tasked with building a custom Lightning web component to collect Contact information. The form will be shared among many different types of users in the org. There are security requirements that only certain fields should be edited and viewed by certain groups of users. What should the developer use in their Lightning Web Component to support the security requirements?",
    options: [
      "force-input-field",
      "ui-input-field",
      "aura-input-field",
      "lightning-input-field",
    ],
    answer: ["lightning-input-field"],
  },
  {
    numb: 18,
    question:
      "Universal Containers (UC) uses out-of-the-box order management, that has a Master-Detail relationship between Order and Order Line Item. UC stores the availability date on each Order Line Item and Orders are only shipped when all of the Order Line Items are available. Which method should be used to calculate the estimated ship date for an Order?",
    options: [
      "Use a CEILING formula on each of the latest availability date fields.",
      "Use a LATEST formula on each of the latest availability date fields.",
      "Use a DAYS formula on each of the availability date fields and COUNT Roll-Up Summary on the Order.",
      "Use a MAX Roll-Up Summary field on the latest availability date fields.",
    ],
    answer: [
      "Use a MAX Roll-Up Summary field on the latest availability date fields.",
    ],
  },
  {
    numb: 19,
    question:
      "A developer creates a new Apex trigger with a helper class, and writes a test class that only exercises 95% coverage of the new Apex helper class. Change Set deployment to production fails with the test coverage warning: 'Test coverage of selected Apex Trigger is 0%, at least 1% test coverage is required.' What should the developer do to successfully deploy the new Apex trigger and helper class?",
    options: [
      "Remove the failing test methods from the test class.",
      "Create a test class and methods to cover the Apex trigger.",
      "Increase the test class coverage on the helper class.",
      "Run the tests using the 'Run All Tests' method.",
    ],
    answer: ["Create a test class and methods to cover the Apex trigger."],
  },
  {
    numb: 20,
    question: "A developer considers the following snippet of code:",
    code: "Boolean isOK;<br/>integer x;<br/>String theString;<br/><br/>if (isOK == true && theString == 'Hello') {<br/>  x = 1;<br/>} else if (x == 2) {<br/>  x = 2;<br/>} else if (x == 3) {<br/>  x = 3;<br/>} else {<br/>  x = 4;<br/>}",
    options: ["1", "2", "3", "4"],
    answer: ["4"],
  },
  {
    numb: 21,
    question:
      "A developer needs to allow users to complete a form on an Account record that will create a record for a custom object. The form needs to display different fields depending on the user's job role. The functionality should only be available to a small group of users. Which three things should the developer do to satisfy these requirements?",
    options: [
      "Add a Dynamic Action to the Users' assigned Form.",
      "Create 3 Custom Permission for the users.",
      "Create Dynamic Page Layouts.",
      "Create a Lightning web component.",
      "Add a Dynamic Action to the Account Record Page.",
    ],
    answer: [
      "Create 3 Custom Permission for the users.",
      "Create Dynamic Page Layouts.",
      "Add a Dynamic Action to the Account Record Page.",
    ],
  },
  {
    numb: 22,
    question:
      "A developer needs to have records with specific field values to test a new Apex class. What should the developer do to ensure the data is available to the test?",
    options: [
      "Use SOQL to query the org for the required data.",
      "Use Test.loadData() and reference a CSV file in a static resource.",
      "Use Anonymous Apex to create the required data.",
      "Use Test.loadData() and reference a JSON file in Documents.",
    ],
    answer: [
      "Use Test.loadData() and reference a CSV file in a static resource.",
    ],
  },
  {
    numb: 23,
    question:
      "In terms of the MVC paradigm, what are two advantages of implementing the view layer of a Salesforce application using Lightning Web Component-based development over Visualforce?",
    options: [
      "Log capturing via the Debug Logs Setup page",
      "Built-in standard and custom set controllers",
      "Self-contained and reusable units of an application",
      "Rich component ecosystem",
    ],
    answer: [
      "Self-contained and reusable units of an application",
      "Rich component ecosystem",
    ],
  },
  {
    numb: 24,
    question: "What are two ways for a developer to execute tests in an org?",
    options: ["Tooling API", "Bulk API", "Developer Console", "Metadata API"],
    answer: ["Tooling API", "Developer Console"],
  },
  {
    numb: 25,
    question:
      "How can a developer check the test coverage of autolaunched Flows before deploying them in a change set?",
    options: [
      "Use SOQL and the Tooling API.",
      "Use the Code Coverage Setup page.",
      "Use the ApexTestResult class.",
      "Use the Flow Properties page.",
    ],
    answer: ["Use SOQL and the Tooling API."],
  },
  {
    numb: 26,
    question:
      "Universal Containers (UC) wants to lower its shipping cost while making the shipping process more efficient. The Distribution Officer advises UC to implement global addresses to allow multiple Accounts to share a default pickup address. The developer is tasked to create the supporting object and relationship for this business requirement and uses the Setup Menu to create a custom object called 'Global Address'. Which field should the developer add to create the most efficient model that supports the business need?",
    options: [
      "Add a master-detail field on the Global Address object to the Account object.",
      "Add a master-detail field on the Account object to the Global Address object.",
      "Add a lookup field on the Global Address object to the Account object.",
      "Add a lookup field on the Account object to the Global Address object.",
    ],
    answer: [
      "Add a lookup field on the Account object to the Global Address object.",
    ],
  },
  {
    numb: 27,
    question:
      "What should a developer use to script the deployment and unit test execution as part of continuous integration?",
    options: [
      "Execute Anonymous",
      "Salesforce CLI",
      "Code",
      "Developer Console",
    ],
    answer: ["Salesforce CLI"],
  },
  {
    numb: 28,
    question:
      "Which code displays the contents of a Visualforce page as a PDF?",
    options: [
      "&lt;apex:page contentType='pdf'>",
      "&lt;apex:page contentType='application/pdf'>",
      "&lt;apex:page renderAs='pdf'>",
      "&lt;apex:page renderAs='application/pdf>",
    ],
    answer: ["<apex:page renderAs='pdf'>"],
  },
  {
    numb: 29,
    question:
      "A developer must provide custom user interfaces when users edit a Contact in either Salesforce Classic or Lightning Experience. What should the developer use to override the Contact's Edit button and provide this functionality?",
    options: [
      "Lightning page in Salesforce Classic and a Visualforce page in Lightning Experience",
      "A Lightning component in Salesforce Classic and a Lightning component in Lightning Experience",
      "A Visualforce page in Salesforce Classic and a Lightning page in Lightning Experience",
      "A Visualforce page in Salesforce Classic and a Lightning component in Lightning Experience",
    ],
    answer: [
      "A Visualforce page in Salesforce Classic and a Lightning component in Lightning Experience",
    ],
  },
  {
    numb: 30,
    question:
      "While writing an Apex class, a developer wants to make sure that all functionality being developed is handled as specified by the requirements. Which approach should the developer use to be sure that the Apex class is working according to specifications?",
    options: [
      "Include a try/catch block to the Apex class.",
      "Include a savepoint and Database.rollback().",
      "Create a test class to execute the business logic and run the test in the Developer Console.",
      "Run the code in an Execute Anonymous block in the Developer Console.",
    ],
    answer: [
      "Create a test class to execute the business logic and run the test in the Developer Console.",
    ],
  },
  {
    numb: 31,
    question:
      "Which statement generates a list of Leads and Contacts that have a field with the phrase 'ACME'?",
    options: [
      "List&lt;List&lt;sObject>> searchList = [SELECT Name, ID FROM Contact, Lead WHERE Name like '%ACME%'];",
      "List&lt;List&lt;sObject>> searchList = [FIND '+*ACME*' IN ALL FIELDS RETURNING Contact, Lead];",
      "Map&lt;sObject> searchList = [FIND '+ACME+*' IN ALL FIELDS RETURNING Contact, Lead];",
      "List&lt;sObject> searchList = [FIND '*ACME*' IN ALL FIELDS RETURNING Contact, Lead];",
    ],
    answer: [
      "List<List<sObject>> searchList = [FIND '+*ACME*' IN ALL FIELDS RETURNING Contact, Lead];",
    ],
  },
  {
    numb: 32,
    question:
      "A software company uses the following objects and relationships: Case, Defect__c, and Case_Defect__c. What should be done to share a specific Case_Defect__c record with a user?",
    options: [
      "Share the Case_Defect record.",
      "Share the parent Defect__c record.",
      "Share the parent Case and Defect__c records.",
      "Share the parent Case record.",
    ],
    answer: ["Share the parent Case and Defect__c records."],
  },
  {
    numb: 33,
    question:
      "Universal Containers has an order system that uses an Order Number to identify an order for customers and service agents. How should the Order Number field be defined in Salesforce?",
    options: [
      "Indirect Lookup",
      "External ID and Unique",
      "Lookup",
      "Direct Lookup",
    ],
    answer: ["External ID and Unique"],
  },
  {
    numb: 34,
    question:
      "A software company is using Salesforce to track the companies they sell their software to in the Account object. They also use Salesforce to track bugs in their software with a custom object, Bug__c. What is needed to allow reporting on which companies have reported which bugs?",
    options: [
      "Roll-up summary field of Bug__c on Account",
      "Junction object between Bug__c and Account",
      "Lookup field on Bug__c to Account",
      "Master-detail field on Bug__c to Account",
    ],
    answer: ["Junction object between Bug__c and Account"],
  },
  {
    numb: 35,
    question:
      "Universal Containers wants Opportunities to no longer be editable when it reaches the Closed/Won stage. Which two strategies can a developer use to accomplish this?",
    options: [
      "Use an auto-response rule.",
      "Use an automatically launched Approval Process.",
      "Use a validation rule.",
      "Use a before-save Apex trigger.",
    ],
    answer: ["Use a validation rule.", "Use a before-save Apex trigger."],
  },
  {
    numb: 36,
    question:
      "Universal Containers wants to back up all of the data and attachments in its Salesforce org once a month. Which approach should a developer use to meet this requirement?",
    options: [
      "Create a Schedulable Apex class.",
      "Schedule a report.",
      "Use the Data Loader command line.",
      "Define a Data Export scheduled job.",
    ],
    answer: ["Define a Data Export scheduled job."],
  },
  {
    numb: 37,
    question:
      "Which statement describes the execution order when triggers are associated with the same object and event?",
    options: [
      "Triggers are executed in the order they are created.",
      "Triggers are executed in the order they are modified.",
      "Triggers are executed alphabetically by trigger name.",
      "Trigger execution order cannot be guaranteed.",
    ],
    answer: ["Trigger execution order cannot be guaranteed."],
  },
  {
    numb: 38,
    question:
      "A developer created a child Lightning web component nested inside a parent Lightning web component. The parent component needs to pass a string value to the child component. In which two ways can this be accomplished?",
    options: [
      "The parent component can invoke a public method in the child component.",
      "The parent component can use a public property to pass the data to the child component.",
      "The parent component can use a custom event to pass the data to the child component.",
      "The parent component can use the Apex controller class to send data to the child component.",
    ],
    answer: [
      "The parent component can use a public property to pass the data to the child component.",
      "The parent component can use a custom event to pass the data to the child component.",
    ],
  },
  {
    numb: 39,
    question:
      "Cloud Kicks Fitness, an ISV Salesforce partner, is developing a managed package application. One of the application modules allows the user to calculate body fat using the Apex class, BodyFat, and its method, calculateBodyFat(). The product owner wants to ensure this method is accessible by the consumer of the application when developing customizations outside the ISV's package namespace. Which approach should a developer take to ensure calculateBodyFat() is accessible outside the package namespace?",
    options: [
      "Declare the class and method using the global access modifier.",
      "Declare the class as public and use the global access modifier on the method.",
      "Declare the class and method using the public access modifier.",
      "Declare the class as global and use the public access modifier on the method.",
    ],
    answer: ["Declare the class and method using the global access modifier."],
  },
  {
    numb: 40,
    question:
      "  A developer deployed a trigger to update the status_c of Assets related to an Account when the Account's status changes and a nightly integration that updates Accounts in bulk has started to fail with limit failures. <br/> List&lt;Asset> assetsToUpdate = new List&lt;Asset>();trigger AccountTrigger on Account (after update) { for (Account newA : Trigger.new) { Account oldA = Trigger.oldMap.get(newA.Id); if (oldA.Status_c != newA.Status_c) { assetsToUpdate.addAll(AccountHelper.getAssetsToUpdate(newA)); }} update assetsToUpdate;}public class AccountHelper { public static List&lt;Asset> getAssetsToUpdate(Account acct) {List&lt;Asset> assetsToUpdate = new List&lt;Asset>();for (Asset a : [SELECT Id FROM Asset WHERE AccountId = :acct.Id]) { if (a.Status_c != acct.Status_c) { a.Status_c = acct.Status_c; assetsToUpdate.add(a); } } return assetsToUpdate;}} <br/>What should the developer change about the code to address the failure while still having the code update all of the Assets correctly?",
    options: [
      "Change the getAssetsToUpdate method to process all Accounts in one call and call it outside of the for loop that starts on line 03.",
      "Add a LIMIT clause to the SOQL query on line 16 to limit the number of Assets queried for an Account.",
      "Move all of the logic to a Queuable class that queries for and updates the Assets and call it from the trigger.",
      "Add List<Asset> assets = [SELECT Id, Status__c FROM Asset WHERE AccountId = :acctId] to line 14 and iterate over the assets list in the for loop on line 15.",
    ],
    answer: [
      "Change the getAssetsToUpdate method to process all Accounts in one call and call it outside of the for loop that starts on line 03.",
    ],
  },
  {
    numb: 41,
    question:
      "A developer is migrating a Visualforce page into a Lightning web component. The Visualforce page shows information about a single record. The developer decides to use Lightning Data Service to access record data. Which security consideration should the developer be aware of?",
    options: [
      "The isAccessible() method must be used for field-level access checks.",
      "The with sharing keyword must be used to enforce sharing rules.",
      "Lightning Data Service handles sharing rules and field-level security.",
      "Lightning Data Service ignores field-level security.",
    ],
    answer: [
      "Lightning Data Service handles sharing rules and field-level security.",
    ],
  },
  {
    numb: 42,
    question:
      "When using Salesforce DX, what does a developer need to enable to create and manage scratch orgs?",
    options: ["Production", "Dev Hub", "Sandbox", "Environment Hub"],
    answer: ["Dev Hub"],
  },
  {
    numb: 43,
    question:
      "A developer creates a custom exception as shown below: public class ParityException extends Exception {} What are two ways the developer can fire the exception in Apex? Choose 2 answers",
    options: [
      "new ParityException();",
      "throw new ParityException('parity does not match');",
      "new ParityException('parity does not match');",
      "throw new ParityException();",
    ],
    answer: [
      "throw new ParityException();",
      "throw new ParityException('parity does not match');",
    ],
  },
  {
    numb: 44,
    question:
      "Which statement should be used to allow some of the records in a list of records to be inserted if others fail to be inserted?",
    options: [
      "Database.insert (records, false)",
      "insert records",
      "insert (records, false)",
      "Database.insert (records, true)",
    ],
    answer: ["Database.insert (records, false)"],
  },
  {
    numb: 45,
    question:
      "Refer to the following Apex code:<br/>Integer x = 0; do{  x=1;  x++; }while (x < 1); System.debug(x);<br/>What is the value of x when it is written to the debug log?",
    options: ["0", "1", "3", "2"],
    answer: ["2"],
  },
  {
    numb: 46,
    question:
      "What are two use cases for executing Anonymous Apex code? Choose 2 answers",
    options: [
      "To add unit test code coverage to an org",
      "To delete 15,000 inactive Accounts in a single transaction after a deployment",
      "To schedule an Apex class to run periodically",
      "To run a batch Apex class to update all Contacts",
    ],
    answer: [
      "To schedule an Apex class to run periodically",
      "To delete 15,000 inactive Accounts in a single transaction after a deployment",
    ],
  },
  {
    numb: 47,
    question:
      "A developer is asked to write helper methods that create test data for unit tests. What should be changed in the Testutils class so that its methods are only usable by unit test methods?",
    options: [
      "Change public to private on line 01.",
      "Add @IsTest above line 03.",
      "Add @IsTest above line 01.",
      "Remove static from line 03.",
    ],
    answer: ["Add @IsTest above line 03."],
  },
  {
    numb: 48,
    question:
      "Universal Containers wants to ensure that all new leads created in the system have a valid email address. They have already created a validation rule to enforce this requirement, but want to add an additional layer of validation using automation. What would be the best solution for this requirement?",
    options: [
      "Use an Approval Process to enforce the completion of a valid email address using an outbound message action.",
      "Submit a REST API Callout with a JSON payload and validate the fields on a third-party system",
      "Use a custom Lightning Web component to make a callout to validate the fields on a third-party system.",
      "Use a before-save Apex trigger on the Lead object to validate the email address and display an error message if it is invalid",
    ],
    answer: [
      "Use a before-save Apex trigger on the Lead object to validate the email address and display an error message if it is invalid",
    ],
  },
  {
    numb: 49,
    question:
      "A developer must create a Drawlist class that provides capabilities defined in the Sortable and Drawable interfaces. Which is the correct implementation?",
    options: [
      "public class Drawlist extends Sortable, Drawable { public woid sort) /*implementation*/} public woid draw() { /*implementation*/}}",
      "public class Drawlist implements Sortable, implements Drawable { public void sort() { /*implementationt*/} public void draw() { /*implementation*/}",
      "public class Drawlist implements Sortable, Drawable {public void sort() { /*implementation*/} public void draw() { /*implementation*/}",
      "public class Drawlist extends Sortable, extends Drawable {public void sort() { /*implementation*/} public void draw() { /*implementation*/}",
    ],
    answer: [
      "public class Drawlist implements Sortable, Drawable {public void sort() { /*implementation*/} public void draw() { /*implementation*/}",
    ],
  },
  {
    numb: 50,
    question: "What is a consideration for running a flow in debug mode?",
    options: [
      "Callouts to external systems are not executed when debugging a flow.",
      "When debugging a schedule-triggered flow, the flow starts only for one record.",
      "DML operations will be rolled back when the debugging ends.",
      "Clicking Pause allows an element to be replaced in the flow.",
    ],
    answer: [
      "When debugging a schedule-triggered flow, the flow starts only for one record.",
    ],
  },
  {
    numb: 51,
    question:
      "(duplicate missing 51) What is a consideration for running a flow in debug mode?",
    options: [
      "Callouts to external systems are not executed when debugging a flow.",
      "When debugging a schedule-triggered flow, the flow starts only for one record.",
      "DML operations will be rolled back when the debugging ends.",
      "Clicking Pause allows an element to be replaced in the flow.",
    ],
    answer: [
      "When debugging a schedule-triggered flow, the flow starts only for one record.",
    ],
  },
  {
    numb: 52,
    question:
      "How does the Lightning Component framework help developers implement solutions faster?",
    options: [
      "By providing change history and version control",
      "By providing code review standards and processes",
      "By providing an Agile process with default steps",
      "By providing device-awareness for mobile and desktops",
    ],
    answer: ["By providing device-awareness for mobile and desktops"],
  },
  {
    numb: 53,
    question:
      "Which code in a Visualforce page and/or controller might present a security vulnerability?",
    options: [
      "&lt;apex:outputField value=''{!ctrl.userInput)'' rendered=''{!:isEditable}''/> ",
      "&lt;apex:outputText escape=''false'' value=''{!$CurrentPage.parameters.userlnput}''/>",
      "&lt;apex:outputField value=''{!ctrl.userInput}''/>",
      "&lt;apex:outputText value=''{!$CurrentPage.parameters.userInput}''",
    ],
    answer: [
      "<apex:outputText escape=''false'' value=''{!$CurrentPage.parameters.userlnput}''/>",
    ],
  },
  {
    numb: 54,
    question:
      "What are two benefits of using declarative customizations over code? Choose 2 answers",
    options: [
      "Declarative customizations automatically update with each Salesforce release.",
      "Declarative customizations generally require less maintenance.",
      "Declarative customizations automatically generate test classes.",
      "Declarative customizations cannot generate runtime errors.",
    ],
    answer: [
      "Declarative customizations automatically update with each Salesforce release.",
      "Declarative customizations generally require less maintenance.",
    ],
  },
  {
    numb: 55,
    question:
      "A developer created a Lightning web component called statusComponent to be inserted into the Account record page. <br/> Which two things should the developer do to make this component available?",
    options: [
      "Add &lt;target>lightning_RecordPage&lt;/target> to the statusComponent.js-meta.xml file.",
      " Add <masterLabel>Account</masterLabel> to the statusComponent.js-meta.xml file",
      "Add &lt;target>lightning_RecordPage&lt;/target> to the statusComponent.js file",
      "Set isExposed to true in the statusComponent.js-meta.xml file",
    ],
    answer: [
      "Add <target>lightning_RecordPage</target> to the statusComponent.js-meta.xml file.",
      "Set isExposed to true in the statusComponent.js-meta.xml file",
    ],
  },
  {
    numb: 56,
    question:
      "What are two ways a developer can get the status of an enqueued job for a class that implements the queueable interface?",
    options: [
      "View the Apex Queue",
      "View the Apex Status page.",
      "Query the AsyncApexJob object.",
      "View the Apex Jobs page.",
    ],
    answer: ["View the Apex Jobs page.", "Query the AsyncApexJob object."],
  },
  {
    numb: 57,
    question:
      "A developer has a Visualforce page and custom controller to save Account records. The developer wants to display any validation rule violations to the user. How can the developer make sure that validation rule violations are displayed?",
    options: [
      "Include &lt;apex:messages> on the Visualforce page",
      "Use a try/catch with a custom exception class",
      "Perform the DML using the Database.upsert() method.",
      "Add custom controller attributes to display the message.",
    ],
    answer: ["Include <apex:messages> on the Visualforce page"],
  },
  {
    numb: 58,
    question:
      "A developer has an integer variable called maxAttempts. The developer needs to ensure that once maxAttempts is initialized, it preserves its value for the length of the Apex transaction; while being able to share the variable's state between trigger executions.How should the developer declare maxAttempts to meet these requirements?",
    options: [
      "Declare maxAttempts as a variable on a helper class.",
      "Declare maxAttempts as a constant using the static and final keywords.",
      "Declare maxAttempts as a private static variable on a helper class.",
      "Declare maxAttempts as a member variable on the trigger definition.",
    ],
    answer: [
      "Declare maxAttempts as a constant using the static and final keywords.",
    ],
  },
  {
    numb: 59,
    question:
      "Flow builder uses an apex action to provide additional information about multiple Contacts, stored in a custom class, ContactInfo. <br/> which is the correct definition of the Apex method that gets the additional information?",
    options: [
      "@InvocableMethod(label='Additional Info') public List&lt;ContactInfo> getInfo(List&lt;Id> contactIds){ /*implementation*/ }",
      "@InvocableMethod(Label='additional Info') public static getInfo(Id contactId){ /*implementation*/ }",
      "@invocableMethod(label='Additional Info') public static List&lt;ContactInfo> getInfo(List&lt;Id> contactIds){ /*Implementation*/ }",
      "@InvocableMethod(label='additional Info') public ContactInfo getInfo(Id contactId) { /*implementation*/ }",
    ],
    answer: [
      "@invocableMethod(label='Additional Info') public static List<ContactInfo> getInfo(List<Id> contactIds){ /*Implementation*/ }",
    ],
  },
  {
    numb: 60,
    question:
      "A developer is creating a Lightning web component to show a list of sales records. The Sales Representative user should be able to see the commission field on each record. The Sales Assistant user should be able to see all fields on the record except the commission field. How should this be enforced so that the component works for both users without showing any errors?",
    options: [
      "use WITH SECURITY_ENFORCED in the SOQL that fetches the data for the component.",
      "Use Lightning Locker Service to enforce sharing rules and field-level security.",
      "Use Security.stripInaccessible to remove fields inaccessible to the current user.",
      "Use Lightning Data Service to get the collection of sales records.",
    ],
    answer: [
      "Use Security.stripInaccessible to remove fields inaccessible to the current user.",
    ],
  },
  {
    numb: 61,
    question:
      "Which two are phases in the Aura application event propagation framework? Choose 2 answers",
    options: ["Default", "Emit", "Control", "Bubble"],
    answer: ["Default", "Bubble"],
  },
  {
    numb: 62,
    question:
      "A developer identifies the following triggers on the Expense__c object: deleteExpense, applyDefaultsToExpense, validateExpenseUpdate; The triggers process before delete, before insert, and before update events respectively. Which two techniques should the developer implement to ensure trigger best practices are followed? Choose 2 answers",
    options: [
      "Create helper classes to execute the appropriate logic when a record is saved.",
      "Unify the before insert and before update triggers and use Flow for the delete action.",
      "Unify all three triggers in a single trigger on the Expense__c object that includes all events.",
      "Maintain all three triggers on the Expense__c object, but move the Apex logic out of the trigger definition.",
    ],
    answer: [
      "Create helper classes to execute the appropriate logic when a record is saved.",
      "Unify all three triggers in a single trigger on the Expense__c object that includes all events.",
    ],
  },
  {
    numb: 63,
    question:
      "Universal Hiring uses Salesforce to capture job applications. A salesforce administrator created two custom objects; Job__c acting as the master object, JobApplication__c acting as the detail. Within the Job__c object, a custom multi-select picklist, preferredLocations__c, contains a list of approved states for the position. Each JobApplication__c record relates to a Contact within the system through a master-detail relationship. Recruiters have requested the ability to view whether the Contact's Mailing State value matches a value selected on the preferredLocations within the JobApplication__c record. Recruiters would like this value to be kept in sync if changes occur to the Contact's Mailing State. What is the recommended tool a developer should use to meet the business requirement?",
    options: [
      "Roll-up summary field",
      "Apex trigger",
      "Formula field",
      "Record-triggered flow",
    ],
    answer: ["Record-triggered flow"],
  },
  {
    numb: 64,
    question:
      "Which three Salesforce resources can be accessed from a Lightning web component? Choose 3 answers",
    options: [
      "SVG resources",
      "Third-party web components",
      "All external libraries",
      "Content asset files",
      "Static resources",
    ],
    answer: ["SVG resources", "Content asset files", "Static resources"],
  },
  {
    numb: 65,
    question:
      "Given the following Anonymous block: List<Case> casesToUpdate = new List<Case>(); for (Case thisCase : [SELECT Id, Status FROM Case LIMIT 50000]) { thisCase.Status = 'Working'; casesToUpdate.add(thisCase); } try { Database.update(casesToUpdate, false); } catch (Exception e) { System.debug(e.getMessage()); } What should a developer consider for an environment that has over 10,000 Case records?",
    options: [
      "The try-catch block will handle any DML exceptions thrown.",
      "The try-catch block will handle exceptions thrown by governor limits.",
      "The transaction will succeed and changes will be committed.",
      "The transaction will fail due to exceeding the governor limit.",
    ],
    answer: ["The transaction will fail due to exceeding the governor limit."],
  },
];
// c bon

let questions = [
  {
    numb: 1,
    question:
      "Universal Containers (UC) processes orders in Salesforce in a custom object, Order__c. They also allow sales reps to upload CSV files with thousands of orders at a time. A developer is tasked with integrating orders placed in Salesforce with UC's enterprise resource planning (ERP) system. After the status for an order __c is first set to 'Placed', the order information must be sent to a REST endpoint in the ERP system that can process one order at a time. What should the developer implement to accomplish this?",
    options: [
      "Callout from a Queueable class called from a trigger",
      "Callout from a Batchable class called from a scheduled job",
      "Flow with a callout from an invocable method",
      "Callout from an @future method called from a trigger",
    ],
    answer: ["Callout from a Batchable class called from a scheduled job"],
  },
  {
    numb: 2,
    question:
      "When a user edits the Postal Code on an Account, a custom Account text field named 'Timezone' must be updated based on the values in a PostalCodeToTimezone__c custom object. Which two automation tools can be used to implement this feature? (Choose 2 answers)",
    options: [
      "Quick actions",
      "Approval process",
      "Account trigger",
      "Fast Field Updates record-triggered flow",
    ],
    answer: ["Account trigger", "Fast Field Updates record-triggered flow"],
  },
  {
    numb: 3,
    question:
      "As part of new feature development, a developer is asked to build a responsive application capable of responding to touch events, that will be executed on stateful clients. Which two technologies are built on a framework that fully supports the business requirement? Choose 2 answers",
    options: [
      "Lightning Web Components",
      "Visualforce Components",
      "Visualforce Pages",
      "Aura Components",
    ],
    answer: ["Lightning Web Components", "Aura Components"],
  },
  {
    numb: 4,
    question:
      "A developer has the following requirements: Calculate the total amount on an Order. Calculate the line amount for each Line Item based on quantity selected and price. Move Line Items to a different Order if a Line Item is not in stock. Which relationship implementation supports these requirements on its own?",
    options: [
      "Line Item has a re-parentable master-detail field to Order.",
      "Line Item has a re-parentable lookup field to Order.",
      "Order has a re-parentable lookup field to Line Item.",
      "Order has a re-parentable master-detail field to Line Item.",
    ],
    answer: ["Line Item has a re-parentable master-detail field to Order."],
  },
  {
    numb: 5,
    question:
      "A developer needs to implement a custom SOAP Web Service that is used by an external Web Application. The developer chooses to include helper methods that are not used by the Web Application in the implementation of the Web Service Class. Which code segment shows the correct declaration of the class and methods?",
    options: [
      "global class WebServiceClass { private static Boolean helperMethod() { /* implementation ... */ } global String updateRecords() { /* implementation ... */ }}",
      "webservice class WebServiceClass { private static Boolean helperMethod() { /* implementation ... */ } global static String updateRecords() { /* implementation ... */ }}",
      "webservice class WebServiceclass { private static Boolean helperMethed() { /* implementation ... */ } webservice static String updateRecords() { /* implementation ... */ }}",
      "global class WebServiceClass { private static Boolean helperMethod() { /* implementation ... */ } webservice static String updateRecords() { /* implementation ... */ }}",
    ],
    answer: [
      "global class WebServiceClass { private static Boolean helperMethod() { /* implementation ... */ } webservice static String updateRecords() { /* implementation ... */ }}",
    ],
  },

  {
    numb: 6,
    question:
      "The value of the account type field is not being displayed correctly on the page. Assuming the custom controller is properly referenced on the Visualforce page, what should the developer do to correct the problem?",
    options: [
      "Add a getter method for the acttType attribute.",
      "Change theAccount attribute to public.",
      "Add with sharing to the custom controller.",
      "Convert theAccount.Type to a String.",
    ],
    answer: ["Add a getter method for the acttType attribute."],
  },
  {
    numb: 7,
    question:
      "A developer needs to make a custom Lightning Web Component available in the Salesforce Classic user interface. Which approach can be used to accomplish this?",
    options: [
      "Embed the Lightning Web Component as a Visualforce Component and add directly to the page layout.",
      "Use the Lightning Out JavaScript library to embed the Lightning Web Component in a Visualforce page and add to the page layout.",
      "Use a Visualforce page with a custom controller to invoke the Lightning Web Component using a call to an Apex method.",
      "Wrap the Lightning Web Component in an Aura Component and surface the Aura Component as a Visualforce tab.",
    ],
    answer: [
      "Use the Lightning Out JavaScript library to embed the Lightning Web Component in a Visualforce page and add to the page layout.",
    ],
  },
  {
    numb: 8,
    question:
      "What can be used to override the Account's standard Edit button for Lightning Experience?",
    options: [
      "Lightning action",
      "Lightning page",
      "Lightning component",
      "Lightning flow",
    ],
    answer: ["Lightning component"],
  },
  {
    numb: 9,
    question:
      "A developer created this Apex trigger that calls Myclass.myStaticMethod:<br/><br/>trigger myTrigger on Contact (before insert) {<br/>    MyClass.myStaticMethod(trigger.new);<br/>}<br/>The developer creates a test class with a test method that calls MyClass.myStaticMethod directly, resulting in 81% overall code coverage.<br/>What happens when the developer tries to deploy the trigger and two classes to production, assuming no other code exists?",
    options: [
      "The deployment passes because both classes and the trigger were included in the deployment.",
      "The deployment fails because no assertions were made in the test method.",
      "The deployment passes because the Apex code has the required >75% code coverage.",
      "The deployment fails because the Apex trigger has no code coverage.",
    ],
    answer: [
      "The deployment fails because the Apex trigger has no code coverage.",
    ],
  },
  {
    numb: 10,
    question:
      "A developer needs to create a baseline set of data (Accounts, Contacts, Products, Assets) for an entire suite of Apex tests allowing them to test isolated requirements for various types of Salesforce cases. Which approach can efficiently generate the required data for each unit test?",
    options: [
      "Create a mock using the HttpcalloutMock interface.",
      "Use @TestSetup with a void method.",
      "Add @IsTest (seeAllData=true) at the start of the unit test class.",
      "Create test data before Test .startTest() in the unit test.",
    ],
    answer: ["Use @TestSetup with a void method."],
  },
  {
    numb: 11,
    question:
      "A developer must troubleshoot to pinpoint the causes of performance issues when a custom page loads in their org. <br/> Which tool should the developer use to troubleshoot query performance?",
    options: [
      "Setup Menu",
      "Visual Studio Code IDE",
      "AppExchange",
      "Developer Console",
    ],
    answer: ["Developer Console"],
  },
  {
    numb: 12,
    question:
      "A company has a custom object, order __c, that has a required, unique external ID field called order Number__c. Which statement should be used to perform the DML necessary to insert new records and update existing records in a list of Order __c records using the external ID field?",
    options: [
      "merge orders;",
      "merge orders Order Number_c;",
      "upsert orders Order Number__c;",
      "upsert orders;",
    ],
    answer: ["upsert orders Order Number__c;"],
  },
  {
    numb: 13,
    question:
      "An org has an existing flow that edits an Opportunity with an Update Records element. A developer must update the flow to also create a Contact and store the created Contact's ID on the Opportunity.<br/> Which update must the developer make in the flow?",
    options: [
      "Add a new Update Records element.",
      "Add a new Roll Back Records element.",
      "Add a new Create Records element.",
      "Add a new Get Records element.",
    ],
    answer: ["Add a new Create Records element."],
  },
  {
    numb: 14,
    question:
      "A developer needs to create a baseline set of data (Accounts, Contacts, Products, Assets) for an entire suite of tests allowing them to test independent requirements for various types of Salesforce Cases. Which approach can efficiently generate the required data for each unit test?",
    options: [
      "Create a mock using the Stub API.",
      "Create test data before Test.startTest() in the unit test.",
      "Use @Testsetup with a void method.",
      "Add @isTest (seeAllData=true) at the start of the unit test class.",
    ],
    answer: ["Use @Testsetup with a void method."],
  },
  {
    numb: 15,
    question:
      "Which Lightning Web Component custom event property settings enable the event to bubble up the containment hierarchy and cross the Shadow DOM boundary?",
    options: [
      "bubbles: true, composed: false",
      "bubbles: false, composed: false",
      "bubbles: true, composed: true",
      "bubbles: false, composed: true",
    ],
    answer: ["bubbles: true, composed: true"],
  },
  {
    numb: 16,
    question:
      "Universal Containers needs to create a custom user interface component that allows users to enter information about their accounts. The component should be able to validate the user input before saving the information to the database. What is the best technology to create this component?",
    options: [
      "Flow",
      "Lightning Web Components",
      "Visualforce",
      "VUE JavaScript framework",
    ],
    answer: ["Lightning Web Components"],
  },
  {
    numb: 17,
    question:
      "How should a developer write unit tests for a private method in an Apex class?",
    options: [
      "Use the SeeAllData annotation.",
      "Add a test method in the Apex class.",
      "Mark the Apex class as global.",
      "Use the @TestVisible annotation.",
    ],
    answer: ["Use the @TestVisible annotation."],
  },
  {
    numb: 18,
    question:
      "Assuming that name is a String obtained by an &lt;apex:inputText> tag on a Visualforce page, which two SOQL queries performed are safe from SOQL injection? Choose 2 answers",
    options: [
      "String query = '%' + name + '%'; List&lt;Account> results = [SELECT Id FROM Account WHERE Name LIKE :query];",
      "String query = 'SELECT Id FROM Account WHERE Name LIKE '%' + name.noQuotes() + '%''; List&lt;Account> results = Database.query(query);",
      "String query = 'SELECT Id FROM Account WHERE Name LIKE '' + String.escapeSingleQuotes(name) + '%''; List&lt;Account> results = Database.query(query);",
      "String query = 'SELECT Id FROM Account WHERE Name LIKE \"%' + name + '%\"'; List&lt;Account> results = Database.query(query);",
    ],
    answer: [
      "String query = '%' + name + '%'; List&lt;Account> results = [SELECT Id FROM Account WHERE Name LIKE :query];",
      "String query = 'SELECT Id FROM Account WHERE Name LIKE '' + String.escapeSingleQuotes(name) + '%''; List&lt;Account> results = Database.query(query);",
    ],
  },
  {
    numb: 19,
    question:
      "Universal Containers has implemented an order management application. Each Order can have one or more Order Line items. The Order Line object is related to the Order via a master-detail relationship. For each Order Line item, the total price is calculated by multiplying the Order Line item price with the quantity ordered. What is the best practice to get the sum of all Order Line item totals on the Order record?",
    options: [
      "Roll-up summary field",
      "Formula field",
      "Apex trigger",
      "Quick action",
    ],
    answer: ["Roll-up summary field"],
  },

  {
    numb: 20,
    question:
      "Refer to the following Apex code:<br/>```apex<br/>Integer x = 0;<br/>do {<br/>    x = 1;<br/>    x++;<br/>} while (x &lt; 1);<br/>System.debug(x);<br/>```<br/>What is the value of x when it is written to the debug log?",
    options: ["0", "1", "2", "3"],
    answer: ["2"],
  },
  {
    numb: 21,
    question:
      "While developing an Apex class with custom search functionality that will be launched from a Lightning Web Component, how can the developer ensure only records accessible to the currently logged in user are displayed?",
    options: [
      "Use the WITH SECURITY_ENFORCED clause within the SOQL.",
      "Use the inherited sharing keyword.",
      "Use the with sharing keyword.",
      "Use the without sharing keyword.",
    ],
    answer: ["Use the with sharing keyword."],
  },
  {
    numb: 22,
    question:
      "(duplicate from 21 as 22 doesn't exist in the pdf) <br/> While developing an Apex class with custom search functionality that will be launched from a Lightning Web Component, how can the developer ensure only records accessible to the currently logged in user are displayed?",
    options: [
      "Use the WITH SECURITY_ENFORCED clause within the SOQL.",
      "Use the inherited sharing keyword.",
      "Use the with sharing keyword.",
      "Use the without sharing keyword.",
    ],
    answer: ["Use the with sharing keyword."],
  },
  {
    numb: 23,
    question:
      "What can be easily developed using the Lightning Component framework?",
    options: [
      "Salesforce Classic user interface pages",
      "Lightning Pages",
      "Customized JavaScript buttons",
      "Salesforce integrations",
    ],
    answer: ["Lightning Pages"],
  },
  {
    numb: 24,
    question:
      "While working in a sandbox, an Apex test fails when run in the Test Runner. However, executing the Apex logic in the Execute Anonymous window succeeds with no exceptions or errors. Why did the method fail in the sandbox test framework but succeed in the Developer Console?",
    options: [
      "The test method does not use System.runAs to execute as a specific user.",
      "The test method is calling an @future method.",
      "The test method relies on existing data in the sandbox.",
      "The test method has a syntax error in the code.",
    ],
    answer: ["The test method relies on existing data in the sandbox."],
  },
  {
    numb: 25,
    question:
      "How many Accounts will be inserted by the following block of code?<br/>```apex<br/>for(Integer i = 0; i &lt; 500; i++) {<br/>    Account a = new Account(Name='New Account ' + i);<br/>    insert a;<br/>}<br/>```",
    options: ["100", "0", "150", "500"],
    answer: ["0"],
  },
  {
    numb: 26, // double check it
    question:
      "Which two characteristics are true for Lightning Web Component custom events? Choose 2 answers",
    options: [
      "Data may be passed in the payload of a custom event using @wire decorated properties.",
      "Data may be passed in the payload of a custom event using a property called detail.",
      "By default, a custom event only propagates to its immediate container and to its immediate child component.",
      "By default, a custom event only propagates to its immediate container.",
    ],
    answer: [
      "Data may be passed in the payload of a custom event using a property called detail.",
      "Data may be passed in the payload of a custom event using @wire decorated properties.",
    ],
  },
  {
    numb: 27,
    question:
      "Cloud Kicks has a multi-screen flow that its call center agents use when handling inbound service desk calls. At one of the steps in the flow, the agents should be presented with a list of order numbers and dates that are retrieved from an external order management system in real time and displayed on the screen.<br/> What should a developer use to satisfy this requirement?",
    options: [
      "An outbound message",
      "An Apex REST class",
      "An Apex controller",
      "An invocable method",
    ],
    answer: ["An invocable method"],
  },
  {
    numb: 28,
    question:
      "Where are two locations a developer can look to find information about the status of batch or future methods? Choose 2 answers",
    options: [
      "Developer Console",
      "Apex Jobs",
      "Paused Flow Interviews component",
      "Apex Flex Queue",
    ],
    answer: ["Apex Jobs", "Apex Flex Queue"],
  },
  {
    numb: 29,
    question:
      "A lead developer creates a virtual class called 'OrderRequest.' Consider the following code snippet:<br/><br/>public class CustomerOrder {<br/>    // code implementation<br/>}<br/><br/>How can a developer use the OrderRequest class within the CustomerOrder class?",
    options: [
      "@Extends(class='OrderRequest') public class CustomerOrder",
      "public class CustomerOrder implements Order",
      "public class CustomerOrder extends OrderRequest",
      "@Implements(class='OrderRequest') public class Customerorder",
    ],
    answer: ["public class CustomerOrder extends OrderRequest"],
  },
  {
    numb: 30,
    question:
      "What is the value of the Trigger.old context variable in a before insert trigger?",
    options: [
      "An empty list of sObjects",
      "Undefined",
      "null",
      "A list of newly created sObjects without IDs",
    ],
    answer: ["null"],
  },

  {
    numb: 31,
    question:
      "(duplicate missing 31)What is the value of the Trigger.old context variable in a before insert trigger?",
    options: [
      "An empty list of sObjects",
      "Undefined",
      "null",
      "A list of newly created sObjects without IDs",
    ],
    answer: ["null"],
  },
  {
    numb: 32,
    question:
      "(duplicate missing 32)What is the value of the Trigger.old context variable in a before insert trigger?",
    options: [
      "An empty list of sObjects",
      "Undefined",
      "null",
      "A list of newly created sObjects without IDs",
    ],
    answer: ["null"],
  },
  {
    numb: 33,
    question:
      "A developer wants to import 500 Opportunity records into a sandbox.<br/> Why should the developer choose to use Data Loader instead of Data Import Wizard?",
    options: [
      "Data Loader automatically relates Opportunities to Accounts.",
      "Data Loader runs from the developer's browser.",
      "Data Import Wizard does not support Opportunities.",
      "Data Import Wizard cannot import all 500 records.",
    ],
    answer: ["Data Import Wizard does not support Opportunities."],
  },
  {
    numb: 34,
    question:
      "A Next Best Action strategy uses an Enhance element that invokes an Apex method to determine a discount level for a Contact, based on a number of factors. What is the correct definition of the Apex method?",
    options: [
      "@InvocableMethod global List&lt;List&lt;Recommendation>> getLevel (List&lt;ContactWrapper> input) { /*implementation*/ }",
      "@InvocableMethod global Recommendation getLevel(ContactWrapper input) { /*implementation*/ }",
      "@InvocableMethod global static List&lt;Recommendation> getLevel (List&lt;ContactWrapper> input) { /*implementation*/ }",
      "@InvocableMethod global static List&lt;List&lt;Recommendation>> getLevel (List&lt;ContactWrapper> input) { /*implementation*/ }",
    ],
    answer: [
      "@InvocableMethod global static List<List<Recommendation>> getLevel (List<ContactWrapper> input) { /*implementation*/ }",
    ],
  },
  {
    numb: 35,
    question:
      "Universal Containers decided to transition from Classic to Lightning Experience. They asked a developer to replace a JavaScript button that was being used to create records with prepopulated values. What can the developer use to accomplish this?",
    options: [
      "Validation rules",
      "Apex triggers",
      "Record-triggered flows",
      "Quick Actions",
    ],
    answer: ["Quick Actions"],
  },
  {
    numb: 36,
    question:
      "Universal Containers has developed custom Apex code and Lightning Components in a Sandbox environment. They need to deploy the code and associated configurations to the Production environment. What is the recommended process for deploying the code and configurations to Production?",
    options: [
      "Use the Force.com IDE to deploy the Apex code and Lightning Components.",
      "Use the Ant Migration Tool to deploy the Apex code and Lightning Components.",
      "Use a change set to deploy the Apex code and Lightning Components.",
      "Use Salesforce CLI to deploy the Apex code and Lightning Components.",
    ],
    answer: [
      "Use Salesforce CLI to deploy the Apex code and Lightning Components.",
    ],
  },
  {
    numb: 37,
    question:
      "In the following example, which sharing context will myMethod execute when it is invoked?<br/><br/>public Class myClass {<br/>    public void myMethod() { /* implementation */ }<br/>}",
    options: [
      "Sharing rules will be enforced by the instantiating class.",
      "Sharing rules will be enforced for the running user.",
      "Sharing rules will not be enforced for the running user.",
      "Sharing rules will be inherited from the calling context.",
    ],
    answer: ["Sharing rules will not be enforced for the running user."],
  },
  {
    numb: 38,
    question:
      "What are two considerations for deploying from a sandbox to production? Choose 2 answers",
    options: [
      "At least 75% of Apex code must be covered by unit tests.",
      "Unit tests must have calls to the System.assert method.",
      "Should deploy during business hours to ensure feedback can be quickly addressed.",
      "All triggers must have at least one line of test coverage.",
    ],
    answer: [
      "At least 75% of Apex code must be covered by unit tests.",
      "All triggers must have at least one line of test coverage.",
    ],
  },
  {
    numb: 39,
    question:
      "A development team wants to use a deployment script to automatically deploy to a sandbox during their development cycles. Which two tools can they use to run a script that deploys to a sandbox? Choose 2 answers",
    options: ["vsCode", "SFDX CLI", "Developer Console", "Change Sets"],
    answer: ["SFDX CLI", "vsCode"],
  },
  {
    numb: 40,
    question:
      "Universal Containers has a Visualforce page that displays a table of every Container__c being rented by a given Account. Recently this page is failing with a view state limit because some of the customers rent over 10,000 containers. What should a developer change about the Visualforce page to help with the page load errors?",
    options: [
      "Implement pagination with an OffsetController.",
      "Implement pagination with a StandardSetController.",
      "Use JavaScript remoting with SOQL Offset.",
      "Use lazy loading and a transient List variable.",
    ],
    answer: ["Implement pagination with a StandardSetController."],
  },
  {
    numb: 41,
    question:
      "Universal Containers decides to use purely declarative development to build out a new Salesforce application. Which two options can be used to build out the business logic layer for this application? Choose 2 answers",
    options: [
      "Record-Triggered Flow",
      "Batch Jobs",
      "Remote Actions",
      "Validation Rules",
    ],
    answer: ["Record-Triggered Flow", "Validation Rules"],
  },
  {
    numb: 42,
    question:
      "A custom object Trainer__c has a lookup field to another custom object Gym__c. Which SOQL query will get the record for the Viridian City Gym and all its trainers?",
    options: [
      "SELECT ID FROM Trainer_c WHERE Gym_r.Name = 'Viridian City Gym'",
      "SELECT Id, (SELECT Id FROM Trainer__c) FROM Gym__c WHERE Name = 'Viridian City Gym'",
      "SELECT Id, (SELECT Id FROM Trainers__r) FROM Gym__c WHERE Name = 'Viridian City Gym'",
      "SELECT Id, (SELECT Id FROM Trainers__c) FROM Gym__c WHERE Name = 'Viridian City Gym'",
    ],
    answer: [
      "SELECT Id, (SELECT Id FROM Trainers__r) FROM Gym__c WHERE Name = 'Viridian City Gym'",
    ],
  },
  {
    numb: 43,
    question:
      "Which three resources in an Aura component can contain JavaScript functions? Choose 3 answers",
    options: ["Style", "Renderer", "Controller", "Design", "Helper"],
    answer: ["Renderer", "Controller", "Helper"],
  },
  {
    numb: 44,
    question:
      "A developer created a custom order management app that uses an Apex class. The order is represented by an Order object and an OrderItem object that has a master-detail relationship to Order. During order processing, an order may be split into multiple orders. What should a developer do to allow their code to move some existing OrderItem records to a new Order record?",
    options: [
      "Add without sharing to the Apex class declaration.",
      "Change the master-detail relationship to an external lookup relationship.",
      "Create a junction object between OrderItem and Order.",
      "Select the Allow reparenting option on the master-detail relationship.",
    ],
    answer: [
      "Select the Allow reparenting option on the master-detail relationship.",
    ],
  },
  {
    numb: 45,
    question:
      "Which three statements are accurate about debug logs? Choose 3 answers",
    options: [
      "Debug logs can be set for specific users, classes, and triggers.",
      "System debug logs are retained for 24 hours.",
      "Only the 20 most recent debug logs for a user are kept.",
      "Debug log levels are cumulative, where FINE log level includes all events logged at the DEBUG, INFO, WARN, and ERROR levels.",
      "The maximum size of a debug log is 5 MB.",
    ],
    answer: [
      "Debug logs can be set for specific users, classes, and triggers.",
      "System debug logs are retained for 24 hours.",
      "The maximum size of a debug log is 5 MB.",
    ],
  },
  {
    numb: 46,
    question:
      "What does the Lightning Component framework provide to developers?",
    options: [
      "Support for Classic and Lightning UIs",
      "Prebuilt components that can be reused",
      "Templates to create custom components",
      "Extended governor limits for applications",
    ],
    answer: ["Prebuilt components that can be reused"],
  },
  {
    numb: 47,
    question:
      "An Opportunity needs to have an amount rolled up from a custom object that is not in a master-detail relationship. How can this be achieved?",
    options: [
      "Write a trigger on the Opportunity object and use tree sorting to sum the amount for all related child objects under the Opportunity.",
      "Use the Streaming API to create real-time roll-up summaries.",
      "Write a trigger on the child object and use an aggregate function to sum the amount for all related child objects under the Opportunity.",
      "Use the Metadata API to create real-time roll-up summaries.",
    ],
    answer: [
      "Write a trigger on the child object and use an aggregate function to sum the amount for all related child objects under the Opportunity.",
    ],
  },
  {
    numb: 48,
    question:
      "Based on this code, what is the value of x?<br/>```apex<br/>if (isOK == false && theString == 'Hello'){<br/>    x = 1;<br/>} else if (isOK == true && theString == '\"Hello') {<br/>    x = 2;<br/>} else if (isOK != null && theString == 'Hello') {<br/>    x = 3;<br/>} else {<br/>    x = 4;}",
    options: ["3", "2", "4", "1"],
    answer: ["4"],
  },
  {
    numb: 49,
    question: "Which two actions may cause triggers to fire? Choose 2 answers",
    options: [
      "Changing a user's default division when the transfer division option is checked",
      "Updates to FeedItem",
      "Cascading delete operations",
      "Renaming or replacing a picklist entry",
    ],
    answer: ["Updates to FeedItem", "Cascading delete operations"],
  },
  {
    numb: 50,
    question:
      "Universal Containers has an order system that uses an Order Number to identify an order for customers and service agents. Order records will be imported into Salesforce.<br/> How should the Order Number field be defined in Salesforce?",
    options: [
      "Indirect Lookup",
      "External ID and Unique",
      "Direct Lookup",
      "Lookup",
    ],
    answer: ["External ID and Unique"],
  },
  {
    numb: 51,
    question:
      "A developer created a trigger on a custom object. This custom object also has some dependent pick lists. <br/>According to the order of execution rules, which step happens first?",
    options: [
      "The original record is loaded from the database.",
      "System validation is run for maximum field lengths.",
      "Old values are overwritten with the new record values.",
      "JavaScript validation is run in the browser.",
    ],
    answer: ["The original record is loaded from the database."],
  },
  {
    numb: 52,
    question:
      "Universal Containers implemented a private sharing model for the Account object. A custom Account search tool was developed with Apex to help sales representatives find accounts that match multiple criteria they specify. Since its release, users of the tool report they can see Accounts they do not own. What should the developer use to enforce sharing permissions for the currently logged in user while using the custom search tool?",
    options: [
      "Use the with sharing keyword on the class declaration.",
      "Use the without sharing keyword on the class declaration.",
      "Use the userInfo Apex class to filter all SOQL queries to returned records owned by the logged-in user.",
      "Use the schema describe calls to determine if the logged-in user has access to the Account object.",
    ],
    answer: ["Use the with sharing keyword on the class declaration."],
  },
  {
    numb: 53,
    question:
      "Universal Containers has a support process that allows users to request support from its engineering team using a custom object, Engineering Support__c. <br/> Users should be able to associate multiple Engineering Support__c records to a single Opportunity record. Additionally, aggregate information about the Engineering Support__c records should be shown on the Opportunity record. Which relationship field should be implemented to support these requirements?",
    options: [
      "Lookup field from Opportunity to Engineering Support__c",
      "Master-detail field from Engineering Support__c to Opportunity",
      "Master-detail field from Opportunity to Engineering Support__c",
      "Lookup field from Engineering Support__c to Opportunity",
    ],
    answer: ["Master-detail field from Engineering Support__c to Opportunity"],
  },
  {
    numb: 54,
    question:
      "A developer is creating an app that contains multiple Lightning web components. One of the child components is used for navigation purposes. When a user clicks a button called Next in the child component, the parent component must be alerted so it can navigate to the next page. How should this be accomplished?",
    options: [
      "Update a property on the parent.",
      "Call a method in the Apex controller.",
      "Fire a notification.",
      "Create a custom event.",
    ],
    answer: ["Create a custom event."],
  },
  {
    numb: 55,
    question:
      "Which annotation exposes an Apex class as a RESTful web service?",
    options: [
      "@RemoteAction",
      "@RestResource (urlMapping='/myService/*')",
      "@HttpInvocable",
      "@AuraEnabled(cacheable=true)",
    ],
    answer: ["@RestResource (urlMapping='/myService/*')"],
  },
  {
    numb: 56,
    question:
      "Universal Containers is building a recruiting app with an Applicant object that stores information about an individual person and a Job object that represents a job. Each applicant may apply for more than one job. What should a developer implement to represent that an applicant has applied for a job?",
    options: [
      "Junction object between Applicant and Job",
      "Lookup field from Applicant to Job",
      "Master-detail field from Applicant to Job",
      "Formula field on Applicant that references Job",
    ],
    answer: ["Junction object between Applicant and Job"],
  },
  {
    numb: 57,
    question:
      "A developer is implementing an Apex class for a financial system. Within the class, the variables 'creditAmount' and 'debitAmount' should not be able to change once a value is assigned. In which two ways can the developer declare the variables to ensure their value can only be assigned one time?",
    options: [
      "Use the static keyword and assign its value in a static initializer.",
      "Use the final keyword and assign its value in the class constructor.",
      "Use the final keyword and assign its value when declaring the variable.",
      "Use the static keyword and assign its value in the class constructor.",
    ],
    answer: [
      "Use the final keyword and assign its value in the class constructor.",
      "Use the final keyword and assign its value when declaring the variable.",
    ],
  },
  {
    numb: 58,
    question: "Which scenario is valid for execution by unit tests?",
    options: [
      "Execute anonymous Apex as a different user.",
      "Generate a Visualforce PDF with getcontentAsPDF().",
      "Load data from a remote site with a callout.",
      "Set the created date of a record using a system method.",
    ],
    answer: ["Set the created date of a record using a system method."],
  },
  {
    numb: 59,
    question:
      "Developers at Universal Containers (UC) use version control to share their code changes, but they notice that when they deploy their code to different environments they often have failures. They decide to set up Continuous Integration (CI).<br/> What should the UC development team use to automatically run tests as part of their CI process?",
    options: [
      "Salesforce CLI",
      "Visual Studio Code",
      "Force.com Toolkit",
      "Developer Console",
    ],
    answer: ["Salesforce CLI"],
  },
  {
    numb: 60,
    question:
      "A developer is asked to prevent anyone other than a user with Sales Manager profile from changing the Opportunity Status to Closed Lost if the lost reason is blank. Which automation allows the developer to satisfy this requirement in the most efficient manner?",
    options: [
      "An Apex trigger on the Opportunity object",
      "An error condition formula on a validation rule on Opportunity",
      "A record trigger flow on the Opportunity object",
      "An approval process on the Opportunity object",
    ],
    answer: ["An error condition formula on a validation rule on Opportunity"],
  },
  {
    numb: 61,
    question:
      "A developer created a trigger on the Account object and wants to test if the trigger is properly bulkified. The developer team decided that the trigger should be tested with 200 account records with unique names. <br/>What two things should be done to create the test data within the unit test with the least amount of code?",
    options: [
      "Use the @isTest (seeAllData=true) annotation in the test class.",
      "Use the @isTest (isParallel=true) annotation in the test class.",
      "Create a static resource containing test data.",
      "Use Test.loadData to populate data in your test methods.",
    ],
    answer: [
      "Create a static resource containing test data.",
      "Use Test.loadData to populate data in your test methods.",
    ],
  },
  {
    numb: 62,
    question:
      "A business has a proprietary Order Management System (OMS) that creates orders from its website and fulfills the orders. When the order is created in the OMS, an integration also creates an order record in Salesforce and relates it to the contact as identified by the email on the order. As the order goes through different stages in the OMS, the integration also updates it in Salesforce. The business notices that each update from the OMS creates a new order record in Salesforce. Which two actions should prevent the duplicate order records from being created in Salesforce?",
    options: [
      "Use the order number from the OMS as an external ID.",
      "Ensure that the order number in the OMS is unique.",
      "Use the email on the contact record as an external ID.",
      "Write a trigger on the Order object to delete the duplicates.",
    ],
    answer: [
      "Use the order number from the OMS as an external ID.",
      "Ensure that the order number in the OMS is unique.",
    ],
  },
  {
    numb: 63,
    question:
      "Which three data types can a SOQL query return? Choose 3 answers",
    options: ["Double", "Long", "sObject", "Integer", "List"],
    answer: ["sObject", "Integer", "List"],
  },
  {
    numb: 64,
    question:
      "A developer created a new after insert trigger on the Lead object that creates Task records for each Lead. After deploying to production, an existing outside integration that inserts Lead records in batches to Salesforce is occasionally reporting total batch failures being caused by the Task insert statement. This causes the integration process in the outside system to stop, requiring a manual restart. Which change should the developer make to allow the integration to continue when some records in a batch cause failures due to the Task insert statement, so that manual restarts are not needed?",
    options: [
      "Use the Database method with allOrNone set to false.",
      "Deactivate the trigger before the integration runs.",
      "Remove the Apex class from the integration user's profile.",
      "Use a try-catch block after the insert statement.",
    ],
    answer: ["Use the Database method with allOrNone set to false."],
  },
  {
    numb: 65,
    question:
      "Which two statements are true about using the @testSetup annotation in an Apex test class? Choose 2 answers",
    options: [
      "Records created in the test setup method cannot be updated in individual test methods.",
      "In a test setup method, test data is inserted once and made available for all test methods in the test class.",
      "A method defined with the @testSetup annotation executes once for each test method in the test class and counts towards system limits.",
      "The @testSetup annotation is not supported when the @isTest(SeeAllData=True) annotation is used.",
    ],
    answer: [
      "In a test setup method, test data is inserted once and made available for all test methods in the test class.",
      "The @testSetup annotation is not supported when the @isTest(SeeAllData=True) annotation is used.",
    ],
  },
];
//checked
// tested and ready
// c bon

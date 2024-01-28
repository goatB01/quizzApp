let questions = [
  {
    numb: 1,
    question:
      "A Salesforce administrator used Flow Builder to create a flow named 'accountOnboarding'. The flow must be used inside an Aura component. Which tag should a developer use to display the flow in the component?",
    options: ["lightning:flow", "lightning-low", "force:flow", "aura:flow"],
    answer: ["lightning:flow"],
  },
  {
    numb: 2,
    question:
      "A developer is alerted to an issue with a custom Apex trigger that is causing records to be duplicated. What is the most appropriate debugging approach to troubleshoot the issue?",
    options: [
      "Review the Historical Event logs to identify the source of the issue.",
      "Add system.debug statements to the code to track the execution flow and identify the issue.",
      "Use the Apex Interactive Debugger to step through the code and identify the issue.",
      "Disable the trigger in production and test to see if the issue still occurs.",
    ],
    answer: [
      "Add system.debug statements to the code to track the execution flow and identify the issue.",
    ],
  },
  {
    numb: 3,
    question:
      "What is the result of the following code snippet?<br/><br/>public void doWork(Account acct) {<br/>    for (Integer i = 0; i <= 200; i++) {<br/>        insert acct;<br/>    }<br/>}",
    options: [
      "0 Accounts are inserted.",
      "1 Account is inserted.",
      "200 Accounts are inserted.",
      "201 Accounts are inserted.",
    ],
    answer: ["0 Accounts are inserted."],
  },
  {
    numb: 4,
    question:
      "If Apex code executes inside the execute() method of an Apex class when implementing the Batchable interface, which two statements are true regarding governor limits? (choose 2)",
    options: [
      "The Apex governor limits are reset for each iteration of the execute() method.",
      "The Apex governor limits cannot be exceeded due to the asynchronous nature of the transaction.",
      "The Apex governor limits will use the asynchronous limit levels.",
      "The Apex governor limits are omitted while calling the constructor of the Apex class.",
    ],
    answer: [
      "The Apex governor limits are reset for each iteration of the execute() method.",
      "The Apex governor limits will use the asynchronous limit levels.",
    ],
  },
  {
    numb: 5,
    question:
      "A developer must perform a complex SOQL query that joins two objects in a Lightning component. How can the Lightning component execute the query?",
    options: [
      "Write the query in a custom Lightning web component wrapper and invoke from the Lightning component.",
      "Invoke an Apex class with the method annotated as @AuraEnabled to perform the query.",
      "Use the Salesforce Streaming API to perform the SOQL query.",
      "Create a flow to execute the query and invoke from the Lightning component.",
    ],
    answer: [
      "Invoke an Apex class with the method annotated as @AuraEnabled to perform the query.",
    ],
  },
  {
    numb: 6,
    question:
      "Which two operations affect the number of times a trigger can fire? (choose 2)",
    options: [
      "Criteria-based sharing calculations",
      "Email messages",
      "Roll-up summary fields",
      "After-save record-triggered flow",
    ],
    answer: ["Roll-up summary fields", "After-save record-triggered flow"],
  },
  {
    numb: 7,
    question:
      "Which two are best practices when it comes to Aura component and application event handling? (choose 2)",
    options: [
      "Try to use application events as opposed to component events.",
      "Reuse the event logic in a component bundle by putting the logic in the helper.",
      "Use component events to communicate actions that should be handled at the application level.",
      "Handle low-level events in the event handler and re-fire them as higher-level events.",
    ],
    answer: [
      "Reuse the event logic in a component bundle by putting the logic in the helper.",
      "Handle low-level events in the event handler and re-fire them as higher-level events.",
    ],
  },
  {
    numb: 8,
    question:
      "What are three considerations when using the @InvocableMethod annotation in Apex?",
    options: [
      "Only one method using the @InvocableMethod annotation can be defined per Apex class.",
      "A method using the @InvocableMethod annotation can have multiple input parameters.",
      "A method using the @InvocableMethod annotation must be declared as static.",
      "A method using the @InvocableMethod annotation must define a return value.",
      "A method using the @InvocableMethod annotation can be declared as Public or Global.",
    ],
    answer: [
      "Only one method using the @InvocableMethod annotation can be defined per Apex class.",
      "A method using the @InvocableMethod annotation must be declared as static.",
      "A method using the @InvocableMethod annotation can be declared as Public or Global.",
    ],
  },
  {
    numb: 9,
    question:
      "Managers at Universal Containers want to ensure that only decommissioned containers are able to be deleted in the system. To meet the business requirement, a Salesforce developer adds 'Decommissioned' as a picklist value for the Status__c custom field within the Container__c object. Which two approaches could a developer use to enforce only Container records with a status of 'Decommissioned' can be deleted? (choose 2)",
    options: [
      "Before record-triggered flow",
      "Apex trigger",
      "After record-triggered flow",
      "Validation rule",
    ],
    answer: ["Apex trigger", "Before record-triggered flow"],
  },
  {
    numb: 10,
    question:
      "Which two settings must be defined in order to update a record of a junction object?(choose 2 answers)",
    options: [
      "Read/Write access on the secondary relationship",
      "Read/Write access on the primary relationship",
      "Read/Write access on the junction object",
      "Read access on the primary relationship",
    ],
    answer: [
      "Read/Write access on the secondary relationship",
      "Read/Write access on the primary relationship",
    ],
  },
  {
    numb: 11,
    question:
      "A developer wrote Apex code that calls out to an external system using REST API. How should a developer write the test to prove the code is working as intended?",
    options: [
      "Write a class that implements HTTPcalloutMock.",
      "Write a class that extends WebServiceMock.",
      "Write a class that implements WebserviceMock.",
      "Write a class that extends ApexCalloutMock.",
    ],
    answer: ["Write a class that implements HTTPcalloutMock."],
  },
  {
    numb: 12,
    question:
      "Universal Containers wants to assess the advantages of declarative development versus programmatic customization for specific use cases in its Salesforce implementation. What are two characteristics of declarative development over programmatic customization? (choose 2)",
    options: [
      "Declarative development does not require Apex test classes.",
      "Declarative development has higher design limits and query limits.",
      "Declarative development can be done using the Setup menu.",
      "Declarative code logic does not require maintenance or review.",
    ],
    answer: [
      "Declarative development does not require Apex test classes.",
      "Declarative development can be done using the Setup menu.",
    ],
  },
  {
    numb: 13,
    question:
      "How is a controller and extension specified for a custom object named 'Notice' on a Visualforce page?",
    options: [
      "&lt;apex:page standardController='Notice' extensions='myControllerExtension'>",
      "&lt;apex:page controller='NoticeController, myControllerExtension'>",
      "&lt;apex:page Notice extends='myControllerExtension'>",
      "&lt;apex:page controller='NoticeController' extensions='myControllerExtension'>",
    ],
    answer: [
      "<apex:page standardController='Notice' extensions='myControllerExtension'>",
    ],
  },
  {
    numb: 14,
    question:
      "How does the Lightning Component framework help developers implement solutions faster?",
    options: [
      "By providing an Agile process with default steps",
      "By providing code review standards and processes",
      "By providing change history and version control",
      "By providing device-awareness for mobile and desktops",
    ],
    answer: ["By providing device-awareness for mobile and desktops"],
  },
  {
    numb: 15,
    question:
      "Universal Containers wants a list button to display a Visualforce page that allows users to edit multiple records. Which Visualforce feature supports this requirement?",
    options: [
      "Standard Controller with Custom List Controller extension",
      "Custom List Controller with recordSetVar page attribute",
      "Controller Extension and <apex:commandButton> tag",
      "Standard controller and the recordSetVar page attribute",
    ],
    answer: ["Custom List Controller with recordSetVar page attribute"],
  },
  {
    numb: 16,
    question:
      "Universal Containers wants to ensure that all new leads created in the system have a valid email address. They have already created a validation rule to enforce this requirement, but want to add an additional layer of validation using automation. What would be the best solution for this requirement?",
    options: [
      "Submit a REST API Callout with a JSON payload and validate the fields on a third-party system",
      "Use an Approval Process to enforce the completion of a valid email address using an outbound message action.",
      "Use a before-save Apex trigger on the Lead object to validate the email address and display an error message if it is invalid",
      "Use a custom Lightning Web component to make a callout to validate the fields on a third-party system.",
    ],
    answer: [
      "Use a before-save Apex trigger on the Lead object to validate the email address and display an error message if it is invalid",
    ],
  },
  {
    numb: 17,
    question:
      "A team of developers is working on a source-driven project that allows them to work independently, with many different org configurations. Which type of Salesforce orgs should they use for their development?",
    options: [
      "Developer sandboxes.",
      "Full Copy sandboxes",
      "Developer orgs",
      "Scratch orgs",
    ],
    answer: ["Scratch orgs"],
  },
  {
    numb: 18,
    question:
      "A team of many developers work in their own individual orgs that have the same configuration as the production org. Which type of org is best suited for this scenario?",
    options: [
      "Developer Sandbox",
      "Full Sandbox",
      "Developer Edition",
      "Partner Developer Edition",
    ],
    answer: ["Developer Sandbox"],
  },
  {
    numb: 19,
    question:
      "A developer must provide custom user interfaces when users edit a Contact in either Salesforce Classic or Lightning Experience. What should the developer use to override the Contact's Edit button and provide this functionality?",
    options: [
      "A lightning component in Salesforce Classic and a Lightning component in Lightning Experience",
      "A Lightning page in Salesforce Classic and a Visualforce page in Lightning Experience",
      "A Visualforce page in Salesforce Classic and a Lightning page in Lightning Experience",
      "A Visualforce page in Salesforce Classic and a Lightning component in Lightning Experience",
    ],
    answer: [
      "A Visualforce page in Salesforce Classic and a Lightning component in Lightning Experience",
    ],
  },
  {
    numb: 20,
    question:
      "Which code statement includes an Apex method named updateAccounts in the class AccountController for use in a Lightning web component?",
    options: [
      "import updateReccunts from 'AccountControlles';",
      "import updateAccsunts from '@salesforce/apex/AccountController';",
      "import updateAccounts from 'Account@ontroller.updateAccounts';",
      "import updateAccounts from '@salesforce/apex/AccountController.updateAccounts';",
    ],
    answer: [
      "import updateAccounts from '@salesforce/apex/AccountController.updateAccounts';",
    ],
  },
  {
    numb: 21,
    question:
      "A developer needs to allow users to complete a form on an Account record that will create a record for a custom object. The form needs to display different fields depending on the user's job role. The functionality should only be available to a small group of users. Which three things should the developer do to satisfy these requirements?",
    options: [
      "Add a Dynamic Action to the Users' assigned Page Layouts.",
      "Create a Lightning web component.",
      "Create a Custom Permission for the users.",
      "Add a Dynamic Action to the Account Record Page.",
      "Create a Dynamic Form.",
    ],
    answer: [
      "Create a Custom Permission for the users.",
      "Add a Dynamic Action to the Account Record Page.",
      "Create a Dynamic Form.",
    ],
  },
  {
    numb: 22,
    question:
      "A developer needs to prevent the creation of Request__c records when certain conditions exist in the system. A RequestLogic class exists that checks the conditions. What is the correct implementation?",
    options: [
      "trigger RequestTrigger on Request__c {after insert) { RequestLogic.validateRecords(trigger.new); }",
      "trigger RequestTrigger on Request__c {before insert) { RequestLogic.validateRecords(trigger.new); }",
      "trigger RequestTrigger on Request__c (before insert) { if (RequestLogic.isValid(Request__c)) { Request__c.addError('Your request cannot be created at this time.'); } }",
      "trigger RequestTrigger on Request__c (after insert) { RequestLogic.validateRecords(trigger.new); }",
    ],
    answer: [
      "trigger RequestTrigger on Request__c {before insert) { RequestLogic.validateRecords(trigger.new); }",
    ],
  },
  {
    numb: 23,
    question: "For which three items can a trace flag be configured?",
    options: ["Apex Class", "Flow", "User", "Visualforce", "Apex Trigger"],
    answer: ["Apex Class", "User", "Apex Trigger"],
  },
  {
    numb: 24,
    question: "Which exception type cannot be caught?",
    options: [
      "A custom exception",
      "LimitException",
      "NoAccessException",
      "CalloutException",
    ],
    answer: ["LimitException"],
  },
  {
    numb: 25,
    question:
      "What should a developer do to check the code coverage of a class after running all tests?",
    options: [
      "View the code coverage percentage for the class using the Overall Code Coverage panel in the Developer Console Tests tab.",
      "View the Class Test Percentage tab on the Apex Class list view in Salesforce Setup.",
      "Select and run the class on the Apex Test Execution page in the Developer Console.",
      "View the Code Coverage column in the list view on the Apex Classes page.",
    ],
    answer: [
      "View the code coverage percentage for the class using the Overall Code Coverage panel in the Developer Console Tests tab.",
    ],
  },
  {
    numb: 26,
    question:
      "A developer creates a new Apex trigger with a helper class, and writes a test class that only exercises 95% coverage of the new Apex helper class. The deployment to production fails with the test coverage warning: 'Test coverage of selected Apex Trigger is 0%, at least 1% test coverage is required.' What should the developer do to successfully deploy the new Apex trigger and helper class?",
    options: [
      "Increase the test class coverage on the helper class.",
      "Create a test class and methods to cover the Apex trigger.",
      "Remove the failing test methods from the test class.",
      "Run the tests using the 'Run All Tests' method.",
    ],
    answer: ["Create a test class and methods to cover the Apex trigger."],
  },
  {
    numb: 27,
    question:
      "What are three capabilities of the <ltng: require> tag when loading JavaScript resources in Aura components?",
    options: [
      "One-time loading for duplicate scripts",
      "Loading scripts in parallel",
      "Loading files from Documents",
      "Specifying loading order",
      "Loading externally hosted scripts",
    ],
    answer: [
      "One-time loading for duplicate scripts",
      "Loading scripts in parallel",
      "Specifying loading order",
    ],
  },
  {
    numb: 28,
    question:
      "A custom picklist field, Food Preference, exists on a custom object. The picklist contains the following options: 'Vegan', 'Kosher', 'No Preference'. The developer must ensure a value is populated every time a record is created or updated. What is the optimal way to ensure a value is selected every time a record is saved?",
    options: [
      "Set 'Use the first value in the list as the default value' to True.",
      "Write an Apex trigger to ensure a value is selected.",
      "Mark the field as Required on the object's page layout.",
      "Mark the field as Required on the field definition.",
    ],
    answer: ["Mark the field as Required on the field definition."],
  },
  {
    numb: 29,
    question:
      "A company decides to implement a new process where every time an Opportunity is created, a follow-up Task should be created and assigned to the Opportunity Owner. What is the most efficient way for a developer to implement this?",
    options: [
      "Apex trigger on Task",
      "Task actions",
      "Auto-launched flow on Task",
      "Record-triggered flow on Opportunity",
    ],
    answer: ["Record-triggered flow on Opportunity"],
  },
  {
    numb: 30,
    question:
      "A developer is tasked to perform a security review of the ContactSearch Apex class that exists in the system. Within the class, the developer identifies the following method as a security threat:<br/>```java<br/>List<Contact> performSearch(String lastName) {<br/>    return Database.query('SELECT Id, FirstName, LastName FROM Contact WHERE LastName Like :lastName');<br/>}```<br/>What are two ways the developer can update the method to prevent a SOQL injection attack?",
    options: [
      "Use variable binding and replace the dynamic query with a static SOQL.",
      "Use the escapeSingleQuotes method to sanitize the parameter before its use.",
      "Use the 'Readonly' annotation and the 'with sharing' keyword on the class.",
      "Use a regular expression on the parameter to remove special characters.",
    ],
    answer: [
      "Use the escapeSingleQuotes method to sanitize the parameter before its use.",
      "Use variable binding and replace the dynamic query with a static SOQL.",
    ],
  },
  {
    numb: 31, // start from here
    question: "What are two benefits of using External IDs? (choose 2)",
    options: [
      "An External ID field can be used to reference an ID from another external system.",
      "An External ID can be a formula field to help create a unique key from two fields in Salesforce.",
      "An External ID can be used with Salesforce Mobile to make external data visible.",
      "An External ID is indexed and can improve the performance of SOQL queries.",
    ],
    answer: [
      "An External ID field can be used to reference an ID from another external system.",
      "An External ID is indexed and can improve the performance of SOQL queries.",
    ],
  },
  {
    numb: 32,
    question: "What are two characteristics related to formulas? (choose 2)",
    options: [
      "Formulas are calculated at runtime and are not stored in the database.",
      "Formulas can reference themselves.",
      "Formulas can reference values in related objects.",
      "Fields that are used in a formula field can be deleted or edited without editing the formula.",
    ],
    answer: [
      "Formulas are calculated at runtime and are not stored in the database.",
      "Formulas can reference values in related objects.",
    ],
  },
  {
    numb: 33,
    question:
      "What should a developer use to script the deployment and unit test execution as part of continuous integration?",
    options: [
      "Salesforce CLI",
      "Execute Anonymous",
      "VS Code",
      "Developer Console",
    ],
    answer: ["Salesforce CLI"],
  },
  {
    numb: 34,
    question:
      "What are two considerations for deploying from a sandbox to production?",
    options: [
      "Unit tests must have calls to the System.assert method.",
      "All triggers must have at least one line of test coverage.",
      "At least 75% of Apex code must be covered by unit tests.",
      "Should deploy during business hours to ensure feedback can be quickly addressed.",
    ],
    answer: [
      "All triggers must have at least one line of test coverage.",
      "At least 75% of Apex code must be covered by unit tests.",
    ],
  },
  {
    numb: 35,
    question:
      "What is the result of the following code?<br/><br/>Account a = new Account();<br/>Database.insert(a, false);",
    options: [
      "The record will not be created and an exception will be thrown.",
      "The record will not be created and no error will be reported.",
      "The record will be created and no error will be reported.",
      "The record will be created and a message will be in the debug log.",
    ],
    answer: ["The record will not be created and no error will be reported."],
  },
  {
    numb: 36,
    question:
      "A developer is creating a page that allows users to create multiple Opportunities. The developer is asked to verify the current user's default Opportunity record type and set certain default values based on the record type before inserting the record. How can the developer find the current user's default record type?",
    options: [
      "Create the opportunity and check the opportunity. recordType, which will have the record ID of the current user's default record type, before inserting.",
      "Query the Profile where the ID equals userinfo.getProfileId() and then use the profile.opportunity.getDefaultRecordType() method.",
      "Use the schema.UserInfo.Opportunity.getDefaultRecordType() method.",
      "Use opportunity.objectTypes.getDescribe().getRecordTypeInfosByName() to get a list of record types, and iterate through them until isDefaultRecordTypeMapping() is true.",
    ],
    answer: [
      "Use opportunity.objectTypes.getDescribe().getRecordTypeInfosByName() to get a list of record types, and iterate through them until isDefaultRecordTypeMapping() is true.",
    ],
  },
  {
    numb: 37,
    question:
      "The Account object in an organization has a master-detail relationship to a child object called Branch. The following automations exist: - Roll-up summary fields - Custom validation rules - Duplicate rules A developer created a trigger on the Account object. Which two things should the developer consider while testing the trigger code? (choose 2)",
    options: [
      "Rollup summary fields can cause the parent record to go through Save.",
      "Duplicate rules are executed once all DML operations commit to the database.",
      "The trigger may fire multiple times during a transaction.",
      "The validation rules will cause the trigger to fire again.",
    ],
    answer: [
      "Rollup summary fields can cause the parent record to go through Save.",
      "The trigger may fire multiple times during a transaction.",
    ],
  },
  {
    numb: 38,
    question:
      "A developer has a single custom controller class that works with a Visualforce Wizard to support creating and editing multiple sObjects. The wizard accepts data from user inputs across multiple Visualforce pages and from a parameter on the initial URL. Which three statements are useful inside the unit test to effectively test the custom controller? (choose 3)",
    options: [
      "String nextPage = controller.save().getPageReference().getUrl();",
      "ApexPages.currentPage().getParameters().put('input', 'TestValue');",
      "insert pageRef;",
      "public ExtendedController(ApexPages.Standardcontroller ctrl) { };",
      "Test.setCurrentPage(pageRef);",
    ],
    answer: [
      "String nextPage = controller.save().getPageReference().getUrl();",
      "ApexPages.currentPage().getParameters().put('input', 'TestValue');",
      "Test.setCurrentPage(pageRef);",
    ],
  },
  {
    numb: 39,
    question:
      "A developer is designing a new application on the Salesforce platform and wants to ensure it can support multiple tenants effectively. Which design framework should the developer consider to ensure scalability and maintainability?",
    options: [
      "Waterfall Model",
      "Flux (view, action, dispatcher, and store)",
      "Model-View-Controller (MVC)",
      "Agile Development",
    ],
    answer: ["Model-View-Controller (MVC)"],
  },
  {
    numb: 40,
    question:
      "A developer at AW Computing is tasked to create the supporting test class for a programmatic customization that leverages records stored within the custom object, Pricing Structure. AW Computing has a complex pricing structure for each item on the store, spanning more than 500 records. Which two approaches can the developer use to ensure Pricing Structure records are available when the test class is executed?",
    options: [
      "Use a Test Data Factory class.",
      "Use the `@isTest(SeeAllData=true)` annotation.",
      "Use the Test.loadData() method.",
      "Use without sharing on the class declaration.",
    ],
    answer: [
      "Use a Test Data Factory class.",
      "Use the Test.loadData() method.",
    ],
  },
  {
    numb: 41,
    question:
      "Given the following Apex statement:<br/><br/>Account myAccount = [SELECT Id, Name FROM Account];<br/>What occurs when more than one Account is returned by the SOQL query?",
    options: [
      "The variable, myAccount, is automatically cast to the List data type.",
      "An unhandled exception is thrown, and the code terminates.",
      "The query fails, and an error is written to the debug log.",
      "The first Account returned is assigned to myAccount.",
    ],
    answer: ["An unhandled exception is thrown, and the code terminates."],
  },
  {
    numb: 42,
    question:
      "An org has an existing flow that edits an Opportunity with an Update Records element. A developer must update the flow to also create a Contact and store the created Contact's ID on the Opportunity. Which update must the developer make in the flow?",
    options: [
      "Add a new Update Records element.",
      "Add a new Create Records element.",
      "Add a new Rollback Records elements.",
      "Add a new Get Records element.",
    ],
    answer: ["Add a new Create Records element."],
  },
  {
    numb: 43,
    question:
      "Universal Containers wants to back up all of the data and attachments in its Salesforce org once a month. Which approach should a developer use to meet this requirement?",
    options: [
      "Create a Schedulable Apex class.",
      "Use the Data Loader command line.",
      "Schedule a report.",
      "Define a Data Export scheduled job.",
    ],
    answer: ["Define a Data Export scheduled job."],
  },
  {
    numb: 44,
    question:
      "What should a developer use to fix a Lightning web component bug in a sandbox?",
    options: [
      "Developer Console",
      "Force.com IDE",
      "Execute Anonymous",
      "VS Code",
    ],
    answer: ["VS Code"],
  },
  {
    numb: 45,
    question:
      "A developer must write an Apex method that will be called from a Lightning component. The method may delete an Account stored in the accountRec variable. Which method should a developer use to ensure only users that should be able to delete Accounts can successfully perform deletions?",
    options: [
      "accountRec.isDeletable()",
      "Schema.SObjectType.Account.isDeletable()",
      "accountRec.sObjectType.isDeletable()",
      "Recount.isDeletable()",
    ],
    answer: ["Schema.SObjectType.Account.isDeletable()"],
  },
  {
    numb: 46,
    question:
      "A lead developer creates an Apex interface called Laptop. Consider the following code snippet:<br/>public class SilverLaptop{<br/>  //code implementation<br/>}<br/>How can a developer use the Laptop interface within the SilverLaptop class?",
    options: [
      "public class SilverLaptop implements Laptop",
      "public class SilverLaptop extends Laptop",
      "@Extends(class=''Laptop'') public class SilverLaptop",
      "@Interface(Class=''Laptop'') public class SilverLaptop",
    ],
    answer: ["public class SilverLaptop implements Laptop"],
  },
  {
    numb: 47,
    question:
      "A lead developer creates a virtual class called 'OrderRequest'. Consider the following code snippet:<br/>public class CustomerOrder{<br/>  //code implementation<br/>}<br/>How can a developer use the OrderRequest class within the CustomerOrder class?",
    options: [
      "@Extends (class=''OrderRequest'') public class CustomerOrder",
      "public class CustomerOrder extends OrderRequest",
      "public class CustomerOrder implements Order",
      "@Implements (class=''OrderRequest'') public class CustomerOrder",
    ],
    answer: ["public class CustomerOrder extends OrderRequest"],
  },
  {
    numb: 48,
    question:
      "What should a developer use to obtain the Id and Name of all the Leads, Accounts, and Contacts that have the company name 'Universal Containers'?",
    options: [
      "FIND 'Universal Containers' IN CompanyName Fields RETURNING lead(id, name), account(id, name), contact(id, name)",
      "SELECT Lead.id, Lead.Name, Account.Id, Account.Name, Contact.Id, Contact.Name FROM Lead, Account, Contact WHERE CompanyName = 'Universal Containers'",
      "FIND 'Universal Containers' IN Name Fields RETURNING lead(id, name), account(id, name), contact(id, name)",
      "SELECT lead(id, name), account(id, name), contact(id, name) FROM Lead, Account, Contact WHERE Name = 'Universal Containers'",
    ],
    answer: [
      "FIND 'Universal Containers' IN Name Fields RETURNING lead(id, name), account(id, name), contact(id, name)",
    ],
  },
  {
    numb: 49,
    question:
      "An Opportunity needs to have an amount rolled up from a custom object that is not in a master-detail relationship. How can this be achieved?",
    options: [
      "Write a trigger on the Opportunity object and use an aggregate function to sum the amount for all related child objects under the Opportunity.",
      "Write a trigger on the child object and use an aggregate function to sum the amount for all related child objects under the Opportunity.",
      "Use the Streaming API to create real-time roll-up summaries.",
      "Use the Metadata API to create real-time roll-up summaries.",
    ],
    answer: [
      "Write a trigger on the child object and use an aggregate function to sum the amount for all related child objects under the Opportunity.",
    ],
  },
  {
    numb: 50,
    question:
      "A PrimaryId__c custom field exists on the Candidate__c custom object. The field is used to store each candidate's id number and is marked as Unique in the schema definition.<br/> As part of a data enrichment process, Universal Containers has a CSV file that contains updated data for all candidates in the system. The file contains each Candidate's primary id as a data point. Universal Containers wants to upload this information into Salesforce, while ensuring all data rows are correctly mapped to a candidate in the system.<br/>Which technique should a developer implement to streamline the data upload?",
    options: [
      "Upload the CSV into a custom object related to Candidate__c.",
      "Create a bofore insert trigger to correctly map the records.",
      "Upload the PrimaryId__c field definition to mark it as an External Id.",
      "Create a bofore save flow to correctly map the records.",
    ],
    answer: [
      "Upload the PrimaryId__c field definition to mark it as an External Id.",
    ],
  },
  {
    numb: 51,
    question:
      "A Developer Edition org has five existing accounts. A developer wants to add 10 more accounts for testing purposes.  <br/> the follwing code is excuted in the Developer Console using Excute Anonymous window: <br/> Account myAccount = new Account(Name = 'myAccount'); <br/>   insert myAccount; <br/> Integer x = 1;  List<Account> newAccounts = new List<Accont>(); <br/> do{<br/>   Account acct = new Account(Name = 'New Account' + x++); <br/> newAccounts.add(acct);<br/> }while(x<10); <br/> How many total accounts will be in the org after this code is executed?",
    options: ["5", "6", "10", "15"],
    answer: ["6"],
  },

  {
    numb: 52,
    question:
      "What are two considerations for running a flow in debug mode? Choose 2 answers",
    options: [
      "Callouts to external systems are not executed when debugging a flow.",
      "DML operations will be rolled back when the debugging ends.",
      "Input variables of type record cannot be passed into the flow.",
      "Clicking Pause or executing a Pause element closes the flow and ends debugging.",
    ],
    answer: [
      "Input variables of type record cannot be passed into the flow.",
      "Clicking Pause or executing a Pause element closes the flow and ends debugging.",
    ],
  },
  {
    numb: 53,
    question:
      "A credit card company needs to implement the functionality for a service agent to process damaged or stolen credit cards. When the customers call in, the service agent must gather many pieces of information. A developer is tasked to implement this functionality. What should the developer use to satisfy this requirement in the most efficient manner?",
    options: [
      "Screen-based flow",
      "Approval process",
      "Apex trigger",
      "Lightning Component",
    ],
    answer: ["Screen-based flow"],
  },
  {
    numb: 54,
    question:
      "A custom Visualforce controller calls the ApexPages.addMessage() method, but no messages are rendering on the page. Which component should be added to the Visualforce page to display the message?",
    options: [
      "&lt;apex:message for='info'/>",
      "&lt;apex:pageMessages />",
      "&lt;apex:pageMessage severity='info'/>",
      "&lt;apex:facet name='messages'/>",
    ],
    answer: ["<apex:pageMessages />"],
  },
  {
    numb: 55,
    question:
      "Since Aura application events follow the traditional publish-subscribe model, which method is used to fire an event?",
    options: ["fire()", "getEvt('event')", "fireEvent()", "emit()"],
    answer: ["fire()"],
  },
  {
    numb: 56,
    question:
      "A developer must troubleshoot to pinpoint the causes of performance issues when a custom page loads in their org. Which tool should the developer use to troubleshoot query performance?",
    options: [
      "Setup Menu",
      "AppExchange",
      "Visual Studio Code IDE",
      "Developer Console",
    ],
    answer: ["Developer Console"],
  },
  {
    numb: 57,
    question:
      "A developer considers the following snippet of code:<br/> Boolean isOK; integer x; String theString = 'Hello'; if (isOK == false && theString == 'Hello'){ // code } else if (isOK == true && theString == \"Hello\") { x = 2; } else if (isOK == null && theString == 'Hello'){ x = 37; } else { x = 4; } <br/> Based on this code, what is the value of x?",
    options: ["1", "2", "3", "4"],
    answer: ["4"],
  },
  {
    numb: 58,
    question:
      "What does the Lightning Component framework provide to developers?",
    options: [
      "Prebuilt components that can be reused",
      "Extended governor limits for applications",
      "Support for Classic and Lightning UIs",
      "Templates to create custom components",
    ],
    answer: ["Prebuilt components that can be reused"],
  },
  {
    numb: 59,
    question:
      "Universal Containers wants to automatically assign new cases to the appropriate support representative based on the case origin. They have created a custom field on the Case object to store the support representative name. What is the best solution to assign the case to the appropriate support representative?",
    options: [
      "Use a trigger on the Case object.",
      "Use a formula field on the Case object.",
      "Use a validation rule on the Case object.",
      "Use an Assignment Flow element.",
    ],
    answer: ["Use a trigger on the Case object."],
  },
  {
    numb: 60,
    question:
      "What are three ways for a developer to execute tests in an org? Choose 3 answers",
    options: [
      "Bulk API",
      "Salesforce DX",
      "Tooling API",
      "Setup Menu",
      "Metadata API",
    ],
    answer: ["Salesforce DX", "Tooling API", "Setup Menu"],
  },
  {
    numb: 61,
    question:
      "When importing and exporting data into Salesforce, which two statements are true? Choose 2 answers",
    options: [
      "Bulk API can be used to bypass the storage limits when importing large data volumes in development environments.",
      "Data import wizard is an application that is installed on your computer.",
      "Bulk API can be used to import large data volumes in development environments without bypassing the storage limits.",
      "Developer and Developer Pro sandboxes have different storage limits.",
    ],
    answer: [
      "Bulk API can be used to import large data volumes in development environments without bypassing the storage limits.",
      "Developer and Developer Pro sandboxes have different storage limits.",
    ],
  },
  {
    numb: 62,
    question:
      "A developer must implement a CheckPaymentProcessor class that provides check processing payment capabilities that adhere to what is defined for payments in the Payment Processor interface. public interface PaymentProcessor { void pay(Decimal amount); } Which implementation is correct to use the PaymentProcessor interface class?",
    options: [
      "public class CheckPaymentProcessor implements PaymentProcessor { public void pay(Decimal amount); }",
      "public class CheckPaymentProcessor extends PaymentProcessor { public void pay(Decimal amount) { // functional code here } }",
      "public class CheckPaymentProcessor implements PaymentProcessor { public void pay(Decimal amount) { // functional code here } }",
      "public class CheckPaymentProcessor extends PaymentProcessor { public void pay(Decimal amount); }",
    ],
    answer: [
      "public class CheckPaymentProcessor implements PaymentProcessor { public void pay(Decimal amount) { // functional code here } }",
    ],
  },
  {
    numb: 63,
    question:
      "A developer wants to get access to the standard price book in the org while writing a test class that covers an OpportunityLineItem trigger. Which method allows access to the price book?",
    options: [
      "Use Test.getStandardPricebookId() to get the standard price book ID.",
      "Use @IsTest(SeeAllData=true) and delete the existing standard price book.",
      "Use @TestVisible to allow the test method to see the standard price book.",
      "Use Test.loadData() and a static resource to load a standard price book.",
    ],
    answer: [
      "Use Test.getStandardPricebookId() to get the standard price book ID.",
    ],
  },
  {
    numb: 64,
    question:
      "A developer must create a Lightning component that allows users to input Contact record information to create a Contact record, including a Salary__c custom field. What should the developer use, along with a lightning-record-edit-form, so that Salary__c field functions as a currency input and is only viewable and editable by users that have the correct field level permissions on Salary__c?",
    options: [
      '&lt;lightning-input-currency value="{!Salary__c}">',
      "&lt;lightning-input-currency>",
      '&lt;lightning-formatted-number value="{!Salary__c}" format-style="currency">',
      '&lt;lightning-input-field field-name="Salary__c">',
      '&lt;lightning-input type="number" value="{!Salary__c}" formatter="currency">',
    ],
    answer: ['<lightning-input-field field-name="Salary__c">'],
  },
  {
    numb: 65,
    question:
      "Universal Containers decides to use exclusively declarative development to build out a new Salesforce application. Which three options should be used to build out the database layer for the application? Choose 3 answers",
    options: [
      "Custom objects and fields",
      "Triggers",
      "Roll-up summaries",
      "Relationships",
      "Flows",
    ],
    answer: ["Custom objects and fields", "Roll-up summaries", "Relationships"],
  },
];

// checked
// tested and ready
// c bon

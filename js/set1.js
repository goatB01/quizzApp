let questions = [
  {
    numb: 1,
    question:
      "What should a developer use to script the deployment and unit test execution as part of continuous integration?",
    options: [
      "@Execute Anonymous",
      "Developer Console",
      "VS Code",
      "@Salesforce CLI",
    ],
    answer: ["@Salesforce CLI"],
  },
  {
    numb: 2,
    question:
      "A developer needs to have records with specific field values in order to test a new Apex class. What should the developer do to ensure the data is available to the test?",
    options: [
      "Use SOQL to query the org for the required data.",
      "Use Test.loadData() and reference a JSON file in Documents.",
      "Use Anonymous Apex to create the required data.",
      "Use Test.loadData() and reference a CSV file in a static resource.",
    ],
    answer: [
      "Use Test.loadData() and reference a CSV file in a static resource.",
    ],
  },
  {
    numb: 3,
    question:
      "A large corporation stores Orders and Line Items in Salesforce for different lines of business. Users are allowed to see Orders across the entire organization, but, for security purposes, should only be able to see the Line Items for Orders in their line of business. Which type of relationship should be used between Line Items and Orders?",
    options: ["Lookup", "Direct Lookup", "Master-Detail", "Indirect Lookup"],
    answer: ["Master-Detail"],
  },
  {
    numb: 4,
    question:
      "A Salesforce administrator used Flow Builder to create a flow named 'accountOnboarding'. The flow must be used inside an Aura component. Which tag should a developer use to display the flow in the component?",
    options: ["lightning:flow", "aura-flow", "aura:flow", "lightning-flow"],
    answer: ["lightning:flow"],
  },
  {
    numb: 5,
    question:
      "What does the Lightning Component framework provide to developers?",
    options: [
      "Extended governor limits for applications",
      "Templates to create custom components",
      "Prebuilt components that can be reused",
      "Support for Classic and Lightning UIs",
    ],
    answer: ["Prebuilt components that can be reused"],
  },
  {
    numb: 6,
    question:
      "Universal Containers wants Opportunities to no longer be editable when reaching the Closed/Won stage. <br/>How should a developer accomplish this?",
    options: [
      "Use a validation rule.",
      "Use Flow Builder",
      "Mark fields as read-only on the page layout.",
      "Use the Process Automation settings.",
    ],
    answer: ["Use a validation rule."],
  },
  {
    numb: 7,
    question:
      "A developer has the following requirements:<br/>" +
      "- Calculate the total amount on an Order.<br/>" +
      "- Calculate the line amount for each Line Item based on quantity selected and price.<br/>" +
      "- Move Line Items to a different Order if a Line Item is not in stock.<br/>" +
      "Which relationship implementation supports these requirements on its own?",
    options: [
      "Line Item has a re-parentable lookup field to Order.",
      "Order has a re-parentable master-detail field to Line Item.",
      "Order has a re-parentable lookup field to Line Item.",
      "Line Item has a re-parentable master-detail field to Order.",
    ],
    answer: ["Line Item has a re-parentable master-detail field to Order."],
  },
  {
    numb: 8,
    question:
      "What should a developer use to obtain the Id and Name of all the Leads, Accounts, and Contacts that have the company name 'Universal Containers'?",
    options: [
      "FIND 'Universal Containers' IN CompanyName Fields RETURNING lead(id, name), account(id, name), contact(id, name)",
      "SELECT lead(id, name), account(id, name), contact(id, name) FROM Lead, Account, Contact WHERE Name = 'Universal Containers'",
      "SELECT Lead.id, Lead.Name, Account.Id, Account.Name, Contact.Id, Contact.Name FROM Lead, Account, Contact WHERE CompanyName = 'Universal Containers'",
      "FIND 'Universal Containers' IN Name Fields RETURNING lead(id, name), account (id, name), contact(id, name)",
    ],
    answer: [
      "FIND 'Universal Containers' IN Name Fields RETURNING lead(id, name), account (id, name), contact(id, name)",
    ],
  },
  {
    numb: 9,
    question:
      "In the Lightning UI, where should a developer look to find information about a Paused Flow Interview?",
    options: [
      "On the Paused Flow Interviews related list for a given record",
      "In the system debug log by filtering on Paused Flow Interview",
      "In the Paused Interviews section of the Apex Flex Queue",
      "On the Paused and Failed Flow Interviews page under Setup > Process Automation",
    ],
    answer: [
      "On the Paused and Failed Flow Interviews page under Setup > Process Automation",
    ],
  },
  {
    numb: 10,
    question:
      "What can be easily developed using the Lightning Component framework?",
    options: [
      "Customized JavaScript buttons",
      "Salesforce Classic user Interface pages",
      "Salesforce integrations",
      "Lightning Pages",
    ],
    answer: ["Lightning Pages"],
  },
  {
    numb: 11,
    question:
      "The OrderHelper class is a utility class that contains business logic for processing orders. Consider the following code snippet:<br/>" +
      "public class without sharing OrderHelper{<br/>" +
      "//code implementation<br/>}" +
      "A developer needs to create a constant named DELIVERY_MULTIPLIER with a value of 4.15. The value of the constant should not change at any time in the code.<br/>" +
      "How should the developer declare the DELIVERY_MULTIPLIER constant to meet the business objectives?",
    options: [
      "static final decimal DELIVERY_MULTIPLIER = 4.15;",
      "decimal DELIVERY_MULTIPLIER = 4.15;",
      "static final decimal DELIVERY_MULTIPLIER = 4.157;",
      "Static decimal DELIVERY_MULTIPLIER = 4.15;",
    ],
    answer: ["static final decimal DELIVERY_MULTIPLIER = 4.15;"],
  },
  {
    numb: 12,
    question:
      "An Opportunity needs to have an amount rolled up from a custom object that is not in a master-detail relationship. How can this be achieved?",
    options: [
      "Use the Streaming API to create real-time roll-up summaries.",
      "Write a trigger on the Opportunity object and use an aggregate function to sum the amount for all related child objects under the Opportunity.",
      "Write a trigger on the child object and use an aggregate function to sum the amount for all related child objects under the Opportunity.",
      "Use the Metadata API to create real-time roll-up summaries.",
    ],
    answer: [
      "Write a trigger on the child object and use an aggregate function to sum the amount for all related child objects under the Opportunity.",
    ],
  },
  {
    numb: 13,
    question:
      "A developer is creating a Lightning web component to show a list of sales records <br/>The Sales Representative user should be able to see the commission field on each record. The Sales Assistant user should be able to see all fields on the record except the commission field.<br/>How should this be enforced so that the component works for both users without showing any errors?",
    options: [
      "Use Lightning Locker Service to enforce sharing rules and field-level security.",
      "Use WITH SECURITY ENFORCED in the SOQL that fetches the data for the component.",
      "Use Lightning Data Service to get the collection of sales records.",
      "Use security.stripInaccessible to remove fields inaccessible to the current user.",
    ],
    answer: [
      "Use security.stripInaccessible to remove fields inaccessible to the current user.",
    ],
  },
  {
    numb: 14,
    question:
      "Universal Containers has developed custom Apex code and Lightning Components in a Sandbox environment. They need to deploy the code and associated configurations to the Production environment.<br/>" +
      "What is the recommended process for deploying the code and configurations to Production?",
    options: [
      "Use the Ant Migration Tool to deploy the Apex code and Lightning Components.",
      "Use Salesforce CLI to deploy the Apex code and Lightning Components.",
      "Use a change set to deploy the Apex code and Lightning Components.",
      "Use the Force.com IDE to deploy the Apex code and Lightning Components.",
    ],
    answer: [
      "Use Salesforce CLI to deploy the Apex code and Lightning Components.",
    ],
  },
  {
    numb: 15,
    question:
      "Universal Containers is developing a new Lightning web component for their marketing department. They want to ensure that the component is fine-tuned and provides a seamless user experience.<br/>" +
      "What are some benefits of using the Lightning Component framework?",
    options: [
      "Automatic support for accessibility standards",
      "Compatibility with all web browsers",
      "Better performance due to client-side rendering",
      "Easy Integration with third-party libraries",
    ],
    answer: ["Better performance due to client-side rendering"],
  },
  {
    numb: 16,
    question:
      "A developer created this Apex trigger that calls MyClass.myStaticMethod:<br/>" +
      "trigger myTrigger on Contact (before insert) { MyClass.myStaticMethod(trigger.new); }<br/>" +
      "The developer creates a test class with a test method that calls MyClass.myStaticMethod directly, resulting in 81% overall code coverage.<br/>" +
      "What happens when the developer tries to deploy the trigger and two classes to production, assuming no other code exists?",
    options: [
      "The deployment passes because the Apex code has the required > 75% code coverage.",
      "The deployment fails because no assertions were made in the test method.",
      "The deployment fails because the Apex trigger has no code coverage.",
      "The deployment passes because both classes and the trigger were included in the deployment.",
    ],
    answer: [
      "The deployment fails because the Apex trigger has no code coverage.",
    ],
  },
  {
    numb: 17,
    question:
      "A PrimaryId__c custom field exists on the Candidate custom object. The field is used to store each candidate's id number and is marked as Unique in the schema definition.<br/>" +
      "As part of a data enrichment process, Universal Containers has a CSV file that contains updated data for all candidates in the system. The file contains each Candidate's primary id as a data point.<br/>" +
      "Universal Containers wants to upload this information into Salesforce, while ensuring all data rows are correctly mapped to a candidate in the system.<br/>" +
      "Which technique should the developer implement to streamline the data upload?",
    options: [
      "Create a before Insert trigger to correctly map the records.",
      "Upload the CSV into a custom object related to the candidate__c.",
      "Create a before save flow to correctly map the records.",
      "Update the PrimaryId__c field definition to mark it as an External Id.",
    ],
    answer: [
      "Update the PrimaryId__c field definition to mark it as an External Id.",
    ],
  },
  {
    numb: 18, // issue here with selecting the right option doesnt get validated
    question:
      "Flow Builder uses an Apex action to provide additional information about multiple Contacts, stored in a custom class, ContactInfo.<br/>" +
      "Which is the correct definition of the Apex method that gets the additional information?",
    options: [
      "@invocableMethod (label='Additional info')public List&lt;ContactInfo> getInfo(List&lt;Id> contactids){ /*implementation*/ }",
      "@invocableMethod(label='Additional Into')public static ContactInfo getInfo(Id contactId){ /*implementation*/ }",
      "@invocableMethod (label='additional info')public static List&lt;ContactInfo> getInfo(Id contactId){ /*implementation*/ }",
      "@InvocableMethod (label='Additional Intro')public static List&lt;ContactInfo> getInfo(List&lt;Id> contactIds){ /*implementation*/ }",
    ],
    answer: [
      "@InvocableMethod (label='Additional Intro')public static List<ContactInfo> getInfo(List<Id> contactIds){ /*implementation*/ }",
    ],
  },
  {
    numb: 19,
    question:
      "A developer created a custom order management app that uses an Apex class. The order is represented by an Order object and an OrderItem object that has a master-detail relationship to Order. During order processing, an order may be split into multiple orders.<br/>" +
      "What should a developer do to allow their code to move some existing OrderItem records to a new Order record?",
    options: [
      "Create a junction object between OrderItem and Order.",
      "Select the Allow reparenting option on the master-detail relationship.",
      "Change the master-detail relationship to an external lookup relationship.",
      "Add without sharing to the Apex class declaration.",
    ],
    answer: [
      "Select the Allow reparenting option on the master-detail relationship.",
    ],
  },
  {
    numb: 20,
    question:
      "How does the Lightning Component framework help developers implement solutions faster?",
    options: [
      "By providing an Agile process with default steps",
      "By providing code review standards and processes",
      "By providing device-awareness for mobile and desktops",
      "By providing change history and version control",
    ],
    answer: ["By providing device-awareness for mobile and desktops"],
  },
  {
    numb: 21,
    question:
      "Consider the following code snippet:<br/>" +
      "public static List&lt;Lead> obtainAllFields(Set&lt;Id> leadIds) {<br/>" +
      "    List&lt;Lead> result = new List&lt;Lead>();<br/>" +
      "    for(Id leadId : leadIds) {<br/>" +
      "        result.add([SELECT FIELDS(STANDARD) FROM Lead WHERE Id = :leadId]);<br/>" +
      "    }<br/>" +
      "    return result;<br/>" +
      "}<br/>" +
      "Given the multi-tenant architecture of the Salesforce platform, what is a best practice a developer should implement and ensure successful execution of the method?",
    options: [
      "Avoid returning an empty List of records.",
      "Avoid executing queries without a limit clause.",
      "Avoid performing queries inside for loops.",
      "Avoid using variables as query filters.",
    ],
    answer: ["Avoid performing queries inside for loops."],
  },
  {
    numb: 22,
    question:
      "Universal Containers implemented a private sharing model for the Account object. A custom Account search tool was developed with Apex to help sales representatives find accounts that match multiple criteria they specify. Since its release, users of the tool report they can see Accounts they do not own.<br/>" +
      "What should the developer use to enforce sharing permissions for the currently logged-in user while using the custom search tool?",
    options: [
      "Use the schema describe calls to determine if the logged-in user has access to the Account object.",
      "Use the without sharing keyword on the class declaration.",
      "Use the userinfo Apex class to filter all SOQL queries to returned records owned by the logged-in user.",
      "Use the with sharing keyword on the class declaration.",
    ],
    answer: ["Use the with sharing keyword on the class declaration."],
  },
  {
    numb: 23,
    question:
      "Given the following Anonymous block:<br/>" +
      "List&lt;Case> casesToUpdate = new List&lt;Case>();<br/>" +
      "for(Case thisCase : [SELECT Id, Status FROM Case LIMIT 50000]) {<br/>" +
      "    thisCase.Status = 'Working';<br/>" +
      "    casesToUpdate.add(thisCase);<br/>" +
      "}<br/>" +
      "try {<br/>" +
      "    Database.update (casesToUpdate, false);<br/>" +
      "} catch (Exception ec) {<br/>" +
      "    System.debug (e.getMessage());<br/>" +
      "}<br/>" +
      "What should a developer consider for an environment that has over 10,000 Case records?",
    options: [
      "The transaction will succeed and changes will be committed.",
      "The try/catch block will handle any DML exceptions thrown.",
      "The try/catch block will handle exceptions thrown by governor limits.",
      "The transaction will fail due to exceeding the governor limit.",
    ],
    answer: ["The transaction will fail due to exceeding the governor limit."],
  },
  {
    numb: 24,
    question:
      "A developer created these three Rollup Summary fields in the custom object, Project_c:<br/>" +
      "- Total_Timesheets__C<br/>" +
      "- Total_Approved_Timesheets__C<br/>" +
      "- Total_Rejected_Timesheets__C<br/>" +
      "The developer is asked to create a new field that shows the ratio between rejected and approved timesheets for a given project.<br/>" +
      "Which should the developer use to implement the business requirement in order to minimize maintenance overhead?",
    options: [
      "Apex trigger",
      "Record-triggered flow",
      "Roll-up summary field",
      "Formula field",
    ],
    answer: ["Formula field"],
  },

  {
    numb: 25, // issue here with selecting the right option doesnt get validated
    question:
      "A developer needs to implement a custom SOAP Web Service that is used by an external Web Application. The developer chooses to include helper methods that are not used by the Web Application in the implementation of the Web Service Class.<br/>" +
      "Which code segment shows the correct declaration of the class and methods?",
    options: [
      "webservice class WebServiceclass {Private static Boolean helperMethod() { /* implementation ... */ } global static String updateRecords() { /* implementation ... */ }}",
      "webservice class WebServiceclass {private static Boolean helperMethod() { /* implementation ... */ } webservice static String updateRecorde() { /* implementation ... */ }}",
      "global class WebServiceclass {private static Boolean helperMethod() { /* implementation ... */ } global String updateRecords() { /* implementation ... */ }}",
      "global class WebServiceclass {private static Boolean helperMethod() { /* implementation ... */ } webservice static String updateRecords() { /* implementation ... */ }}",
    ],
    answer: [
      "global class WebServiceclass {private static Boolean helperMethod() { /* implementation ... */ } webservice static String updateRecords() { /* implementation ... */ }}",
    ],
  },
  {
    numb: 26,
    question:
      "The following code snippet is executed by a Lightning web component in an environment with more than 2,000 lead records:<br/>" +
      "@AuraEnabled<br/>" +
      "public void static updateLeads () {<br/>" +
      "    for(Lead thisLead : [SELECT Origin__c FROM Lead]) {<br/>" +
      "        thisLead.LeadSource = thisLead.Origin__c;<br/>" +
      "        update thisLead;<br/>" +
      "    }<br/>" +
      "}<br/>" +
      "Which governor limit will likely be exceeded within the Apex transaction?",
    options: [
      "Total number of records processed as a result of DML statements",
      "Total number of SOQL queries issued",
      "Total number of DML statements issued",
      "Total number of records retrived by SOQL queries",
    ],
    answer: ["Total number of DML statements issued"],
  },
  {
    numb: 27,
    question:
      "A developer must create a CreditCardPayment class that provides an implementation of an existing Payment class.<br/>" +
      "public virtual class Payment {<br/>    public virtual void makePayment (Decimal amount) { /*implementation*/ }<br/>}<br/>" +
      "Which is the correct implementation?",
    options: [
      "public class CreditCardPayment implements Payment {public virtual void makePayment (Decimal amount) { /*implementation*/ }}",
      "public class CreditCardPayment extends Payment {public virtual void makcPayment (Decimal amount) { /*implementation*/ }}",
      "public class CreditCardPayment extends Payment {public override void makePayment (Decimal amount) { /*implementation*/}}",
      "missing wrong option",
    ],
    answer: [
      "public class CreditCardPayment extends Payment {public override void makePayment (Decimal amount) { /*implementation*/}}",
    ],
  },
  {
    numb: 28,
    question:
      "A developer writes a trigger on the Account object on the before update event that increments a count field. A record-triggered flow also increments the count field every time that an Account is created or updated.<br/>" +
      "What is the value of the count field if an Account is inserted with an initial value of zero, assuming no other automation logic is implemented on the Account?",
    options: ["2", "1", "3", "4"],
    answer: ["2"],
  },
  {
    numb: 29,
    question:
      "A developer is creating an app that contains multiple Lightning web components.<br/>" +
      "One of the child components is used for navigation purposes. When a user clicks a button called Next in the child component, the parent component must be alerted so it can navigate to the next page.<br/>" +
      "How should this be accomplished?",
    options: [
      "Update a property on the parent.",
      "Create a custom event.",
      "Call a method in the Apex controller.",
      "Fire a notification.",
    ],
    answer: ["Create a custom event."],
  },
  {
    numb: 30,
    question:
      "A developer wants to mark each Account in a List&lt;Account> as either Active or Inactive, based on the value in the LastModified Date field of each Account being greater than 90 days in the past. Which Apex technique should the developer use?",
    options: [
      "An if-else statement, with a for loop inside",
      "A for loop, with an if or if/else statement inside",
      "A for loop, with a switch statement inside",
      "A switch statement, with a for loop inside",
    ],
    answer: ["A for loop, with an if or if/else statement inside"],
  },
  {
    numb: 31, // issue here with selecting the right option doesnt get validated
    question:
      "Which Lightning code segment should be written to declare dependencies on a Lightning component, c:accountList, that is used in a Visualforce page?",
    options: [
      "&lt;aura:component access='GLOBAL' extends='ltng:outApp'> &lt;aura:dependency resource='c:accountList'/> &lt;/aura:component>",
      "&lt;aura:application access='GLOBAL'> &lt;aura:dependency resource='c:accountList'/> &lt;/aura:application>",
      "&lt;aura:application access='GLOBAL' extends='ltng:outApp'> &lt;aura:dependency resource='c:accountList'/> &lt;/aura:application>",
      "&lt;aura:component access='GLOBAL'> &lt;aura:dependency resource='c:accountList'/> &lt;/aura:component>",
    ],
    answer: [
      "<aura:application access='GLOBAL' extends='ltng:outApp'> <aura:dependency resource='c:accountList'/> </aura:application>",
    ],
  },
  {
    numb: 32,
    question:
      "What will be the output in the debug log in the event of a QueryException during a call to the aQuery method in the following example?<br/>" +
      "public class myClass {<br/>" +
      "    class CustomException extends Exception {}<br/>" +
      "    public static Account aQuery() {<br/>" +
      "        Account theAccount;<br/>" +
      "        try {<br/>" +
      "            system.debug ('Querying Accounts.');<br/>" +
      "            theAccount = [SELECT Id FROM Account WHERE CreatedDate > TODAY];<br/>" +
      "        } catch (CustomException eX) {<br/>" +
      "            system.debug('Query Exception.');<br/>" +
      "        } finally {<br/>" +
      "            system.debug ('Done.');<br/>" +
      "        }<br/>" +
      "        return theAccount;<br/>" +
      "    }<br/>" +
      "}",
    options: [
      "Querying Accounts. Query Exception.",
      "Querying Accounts. Custom Exception.",
      "Querying Accounts. Custom Exception. Done.",
      "Querying Accounts. Query Exception. Done.",
    ],
    answer: ["Querying Accounts. Query Exception. Done."],
  },
  {
    numb: 33, // issue here with selecting the right option doesnt get validated
    question:
      "A developer must create a Lightning component that allows users to input Contact record information to create a Contact record, including a Salary__c custom field. What should the developer use, along with a lightning-record-edit-form, so that Salary__c field functions as a currency input and is only viewable and editable by users that have the correct field level permissions on Salary__c?",
    options: [
      "&lt;lightning-input-currency value='Salary__c'> &lt;/lightning-input-currency>",
      "&lt;lightning-input type='number' value='Salary__c' formatter='currency'> &lt;/lightning-input>",
      "&lt;lightning-input-field field-name='Salary__c'> &lt;/lightning-input-field>",
      "&lt;lightning-formatted-number value='Salary__c' format-style='currency'> &lt;/lightning-formatted-number>",
    ],
    answer: [
      "<lightning-input-field field-name='Salary__c'> </lightning-input-field>",
    ],
  },
  {
    numb: 34,
    question:
      "A developer has an integer variable called maxAttempts. The developer needs to ensure that once maxAttempts is initialized, it preserves its value for the length of the Apex transaction; while being able to share the variable's state between trigger executions. How should the developer declare maxAttempts to meet these requirements?",
    options: [
      "Declare maxAttempts as a constant using the static and final keywords.",
      "Declare maxAttempts as a private static variable on a helper class.",
      "Declare maxAttempts as a variable on a helper class.",
      "Declare maxAttempts as a member variable on the trigger definition.",
    ],
    answer: [
      "Declare maxAttempts as a constant using the static and final keywords.",
    ],
  },
  {
    numb: 35,
    question:
      "A developer must provide custom user interfaces when users edit a Contact in either Salesforce Classic or Lightning Experience. What should the developer use to override the Contact's Edit button and provide this functionality?",
    options: [
      "A Visualforce page in Salesforce Classic and a Lightning component in Lightning Experience",
      "A Visualforce page in Salesforce Classic and a Lightning page in Lightning Experience",
      "A Lightning page in Salesforce Classic and a Visualforce page in Lightning Experience",
      "A Lightning component in Salesforce Classic and a Lightning component in Lightning Experience",
    ],
    answer: [
      "A Visualforce page in Salesforce Classic and a Lightning component in Lightning Experience",
    ],
  },
  {
    numb: 36, // issue here with selecting the right option doesnt get validated
    question:
      "A developer has a Visualforce page and custom controller to save Account records. The developer wants to display any validation rule violations to the user. How can the developer make sure that validation rule violations are displayed?",
    options: [
      "Use a try/catch with a custom exception class.",
      "Include &lt;apex:messages> on the Visualforce page.",
      "Perform the DML using the Database.insert() method.",
      "Add custom controller attributes to display the message.",
    ],
    answer: ["Include <apex:messages> on the Visualforce page."],
  },
  {
    numb: 37,
    question:
      "What should a developer do to check the code coverage of a class after running all tests?",
    options: [
      "View the Class Test Percentage tab on the Apex Class list view in Salesforce Setup.",
      "View the Code Coverage column In the list view on the Apex Classes page.",
      "View the code coverage percentage for the class using the Overall Code Coverage panel in the Developer Console Tests tab.",
      "Select and run the class on the Apex Test Execution page in the Developer Console.",
    ],
    answer: [
      "View the code coverage percentage for the class using the Overall Code Coverage panel in the Developer Console Tests tab.",
    ],
  },
  {
    numb: 38,
    question:
      "How can a developer check the test coverage of autolaunched flows deploying them in a change set?",
    options: [
      "Use the ApexTestResult Class.",
      "Use the code coverage setup page.",
      "Use SOQL and Tooling API.",
      "Use the Flow Properties page.",
    ],
    answer: ["Use SOQL and Tooling API."],
  },
  {
    numb: 39,
    question:
      "A developer must troubleshoot to pinpoint the causes of performance issues when a custom page loads in their org. Which tool should the developer use to troubleshoot query performance?",
    options: [
      "Visual Studio Code IDE.",
      "Setup Menu.",
      "App Exchange.",
      "Developer Console.",
    ],
    answer: ["Developer Console."],
  },
  {
    numb: 40,
    question:
      "Universal Containers needs to create a custom user interface component that allows users to enter information about their accounts. The component should be able to validate the user input before saving the information to the database. What is the best technology to create this component?",
    options: [
      "Flow",
      "VUE Javascript framework",
      "Visualforce",
      "Lightning Web Components",
    ],
    answer: ["Lightning Web Components"],
  },
  {
    numb: 41,
    question:
      "A developer is alerted to an issue with a custom Apex trigger that is causing records to be duplicated. What is the most appropriate debugging approach to troubleshoot the issue?",
    options: [
      "Use the Apex Interactive Debugger to step through the code and identify the issue.",
      "Disable the trigger in production and test to see if the issue still occurs.",
      "Review the Historical Event logs to identify the source of the issue.",
      "Add system.debug statements to the code to track the execution flow and identify the issue.",
    ],
    answer: [
      "Add system.debug statements to the code to track the execution flow and identify the issue.",
    ],
  },
  {
    numb: 42, // START FROM HEEEEEEEEEEEEEEEEEEEEEEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
    question:
      "Universal Containers uses Service Cloud with a custom field, Stage__c, on the Case object. Management wants to send a follow-up email reminder to the Case Owner 6 hours after the Stage__c field is set to 'Waiting on Customer'. The Salesforce Administrator wants to ensure the solution used is bulk-safe. Which automation tool should a developer recommend to meet these business requirements?",
    options: [
      "Entitlement Process",
      "Record-Triggered Flow with a Scheduled Path",
      "Scheduled Flow",
      "Einstein Next Best Action",
    ],
    answer: ["Record-Triggered Flow with a Scheduled Path"],
  },
  {
    numb: 43,
    question:
      "A team of developers is working on a source-driven project that allows them to work independently, with many different org configurations. Which type of Salesforce orgs should they use for their development?",
    options: [
      "Scratch orgs",
      "Developer sandboxes",
      "Developer orgs",
      "Full Copy sandboxes",
    ],
    answer: ["Scratch orgs"],
  },
  {
    numb: 44,
    question:
      "What is a benefit of developing applications in a multi-tenant environment?",
    options: [
      "Preconfigured storage for big data",
      "Enforced unit testing and code coverage best practices",
      "Access to predefined computing resources",
      "Unlimited processing power and memory",
    ],
    answer: ["Enforced unit testing and code coverage best practices"],
  },
  {
    numb: 45,
    question:
      "Refer to the following Apex code:<br/><br/>Integer x = 0; do { x=1; x++; } while (x < 1); System.debug(x);<br/><br/>What is the value of x when it is written to the debug log?",
    options: ["0", "1", "2", "3"],
    answer: ["2"],
  },
  {
    numb: 46,
    question:
      "Universal Containers wants to ensure that all new leads created in the system have a valid email address. They have already created a validation rule to enforce this requirement, but want to add an additional layer of validation using Apex code. What would be the best solution for this requirement?",
    options: [
      "Use a Process Builder to validate the email address and display an error message if It Is Invalid",
      "Use a trigger on the Lead object to validate the email address and display an error message if it is invalid",
      "Create a time-based workflow rule that updates the email address if it is invalid",
      "Submit a REST API Callout with a JSON payload and validate the fields on a third party system",
    ],
    answer: [
      "Use a trigger on the Lead object to validate the email address and display an error message if it is invalid",
    ],
  },
  {
    numb: 47,
    question:
      "Universal Containers (UC) uses out-of-the-box order management, that has a Master-Detail relationship between Order and Order Line Item. UC stores the availability date on each Order Line Item and Orders are only shipped when all of the Order Line Items are available. Which method should be used to calculate the estimated ship date for an Order?",
    options: [
      "Use a MAX Roll-Up Summary field on the latest availability date fields.",
      "Use a LATEST formula on each of the latest availability date fields.",
      "Use a DAYS formula on each of the availability date fields and a COUNT Roll-Up Summary field on the Order.",
      "Use a CEILING formula on each of the latest availability date fields.",
    ],
    answer: [
      "Use a MAX Roll-Up Summary field on the latest availability date fields.",
    ],
  },
  {
    numb: 48,
    question:
      "A software company uses the following objects and relationships:<br/>- Case: to handle customer support issues<br/>- Defect __c: a custom object to represent known issues with the company's software<br/>- Case_Defect__c: a junction object between Case and Defect __c to represent that a defect is a cause of a customer issue<br/><br/>Case and Defect __c have Private organization-wide defaults.<br/><br/>What should be done to share a specific Case_Defect__c record with a user?",
    options: [
      "Share the parent Case and Defect__c records.",
      "Share the parent Case record.",
      "Share the Case_Defect__c record.",
      "Share the parent Defect __c record.",
    ],
    answer: ["Share the parent Case and Defect__c records."],
  },
  {
    numb: 49,
    question: "Which action may cause triggers to fire?",
    options: [
      "Renaming or replacing a picklist entry",
      "Cascading delete operations",
      "Updates to Feed Items",
      "Changing a user's default division when the transfer division option is checked",
    ],
    answer: ["Updates to Feed Items"],
  },
  {
    numb: 50,
    question:
      "A developer is designing a new application on the Salesforce platform and wants to ensure it can support multiple tenants effectively. Which design framework should the developer consider to ensure scalability and maintainability?",
    options: [
      "Agile Development",
      "Waterfall Model",
      "Model-View-Controller (MVC)",
      "Flux (view, action, dispatcher, and store)",
    ],
    answer: ["Model-View-Controller (MVC)"],
  },
  {
    numb: 51,
    question:
      "Cloud Kicks has a multi-screen flow that its call center agents use when handling inbound service desk calls. At one of the steps in the flow, the agents should be presented with a list of order numbers and dates that are retrieved from an external order management system in real time and displayed on the screen. What should a developer use to satisfy this requirement?",
    options: [
      "An Apex controller",
      "An invocable method",
      "An outbound message",
      "An Apex REST class",
    ],
    answer: ["An invocable method"],
  },
  {
    numb: 52,
    question:
      "Since Aura application events follow the traditional publish-subscribe model, which method is used to fire an event?",
    options: ["fireEvent()", "registerEvent()", "emit()", "fire()"],
    answer: ["fire()"],
  },
  {
    numb: 53,
    question:
      "An org has an existing flow that edits an Opportunity with an Update Records element. A developer must update the flow to also create a Contact and store the created Contact's ID on the Opportunity. Which update must the developer make in the flow?",
    options: [
      "Add new Get Records element",
      "Add new Roll Back Records element",
      "Add new Update Records element",
      "Add new Create Records element",
    ],
    answer: ["Add new Create Records element"],
  },
  {
    numb: 54,
    question:
      "The Job Application __c custom object has a field that is a master-detail relationship to the Contact object, where the Contact object is the master. As part of a feature implementation, a developer needs to retrieve a list containing all Contact records where the related Account Industry is ‘Technology’, while also retrieving the Contact's Job Application __c records. Based on the object's relationships, what is the most efficient statement to retrieve the list of Contacts?",
    options: [
      "[SELECT Id, (SELECT Id FROM Job_Applications__r) FROM Contact WHERE Account.Industry = 'Technology']",
      "[SELECT Id, (SELECT Id FROM Job_Applications__c) FROM Contact WHERE Accounts.Industry = 'Technology']",
      "[SELECT Id, (SELECT Id FROM Job_Applications__r) FROM Contact WHERE Accounts.Industry = 'Technology']",
      "[SELECT Id, (SELECT Id FROM Job_Applications__c) FROM Contact WHERE Account.Industry = 'Technology']",
    ],
    answer: [
      "[SELECT Id, (SELECT Id FROM Job_Applications__r) FROM Contact WHERE Account.Industry = 'Technology']",
    ],
  },
  {
    numb: 55, // issue here with selecting the right option doesnt get validated
    question:
      "A developer has a requirement to write Apex code to update a large number of account records on a nightly basis. The system administrator needs to be able to schedule the class to run after business hours on an as-needed basis. Which class definition should be used to successfully implement this requirement?",
    options: [
      "public inherited sharing class ProcessAccountProcessor implements Schedulable",
      "public inherited sharing class ProcessAccountProcessor implements Database.Batchable&lt;sObject>, Schedulable",
      "public inherited sharing class ProcessAccountProcessor implements Queueable",
      "public inherited sharing class ProcessAccountProcessor implements Database.Batchable&lt;sObject>",
    ],
    answer: [
      "public inherited sharing class ProcessAccountProcessor implements Database.Batchable<sObject>, Schedulable",
    ],
  },
  {
    numb: 56,
    question:
      "A developer is working on a project to import data from an external system into Salesforce. The data contains sensitive information that should not be visible to all users in Salesforce. What should the developer do to ensure that the data is secure?",
    options: [
      "Use the Data Import Wizard to import the data and set up field-level security to restrict access to sensitive fields.",
      "Use a third-party tool to encrypt the sensitive data before importing it into Salesforce.",
      "Use the Salesforce CLI to import the data and set up user permissions to restrict access to sensitive data.",
      "Use the Apex Data Loader to import the data and write Apex code to handle security and access control.",
    ],
    answer: [
      "Use the Data Import Wizard to import the data and set up field-level security to restrict access to sensitive fields.",
    ],
  },
  {
    numb: 57,
    question:
      "A developer wants to import 500 Opportunity records into a sandbox.<br/>Why should the developer choose to use Data Loader instead of Data Import Wizard?",
    options: [
      "Data Loader runs from the developer's browser.",
      "Data Loader automatically relates Opportunities to Accounts.",
      "Data Import Wizard does not support Opportunities.",
      "Data Import Wizard cannot import all 500 records.",
    ],
    answer: ["Data Import Wizard does not support Opportunities."],
  },
  {
    numb: 58,
    question:
      "A custom object Trainer__c has a lookup field to another custom object Gym__c.<br/>Which SOQL query will get the record for the Viridian City Gym and all its trainers?",
    options: [
      "SELECT ID FROM Trainer__c WHERE Gym__c.Name = 'Viridian city Gym'",
      "SELECT Id, (SELECT Id FROM Trainer__r) FROM Gym__c WHERE Name = 'Viridian City Gym'",
      "SELECT Id, (SELECT Id FROM Trainers__r) FROM Gym__c WHERE Name = 'Viridian City Gym'",
      "SELECT Id, (SELECT Id FROM Trainers__c) FROM Gym__c WHERE Name = 'Viridian City Gym'",
    ],
    answer: [
      "SELECT Id, (SELECT Id FROM Trainers__r) FROM Gym__c WHERE Name = 'Viridian City Gym'",
    ],
  },
  {
    numb: 59,
    question:
      "A developer wrote Apex code that calls out to an external system using REST API. How should a developer write the test to prove the code is working as intended?",
    options: [
      "Write a class that extends HTTPCalloutMock.",
      "Write a class that extends WebserviceMock.",
      "Write a class that implements webservicemMock.",
      "Write a class that implements HTTPCalloutMock.",
    ],
    answer: ["Write a class that implements HTTPCalloutMock."],
  },
  {
    numb: 60,
    question:
      "A custom picklist field, Food_Preference__c, exists on a custom object. The picklist contains the following options: 'Vegan', 'Kosher', 'No Preference'. The developer must ensure a value is populated every time a record is created or updated.<br/> What is the optimal way to ensure a value is selected every time a record is saved?",
    options: [
      "Mark the field as Required on the object's page layout.",
      "Mark the field as Required on the field definition.",
      "Write an Apex trigger to ensure a value is selected.",
      "Set 'Use the first value in the list as the default value' to True.",
    ],
    answer: ["Mark the field as Required on the field definition."],
  },
  {
    numb: 61,
    question: "Which scenario is valid for execution by unit tests?",
    options: [
      "Load data from a remote site with a callout.",
      "Generate a Visualforce PDF with getcontentAsPDF().",
      "Set the created date of a record using a system method.",
      "Execute anonymous Apex as a different user.",
    ],
    answer: ["Set the created date of a record using a system method."],
  },
  {
    numb: 62, // issue here with selecting the right option doesnt get validated
    question:
      "A developer migrated functionality from JavaScript Remoting to a Lightning web component and wants to use the existing getopportunities() method to provide data. Which modification to the method is necessary?",
    options: [
      "The method must be decorated with @auraEnabled.",
      "The method must be decorated with (@cacheable=true).",
      "The method must return a JSON Object.",
      "The method must return a String of a serialized JSON Array.",
    ],
    answer: ["The method must be decorated with @auraEnabled."],
  },
  {
    numb: 63,
    question:
      "What should a developer use to fix a Lightning web component bug in a sandbox?",
    options: [
      "Force.com IDE",
      "Execute Anonymous",
      "Developer Console",
      "VS Code",
    ],
    answer: ["VS Code"],
  },
  {
    numb: 64, // issue here with selecting the right option doesnt get validated
    question:
      "A developer is writing tests for a class and needs to insert records to validate functionality. Which annotation method should be used to create records for every method in the test class?",
    options: [
      "@PreTest",
      "@isTest(SeeAllData=true)",
      "@TestSetup",
      "@StartTest",
    ],
    answer: ["@TestSetup"],
  },
  {
    numb: 65,
    question:
      "Given the following Apex statement: Account myAccount = [SELECT Id, Name FROM Account]; What occurs when more than one Account is returned by the SOQL query?",
    options: [
      "The query fails and an error is written to the debug log.",
      "An unhandled exception is thrown and the code terminates.",
      "The first Account returned is assigned to myAccount.",
      "The variable, myAccount, is automatically cast to the List data type.",
    ],
    answer: ["An unhandled exception is thrown and the code terminates."],
  },
];

// checked
// tested and ready
// c bon

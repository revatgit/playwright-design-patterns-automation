Feature: User Login
 Scenario: Successful Login with Valid Credentials
   Given the user is on the login page
   When the user enters valid username and password
   Then the user should see their username and password in the url
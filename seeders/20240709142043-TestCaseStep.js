'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const testCaseSteps = [
      { testcase_step_id: 1, testcase_id: 1, description: 'Navigate to Google login page', expected_result: 'Google login page loads' },
      { testcase_step_id: 2, testcase_id: 1, description: 'Enter valid Google credentials', expected_result: 'User is authenticated' },
      { testcase_step_id: 3, testcase_id: 1, description: 'Verify successful login', expected_result: 'User is redirected to homepage' },
      { testcase_step_id: 4, testcase_id: 2, description: 'Open signup page', expected_result: 'Signup page loads' },
      { testcase_step_id: 5, testcase_id: 2, description: 'Enter valid email and password', expected_result: 'Signup is successful' },
      { testcase_step_id: 6, testcase_id: 2, description: 'Check confirmation email', expected_result: 'Confirmation email is received' },
      { testcase_step_id: 7, testcase_id: 3, description: 'Resize browser to small screen', expected_result: 'UI adjusts properly' },
      { testcase_step_id: 8, testcase_id: 3, description: 'Navigate through the app', expected_result: 'UI remains functional' },
      { testcase_step_id: 9, testcase_id: 3, description: 'Verify elements are accessible', expected_result: 'All elements are accessible' },
      { testcase_step_id: 10, testcase_id: 4, description: 'Launch the app', expected_result: 'App starts up' },
      { testcase_step_id: 11, testcase_id: 4, description: 'Check for any startup errors', expected_result: 'No errors on startup' },
      { testcase_step_id: 12, testcase_id: 4, description: 'Verify home screen loads correctly', expected_result: 'Home screen is displayed' },
      { testcase_step_id: 13, testcase_id: 5, description: 'Send a test notification', expected_result: 'Notification is received' },
      { testcase_step_id: 14, testcase_id: 5, description: 'Click on notification', expected_result: 'App opens from notification' },
      { testcase_step_id: 15, testcase_id: 5, description: 'Verify notification content', expected_result: 'Content matches expected' },
      { testcase_step_id: 16, testcase_id: 6, description: 'Enter search query', expected_result: 'Search results are displayed' },
      { testcase_step_id: 17, testcase_id: 6, description: 'Verify search result relevance', expected_result: 'Relevant results are shown' },
      { testcase_step_id: 18, testcase_id: 6, description: 'Check pagination of results', expected_result: 'Results are paginated' },
      { testcase_step_id: 19, testcase_id: 7, description: 'Navigate to profile picture upload', expected_result: 'Upload page loads' },
      { testcase_step_id: 20, testcase_id: 7, description: 'Upload a profile picture', expected_result: 'Picture is uploaded' },
      { testcase_step_id: 21, testcase_id: 7, description: 'Verify picture displays correctly', expected_result: 'Picture is displayed' },
      { testcase_step_id: 22, testcase_id: 8, description: 'Perform multiple login attempts', expected_result: 'Login times are recorded' },
      { testcase_step_id: 23, testcase_id: 8, description: 'Measure login performance', expected_result: 'Login is within acceptable time' },
      { testcase_step_id: 24, testcase_id: 8, description: 'Verify performance under load', expected_result: 'Performance is stable' },
      { testcase_step_id: 25, testcase_id: 9, description: 'Perform API security check', expected_result: 'API responds securely' },
      { testcase_step_id: 26, testcase_id: 9, description: 'Test with invalid API keys', expected_result: 'API rejects invalid keys' },
      { testcase_step_id: 27, testcase_id: 9, description: 'Verify data encryption', expected_result: 'Data is encrypted' },
      { testcase_step_id: 28, testcase_id: 10, description: 'Install app on iOS 14', expected_result: 'App installs successfully' },
      { testcase_step_id: 29, testcase_id: 10, description: 'Launch app on iOS 14', expected_result: 'App launches without issues' },
      { testcase_step_id: 30, testcase_id: 10, description: 'Test app functionality on iOS 14', expected_result: 'All features work correctly' },
      { testcase_step_id: 31, testcase_id: 11, description: 'Change app language', expected_result: 'Language changes' },
      { testcase_step_id: 32, testcase_id: 11, description: 'Verify translation accuracy', expected_result: 'Translation is accurate' },
      { testcase_step_id: 33, testcase_id: 11, description: 'Check for untranslated text', expected_result: 'No untranslated text found' },
      { testcase_step_id: 34, testcase_id: 12, description: 'Click on email verification link', expected_result: 'Link opens verification page' },
      { testcase_step_id: 35, testcase_id: 12, description: 'Verify email address', expected_result: 'Email is verified' },
      { testcase_step_id: 36, testcase_id: 12, description: 'Check for success message', expected_result: 'Success message is shown' },
      { testcase_step_id: 37, testcase_id: 13, description: 'Send notification email', expected_result: 'Email is sent' },
      { testcase_step_id: 38, testcase_id: 13, description: 'Measure email delivery time', expected_result: 'Email is received promptly' },
      { testcase_step_id: 39, testcase_id: 13, description: 'Verify email content', expected_result: 'Content is correct' },
      { testcase_step_id: 40, testcase_id: 14, description: 'Update profile details', expected_result: 'Details are updated' },
      { testcase_step_id: 41, testcase_id: 14, description: 'Check for error messages', expected_result: 'No error messages' },
      { testcase_step_id: 42, testcase_id: 14, description: 'Verify updated details', expected_result: 'Details are displayed correctly' },
      { testcase_step_id: 43, testcase_id: 15, description: 'Click forgot password link', expected_result: 'Redirected to reset page' },
      { testcase_step_id: 44, testcase_id: 15, description: 'Enter registered email', expected_result: 'Reset link is sent' },
      { testcase_step_id: 45, testcase_id: 15, description: 'Verify reset email', expected_result: 'Email is received' },
      { testcase_step_id: 46, testcase_id: 16, description: 'Enable dark mode', expected_result: 'Dark mode is enabled' },
      { testcase_step_id: 47, testcase_id: 16, description: 'Check UI elements in dark mode', expected_result: 'Elements are visible' },
      { testcase_step_id: 48, testcase_id: 16, description: 'Verify text readability', expected_result: 'Text is readable' },
      { testcase_step_id: 49, testcase_id: 17, description: 'Execute database query', expected_result: 'Query executes' },
      { testcase_step_id: 50, testcase_id: 17, description: 'Measure query execution time', expected_result: 'Query is fast' },
      { testcase_step_id: 51, testcase_id: 17, description: 'Verify result accuracy', expected_result: 'Results are accurate' },
      { testcase_step_id: 52, testcase_id: 18, description: 'Log in and remain idle', expected_result: 'Session times out' },
      { testcase_step_id: 53, testcase_id: 18, description: 'Verify session timeout message', expected_result: 'Message is shown' },
      { testcase_step_id: 54, testcase_id: 18, description: 'Attempt to resume session', expected_result: 'User must log in again' },
      { testcase_step_id: 55, testcase_id: 19, description: 'Enter incorrect login credentials', expected_result: 'Error message is shown' },
      { testcase_step_id: 56, testcase_id: 19, description: 'Verify error message accuracy', expected_result: 'Message is correct' },
      { testcase_step_id: 57, testcase_id: 19, description: 'Check for account lockout', expected_result: 'Account is locked after attempts' },
      { testcase_step_id: 58, testcase_id: 20, description: 'Enter date in various formats', expected_result: 'Dates are formatted consistently' },
      { testcase_step_id: 59, testcase_id: 20, description: 'Verify displayed date formats', expected_result: 'Formats match expected' },
      { testcase_step_id: 60, testcase_id: 20, description: 'Check for incorrect date format', expected_result: 'No incorrect formats' },
      { testcase_step_id: 61, testcase_id: 21, description: 'Submit form with missing fields', expected_result: 'Validation errors shown' },
      { testcase_step_id: 62, testcase_id: 21, description: 'Fill form correctly and submit', expected_result: 'Form submits successfully' },
      { testcase_step_id: 63, testcase_id: 21, description: 'Verify form validation messages', expected_result: 'Messages are accurate' },
      { testcase_step_id: 64, testcase_id: 22, description: 'Perform search with many results', expected_result: 'Results are paginated' },
      { testcase_step_id: 65, testcase_id: 22, description: 'Navigate through pages', expected_result: 'Pagination works correctly' },
      { testcase_step_id: 66, testcase_id: 22, description: 'Verify result consistency across pages', expected_result: 'Results remain consistent' },
      { testcase_step_id: 67, testcase_id: 23, description: 'Enable multi-factor authentication', expected_result: 'MFA is enabled' },
      { testcase_step_id: 68, testcase_id: 23, description: 'Complete authentication process', expected_result: 'User is authenticated' },
      { testcase_step_id: 69, testcase_id: 23, description: 'Verify security of MFA', expected_result: 'MFA is secure' },
      { testcase_step_id: 70, testcase_id: 24, description: 'Generate report with totals', expected_result: 'Report is generated' },
      { testcase_step_id: 71, testcase_id: 24, description: 'Verify report totals', expected_result: 'Totals are accurate' },
      { testcase_step_id: 72, testcase_id: 24, description: 'Check for discrepancies in totals', expected_result: 'No discrepancies found' },
      { testcase_step_id: 73, testcase_id: 25, description: 'Log in and use the app', expected_result: 'Unexpected logout occurs' },
      { testcase_step_id: 74, testcase_id: 25, description: 'Verify session stability', expected_result: 'Session remains stable' },
      { testcase_step_id: 75, testcase_id: 25, description: 'Check for logout errors', expected_result: 'No errors on logout' },
      { testcase_step_id: 76, testcase_id: 26, description: 'Change profile settings', expected_result: 'Changes are saved' },
      { testcase_step_id: 77, testcase_id: 26, description: 'Verify changes reflect immediately', expected_result: 'Changes are visible' },
      { testcase_step_id: 78, testcase_id: 26, description: 'Check for delay in changes', expected_result: 'No delay in changes' },
      { testcase_step_id: 79, testcase_id: 27, description: 'Open app in mobile view', expected_result: 'Mobile view loads' },
      { testcase_step_id: 80, testcase_id: 27, description: 'Navigate through app in mobile view', expected_result: 'App functions well' },
      { testcase_step_id: 81, testcase_id: 27, description: 'Verify UI elements in mobile view', expected_result: 'UI is responsive' },
      { testcase_step_id: 82, testcase_id: 28, description: 'Initiate payment process', expected_result: 'Payment gateway loads' },
      { testcase_step_id: 83, testcase_id: 28, description: 'Complete payment', expected_result: 'Payment is processed' },
      { testcase_step_id: 84, testcase_id: 28, description: 'Verify payment confirmation', expected_result: 'Confirmation is received' },
      { testcase_step_id: 85, testcase_id: 29, description: 'Update profile data', expected_result: 'Data is updated' },
      { testcase_step_id: 86, testcase_id: 29, description: 'Verify updated profile data', expected_result: 'Data is correct' },
      { testcase_step_id: 87, testcase_id: 29, description: 'Check for data save errors', expected_result: 'No errors on save' },
      { testcase_step_id: 88, testcase_id: 30, description: 'Request password reset', expected_result: 'Reset email is sent' },
      { testcase_step_id: 89, testcase_id: 30, description: 'Verify password reset email content', expected_result: 'Content is accurate' },
      { testcase_step_id: 90, testcase_id: 30, description: 'Complete password reset process', expected_result: 'Password is reset' }
    ];

    await queryInterface.bulkInsert('test_case_step', testCaseSteps, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('test_case_step', null, {});
  }
};
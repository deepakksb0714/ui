require "test_helper"

class Users::CompleteRegistrationsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get users_complete_registrations_new_url
    assert_response :success
  end

  test "should get create" do
    get users_complete_registrations_create_url
    assert_response :success
  end
end

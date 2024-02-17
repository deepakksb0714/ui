# app/controllers/users/registrations_controller.rb
class Users::RegistrationsController < Devise::RegistrationsController
  before_action :configure_sign_up_params, only: [:create]
  before_action :configure_account_update_params, only: [:update]
  respond_to :json

  def respond_with(resource, options = {})
    if resource.persisted?
      render json: {
        confirmation_token: resource.confirmation_token,
        status: {
          code: 200,
          message: 'Signed up successfully',
          data: resource
        }
      }, status: :ok
    else
      render json: {
        status: {
          code: 422,
          message: 'User could not be created successfully',
          errors: resource.errors.full_messages
        }
      }, status: :unprocessable_entity
    end
  end

  def configure_account_update_params
    devise_parameter_sanitizer.permit(:account_update, keys: [:first_name, :last_name, :password, :password_confirmation, :company_name, :subdomain])
  end
  def configure_sign_up_params
    devise_parameter_sanitizer.permit(:sign_up, keys: [:email])

    # Store the email in the session
    session[:unconfirmed_email] = params[:user][:email] if params[:user].present? && params[:user][:email].present?
    
  end

  def get_user_data_by_confirmation_token
    user = User.find_by_confirmation_token(params[:confirmation_token])

    if user
      render json: user, status: :ok
    else
      render json: { error: 'User not found' }, status: :not_found
    end
  end
end

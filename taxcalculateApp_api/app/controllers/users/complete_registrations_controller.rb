class Users::CompleteRegistrationsController < ApplicationController
  def new
  end

  def create
    email = request.headers['email'] # Retrieve email from request headers

    if email.present?
      # Find the user by email or create a new user
      @user = User.find_by(email: email)
      puts "User details after update:"
      puts @user.attributes

      if @user.update(user_params)
        puts "User Registered successfully"
      else
        render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { error: 'Email missing in headers.' }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :password, :password_confirmation, :company_name, :subdomain)
  end
end

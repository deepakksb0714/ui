# app/controllers/api_controller.rb
class ApiController < ApplicationController
    def csrf_token
      render json: { csrf_token: form_authenticity_token }
    end
  end
  
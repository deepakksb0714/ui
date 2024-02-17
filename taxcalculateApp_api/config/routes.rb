Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations',
    confirmations: 'users/confirmations'
  }

  devise_scope :user do
    get '/get_user_data_by_confirmation_token', to: 'users/registrations#get_user_data_by_confirmation_token'
  end

  namespace :users do
    get 'complete_registrations/new'
    get 'complete_registrations/create'
    resource :complete_registration, only: [:new, :create]
  end

  get 'member_details' => 'members#index'
  get '/api/csrf-token', to: 'api#csrf_token'
end

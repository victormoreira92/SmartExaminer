Rails.application.routes.draw do

  get '/home', to: 'landing_page#index'

  devise_for :users

  devise_scope :user do 
    get 'user/sign_out' => 'devise#destroy'
  end
  root 'dashboard#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

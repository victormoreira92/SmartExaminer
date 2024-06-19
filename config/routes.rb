Rails.application.routes.draw do
  resources :evaluations
  
  devise_for :users, controllers: { 
    registrations: 'users/registrations',
    confirmations: 'confirmations' 
  }
  
  get '/home', to: 'landing_page#index'


  devise_scope :user do 
    get 'users/sign_out' => 'devise/sessions#destroy'
  end
  root 'dashboard#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

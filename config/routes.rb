Rails.application.routes.draw do
  resources :exams

  root 'dashboard#index'

  get '/home', to: 'landing_page#index'

  
  devise_for :users, controllers: { 
    registrations: 'users/registrations',
    confirmations: 'confirmations' 
  }
  
  devise_scope :user do 
    get 'users/sign_out' => 'devise/sessions#destroy'
  end


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

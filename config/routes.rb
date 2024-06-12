Rails.application.routes.draw do
  get 'dashboard/index'
  get 'landing_page/index'
  devise_for :users
  root 'dashboard#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

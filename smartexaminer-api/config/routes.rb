Rails.application.routes.draw do
  namespace :smartexaminer do
    namespace :v1 do
      resources :questions
      resources :tests
      devise_for :users
      resources :users, only: [:index]
    end
  end

end

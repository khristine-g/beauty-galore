Rails.application.routes.draw do
  namespace :api do
    post '/chatbot', to: 'chatbot#respond'
  end

  resources :users, only: [:create]
  resources :categories, only: [:index, :show] do
    resources :products, only: [:index]
  end

  resources :trending, only: [:index] # Add this line for direct access
  resources :offers, only: [:index, :show]

  resources :products, only: [:index]
  root 'products#index'

  
  post '/auth/login', to: 'authentication#login'
  get 'products/search', to: 'products#search'

end



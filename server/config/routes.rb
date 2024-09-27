Rails.application.routes.draw do
  namespace :api do
    post '/chatbot', to: 'chatbot#respond'
  end

  resources :users, only: [:create]
  resources :categories, only: [:index, :show] do
    resources :products, only: [:index]
  end
  resources :orders, only: [:new, :create]

  resources :products, only: [:index]

  post '/auth/login', to: 'authentication#login'
  get 'products/search', to: 'products#search'
end



Rails.application.routes.draw do
  resources :users, only: [:create]
  resources :categories, only: [:index, :show] do
    resources :products, only: [:index]
  end
  resources :orders, only: [:new, :create]

  resources :products, only: [:index]

  post '/auth/login', to: 'authentication#login'
  get 'products/search', to: 'products#search'
end



# Rails.application.routes.draw do
#   resources :users, only: [:create]
#   resources :categories, only: [:index]
#   resources :orders
#   resources :products, only: [:index]


#   post '/auth/login', to: 'authentication#login'
  
# end


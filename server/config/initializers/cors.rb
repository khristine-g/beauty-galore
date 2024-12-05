# # config/initializers/cors.rb

# Rails.application.config.middleware.insert_before 0, Rack::Cors do
#   allow do
#     origins origins 'https://truebeauty-ashen.vercel.app'
#     # Replace with your React frontend's URL
#     resource '*', 
#       headers: :any,
#       methods: [:get, :post, :put, :patch, :delete, :options, :head],
#       credentials: true
#   end
# end


# config/initializers/cors.rb
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'https://truebeauty-ashen.vercel.app' # Replace with your frontend URL

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head],
      credentials: true
  end
end

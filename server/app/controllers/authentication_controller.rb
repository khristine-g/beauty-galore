class AuthenticationController < ApplicationController
    def login
      user = User.find_by(email: params[:email])
  
      if user && user.authenticate(params[:password])
        token = user.generate_jwt
        render json: { token: token }
      else
        render json: { error: 'Invalid email or password' }, status: :unauthorized
      end
    end
  end
  
class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token

    def authenticate_user!
        token = request.headers['Authorization']
        user = JsonWebToken.decode(token)
    
        if user.present?
          @current_user = User.find(user[:user_id])
        else
          render json: { error: 'Unauthorized' }, status: :unauthorized
        end
      end
end

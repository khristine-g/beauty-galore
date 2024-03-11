class User < ApplicationRecord

     has_secure_password
     has_many :orders

     validates :password, presence: true, confirmation: true
     validates :password_confirmation, presence: true, on: :create

     def generate_jwt
          payload = { user_id: id, email: email }
          JsonWebToken.encode(payload)
        end


    
end

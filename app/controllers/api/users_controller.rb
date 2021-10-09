class Api::UsersController < ApplicationController
  # before_action :authenticate_user!
  before_action :set_user, only: [:show, :destroy, :update]
    
    def index
      render json: User.all
    end
    
    def show
      render json: @userDeviseTokenAuth::RegistrationsController
    end
    
    def create
      @user = User.new(user_params)
      if (@user.save)
        render json: @user
      else
        render json: {error: @user.errors}, status: 422
      end
    end
    
    def update
      if(@user.update(user_params))
        render json: @user
      else
        render json: {error: @user.errors}, status: 422
      end
    end
    
    def destroy
      @user.destroy
      render json: @user
    end
    
    
    private
    
    def user_params
      params.require(:user).permit(:name, :email, :password, :house, :costume )
    end
    
    def set_user
      @user = User.find(params[:id])
    end
    
end

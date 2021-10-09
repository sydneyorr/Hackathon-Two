class Api::CostumesController < ApplicationController
  before_action :set_user, only: [:index]
  before_action :set_costume, only: [:show, :destroy, :update]
    
  def index
    render json: @user.costumes.all[0]
  end

  def all
    render json: Costume.all
  end

  
  def show
    render json: @costume
  end
  
  def create
    @costume = Costume.new(costume_params)
    if (@costume.save)
      render json: @costume
    else
      render json: {error: @costume.errors}, status: 422
    end
  end
  
  def update
    if(@costume.update(costume_params))
      render json: @thing
    else
      render json: {error: @costume.errors}, status: 422
    end
  end
  
  def destroy
    @costume.destroy
    render json: @costume
  end

  
  private
  
  def costume_params
    params.require(:costume).permit(:title, :description, :votes, :image, :user_id)
  end
  
  def set_user
    @user = User.find(params[:user_id])
  end
  
  def set_costume
    @costume = Costume.find(params[:id])
  end
  
end


class Api::HousesController < ApplicationController

  before_action :set_house, only: [:show, :destroy, :update]
    
  def index
    render json: House.all
  end
  
  def show
    render json: @house
  end
  
  def create
    @house = House.new(house_params)
    if (@house.save)
      render json: @house
    else
      render json: {error: @house.errors}, status: 422
    end
  end
  
  def update
    if(@house.update(house_params))
      render json: @house
    else
      render json: {error: @house.errors}, status: 422
    end
  end
  
  def destroy
    @house.destroy
    render json: @house
  end
  
  
  private
  
  def house_params
    params.require(:house).permit(:image, :city, :state, :street, :zip, :user_id)
  end
  
  def set_house
    @house = House.find(params[:id])
  end

end

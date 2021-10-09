class Api::VisitsController < ApplicationController

  before_action :set_visit, only: [:show, :destroy, :update]
    
  def index
    render json: Visit.all
  end
  
  def show
    render json: @visit
  end
  
  def create
    @visit = Visit.new(visit_params)
    if (@visit.save)
      render json: @visit
    else
      render json: {error: @visit.errors}, status: 422
    end
  end
  
  def update
    if(@visit.update(visit_params))
      render json: @visit
    else
      render json: {error: @visit.errors}, status: 422
    end
  end
  
  def destroy
    @visit.destroy
    render json: @visit
  end
  
  
  private
  
  def visit_params
    params.require(:visit).permit(:house_id, :costume_id)
  end
  
  def set_visit
    @visit = Visit.find(params[:id])
  end

end

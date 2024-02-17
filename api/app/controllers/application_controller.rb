class ApplicationController < ActionController::API
  def health_check
    render json: { 'message': "I'm working fine!" }, status: :ok
  end
end

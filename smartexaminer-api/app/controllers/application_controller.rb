class ApplicationController < ActionController::API
  # before_action :configure_permitted_parameters, if: :devise_controller?
  # skip_before_action :verify_authenticity_token, raise: false
  # before_action :authenticate_devise_api_token!

  def current_user
    @current_user = current_devise_api_user
  end

  protected
   def configure_permitted_parameters
      added_attrs = [:name, :email, :password, :password_confirmation]
      devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
      devise_parameter_sanitizer.permit :account_update, keys: added_attrs
   end
end

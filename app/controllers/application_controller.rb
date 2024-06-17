class ApplicationController < ActionController::Base

  def after_sign_in_path_for(user)
    session[:user_id] = user.id
    session[:role] = user.role.to_sym
    root_path
  end


end

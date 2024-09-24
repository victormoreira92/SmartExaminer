class UsersController <  ApplicationController
  before_action :current_user

  def index
    @users = User.all
    render json: @users
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end

end

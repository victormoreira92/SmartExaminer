# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user, controller_name=nil, path=nil, full_path=nil)
    cannot :manage, :all
    can :read, User, id: user.id
  end
end
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable,
         :registerable,
         :recoverable,
         :rememberable,
         :trackable,
         :validatable,
         :api

  validates :name, presence: true
  validates :email, presence: true
  validates :password, confirmation: true, if: :password_required?
  validates :password_confirmation, presence: true, if: :password_required?
end

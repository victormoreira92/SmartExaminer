=begin
  user_id:integer
  first_name:string
  last_name:string
  institution:string
=end

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :first_name, presence: true 
  validates :last_name, presence: true 
  validates :instituition, presence: true

  enum role: { teacher: 0, student: 1 }
end

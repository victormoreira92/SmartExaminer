=begin
  user_id:integer
  first_name:string
  last_name:string
  institution:string
  role (admin, teacher, student) : integer
=end

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :first_name, presence: true 
  validates :last_name, presence: true 
  validates :instituition, presence: true

  enum role: { admin: 0, teacher: 1, student: 2 }
end

=begin
  user_id:integer
  first_name:string
  last_name:string
  institution:string
  username:string
  role (admin, teacher, student) : integer
=end

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  before_create :set_role

  validates :first_name, presence: true 
  validates :last_name, presence: true 
  validates :username, presence: true

  enum role: { admin: 0, teacher: 1, student: 2 }

  def set_role
    self.role = 0 if self.role.nil?
  end
end

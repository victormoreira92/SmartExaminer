# == Schema Information
#
# Table name: tests
#
#  id          :bigint           not null, primary key
#  description :text
#  status_test :integer
#  title       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Test < ApplicationRecord
  validates :title, :status_test, presence: true
  before_commit :set_status_test
  has_many :tests_categories
  has_many :categories, through: :tests_categories

  enum status_test: {
    not_started: 0,
    in_progress: 1,
    finished: 2,
    reviewed: 3
  }

  def set_status_test
    status_test = :not_started
  end
end

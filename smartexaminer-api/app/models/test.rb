class Test < ApplicationRecord
  validates :title, :description, presence: true
  after_create :set_status_test

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

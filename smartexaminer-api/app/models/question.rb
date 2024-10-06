class Question < ApplicationRecord
  has_rich_text :content
  validates :content, presence: true
  belongs_to :quiz, optional: true
  has_many :answers, dependent: :destroy
  accepts_nested_attributes_for :answers


end

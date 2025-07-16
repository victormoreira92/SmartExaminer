# == Schema Information
#
# Table name: questions
#
#  id                 :bigint           not null, primary key
#  content            :string
#  feedback_correct   :text
#  feedback_incorrect :text
#  score              :integer
#  type_answer        :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
class Question < ApplicationRecord
  enum type_answer: {
    single_choice: 0,
    multi_choice: 1,
    true_or_false: 2,
    short_answer: 3,
    essay_answer: 4
  }

  belongs_to :quiz, optional: true
  has_many :answers, dependent: :destroy
  accepts_nested_attributes_for :answers

  validates :content, presence: true
end

# == Schema Information
#
# Table name: answers
#
#  id             :bigint           not null, primary key
#  answer_content :string           not null
#  correct        :boolean
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  question_id    :bigint           not null
#
# Indexes
#
#  index_answers_on_question_id  (question_id)
#
# Foreign Keys
#
#  fk_rails_...  (question_id => questions.id)
#
class Answer < ApplicationRecord
  validates :answer_content, presence: true
  belongs_to :question

end

# == Schema Information
#
# Table name: alternatives
#
#  id                :bigint           not null, primary key
#  alternative_order :integer
#  content           :string           not null
#  is_correct        :boolean
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  question_id       :bigint           not null
#
# Indexes
#
#  index_alternatives_on_question_id  (question_id)
#
# Foreign Keys
#
#  fk_rails_...  (question_id => questions.id)
#
class Alternative < ApplicationRecord
  belongs_to :question

  validates :content, :alternative_order, presence: true
  validates_numericality_of :alternative_order, only_integer: true, greater_than_or_equal_to: 0
end

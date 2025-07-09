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
require 'rails_helper'

RSpec.describe Answer, type: :model do
  describe 'Validations' do
    context 'is valid' do
      it 'with all atributes' do
        answer = build(:answer)
        expect(answer).to be_valid
      end
    end
    context 'is invalid' do
      it 'without a question' do
        answer = build(:answer, question: nil)
        answer.valid?
        expect(answer.errors[:question]).to include('must exist')
      end
      it 'answer_content blank' do
        answer = build(:answer, answer_content: nil)
        answer.valid?
        expect(answer.errors[:answer_content]).to include("can't be blank")
      end
    end
  end
end

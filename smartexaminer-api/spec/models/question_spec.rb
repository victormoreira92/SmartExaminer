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
require 'rails_helper'

RSpec.describe Question, type: :model do
  describe 'validations' do
    context 'is valid' do
      it 'all attributes' do
        expect(build(:question)).to be_valid
      end
    end
    context 'is invalid' do
      it 'without content' do
        question = build(:question, content: nil)
        question.valid?
        expect(question.errors[:content]).to include("can't be blank")
      end
    end
  end
end

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

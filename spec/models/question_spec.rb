require 'rails_helper'

RSpec.describe Question, type: :model do
  describe 'Validations' do
    context 'is valid' do
      it 'with all atributtes' do
        question = build(:question)
        expect(question).to be_valid
      end

      it 'without feedback' do
        question = build(:question, feedback: nil)
        expect(question).to be_valid
      end
    end
    context 'is invalid' do
      it 'without a exam' do
        question = build(:question, exam: nil)
        expect(question).to be_invalid
      end
      it 'without a question' do
        question = build(:question, question: nil)
        expect(question).to be_invalid
      end

      it 'points less 0' do
        question = build(:question, points: -1)
        expect(question).to be_invalid
      end
    end
  end
end

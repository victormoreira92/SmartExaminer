require 'rails_helper'

RSpec.describe Quiz, type: :model do
  describe 'Validations' do
    context 'is valid' do
      it 'with all attributes' do
        expect { create(:quiz) }.to change(described_class, :count).by(1)
      end

      it 'without student answer' do
        quiz = build(:quiz, :without_student_answer)
        expect(quiz).to be_valid
      end

      it 'without alternatives' do
        quiz = build(:quiz, :without_alternatives)
        expect(quiz).to be_valid
      end
    end

    context 'is invalid' do
      it 'without evaluation' do
        quiz = build(:quiz, :without_evaluation)
        expect(quiz).not_to be_valid
      end

      it 'without question' do
        quiz = build(:quiz, :without_question)
        expect(quiz).not_to be_valid
      end

      it 'without correct_answer' do
        quiz = build(:quiz, :without_correct_answer)
        expect(quiz).not_to be_valid
      end
    end
    end
end

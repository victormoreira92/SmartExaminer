require 'rails_helper'

RSpec.describe Quiz, type: :model do
  describe 'Validations' do
    context 'is valid' do
      it 'all fieds filled' do
        expect { create(:quiz) }.to change(described_class, :count).by(1)
      end
    end

    context 'is invalid' do
      it 'status_quiz blank' do
        quiz = build(:quiz, status_quiz: nil)
        quiz.valid?
        expect(quiz.errors[:status_quiz]).to include "can't be blank"
      end

      it 'title blank' do
        quiz = build(:quiz, title: '')
        quiz.valid?
        expect(quiz.errors[:title]).to include "can't be blank"
      end
    end
  end
end

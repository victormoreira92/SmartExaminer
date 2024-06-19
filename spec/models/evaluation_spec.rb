require 'rails_helper'

RSpec.describe Evaluation, type: :model do
  describe 'Validations' do
    context 'is valid' do
      it 'object with all atributtes' do
        expect { create(:evaluation) }.to change(described_class, :count).by(1)
      end
    end

    context 'is invalid' do
      it 'without title' do
        evaluation = build(:evaluation, :without_title)
        expect(evaluation).not_to be_valid
      end
      it 'without type' do
        evaluation = build(:evaluation, :without_type)
        expect(evaluation).not_to be_valid
      end
      it 'without number of questions' do
        evaluation = build(:evaluation, :without_number_questions)
        expect(evaluation).not_to be_valid
      end
      it 'number of questions is 0' do
        evaluation = build(:evaluation, :number_questions_less_1)
        expect(evaluation).not_to be_valid
      end

      it 'number of questions not integer ' do
        evaluation = build(:evaluation, :number_questions_not_integer)
        expect(evaluation).not_to be_valid
      end

      it 'without type' do
        evaluation = build(:evaluation, :without_type)
        expect(evaluation).not_to be_valid
      end
    end
  end
end

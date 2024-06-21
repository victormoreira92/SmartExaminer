require 'rails_helper'

RSpec.describe StatusEvaluation, type: :model do
  describe 'Validations' do
    context 'is valid' do
      it 'when all atributes present' do
        expect { create(:status_evaluation) }.to change(described_class, :count).by(1)
      end
    end
    context 'is invalid' do
      it 'when step not present' do
        status_evaluation = build(:status_evaluation, step: nil)
        expect(status_evaluation).not_to be_valid
      end

      it 'when step not present' do
        status_evaluation = build(:status_evaluation, description: nil)
        expect(status_evaluation).not_to be_valid
      end
    end

  end
end
